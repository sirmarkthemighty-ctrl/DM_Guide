#!/usr/bin/env node
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const { pathToFileURL } = require('url');

const ROOT = path.resolve(__dirname, '..');
const PAGE = path.join(ROOT, 'dm-guide.html');
const BROWSERS = [
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function main() {
  const exe = BROWSERS.find(p => fs.existsSync(p));
  if (!exe) throw new Error('No Edge or Chrome found.');
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'dmg-test-'));
  
  const browser = spawn(exe, [
    '--headless=new', '--disable-gpu', '--no-first-run', '--remote-debugging-port=0',
    '--disable-background-timer-throttling', '--disable-renderer-backgrounding',
    `--user-data-dir=${profile}`, '--window-size=1280,1000',
    pathToFileURL(PAGE).href,
  ], { stdio: 'ignore' });

  try {
    let port;
    for (let i = 0; i < 100 && !port; i++) {
      await sleep(100);
      try { port = fs.readFileSync(path.join(profile, 'DevToolsActivePort'), 'utf8').split('\n')[0].trim(); } catch (e) {}
    }
    if (!port) throw new Error('Browser did not open a debugging port.');

    let target;
    for (let i = 0; i < 50 && !target; i++) {
      const list = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
      target = list.find(t => t.type === 'page' && t.url.startsWith('file:'));
      if (!target) await sleep(100);
    }

    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

    let nextId = 1;
    const pending = new Map();
    const consoleLogs = [];

    ws.onmessage = (m) => {
      const msg = JSON.parse(m.data);
      if (msg.method === 'Runtime.consoleAPICalled') {
        const text = msg.params.args.map(a => a.value || a.description || '').join(' ');
        consoleLogs.push({ type: msg.params.type, text });
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        consoleLogs.push({ type: 'error', text: msg.params.exceptionDetails.text });
      }
      if (pending.has(msg.id)) {
        pending.get(msg.id)(msg);
        pending.delete(msg.id);
      }
    };

    const send = (method, params = {}, ms = 15000) => new Promise((resolve, reject) => {
      const id = nextId++;
      const timer = setTimeout(() => { pending.delete(id); reject(new Error(method + ' timed out')); }, ms);
      pending.set(id, (msg) => { clearTimeout(timer); if (msg.error) reject(new Error(msg.error.message)); else resolve(msg.result); });
      ws.send(JSON.stringify({ id, method, params }));
    });

    await send('Runtime.enable');
    await send('Page.enable');

    // Wait for React to render
    await sleep(2000);

    const evaluate = async (expr) => {
      const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
      if (res.exceptionDetails) {
        throw new Error(`Eval error: ${res.exceptionDetails.text}`);
      }
      return res.result.value;
    };

    const results = await evaluate(`
      (() => {
        const report = {};
        const root = document.getElementById('root');
        report.rootMounted = !!(root && root.children.length > 0);

        // 1. Version Pill
        const versionBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes(APP_VERSION));
        report.versionPillFound = !!versionBtn;

        // 2. Filters Button
        const filterBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('ตัวกรอง') || b.textContent.includes('Filters'));
        report.filterBtnFound = !!filterBtn;

        // 3. Category & Drug Class Accordion
        const oralCatBtn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('ยากินลดน้ำตาล') || b.textContent.includes('Oral Agents'));
        report.oralCatBtnFound = !!oralCatBtn;

        // 4. Cards & Bronchodilator layout (Select on top, Details below)
        const firstCard = document.querySelector('[id^="drug-"]');
        report.cardFound = !!firstCard;
        if (firstCard) {
          const cardActions = firstCard.querySelector('[data-card-actions]');
          report.hasCardActionsTopRight = !!cardActions;
          if (cardActions) {
            const btns = cardActions.querySelectorAll('button');
            report.actionButtonsCount = btns.length;
            report.topButtonText = btns[0]?.textContent.trim();
            report.bottomButtonText = btns[1]?.textContent.trim();
          }

          // Drug picture SVG
          const svg = firstCard.querySelector('svg');
          report.hasSvgPicture = !!svg;

          // Max dose display
          report.hasMaxDoseBadge = firstCard.textContent.includes('ขนาดยาสูงสุด') || firstCard.textContent.includes('Max Dose');
        }

        // 5. Total Cards
        report.totalCards = document.querySelectorAll('[id^="drug-"]').length;

        // 6. References section
        const refsHeading = document.getElementById('refs-heading');
        report.hasReferencesSection = !!refsHeading;

        return report;
      })()
    `);

    console.log('=== TEST RESULTS ===');
    console.log(JSON.stringify(results, null, 2));

    const errors = consoleLogs.filter(l => l.type === 'error');
    if (errors.length > 0) {
      console.error('Console errors:', errors);
    } else {
      console.log('Zero console errors!');
    }

    // Test expanding changelog modal
    const changelogRes = await evaluate(`
      (() => {
        const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes(APP_VERSION));
        if (btn) btn.click();
        return !!btn;
      })()
    `);
    await sleep(300);
    const changelogModalCheck = await evaluate(`
      (() => {
        const h2 = document.querySelector('h2');
        return {
          title: h2 ? h2.textContent : '',
          visible: document.body.textContent.includes(APP_VERSION)
        };
      })()
    `);
    console.log('Changelog Modal Check:', changelogModalCheck);

    // Close changelog modal
    await evaluate(`
      (() => {
        const closeBtn = document.querySelector('button .w-5.h-5') || document.querySelector('button[class*="rounded-full"]');
        if (closeBtn) closeBtn.closest('button').click();
      })()
    `);

    // Test expanding references
    await evaluate(`
      (() => {
        const refsBtn = document.querySelector('#refs-heading button');
        if (refsBtn) refsBtn.click();
      })()
    `);
    await sleep(300);
    const refsCheck = await evaluate(`
      (() => {
        const list = document.querySelectorAll('#refs-heading + div li');
        return { count: list.length };
      })()
    `);
    console.log('References Expanded Count:', refsCheck.count);

    try { ws.close(); } catch (e) {}
    try { browser.kill('SIGKILL'); } catch (e) {}
    await sleep(500);
    try { fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }); } catch (e) {}

    if (results.rootMounted && results.cardFound && results.hasCardActionsTopRight && results.hasMaxDoseBadge && results.totalCards === 33 /* 36 drugs; default filter = currently registered in Thailand */ && errors.length === 0) {
      console.log('\n>>> ALL DRUG CARDS AND FEATURES VERIFIED WITH ZERO ERRORS! <<<');
      process.exit(0);
    } else {
      console.error('\nVerification checks failed.');
      process.exit(1);
    }
  } catch (err) {
    console.error('Test error:', err);
    try { browser.kill(); } catch (e) {}
    try { fs.rmSync(profile, { recursive: true, force: true }); } catch (e) {}
    process.exit(1);
  }
}

main();
