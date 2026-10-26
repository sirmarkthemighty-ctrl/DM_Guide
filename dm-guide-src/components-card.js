
// --- Helper Functions ---
// Drug text in the chosen language: the English twin is stored as <key>En
const pickLang = (obj, key, lang) => (lang !== 'th' && obj[key + 'En']) || obj[key];

// NLEM B.E. 2569 sub-list codes: b = basic (old ก/ข), s = supplemental (old ค), ex = exclusive (old ง), R1/R2 = special (old จ1/จ2)
const NLEM_CODE_EN = { b: 'basic list (b)', s: 'supplemental list (s)', ex: 'exclusive list (ex)', R1: 'special list R1', R2: 'special list R2' };
// Short code for the NLEM chip ('' when not listed)
const nlemSub = (drug) => drug.nlemCode || '';
// Full NLEM status line for tables and monographs
const nlemLabel = (drug, lang) => {
  if (!drug.nlem) return lang === 'th' ? 'ไม่อยู่ในบัญชียาหลักแห่งชาติ 2569' : 'Not in NLEM 2569';
  if (lang === 'th') return drug.nlemCategory;
  return 'NLEM 2569: ' + (NLEM_CODE_EN[drug.nlemCode] || drug.nlemCode);
};

const formatCurrency = (level, lang = 'th') => {
  if (level == null) return 'N/A';
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
