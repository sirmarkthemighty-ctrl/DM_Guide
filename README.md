# DM Guide
### คู่มือยาเบาหวานและเครื่องมือข้างเตียง

A bedside reference for adult diabetes medicines in Thailand and ten clinical tools, based on the Thai Clinical Practice
Guideline for Diabetes 2566 (2023), by Warodom Phaenthong, M.D.
It is one self-contained HTML page (`dm-guide.html`, opened by `index.html`) that runs in the browser, in Thai and English,
with no installation and no data sent anywhere.

It is decision support for healthcare professionals, not a substitute for the guideline, product labels or clinical judgement.

## What it contains

- 31 glucose-lowering medicines available in Thailand (oral agents, GLP-1 receptor agonists, insulins and fixed combinations):
  brands and forms, starting, usual and maximum doses, A1C lowering, weight and hypoglycaemia effects, ASCVD / heart failure /
  CKD benefit, dosing by CKD stage and in liver disease, side effects, warnings and contraindications, Ramadan and pregnancy
  advice, patient advice, price level and Thai NLEM status.
- Ten tools: starting drugs for type 2 diabetes, insulin initiation and titration, kidney dosing table, hypoglycaemia
  (rule of 15 timer and severe protocol), DKA / HHS, Ramadan, Thai Diabetes Risk Score, diabetic foot (Ipswich Touch Test),
  gestational diabetes and diabetes remission.
- Search, filters, card and list views, side-by-side comparison of up to 4 drugs, light and dark themes.

Tap the version badge next to the title for the changelog.

## Source and build

`dm-guide.html` is generated; edit the files in `dm-guide-src/` instead:

- `app.jsx`: the main page, filters and changelog
- `components-layout.js`: drug card, list row, detail view, disclaimer; `components-card.js`: shared helpers and badges
- `components-modals*.js`: the ten tools and the comparison table
- `drugsData.js`: the 31 drugs (Thai fields with English twins named `<field>En`); `guidelinesData.js`: guideline tables
- `translations.js`, `ui-text.js`: interface text; `tool-text-en.js`: English for the Thai text in the tools
- `shell.html`, `styles.css`, `tailwind.config.js`: page skeleton and styles

Build and test with Node.js. The build expects its tools in `%LOCALAPPDATA%\med-apps-build`
(`npm install @babel/standalone react@18 react-dom@18 tailwindcss@3 terser` in that folder); the test needs Microsoft Edge
or Google Chrome:

```
node dm-guide-src/build-dm-guide.js
node dm-guide-src/test-dm-guide.js
```

A fuller interface check walks every screen and tool in both languages at the current window width: serve the folder
(`node .claude/serve-static.js 8765`), open `http://localhost:8765/dm-guide.html`, load `/.claude/ui-audit.js` and
`/dm-guide-src/tests/ui-audit-run.js` in the page, and run `await window.__dmAuditRun()`.

## Licence

Copyright (c) 2026 Warodom Phaenthong, M.D. The app's code and text are licensed under
[CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/): share and adapt for non-commercial use,
with credit, under the same licence. The guideline content, drug brand names and the Thai NLEM belong to their owners;
see `NOTICE`.
