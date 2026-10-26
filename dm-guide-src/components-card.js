
// --- Helper Functions ---
// Drug text in the chosen language: the English twin is stored as <key>En
const pickLang = (obj, key, lang) => (lang !== 'th' && obj[key + 'En']) || obj[key];

// NLEM list letters: ก=A, ข=B, ค=C, จ2=E2 (Thai National List of Essential Medicines)
const NLEM_SUB_EN = {
  'ก': 'A',
  'ข/ค': 'B/C',
  'ข/ค สำหรับ Aspart/Lispro': 'B/C for aspart/lispro',
  'จ2 ตามเกณฑ์สิทธิประโยชน์': 'E2, benefit criteria',
  'จ2 ตามเกณฑ์สิทธิประโยชน์ HF/CKD': 'E2, HF/CKD benefit criteria',
  'จ2 ตามเกณฑ์เกิดน้ำตาลต่ำจาก NPH': 'E2, if hypoglycaemia on NPH'
};
// Text inside the brackets of drug.nlemCategory, in the chosen language ('' when none)
const nlemSub = (drug, lang) => {
  const m = /\(([^)]*)\)/.exec(drug.nlemCategory || '');
  if (!m) return '';
  return lang === 'th' ? m[1] : (NLEM_SUB_EN[m[1]] || m[1]);
};
// Full NLEM status line for tables and monographs
const nlemLabel = (drug, lang) => {
  if (!drug.nlem) return lang === 'th' ? 'ยานอกบัญชียาหลักแห่งชาติ' : 'Non-NLEM';
  if (lang === 'th') return drug.nlemCategory;
  const sub = nlemSub(drug, 'en');
  return sub ? 'NLEM list ' + sub : 'NLEM';
};

const formatCurrency = (level, lang = 'th') => {
  const [th, en] = level === 1 ? ['ประหยัด', 'Low'] : level === 2 ? ['ปานกลาง', 'Moderate'] : level === 3 ? ['สูง', 'High'] : ['พรีเมียม', 'Premium'];
  return '฿'.repeat(Math.min(Math.max(level || 4, 1), 4)) + ' (' + (lang === 'th' ? th : en) + ')';
};

const getEgfrBadge = (renal, lang = 'th') => {
  const unit = lang === 'th' ? 'มล./นาที' : 'mL/min';
  if (renal.minEgfrGlycemic === 0) {
    return { bg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80', text: lang === 'th' ? 'eGFR: ทุกระยะ / ปลอดภัยในโรคไต' : 'eGFR: any stage / kidney-safe' };
  }
  if (renal.minEgfrGlycemic >= 30) {
    return { bg: 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80', text: `eGFR ≥ ${renal.minEgfrGlycemic} ${unit}` };
  }
  return { bg: 'bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80', text: `eGFR ≥ ${renal.minEgfrGlycemic} ${unit}` };
};

const getHypoBadge = (risk, lang = 'th') => {
  const L = (th, en) => (lang === 'th' ? 'น้ำตาลต่ำ: ' + th : 'Hypoglycaemia: ' + en);
  switch (risk) {
    case 'very_low':
      return { bg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80', text: L('น้อยมาก', 'minimal') };
    case 'low':
      return { bg: 'bg-teal-100 text-teal-800 dark:bg-teal-950/70 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80', text: L('ต่ำ', 'low') };
    case 'moderate':
      return { bg: 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80', text: L('ปานกลาง', 'moderate') };
    case 'high':
      return { bg: 'bg-rose-100 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 border border-rose-200 dark:border-rose-800/80', text: L('สูง', 'high') };
    default:
      return { bg: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300', text: risk };
  }
};

const getWeightBadge = (effect, lang = 'th') => {
  const L = (th, en) => (lang === 'th' ? 'น้ำหนัก: ' + th : 'Weight: ' + en);
  switch (effect) {
    case 'loss':
      return { bg: 'bg-purple-100 text-purple-800 dark:bg-purple-950/70 dark:text-purple-300 border border-purple-200 dark:border-purple-800/80', text: L('ลดลง', 'loss') };
    case 'neutral':
      return { bg: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700', text: L('คงที่', 'neutral') };
    case 'gain':
      return { bg: 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-800/80', text: L('เพิ่มขึ้น', 'gain') };
    default:
      return { bg: 'bg-slate-100 text-slate-700', text: effect };
  }
};
