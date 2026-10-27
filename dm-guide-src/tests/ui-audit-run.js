// Walks the DM Guide's screens and windows, running window.__uiAudit (/.claude/ui-audit.js) on each,
// and lists Thai text left in English mode. Usage in the page: window.__dmAuditRun().then(r => ...)
window.__dmAuditRun = async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const TH = /[฀-๿]/;
  const out = { issues: {}, thaiInEnglish: {}, toolThaiInEnglish: 0, steps: 0 };
  const root = () => document.getElementById('root');
  const top = () => [...document.querySelectorAll('.fixed.inset-0')].pop();
  const visible = (el) => !!el && el.getClientRects().length > 0;
  const audit = (name, el) => {
    out.steps++;
    const r = window.__uiAudit(el || root());
    // A window's panel clips its content (overflow hidden): anything wider than the panel is cut off and unreachable
    const panel = el && el.firstElementChild;
    if (panel && panel.scrollWidth > panel.clientWidth + 1) r.push({ type: 'panelOverflow', text: panel.scrollWidth + ' > ' + panel.clientWidth });
    if (r.length) out.issues[name] = r.slice(0, 6).map((x) => x.type + ': ' + String(x.text || '').slice(0, 60));
  };
  const thaiLeft = (name, el) => {
    const tw = document.createTreeWalker(el || root(), NodeFilter.SHOW_TEXT);
    while (tw.nextNode()) {
      const n = tw.currentNode, s = n.textContent.trim();
      if (!s || !TH.test(s) || /^฿/.test(s) || s === 'ไทย' || !visible(n.parentElement)) continue;
      if (n.parentElement.closest('[title*="สลับภาษา"]')) continue;
      if (!out.thaiInEnglish[s.slice(0, 60)]) out.thaiInEnglish[s.slice(0, 60)] = name;
    }
  };
  const closeTop = async () => {
    const m = top();
    if (!m) return;
    const btns = [...m.querySelectorAll('button')];
    const b = btns.find((x) => /^(Close|ปิด)/.test(x.textContent.trim())) || btns.find((x) => !x.textContent.trim() && x.querySelector('svg'));
    if (b) b.click();
    await wait(150);
  };
  // Fill a window's inputs so its results show: numbers from the hint ("e.g. 8.5") or 10, tick every box, pick each group's last option
  const setValue = (el, v) => {
    const proto = el.tagName === 'SELECT' ? HTMLSelectElement.prototype : HTMLInputElement.prototype;
    Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, v);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  };
  const poke = async (m) => {
    for (const el of m.querySelectorAll('input[type="number"], input[type="text"], input:not([type])')) {
      const hint = (el.getAttribute('placeholder') || '').match(/[\d.]+/);
      if (!el.value) setValue(el, hint ? hint[0] : '10');
    }
    for (const el of m.querySelectorAll('input[type="checkbox"]')) if (!el.checked) el.click();
    const radios = {};
    m.querySelectorAll('input[type="radio"]').forEach((r) => { radios[r.name] = r; });
    Object.values(radios).forEach((r) => r.click());
    for (const s of m.querySelectorAll('select')) if (s.options.length) setValue(s, s.options[s.options.length - 1].value);
    await wait(200);
  };
  const setLang = async (lang) => {
    const b = document.querySelector('[title*="Switch Language"]');
    if ((b.textContent.trim() === 'EN') !== (lang === 'en')) { b.click(); await wait(300); }
  };

  for (const lang of ['th', 'en']) {
    await setLang(lang);
    window.scrollTo(0, 0);
    const L = lang.toUpperCase();
    audit(L + ' main grid');
    if (lang === 'en') thaiLeft('main grid');

    const ft = document.querySelector('[data-filters-toggle]');
    if (ft.getAttribute('aria-expanded') !== 'true') { ft.click(); await wait(150); }
    for (const i of [1, 2, 3, 4]) {
      const b = document.querySelectorAll('[data-filter-row="type"] button')[i];
      b.click(); await wait(150);
      audit(L + ' filters type ' + i);
      if (lang === 'en') thaiLeft('filters type ' + i);
    }
    document.querySelector('[data-filter-row="class"] button').click(); await wait(100);
    document.querySelector('[data-filter-row="clinical"] button').click(); await wait(150);
    audit(L + ' filter chips');
    if (lang === 'en') thaiLeft('filter chips');
    document.querySelector('[data-clear-filters]').click(); await wait(150);

    document.querySelector('button[aria-label="' + (lang === 'th' ? 'มุมมองรายการ' : 'List view') + '"]').click(); await wait(200);
    audit(L + ' list view');
    if (lang === 'en') thaiLeft('list view');
    document.querySelector('[data-view-table]').click(); await wait(250);
    audit(L + ' table view');
    if (lang === 'en') thaiLeft('table view');
    if (document.documentElement.scrollWidth > document.documentElement.clientWidth + 1) out.issues[L + ' table view page width'] = ['page wider than the screen: ' + document.documentElement.scrollWidth];
    document.querySelector('button[aria-label="' + (lang === 'th' ? 'มุมมองการ์ด' : 'Card view') + '"]').click(); await wait(200);

    const n = document.querySelectorAll('[data-details]').length;
    for (let i = 0; i < n; i++) {
      document.querySelectorAll('[data-details]')[i].click(); await wait(150);
      const m = top();
      const all = m.querySelector('[data-fold-all]');
      if ([...m.querySelectorAll('[data-fold]')].some((s) => s.dataset.open !== '1')) { all.click(); await wait(120); }
      const srcBtn = m.querySelector('[data-src-toggle]');
      if (srcBtn && srcBtn.getAttribute('aria-pressed') !== 'true') { srcBtn.click(); await wait(120); }
      const id = (document.querySelectorAll('[id^="drug-"]')[i] || {}).id;
      audit(L + ' detail ' + id, top());
      if (lang === 'en') thaiLeft('detail ' + id, top());
      await closeTop();
    }

    const cards = document.querySelectorAll('[data-card-actions]');
    cards[0].querySelector('button').click(); await wait(100);
    cards[1].querySelector('button').click(); await wait(150);
    audit(L + ' compare bar');
    if (lang === 'en') thaiLeft('compare bar');
    const bar = document.querySelector('[data-select-bar]');
    [...bar.querySelectorAll('button')].pop().click(); await wait(250);
    audit(L + ' compare window', top());
    if (lang === 'en') thaiLeft('compare window', top());
    await closeTop();
    [...document.querySelector('[data-select-bar]').querySelectorAll('button')].find((b) => /^(Clear|ล้าง)$/.test(b.textContent.trim())).click(); await wait(150);

    for (const k of ['start', 'insulin', 'ckd', 'hypo', 'dka', 'ramadan', 'drs', 'foot', 'gdm', 'remission']) {
      const b = [...document.querySelectorAll('[data-guide="' + k + '"]')].find(visible);
      b.click(); await wait(250);
      // every tab of the tool (tab buttons carry a bottom border), and the content that appears once inputs are filled
      const tabs = [...top().querySelectorAll('button')].filter((x) => /\bborder-b-2\b/.test(x.className));
      for (const [ti, tab] of (tabs.length ? tabs : [null]).entries()) {
        if (tab) { tab.click(); await wait(150); }
        audit(L + ' tool ' + k + (tab ? ' tab ' + ti : ''), top());
        if (lang === 'en') thaiLeft('tool ' + k + ' tab ' + ti, top());
        await poke(top());
        audit(L + ' tool ' + k + (tab ? ' tab ' + ti : '') + ' filled', top());
        if (lang === 'en') thaiLeft('tool ' + k + ' tab ' + ti + ' filled', top());
      }
      await closeTop();
    }

    document.querySelector('[data-version]').click(); await wait(200);
    audit(L + ' changelog', top());
    await closeTop();
  }
  try { localStorage.removeItem('dmg-detail-folds'); } catch (e) {}
  await setLang('th');
  return out;
};
