// --- Bronchodilator-style layout pieces (v1.3.0): drug card, list row, foldable section, detail view, disclaimer ---

// Value part of a badge text such as "Weight: loss" -> "loss"
// Max dose heading: Thai mode adds the English term
const maxDoseHeading = (t, lang) => (lang === 'th' ? t.maxDoseLabel + ' (Max Dose)' : t.maxDoseLabel);

const badgeValue = (text) => {
  const i = text.indexOf(':');
  return i < 0 ? text : text.slice(i + 1).trim();
};

const HYPO_TONE = {
  very_low: 'text-emerald-700 dark:text-emerald-300',
  low: 'text-teal-700 dark:text-teal-300',
  moderate: 'text-amber-700 dark:text-amber-300',
  high: 'text-rose-700 dark:text-rose-300'
};
const WEIGHT_TONE = {
  loss: 'text-purple-700 dark:text-purple-300',
  neutral: 'text-slate-700 dark:text-slate-200',
  gain: 'text-amber-700 dark:text-amber-300'
};

// Class chip in the drug's own colour (class colours are mid-tone hex values)
const ClassChip = ({ drug, lang, className = '' }) => (
  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${className}`} style={{ backgroundColor: `${drug.color}1f`, color: drug.color }}>
    {lang === 'th' ? drug.classNameTh.split('(')[0].trim() : drug.classNameEn}
  </span>
);

const NlemChip = ({ drug, lang }) => (
  drug.nlem ? (
    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" title={nlemLabel(drug, lang)} data-nlem>
      NLEM{nlemSub(drug, lang) && nlemSub(drug, lang).length <= 4 ? ` (${nlemSub(drug, lang)})` : ''}
    </span>
  ) : (
    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Non-NLEM</span>
  )
);

// ASCVD / HF / CKD outcome badges
const BenefitBadges = ({ drug, t, className = 'mt-2' }) => {
  const items = [
    drug.cvBenefit && ['ascvd', t.benefitAscvd, HeartPulseIcon, 'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300'],
    drug.hfBenefit && ['hf', t.benefitHf, ShieldCheckIcon, 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-300'],
    drug.ckdBenefit && ['ckd', t.benefitCkd, KidneyIcon, 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300']
  ].filter(Boolean);
  if (!items.length) return null;
  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`} data-benefits>
      {items.map(([k, label, Icon, tone]) => (
        <span key={k} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${tone}`}>
          <Icon className="w-3 h-3" /> {label}
        </span>
      ))}
    </div>
  );
};

// One label/value line in a facts box
const FactRow = ({ label, children, valueClass = 'text-slate-700 dark:text-slate-200', attrs = {} }) => (
  <div className="flex justify-between items-start gap-2 border-b border-slate-200 dark:border-slate-700 pb-1.5 pt-1 last:border-b-0 min-w-0" {...attrs}>
    <span className="text-slate-500 dark:text-slate-400 font-medium shrink-0">{label}</span>
    <span className={`font-bold text-right break-words min-w-0 ${valueClass}`}>{children}</span>
  </div>
);

const SelectButtons = ({ drug, t, isCompared, onToggleCompare, onSelectDetail, compact = false }) => (
  <>
    <button onClick={() => onToggleCompare(drug)} aria-pressed={isCompared} title={isCompared ? t.selectedBtn : t.selectBtn}
      className={`flex items-center justify-center gap-1 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border ${compact ? 'w-7 h-7 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5' : 'px-2 md:px-2.5 py-1'} ${isCompared ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-slate-400 border-slate-200 hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50 shadow-sm dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:text-teal-300'}`}>
      {isCompared ? <CheckIcon className={compact ? 'w-4 h-4 sm:w-3 sm:h-3' : 'w-3 h-3'} /> : <CompareIcon className={compact ? 'w-4 h-4 sm:w-3 sm:h-3' : 'w-3 h-3'} />}
      <span className={compact ? 'hidden sm:inline' : ''}>{isCompared ? t.selectedBtn : t.selectBtn}</span>
    </button>
    <button onClick={() => onSelectDetail(drug)} data-details title={t.detailBtn} aria-label={t.detailBtn}
      className={`flex items-center justify-center gap-1 rounded-md text-[10px] font-bold tracking-wider uppercase transition-colors border border-teal-100 bg-teal-50 text-teal-700 hover:bg-teal-100 shadow-sm dark:border-teal-900 dark:bg-teal-950 dark:text-teal-300 ${compact ? 'w-7 h-7 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5' : 'px-2 md:px-2.5 py-1'}`}>
      {compact && <InfoIcon className="w-4 h-4 sm:hidden" />}
      <span className={compact ? 'hidden sm:inline' : ''}>{t.detailBtn} <span aria-hidden="true">›</span></span>
    </button>
  </>
);

// Opens the detail view on a click anywhere on the card, except on its own controls
const openFromCard = (e, drug, onSelectDetail) => {
  if (e.target.closest('button, a, input, select, summary, label')) return;
  onSelectDetail(drug);
};

// --- Grid card ---
const DrugCard = ({ drug, lang, isCompared, onToggleCompare, onSelectDetail }) => {
  const t = translations[lang];
  const weight = getWeightBadge(drug.weightEffect, lang);
  const hypo = getHypoBadge(drug.hypoRisk, lang);
  const egfr = getEgfrBadge(drug.renalAdjustment, lang);
  return (
    <div id={'drug-' + drug.id} onClick={(e) => openFromCard(e, drug, onSelectDetail)}
      className={`cursor-pointer h-full rounded-xl md:rounded-2xl border ${isCompared ? 'border-teal-500 ring-1 ring-teal-500' : 'border-slate-200 dark:border-slate-800 hover:shadow-md'} bg-white dark:bg-slate-900 p-3.5 md:p-5 flex flex-col shadow-sm transition-all relative`}>
      <div className="absolute top-3 right-3 md:top-4 md:right-4 flex flex-col items-end gap-1.5" data-card-actions>
        <SelectButtons drug={drug} t={t} isCompared={isCompared} onToggleCompare={onToggleCompare} onSelectDetail={onSelectDetail} />
      </div>

      <div className="flex items-end gap-2 mb-3 md:mb-4 pt-1">
        <div className="p-2 md:p-3 rounded-lg md:rounded-xl bg-slate-50 border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
          <DrugPicture drug={drug} className="w-10 h-10 md:w-14 md:h-14" />
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex gap-2 items-center mb-1 flex-wrap pr-0">
          <ClassChip drug={drug} lang={lang} />
          <NlemChip drug={drug} lang={lang} />
        </div>
        <h3 className="text-lg font-extrabold text-slate-800 dark:text-white leading-tight mb-0.5 mt-2 break-words">{drug.genericName}</h3>
        {lang === 'th' && <p className="text-sm text-slate-500 dark:text-slate-400 leading-snug break-words">{drug.genericNameTh}</p>}
        <p className="text-[11px] mt-1.5 text-slate-500 dark:text-slate-400 break-words">
          <span className="font-medium">{t.brandNames}:</span> <span className="font-bold text-slate-700 dark:text-slate-200">{drug.brandNames.join(', ')}</span>
        </p>
        <BenefitBadges drug={drug} t={t} className="mt-2.5" />

        <div className="space-y-1.5 text-xs bg-slate-50 dark:bg-slate-800 p-3 rounded-lg border border-slate-100 dark:border-slate-700 mt-4" data-card-facts>
          <FactRow label={t.factA1c} valueClass="text-teal-700 dark:text-teal-300">{drug.a1cReduction}</FactRow>
          <FactRow label={t.factWeight} valueClass={WEIGHT_TONE[drug.weightEffect] || ''}>{badgeValue(weight.text)}</FactRow>
          <FactRow label={t.factHypo} valueClass={HYPO_TONE[drug.hypoRisk] || ''}>{badgeValue(hypo.text)}</FactRow>
          <FactRow label={t.factKidney} valueClass="text-slate-700 dark:text-slate-200">{egfr.text.replace(/^eGFR:?\s*/, '')}</FactRow>
          <FactRow label={t.factForms} valueClass="text-slate-600 dark:text-slate-300 font-semibold">{drug.formulations.join(' • ')}</FactRow>
          <div className="pt-1">
            <span className="text-slate-500 dark:text-slate-400 font-medium block">{t.factStart}</span>
            <span className="font-semibold text-slate-700 dark:text-slate-200 leading-snug block mt-0.5">{lang === 'th' ? drug.startingDoseTh : drug.startingDoseEn}</span>
          </div>
        </div>
      </div>

      <div className="mt-auto pt-4">
        <div className="p-3 rounded-xl border bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950 dark:border-amber-800 dark:text-amber-200" data-max-dose>
          <span className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 text-amber-700 dark:text-amber-300">
            <FlameIcon className="w-3.5 h-3.5" /> {maxDoseHeading(t, lang)}
          </span>
          <span className="block text-xs font-bold leading-snug mt-1">{lang === 'th' ? drug.maxDoseTh : drug.maxDoseEn}</span>
        </div>
      </div>
    </div>
  );
};

// --- List row ---
const DrugListRow = ({ drug, lang, isCompared, onToggleCompare, onSelectDetail }) => {
  const t = translations[lang];
  const weight = getWeightBadge(drug.weightEffect, lang);
  const hypo = getHypoBadge(drug.hypoRisk, lang);
  const egfr = getEgfrBadge(drug.renalAdjustment, lang);
  return (
    <div id={'drug-' + drug.id} onClick={(e) => openFromCard(e, drug, onSelectDetail)}
      className={`cursor-pointer w-full rounded-xl border ${isCompared ? 'border-teal-500 ring-1 ring-teal-500' : 'border-slate-200 dark:border-slate-800 hover:shadow-sm'} bg-white dark:bg-slate-900 p-3 md:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 transition-all relative`}>
      <div className="absolute z-10 top-3 right-3 sm:relative sm:top-0 sm:right-0 shrink-0 order-first sm:order-last flex flex-col items-end sm:items-stretch gap-1.5" data-card-actions>
        <SelectButtons drug={drug} t={t} isCompared={isCompared} onToggleCompare={onToggleCompare} onSelectDetail={onSelectDetail} compact />
      </div>
      <div className="flex items-start gap-3 min-w-0 flex-1 pr-10 sm:pr-0">
        <div className="p-1.5 md:p-2 rounded-lg bg-slate-50 border border-slate-100 dark:bg-slate-800 dark:border-slate-700 shrink-0">
          <DrugPicture drug={drug} className="w-9 h-9 md:w-11 md:h-11" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <h3 className="text-sm md:text-base font-extrabold text-slate-800 dark:text-white leading-tight break-words">{drug.genericName}</h3>
            <ClassChip drug={drug} lang={lang} />
            <NlemChip drug={drug} lang={lang} />
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 break-words">
            {lang === 'th' && <span>{drug.genericNameTh} · </span>}
            <span className="font-bold text-slate-700 dark:text-slate-200">{drug.brandNames.join(', ')}</span>
          </p>
          <p className="text-[11px] mt-1 leading-snug text-slate-600 dark:text-slate-300 flex flex-wrap gap-x-3 gap-y-0.5">
            <span>{t.factA1c}: <b className="text-teal-700 dark:text-teal-300">{drug.a1cReduction}</b></span>
            <span>{t.factWeight}: <b className={WEIGHT_TONE[drug.weightEffect] || ''}>{badgeValue(weight.text)}</b></span>
            <span>{t.factHypo}: <b className={HYPO_TONE[drug.hypoRisk] || ''}>{badgeValue(hypo.text)}</b></span>
            <span>{t.factKidney}: <b>{egfr.text.replace(/^eGFR:?\s*/, '')}</b></span>
          </p>
          <p className="text-[11px] mt-1 leading-snug text-amber-800 dark:text-amber-300 break-words" data-max-dose>
            <b>{maxDoseHeading(t, lang)}:</b> {lang === 'th' ? drug.maxDoseTh : drug.maxDoseEn}
          </p>
          <BenefitBadges drug={drug} t={t} className="mt-1.5" />
        </div>
      </div>
    </div>
  );
};

// --- Colour-coded, foldable section (detail view) ---
const FOLD_TONE = {
  teal: ['border-l-teal-500', 'text-teal-700 dark:text-teal-300'],
  emerald: ['border-l-emerald-500', 'text-emerald-700 dark:text-emerald-300'],
  rose: ['border-l-rose-500', 'text-rose-700 dark:text-rose-300'],
  amber: ['border-l-amber-500', 'text-amber-700 dark:text-amber-300'],
  indigo: ['border-l-indigo-500', 'text-indigo-700 dark:text-indigo-300'],
  sky: ['border-l-sky-500', 'text-sky-700 dark:text-sky-300'],
  slate: ['border-l-slate-400', 'text-slate-600 dark:text-slate-300']
};
const FoldSection = ({ id, title, icon: Icon, tone = 'slate', open, onToggle, children }) => {
  const [edge, text] = FOLD_TONE[tone] || FOLD_TONE.slate;
  return (
    <section className={`bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 border-l-4 ${edge}`} data-fold={id} data-open={open ? '1' : '0'}>
      <h3 className="m-0">
        <button type="button" onClick={onToggle} aria-expanded={open}
          className={`w-full flex items-center justify-between gap-3 px-3 sm:px-4 py-2.5 text-left text-[11px] font-bold uppercase tracking-wider ${text}`}>
          <span className="flex items-center gap-1.5 min-w-0">{Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}<span className="break-words">{title}</span></span>
          <ChevronDownIcon className={`w-4 h-4 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </h3>
      {open && <div className="px-3 sm:px-4 pb-3 text-xs">{children}</div>}
    </section>
  );
};

// Row in the detail view: short values sit beside the label, long text goes underneath
const DetailRow = ({ label, children, stack = false, valueClass = 'text-slate-700 dark:text-slate-200', attrs = {} }) => (
  <div className="py-1.5 border-b border-slate-200 dark:border-slate-700 last:border-b-0 min-w-0" {...attrs}>
    {stack ? (
      <>
        <span className="text-slate-500 dark:text-slate-400 font-medium block">{label}</span>
        <span className={`font-semibold leading-snug block mt-0.5 break-words ${valueClass}`}>{children}</span>
      </>
    ) : (
      <div className="flex justify-between items-start gap-3 min-w-0">
        <span className="text-slate-500 dark:text-slate-400 font-medium break-words min-w-0">{label}</span>
        <span className={`font-bold text-right break-words shrink-0 max-w-[65%] ${valueClass}`}>{children}</span>
      </div>
    )}
  </div>
);

const BulletList = ({ items }) => (
  <ul className="list-disc pl-4 space-y-0.5 mt-0.5 font-medium text-slate-700 dark:text-slate-200 leading-snug">
    {items.map((x, i) => <li key={i} className="break-words">{x}</li>)}
  </ul>
);

const DETAIL_FOLDS = ['dose', 'kidney', 'benefit', 'safety', 'special', 'advice', 'mechanism'];
const FOLD_KEY = 'dmg-detail-folds';
const readFolds = () => {
  try { const v = JSON.parse(localStorage.getItem(FOLD_KEY) || 'null'); if (v && typeof v === 'object') return v; } catch (e) {}
  return { dose: true };
};

// --- Drug detail view: one scrolling page of colour-coded, foldable sections ---
const DrugDetailModal = ({ drug, isOpen, onClose, lang, onToggleCompare, isCompared }) => {
  const [folds, setFolds] = useState(readFolds);
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);
  if (!isOpen || !drug) return null;
  const t = translations[lang];
  const save = (next) => { setFolds(next); try { localStorage.setItem(FOLD_KEY, JSON.stringify(next)); } catch (e) {} };
  const toggle = (k) => save({ ...folds, [k]: !folds[k] });
  const allOpen = DETAIL_FOLDS.every((k) => folds[k]);
  const setAll = (v) => save(Object.fromEntries(DETAIL_FOLDS.map((k) => [k, v])));
  const fold = (k) => ({ id: k, open: !!folds[k], onToggle: () => toggle(k) });
  const L = (th, en) => (lang === 'th' ? th : en);
  const weight = getWeightBadge(drug.weightEffect, lang);
  const hypo = getHypoBadge(drug.hypoRisk, lang);
  const stages = pickLang(drug.renalAdjustment, 'stages', lang);
  const stageRows = [
    ['g1', L('CKD ระยะ 1-2 (eGFR ≥ 60)', 'CKD stage 1-2 (eGFR ≥ 60)')],
    ['g3a', L('CKD ระยะ 3a (eGFR 45-59)', 'CKD stage 3a (eGFR 45-59)')],
    ['g3b', L('CKD ระยะ 3b (eGFR 30-44)', 'CKD stage 3b (eGFR 30-44)')],
    ['g4', L('CKD ระยะ 4 (eGFR 15-29)', 'CKD stage 4 (eGFR 15-29)')],
    ['g5_hd', L('CKD ระยะ 5 / ฟอกไต (HD/PD)', 'CKD stage 5 / dialysis (HD/PD)')]
  ];

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }} data-detail-modal>
      <div className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200" role="dialog" aria-modal="true" aria-label={drug.genericName}>
        <div className="flex items-start gap-3 p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 rounded-t-2xl shrink-0">
          <div className="p-2 rounded-xl bg-white border border-slate-200 dark:bg-slate-900 dark:border-slate-700 shrink-0"><DrugPicture drug={drug} className="w-12 h-12 sm:w-14 sm:h-14" /></div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 mb-1">
              <ClassChip drug={drug} lang={lang} />
              <NlemChip drug={drug} lang={lang} />
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-800 dark:text-white leading-tight break-words">{drug.genericName}</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 break-words">{lang === 'th' ? drug.genericNameTh : drug.classNameEn}</p>
            <BenefitBadges drug={drug} t={t} />
          </div>
          <button onClick={onClose} className="p-2 -m-1 text-slate-400 hover:text-slate-700 hover:bg-white dark:hover:bg-slate-700 dark:hover:text-slate-200 rounded-full transition-colors shrink-0" aria-label={t.close}><XIcon className="w-5 h-5" /></button>
        </div>

        <div className="p-3 sm:p-5 flex-grow overflow-y-auto flex flex-col gap-3 bg-white dark:bg-slate-900">
          <FoldSection {...fold('dose')} title={t.secDose} icon={PillIcon} tone="teal">
            <DetailRow label={t.brandNames}>{drug.brandNames.join(', ')}</DetailRow>
            <DetailRow label={t.factForms} stack>{drug.formulations.join(' • ')}</DetailRow>
            <DetailRow label={t.startingDose} stack>{lang === 'th' ? drug.startingDoseTh : drug.startingDoseEn}</DetailRow>
            <DetailRow label={t.maintenanceDose} stack>{lang === 'th' ? drug.maintenanceDoseTh : drug.maintenanceDoseEn}</DetailRow>
            <DetailRow label={maxDoseHeading(t, lang)} stack valueClass="text-amber-800 dark:text-amber-300 font-bold" attrs={{ 'data-max-dose': '' }}>{lang === 'th' ? drug.maxDoseTh : drug.maxDoseEn}</DetailRow>
          </FoldSection>

          <FoldSection {...fold('kidney')} title={t.secKidney} icon={KidneyIcon} tone="emerald">
            <DetailRow label={t.renalSummary} stack valueClass="text-emerald-800 dark:text-emerald-300">{lang === 'th' ? drug.renalAdjustment.summaryTh : drug.renalAdjustment.summaryEn}</DetailRow>
            {stageRows.map(([k, label]) => (
              <DetailRow key={k} label={label} stack attrs={{ 'data-stage': k }}>{stages[k]}</DetailRow>
            ))}
            <DetailRow label={t.hepaticAdjustment} stack>{pickLang(drug, 'hepaticAdjustment', lang)}</DetailRow>
          </FoldSection>

          <FoldSection {...fold('benefit')} title={t.secBenefit} icon={HeartPulseIcon} tone="rose">
            <DetailRow label={t.a1cPotency} valueClass="text-teal-700 dark:text-teal-300">{drug.a1cReduction}</DetailRow>
            <DetailRow label={t.weightImpact} valueClass={WEIGHT_TONE[drug.weightEffect] || ''}>{badgeValue(weight.text)}</DetailRow>
            <DetailRow label="" stack valueClass="text-slate-600 dark:text-slate-300 font-medium">{pickLang(drug, 'weightDetail', lang)}</DetailRow>
            <DetailRow label={t.hypoRiskLevel} valueClass={HYPO_TONE[drug.hypoRisk] || ''}>{badgeValue(hypo.text)}</DetailRow>
            <DetailRow label="" stack valueClass="text-slate-600 dark:text-slate-300 font-medium">{pickLang(drug, 'hypoDetail', lang)}</DetailRow>
            <DetailRow label={t.cardioBenefit} stack>
              {drug.cvBenefit ? L('มีหลักฐานลดอัตราการเกิดโรคหัวใจและหลอดเลือด (ASCVD) และลดอัตราการเสียชีวิต', 'Evidence of reduced ASCVD events and mortality') : L('ไม่มีหลักฐานลดความเสี่ยง ASCVD โดยตรง (Neutral)', 'No direct evidence of ASCVD risk reduction (neutral)')}
            </DetailRow>
            <DetailRow label={t.hfBenefit} stack>
              {drug.hfBenefit ? L('มีหลักฐานลดการนอนโรงพยาบาลจากภาวะหัวใจล้มเหลว (Heart Failure hospitalization) ทั้ง HFrEF และ HFpEF', 'Evidence of fewer heart failure hospitalisations in both HFrEF and HFpEF') : L('ไม่มีข้อบ่งใช้ในภาวะหัวใจล้มเหลว', 'No heart failure indication')}
            </DetailRow>
            <DetailRow label={t.ckdBenefit} stack>
              {drug.ckdBenefit ? L('ชะลอการลดลงของ eGFR และลดอัตราการเกิดไตวายระยะสุดท้าย (ESRD)', 'Slows eGFR decline and lowers the rate of end-stage kidney disease (ESRD)') : L('ไม่มีผลชะลอการดำเนินโรคไตโดยตรง', 'No direct effect on slowing kidney disease')}
            </DetailRow>
          </FoldSection>

          <FoldSection {...fold('safety')} title={t.secSafety} icon={AlertTriangleIcon} tone="amber">
            <DetailRow label={t.sideEffects} stack><BulletList items={lang === 'th' ? drug.adverseEffectsTh : drug.adverseEffectsEn} /></DetailRow>
            <DetailRow label={t.warnings} stack><BulletList items={lang === 'th' ? drug.warningsTh : drug.warningsEn} /></DetailRow>
            <DetailRow label={t.contraLabel} stack><BulletList items={lang === 'th' ? drug.contraindicationsTh : drug.contraindicationsEn} /></DetailRow>
          </FoldSection>

          <FoldSection {...fold('special')} title={t.secSpecial} icon={MoonIcon} tone="indigo">
            <DetailRow label={t.ramadanFast} stack>
              <span className="inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 mr-1.5">{t.ramadanRisk}: {drug.ramadanAdjustment.riskLevel}</span>
              {lang === 'th' ? drug.ramadanAdjustment.guidanceTh : drug.ramadanAdjustment.guidanceEn}
            </DetailRow>
            <DetailRow label={t.pregnancy} stack>{pickLang(drug, 'pregnancyLactation', lang)}</DetailRow>
          </FoldSection>

          <FoldSection {...fold('advice')} title={t.secAdvice} icon={InfoIcon} tone="sky">
            <DetailRow label={t.adviceLabel} stack>{pickLang(drug, 'patientTips', lang)}</DetailRow>
            <DetailRow label={t.priceEstimate}>{formatCurrency(drug.priceLevel, lang)}</DetailRow>
            <DetailRow label={t.nlemStatus} valueClass={drug.nlem ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-500'}>{nlemLabel(drug, lang)}</DetailRow>
          </FoldSection>

          <FoldSection {...fold('mechanism')} title={t.secMechanism} icon={ActivityIcon} tone="slate">
            <p className="text-slate-700 dark:text-slate-200 leading-relaxed font-medium">{lang === 'th' ? drug.mechanismTh : drug.mechanismEn}</p>
          </FoldSection>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-2 p-3 sm:p-4 border-t border-slate-100 dark:border-slate-800 shrink-0">
          <button onClick={() => setAll(!allOpen)} data-fold-all className="mr-auto flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border bg-white text-slate-600 border-slate-200 hover:border-teal-300 hover:text-teal-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 transition-colors">
            <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${allOpen ? 'rotate-180' : ''}`} /> {allOpen ? t.collapseAll : t.expandAll}
          </button>
          <button onClick={() => onToggleCompare(drug)} data-detail-select className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold border transition-colors ${isCompared ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-slate-600 border-slate-200 hover:border-teal-300 hover:text-teal-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'}`}>
            {isCompared ? <CheckIcon className="w-3.5 h-3.5" /> : <CompareIcon className="w-3.5 h-3.5" />} {isCompared ? t.selectedBtn : t.selectBtn}
          </button>
          <button onClick={onClose} className="px-4 py-2 rounded-lg text-xs font-bold bg-slate-800 text-white hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors">{t.close}</button>
        </div>
      </div>
    </div>
  );
};

// --- Disclaimer (linked from the header) ---
const DisclaimerSection = ({ t }) => (
  <section className="mt-10 md:mt-14 pt-6 border-t border-slate-200 dark:border-slate-800" aria-labelledby="disclaimer-heading">
    <h2 id="disclaimer-heading" className="text-sm font-extrabold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-2">
      <AlertTriangleIcon className="w-4 h-4" /> {t.discTitle}
    </h2>
    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-900 rounded-xl p-3 md:p-4">{t.discBody}</p>
  </section>
);
