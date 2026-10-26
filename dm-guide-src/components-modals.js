
// --- Modal 1: T2D Starting Drugs Wizard (CPG 2566 แผนภูมิที่ 1 และ 2) ---
const StartingWizardModal = ({ isOpen, onClose, lang }) => {
  const [a1cInput, setA1cInput] = useState('8.5');
  const [fpgInput, setFpgInput] = useState('170');
  const [hasSymptoms, setHasSymptoms] = useState(false);
  const [hasAscvd, setHasAscvd] = useState(false);
  const [hasHf, setHasHf] = useState(false);
  const [hasCkd, setHasCkd] = useState(false);
  const [hasObesity, setHasObesity] = useState(false);
  const [hasCostLimit, setHasCostLimit] = useState(false);

  if (!isOpen) return null;

  const a1c = parseFloat(a1cInput) || 0;
  const fpg = parseFloat(fpgInput) || 0;
  const hasHighRiskComorbidity = hasAscvd || hasHf || hasCkd || hasObesity;

  // Decision Logic based on Thai CPG 2566 Diagram 1 & 2
  let pathwayType = '';
  let recommendations = [];
  let escalation = '';
  let rationale = '';

  if (hasHighRiskComorbidity && !hasCostLimit) {
    pathwayType = 'diagram2';
    rationale = lang === 'th' 
      ? 'ผู้ป่วยมีโรคร่วมสำคัญ (ASCVD / Heart Failure / CKD / โรคอ้วนรุนแรง) และไม่มีปัญหาค่าใช้จ่าย ตามแนวทาง CPG 2566 แผนภูมิที่ 2 แนะนำให้เลือกยากลุ่ม SGLT2i หรือ GLP-1 RA เป็นยาหลัก เพื่อผลลดอัตราตายและปกป้องอวัยวะ' 
      : 'Patient has high-risk comorbidities (ASCVD, Heart Failure, CKD, or Severe Obesity) without cost constraints. Per Thai CPG 2566 Diagram 2, prioritize SGLT2i or GLP-1 RA with proven organ benefit.';

    if (hasHf) {
      recommendations.push({
        priority: tx("อันดับ 1 (First Choice in Heart Failure)"),
        drugGroup: tx("SGLT-2 Inhibitor (Dapagliflozin 10 mg หรือ Empagliflozin 10 mg)"),
        reasonTh: 'มีหลักฐานชัดเจนในการลดอัตราการนอนโรงพยาบาลจากภาวะหัวใจล้มเหลว (HF hospitalization) และลดการเสียชีวิต ทั้งใน HFrEF และ HFpEF',
        reasonEn: 'Robust evidence reducing HF hospitalizations and cardiovascular mortality across HFrEF and HFpEF.'
      });
    }
    if (hasCkd) {
      recommendations.push({
        priority: tx("อันดับ 1 ในโรคไตเรื้อรัง (CKD with eGFR < 60 or UACR ≥ 200 mg/g)"),
        drugGroup: tx("SGLT-2 Inhibitor (Dapagliflozin หรือ Empagliflozin)"),
        reasonTh: 'ชะลอการลดลงของอัตราการกรองของไต (eGFR) และลดอัตราการเกิดไตวายระยะสุดท้าย (ESRD) ได้ชัดเจน สามารถเริ่มยาได้ถ้า eGFR ≥ 20-25 มล./นาที',
        reasonEn: 'Significantly slows eGFR decline and reduces progression to ESRD. Can be initiated if eGFR ≥ 20-25 mL/min.'
      });
      recommendations.push({
        priority: tx("ยาทางเลือก หรือใช้ร่วม (Alternative or Add-on)"),
        drugGroup: 'GLP-1 Receptor Agonist (Semaglutide, Dulaglutide, Liraglutide)',
        reasonTh: 'กรณีมีข้อจำกัดในการใช้ SGLT2i หรือต้องการชะลอไตเสื่อมและลดโปรตีนรั่วเพิ่มเติม ปลอดภัยใน eGFR ≥ 15 มล./นาที',
        reasonEn: 'Preferred alternative if SGLT2i intolerant, or for additional albuminuria reduction. Safe down to eGFR ≥ 15 mL/min.'
      });
    }
    if (hasAscvd) {
      recommendations.push({
        priority: tx("อันดับ 1 ในโรคหลอดเลือดหัวใจ (ASCVD)"),
        drugGroup: tx("GLP-1 Receptor Agonist หรือ SGLT-2 Inhibitor (ชนิดที่มีหลักฐานลด MACE)"),
        reasonTh: 'GLP-1 RA (Semaglutide SC, Dulaglutide, Liraglutide) หรือ SGLT2i (Empagliflozin, Dapagliflozin) มีการศึกษาทางคลินิกลดอัตราการเกิดกล้ามเนื้อหัวใจขาดเลือด หลอดเลือดสมอง และอัตราการเสียชีวิตจากโรคหัวใจ',
        reasonEn: 'Proven reduction in 3P-MACE, stroke, MI, and CV death in large landmark cardiovascular outcome trials.'
      });
    }
    if (hasObesity && !hasAscvd && !hasHf && !hasCkd) {
      recommendations.push({
        priority: tx("อันดับ 1 ในโรคอ้วนรุนแรง (BMI ≥ 30 kg/m²)"),
        drugGroup: tx("GLP-1 Receptor Agonist (Semaglutide SC, Liraglutide) หรือ SGLT-2 Inhibitor"),
        reasonTh: 'ช่วยลดน้ำหนักตัวได้อย่างมีนัยสำคัญ ควบคู่ไปกับการควบคุมระดับน้ำตาล',
        reasonEn: 'Substantial weight loss efficacy with excellent glycemic control and low hypoglycemia risk.'
      });
    }
    escalation = lang === 'th' 
      ? 'อาจพิจารณาให้ร่วมกับยา Metformin หากไม่มีข้อห้ามใช้ (eGFR ≥ 30) และสามารถปรับเพิ่มยาขนานอื่นหาก A1C ยังไม่บรรลุเป้าหมายใน 3 เดือน' 
      : 'May be combined with Metformin if eGFR ≥ 30 mL/min. Escalate to combination therapy if A1C target not met in 3 months.';
  } else {
    // Diagram 1
    pathwayType = 'diagram1';
    if (a1c >= 10.0 || fpg >= 300 || (hasSymptoms && (a1c >= 9.0 || fpg >= 200))) {
      rationale = lang === 'th'
        ? 'ระดับน้ำตาลในเลือดสูงมาก (A1C ≥ 10.0% หรือ FPG ≥ 300 มก./ดล.) หรือมีอาการแสดงรุนแรงชัดเจน: มีภาวะขาดอินซูลินสัมพัทธ์สูง เสี่ยงต่อการเกิดภาวะฉุกเฉินน้ำตาลสูง'
        : 'Severe hyperglycemia (A1C ≥ 10% or FPG ≥ 300 mg/dL) or symptomatic: marked insulin deficiency requiring immediate insulin initiation.';
      recommendations.push({
        priority: tx("การรักษาเริ่มต้น (Immediate Initiation)"),
        drugGroup: tx("ฉีดอินซูลิน NPH ก่อนนอน (21.00-23.00 น.) หรือ LAA หรือ ULAA หรือ Premixed insulin วันละ 1-2 ครั้ง (± Metformin)"),
        reasonTh: 'ขนาดอินซูลินเริ่มต้น 0.1 - 0.2 ยูนิต/กก. หรือ 10 ยูนิตก่อนนอน ตรวจน้ำตาลตอนเช้าเพื่อปรับยาทุก 3-7 วันจนได้ FPG 80-130 มก./ดล.',
        reasonEn: 'Start Basal insulin 0.1-0.2 U/kg or 10 units at bedtime. Titrate by 2-4 units every 3-7 days until FPG 80-130 mg/dL.'
      });
      escalation = lang === 'th'
        ? 'เมื่อระดับน้ำตาลลดลงและอาการดีขึ้น อาจพิจารณาลดหรือปรับเปลี่ยนเป็นยาเม็ดลดน้ำตาลในภายหลัง'
        : 'Once glucotoxicity resolves and BG normalizes, may taper insulin or transition to oral agents.';
    } else if (a1c >= 9.0 || fpg >= 200) {
      rationale = lang === 'th'
        ? 'ระดับน้ำตาลเริ่มต้นสูงปานกลางถึงมาก (A1C ≥ 9.0% หรือ FPG ≥ 200 มก./ดล.): การใช้ยาชนิดเดียวมีโอกาสไม่บรรลุเป้าหมายสูง CPG 2566 แนะนำเริ่มยาเม็ด 2 ชนิดพร้อมกันตั้งแต่แรก'
        : 'Moderate-high baseline hyperglycemia (A1C ≥ 9% or FPG ≥ 200 mg/dL): Monotherapy unlikely to achieve goal. Start dual combination immediately.';
      recommendations.push({
        priority: tx("การรักษาเริ่มต้น (Dual Combination Therapy)"),
        drugGroup: tx("Metformin + ยาขนานที่ 2 (Sulfonylurea หรือ Glitazone/TZD)"),
        reasonTh: 'ยาทางเลือกอื่นสำหรับขนานที่ 2: DPP-4 inhibitor, SGLT-2 inhibitor, GLP-1 analog, Alpha-GI หรือ Repaglinide',
        reasonEn: 'Metformin + 2nd agent (Sulfonylurea or TZD; alternatives: DPP-4i, SGLT2i, GLP-1 RA, AGI, Glinide).'
      });
      escalation = lang === 'th'
        ? 'ติดตามผลทุก 1-4 สัปดาห์ และตรวจ A1C ทุก 3 เดือน หากยังไม่ถึงเป้าหมาย ให้เพิ่มยาเป็น 3 ชนิด หรือเริ่ม Basal Insulin'
        : 'Recheck A1C at 3 months. If not at goal, escalate to triple oral therapy or add Basal Insulin.';
    } else if (a1c >= 8.0 || fpg >= 160) {
      rationale = lang === 'th'
        ? 'ระดับน้ำตาล FPG ≥ 160 มก./ดล. หรือ A1C ≥ 8.0%: แนะนำเริ่มยา Metformin ทันที ควบคู่กับการปรับเปลี่ยนพฤติกรรมชีวิต'
        : 'FPG ≥ 160 mg/dL or A1C ≥ 8.0%: Initiate Metformin monotherapy immediately alongside lifestyle modification.';
      recommendations.push({
        priority: tx("ยาขนานแรก (First-line Monotherapy)"),
        drugGroup: tx("Metformin (เริ่ม 500 มก. วันละ 1-2 ครั้ง พร้อมอาหาร ค่อยๆ ปรับเพิ่มจนถึง 1,500-2,000 มก./วัน)"),
        reasonTh: 'ราคาประหยัด ปลอดภัยสูง ไม่ทำให้น้ำหนักเพิ่ม และไม่ทำให้น้ำตาลต่ำเมื่อใช้เดี่ยวๆ',
        reasonEn: 'Inexpensive, safe, weight-neutral, minimal hypoglycemia risk.'
      });
      escalation = lang === 'th'
        ? 'หากยังไม่ได้ตามเป้าหมายใน 3 เดือน ให้เพิ่มยาชนิดที่ 2 (Combination therapy: SU, TZD, DPP-4i, SGLT2i, GLP-1 RA)'
        : 'If A1C remains above target at 3 months, add a second agent (SU, TZD, DPP-4i, SGLT2i, GLP-1 RA).';
    } else {
      rationale = lang === 'th'
        ? 'ระดับน้ำตาลเริ่มต้นต่ำกว่าเกณฑ์วิกฤต (FPG < 160 มก./ดล. หรือ A1C < 8.0%): สามารถทดลองปรับเปลี่ยนพฤติกรรมชีวิตก่อนได้ไม่เกิน 3 เดือน'
        : 'Mild hyperglycemia (FPG < 160 mg/dL or A1C < 8.0%): Lifestyle modification trial for up to 3 months.';
      recommendations.push({
        priority: tx("การรักษาเริ่มต้น (Initial Step)"),
        drugGroup: tx("ปรับเปลี่ยนพฤติกรรมชีวิตอย่างเคร่งครัด (Lifestyle Modification: โภชนบำบัด + ออกกำลังกาย 150 นาที/สัปดาห์)"),
        reasonTh: 'ลดน้ำหนักตัวอย่างน้อยร้อยละ 5-7 ของน้ำหนักตั้งต้น ไม่เกิน 3 เดือน หาก A1C ยัง ≥ 7.0% ให้เริ่มยา Metformin',
        reasonEn: 'Dietary therapy, exercise ≥ 150 min/week, weight loss ≥ 5-7%. If A1C remains ≥ 7% at 3 months, initiate Metformin.'
      });
      escalation = lang === 'th'
        ? 'หากครบ 3 เดือนยังควบคุมไม่ได้ตามเป้าหมาย (A1C ≥ 7.0%) ให้เริ่มยา Metformin'
        : 'Initiate Metformin if glycemic target is not achieved after 3 months.';
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-teal-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-teal-600 text-white shadow-sm shadow-teal-600/30">
              <GuideStartIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'th' ? 'แนวทางเลือกยาเริ่มต้นในเบาหวานชนิดที่ 2' : 'T2D Starting Drug Selection Wizard'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'th' ? 'อิงตามแผนภูมิที่ 1 และ 2 แนวทางเวชปฏิบัติโรคเบาหวาน 2566' : 'Based on Thai CPG 2023 Algorithms 1 & 2'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1">
          {/* Inputs Section */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-3 flex items-center gap-1.5">
              <ActivityIcon className="w-4 h-4" />
              <span>{lang === 'th' ? '1. ข้อมูลระดับน้ำตาลและอาการของผู้ป่วย' : '1. Glycemic Parameters & Symptoms'}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  HbA1c (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={a1cInput}
                  onChange={(e) => setA1cInput(e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder={tx("เช่น 8.5")}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Fasting Glucose / FPG (mg/dL)
                </label>
                <input
                  type="number"
                  value={fpgInput}
                  onChange={(e) => setFpgInput(e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder={tx("เช่น 170")}
                />
              </div>

              <div className="flex items-end">
                <label className="flex items-center gap-2 cursor-pointer p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 w-full hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <input
                    type="checkbox"
                    checked={hasSymptoms}
                    onChange={(e) => setHasSymptoms(e.target.checked)}
                    className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
                  />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {lang === 'th' ? 'มีอาการน้ำตาลสูงชัดเจน' : 'Severe Hyperglycemic Symptoms'}
                  </span>
                </label>
              </div>
            </div>

            {/* Comorbidities Section */}
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-2 mt-4 flex items-center gap-1.5">
              <ShieldCheckIcon className="w-4 h-4" />
              <span>{lang === 'th' ? '2. โรคร่วมและการทำงานของไต (Comorbidities)' : '2. Key Clinical Comorbidities'}</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              <label className={`flex items-start gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                hasAscvd ? 'bg-rose-50 border-rose-300 dark:bg-rose-950/40 dark:border-rose-800' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
              }`}>
                <input type="checkbox" checked={hasAscvd} onChange={(e) => setHasAscvd(e.target.checked)} className="mt-0.5 text-rose-600 rounded" />
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {lang === 'th' ? 'โรคหลอดเลือดหัวใจ (ASCVD)' : 'Atherosclerotic CVD (ASCVD)'}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">CAD, Post-MI, Stroke, TIA, PAD, Revascularization</div>
                </div>
              </label>

              <label className={`flex items-start gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                hasHf ? 'bg-sky-50 border-sky-300 dark:bg-sky-950/40 dark:border-sky-800' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
              }`}>
                <input type="checkbox" checked={hasHf} onChange={(e) => setHasHf(e.target.checked)} className="mt-0.5 text-sky-600 rounded" />
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {lang === 'th' ? 'หัวใจล้มเหลว (Heart Failure)' : 'Heart Failure (HFrEF / HFpEF)'}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">{tx("ประวัติหรือมีอาการหัวใจวาย หอบเหนื่อย ขาบวม")}</div>
                </div>
              </label>

              <label className={`flex items-start gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                hasCkd ? 'bg-emerald-50 border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-800' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
              }`}>
                <input type="checkbox" checked={hasCkd} onChange={(e) => setHasCkd(e.target.checked)} className="mt-0.5 text-emerald-600 rounded" />
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {lang === 'th' ? 'โรคไตเรื้อรัง (CKD / Albuminuria)' : 'Chronic Kidney Disease (CKD)'}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">{tx("eGFR < 60 มล./นาที และ/หรือ UACR ≥ 200 มก./กรัม")}</div>
                </div>
              </label>

              <label className={`flex items-start gap-2.5 p-2.5 rounded-xl border cursor-pointer transition-colors ${
                hasObesity ? 'bg-purple-50 border-purple-300 dark:bg-purple-950/40 dark:border-purple-800' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
              }`}>
                <input type="checkbox" checked={hasObesity} onChange={(e) => setHasObesity(e.target.checked)} className="mt-0.5 text-purple-600 rounded" />
                <div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {lang === 'th' ? 'โรคอ้วนรุนแรง (BMI ≥ 30 kg/m²)' : 'Severe Obesity (BMI ≥ 30 kg/m²)'}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">{tx("ต้องการลดน้ำหนักตัวอย่างเร่งด่วน")}</div>
                </div>
              </label>
            </div>

            {/* Cost limitation toggle */}
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {lang === 'th' ? 'มีข้อจำกัดเรื่องค่าใช้จ่าย / สิทธิการรักษาเบิกได้เฉพาะยาในบัญชีฯ (NLEM only):' : 'Cost limitations / Restricted to NLEM medications:'}
              </span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={hasCostLimit}
                  onChange={(e) => setHasCostLimit(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-amber-600"></div>
              </label>
            </div>
          </div>

          {/* Results Output Box */}
          <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 dark:from-teal-950/30 dark:to-emerald-950/30 p-5 rounded-2xl border border-teal-200 dark:border-teal-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold px-3 py-1 bg-teal-600 text-white rounded-full">
                {pathwayType === 'diagram2' 
                  ? (lang === 'th' ? 'แผนภูมิที่ 2: ผู้ป่วยที่มีโรคร่วมสำคัญ' : 'CPG Diagram 2: High-Risk Comorbidities') 
                  : (lang === 'th' ? 'แผนภูมิที่ 1: ขั้นตอนการรักษาทั่วไป' : 'CPG Diagram 1: General T2D Pathway')}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {lang === 'th' ? 'ระดับคำแนะนำ: สูงมาก (++ / ระดับ 1)' : 'Recommendation: Strong (++ / Level 1)'}
              </span>
            </div>

            <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mb-4 leading-relaxed bg-white/70 dark:bg-slate-900/70 p-3 rounded-xl border border-teal-100 dark:border-teal-900/50">
              {rationale}
            </p>

            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2 uppercase tracking-wider">
              {lang === 'th' ? 'ยาที่แนะนำให้เริ่ม:' : 'Recommended Drug Regimen:'}
            </h4>

            <div className="space-y-2.5 mb-4">
              {recommendations.map((rec, i) => (
                <div key={i} className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-teal-200/70 dark:border-teal-800/70 shadow-sm">
                  <div className="text-[11px] font-bold text-teal-700 dark:text-teal-400 mb-1">
                    {rec.priority}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {rec.drugGroup}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    {lang === 'th' ? rec.reasonTh : rec.reasonEn}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-900 text-xs text-amber-800 dark:text-amber-300">
              <span className="font-bold block mb-0.5">{lang === 'th' ? 'ขั้นตอนการติดตามและปรับยาต่อเนิ่อง:' : 'Escalation & Follow-up:'}</span>
              {escalation}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex justify-end">
          <button onClick={onClose} className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors">
            {lang === 'th' ? 'ปิดหน้าต่าง' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Modal 2: Insulin Titration & Calculator (CPG 2566 บทที่ 7 & 10) ---
const InsulinCalculatorModal = ({ isOpen, onClose, lang }) => {
  const [weightInput, setWeightInput] = useState('60');
  const [calcMode, setCalcMode] = useState('basal'); // 'basal', 'basal_bolus', 'correction', 'ckd'
  const [tddInput, setTddInput] = useState('30');
  const [currentBg, setCurrentBg] = useState('220');
  const [targetBg, setTargetBg] = useState('110');
  const [carbGrams, setCarbGrams] = useState('45');
  const [egfrInput, setEgfrInput] = useState('40');

  if (!isOpen) return null;

  const weight = parseFloat(weightInput) || 60;
  const tdd = parseFloat(tddInput) || (weight * 0.5);
  const bg = parseFloat(currentBg) || 200;
  const target = parseFloat(targetBg) || 110;
  const carbs = parseFloat(carbGrams) || 45;
  const egfr = parseFloat(egfrInput) || 60;

  // Calculations
  const basalLow = (weight * 0.1).toFixed(1);
  const basalHigh = (weight * 0.2).toFixed(1);

  // Basal-Bolus
  const tddEstLow = (weight * 0.4).toFixed(0);
  const tddEstHigh = (weight * 0.6).toFixed(0);
  const basalPart = (tdd * 0.45).toFixed(0);
  const prandialTotal = (tdd * 0.55).toFixed(0);
  const prandialPerMeal = (prandialTotal / 3).toFixed(0);

  // ICR & ISF
  const icr = Math.round(500 / tdd); // Rule of 500: 1 U covers X grams
  const isfAnalog = Math.round(1800 / tdd); // Rule of 1800 for analogs
  const isfRegular = Math.round(1500 / tdd); // Rule of 1500 for regular insulin

  // Doses for meal + correction
  const carbBolus = (carbs / icr).toFixed(1);
  const correctionBolus = bg > target ? ((bg - target) / isfAnalog).toFixed(1) : 0;
  const totalMealDose = (parseFloat(carbBolus) + parseFloat(correctionBolus)).toFixed(1);

  // CKD Dose Adjustment
  let ckdDoseFactor = 1.0;
  let ckdExplanation = '';
  if (egfr < 10) {
    ckdDoseFactor = 0.5;
    ckdExplanation = lang === 'th' 
      ? 'eGFR < 10 มล./นาที หรือผู้ป่วยฟอกไต: แนะนำลดขนาดยาอินซูลินลงร้อยละ 50 ของขนาดปกติ เนื่องจากไตแทบไม่สามารถทำลายอินซูลินได้' 
      : 'eGFR < 10 mL/min or Dialysis: Reduce insulin dose by 50% due to severely decreased clearance.';
  } else if (egfr <= 50) {
    ckdDoseFactor = 0.75;
    ckdExplanation = lang === 'th' 
      ? 'eGFR 10-50 มล./นาที: แนะนำลดขนาดยาอินซูลินลงร้อยละ 25 ของขนาดปกติเพื่อป้องกันภาวะน้ำตาลต่ำรุนแรง' 
      : 'eGFR 10-50 mL/min: Reduce insulin dose by 25% to prevent severe hypoglycemia.';
  } else {
    ckdExplanation = lang === 'th' 
      ? 'eGFR > 50 มล./นาที: ขนาดยาอินซูลินปกติ ไม่ต้องปรับลดตามค่าไต' 
      : 'eGFR > 50 mL/min: Normal insulin dosing, no renal reduction required.';
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-blue-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-blue-600 text-white shadow-sm shadow-blue-600/30">
              <GuideInsulinIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'th' ? 'โปรแกรมคำนวณและปรับขนาดอินซูลิน (Insulin Titration)' : 'Insulin Initiation & Titration Calculator'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'th' ? 'อิงตามเกณฑ์ CPG 2566 บทที่ 7, บทที่ 9 และบทที่ 10' : 'Based on Thai CPG 2023 Chapters 7, 9 & 10'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Calculator Mode Tabs */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-5 pt-3 bg-slate-50/70 dark:bg-slate-800/20 overflow-x-auto hide-scrollbar gap-2">
          {[
            { key: 'basal', labelTh: '1. เริ่ม Basal Insulin (T2D)', labelEn: '1. Basal Initiation' },
            { key: 'basal_bolus', labelTh: '2. แผน Basal-Bolus', labelEn: '2. Basal-Bolus Regimen' },
            { key: 'correction', labelTh: '3. คำนวณ ICR & ISF (Bolus)', labelEn: '3. ICR & ISF Calculator' },
            { key: 'ckd', labelTh: '4. ปรับขนาดในโรคไต (CKD)', labelEn: '4. Renal Adjustment' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setCalcMode(tab.key)}
              className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-colors border-b-2 whitespace-nowrap ${
                calcMode === tab.key
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
              }`}
            >
              {lang === 'th' ? tab.labelTh : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1">
          {/* Patient Weight Input */}
          <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
            <WeightScaleIcon className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <div className="flex-1">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                {lang === 'th' ? 'น้ำหนักตัวผู้ป่วย (กก. / kg):' : 'Patient Body Weight (kg):'}
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={weightInput}
                  onChange={(e) => setWeightInput(e.target.value)}
                  className="w-32 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-base font-bold text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-xs text-slate-500">
                  {lang === 'th' ? `ประมาณขนาด TDD เริ่มต้น (0.5 U/kg): ${(weight * 0.5).toFixed(0)} ยูนิต/วัน` : `Est. initial TDD (0.5 U/kg): ${(weight * 0.5).toFixed(0)} U/day`}
                </span>
              </div>
            </div>
          </div>

          {/* TAB 1: BASAL INITIATION */}
          {calcMode === 'basal' && (
            <div className="space-y-4">
              <div className="bg-blue-50/60 dark:bg-blue-950/40 p-4 rounded-2xl border border-blue-200 dark:border-blue-900">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-2">
                  {lang === 'th' ? 'ขนาดเริ่มต้นของ Basal Insulin ในผู้ป่วยเบาหวานชนิดที่ 2' : 'Initial Basal Insulin Dosing in T2D'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-blue-100 dark:border-blue-800">
                    <span className="text-xs text-slate-500 block mb-0.5">{lang === 'th' ? 'ตามน้ำหนัก (0.1 - 0.2 ยูนิต/กก./วัน):' : 'Weight-based (0.1 - 0.2 U/kg/day):'}</span>
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{basalLow} - {basalHigh}{tx(" ยูนิต/วัน")}</span>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-blue-100 dark:border-blue-800">
                    <span className="text-xs text-slate-500 block mb-0.5">{lang === 'th' ? 'ขนาดคงที่เริ่มต้น (Fixed Start):' : 'Standard Fixed Start:'}</span>
                    <span className="text-xl font-bold text-slate-800 dark:text-slate-200">{tx("10 ยูนิต ก่อนนอน")}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                  <p><strong>{tx("ตัวเลือกยาฉีด:")}</strong></p>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
                    <li><strong>NPH:</strong>{tx(" ฉีดเวลา 21.00 - 23.00 น. ก่อนนอน (ต้องคลึงขวดเบาๆ 10-20 ครั้ง)")}</li>
                    <li><strong>LAA (Glargine U100 / Detemir):</strong>{tx(" ฉีดตอนเย็นหรือก่อนนอน เวลาเดียวกันทุกวัน (ลดน้ำตาลต่ำกลางดึกได้ดีกว่า NPH)")}</li>
                    <li><strong>ULAA (Degludec / Glargine U300):</strong>{tx(" ฉีดเวลาใดก็ได้ของวัน มีความยืดหยุ่นสูง เหมาะมากในผู้สูงอายุหรือผู้ที่เกิดน้ำตาลต่ำบ่อย")}</li>
                  </ul>
                </div>
              </div>

              {/* Titration Rules */}
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-1.5">
                  <TimerIcon className="w-4 h-4 text-teal-600" />
                  <span>{lang === 'th' ? 'เกณฑ์การปรับขนาดยา (Titration Algorithm - CPG 2566)' : 'Titration Rules'}</span>
                </h4>
                <div className="text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                  <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300 block">{tx("เป้าหมายน้ำตาลอดอาหารตอนเช้า (Fasting Target): 80 - 130 มก./ดล.")}</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{tx("ตรวจระดับน้ำตาลปลายนิ้วตอนเช้าขณะอดอาหารอย่างน้อยสัปดาห์ละ 3 ครั้ง")}</li>
                    <li>{tx("หากค่าน้ำตาลเช้าเฉลี่ย ")}<strong>{tx("> 130 มก./ดล.")}</strong>{tx(": ปรับเพิ่ม Basal Insulin ครั้งละ ")}<strong>{tx("2 - 4 ยูนิต ทุก 3 - 7 วัน")}</strong>{tx(" จนบรรลุเป้าหมาย")}</li>
                    <li>{tx("หากค่าน้ำตาลเช้าเฉลี่ย ")}<strong>{tx("< 70-80 มก./ดล. หรือเกิดน้ำตาลต่ำ")}</strong>{tx(": ปรับลดขนาดยาลง ")}<strong>{tx("2 - 4 ยูนิต หรือลดลงร้อยละ 10-20")}</strong>{tx(" ทันที")}</li>
                    <li>{tx("หากขนาดยา Basal Insulin เกิน ")}<strong>{tx("0.5 ยูนิต/กก./วัน")}</strong>{tx(" แล้ว A1C ยังไม่ถึงเป้าหมาย: พิจารณาเริ่ม Basal-Plus (เพิ่มยาฉีดออกฤทธิ์เร็ว 1 มื้อ) หรือ Basal-Bolus")}</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BASAL-BOLUS REGIMEN */}
          {calcMode === 'basal_bolus' && (
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-3">
                  {lang === 'th' ? 'การคำนวณสัดส่วน Total Daily Dose (TDD) สำหรับ Basal-Bolus' : 'Basal-Bolus TDD Partitioning'}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="text-[11px] text-slate-500 block">{tx("TDD ทั้งวัน (0.4 - 0.6 U/kg)")}</span>
                    <span className="text-lg font-bold text-slate-900 dark:text-white">{tddEstLow} - {tddEstHigh}{tx(" ยูนิต/วัน")}</span>
                  </div>
                  <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800">
                    <span className="text-[11px] text-indigo-700 dark:text-indigo-300 block font-semibold">Basal Insulin (40-50% TDD)</span>
                    <span className="text-lg font-bold text-indigo-700 dark:text-indigo-400">~{basalPart}{tx(" ยูนิต ก่อนนอน")}</span>
                  </div>
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800">
                    <span className="text-[11px] text-amber-700 dark:text-amber-300 block font-semibold">Prandial Insulin (50-60% TDD)</span>
                    <span className="text-lg font-bold text-amber-700 dark:text-amber-400">~{prandialPerMeal}{tx(" ยูนิต/มื้อ (3 มื้อ)")}</span>
                  </div>
                </div>

                <div className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 space-y-2 leading-relaxed">
                  <p><strong>{tx("ตัวอย่างตารางการฉีด 4 เข็มต่อวัน (Multiple Daily Injections - MDI):")}</strong></p>
                  <div className="grid grid-cols-4 gap-2 text-center pt-1 font-semibold">
                    <div className="p-2 bg-amber-50 dark:bg-amber-950/50 rounded-lg border border-amber-200 dark:border-amber-900">
                      <span className="block text-[10px] text-slate-500">{tx("ก่อนอาหารเช้า")}</span>
                      <span className="text-amber-700 dark:text-amber-300">{prandialPerMeal} U (RI/RAA)</span>
                    </div>
                    <div className="p-2 bg-amber-50 dark:bg-amber-950/50 rounded-lg border border-amber-200 dark:border-amber-900">
                      <span className="block text-[10px] text-slate-500">{tx("ก่อนอาหารเที่ยง")}</span>
                      <span className="text-amber-700 dark:text-amber-300">{prandialPerMeal} U (RI/RAA)</span>
                    </div>
                    <div className="p-2 bg-amber-50 dark:bg-amber-950/50 rounded-lg border border-amber-200 dark:border-amber-900">
                      <span className="block text-[10px] text-slate-500">{tx("ก่อนอาหารเย็น")}</span>
                      <span className="text-amber-700 dark:text-amber-300">{prandialPerMeal} U (RI/RAA)</span>
                    </div>
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg border border-indigo-200 dark:border-indigo-900">
                      <span className="block text-[10px] text-slate-500">{tx("ก่อนนอน (21-23น.)")}</span>
                      <span className="text-indigo-700 dark:text-indigo-300">{basalPart} U (NPH/LAA)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ICR & ISF */}
          {calcMode === 'correction' && (
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-1.5">
                  <CalculatorIcon className="w-4 h-4 text-blue-600" />
                  <span>{lang === 'th' ? 'การคำนวณอัตราส่วนคาร์โบไฮเดรต (ICR) และความไวอินซูลิน (ISF)' : 'Carb Ratio & Sensitivity Factors'}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="text-[11px] text-slate-500 block font-semibold">{tx("กฎ 500 (Insulin-to-Carb Ratio: ICR)")}</span>
                    <span className="text-lg font-bold text-teal-600 dark:text-teal-400">1 U : {icr}{tx(" กรัมคาร์โบไฮเดรต")}</span>
                    <p className="text-[10px] text-slate-400 mt-0.5">{tx("สูตร: 500 ÷ TDD (")}{tdd} U)</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                    <span className="text-[11px] text-slate-500 block font-semibold">{tx("กฎ 1800 (Insulin Sensitivity Factor: ISF)")}</span>
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{tx("1 U ลดน้ำตาล ")}{isfAnalog}{tx(" มก./ดล.")}</span>
                    <p className="text-[10px] text-slate-400 mt-0.5">{tx("สูตร: 1800 ÷ TDD (หรือ 1500 ÷ TDD สำหรับ RI = ")}{isfRegular}{tx(" มก./ดล.)")}</p>
                  </div>
                </div>

                {/* Live Bolus Calculator */}
                <div className="p-4 bg-teal-50/50 dark:bg-teal-950/30 rounded-xl border border-teal-200 dark:border-teal-800 space-y-3">
                  <span className="text-xs font-bold text-teal-800 dark:text-teal-300 block">
                    {lang === 'th' ? 'คำนวณขนาดยาฉีดก่อนมื้ออาหาร (Meal + Correction Bolus):' : 'Pre-meal Bolus Dose Calculator:'}
                  </span>

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">{tx("ค่าน้ำตาลขณะนี้")}</label>
                      <input type="number" value={currentBg} onChange={e => setCurrentBg(e.target.value)} className="w-full px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-900 font-bold" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">{tx("ค่าน้ำตาลเป้าหมาย")}</label>
                      <input type="number" value={targetBg} onChange={e => setTargetBg(e.target.value)} className="w-full px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-900 font-bold" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1">{tx("คาร์บมื้อนี้ (กรัม)")}</label>
                      <input type="number" value={carbGrams} onChange={e => setCarbGrams(e.target.value)} className="w-full px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 dark:bg-slate-900 font-bold" />
                    </div>
                  </div>

                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-teal-200 dark:border-teal-800 text-xs flex items-center justify-between">
                    <div>
                      <span className="text-slate-500 block">{tx("ยาตามมื้ออาหาร: ")}{carbBolus}{tx(" U + ยาปรับแก้: ")}{correctionBolus} U</span>
                      <span className="text-sm font-bold text-slate-800 dark:text-slate-200">{tx("ขนาดยาฉีดที่แนะนำมื้อนี้:")}</span>
                    </div>
                    <span className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">{Math.round(totalMealDose)}{tx(" ยูนิต")}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CKD DOSE ADJUSTMENT */}
          {calcMode === 'ckd' && (
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
                  {lang === 'th' ? 'การปรับลดขนาดอินซูลินในผู้ป่วยโรคไตเรื้อรัง (CKD Insulin Reduction Protocol)' : 'CKD Insulin Reduction Protocol'}
                </h4>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    {tx("ค่า eGFR ของผู้ป่วย (มล./นาที/1.73 ตร.ม.):")}
                  </label>
                  <input
                    type="number"
                    value={egfrInput}
                    onChange={(e) => setEgfrInput(e.target.value)}
                    className="w-40 px-3 py-1.5 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl text-base font-bold text-slate-900 dark:text-white"
                  />
                </div>

                <div className={`p-4 rounded-2xl border mb-3 ${
                  egfr < 10 
                    ? 'bg-rose-50 border-rose-300 dark:bg-rose-950/40 dark:border-rose-900' 
                    : egfr <= 50 
                      ? 'bg-amber-50 border-amber-300 dark:bg-amber-950/40 dark:border-amber-900' 
                      : 'bg-emerald-50 border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-900'
                }`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      {lang === 'th' ? 'ผลการคำนวณสัดส่วนขนาดยา:' : 'Dose Modification Factor:'}
                    </span>
                    <span className="text-base font-extrabold text-slate-900 dark:text-white">
                      {ckdDoseFactor === 1.0 ? tx("100% (ขนาดยาปกติ)") : txf("ลดลงเหลือ {}% ของขนาดเดิม", [ckdDoseFactor * 100])}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    {ckdExplanation}
                  </p>
                </div>

                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 space-y-1.5">
                  <span className="font-bold text-slate-800 dark:text-slate-200 block">{tx("ข้อควรระวังในผู้ป่วยฟอกเลือด (Hemodialysis):")}</span>
                  <p>{tx("• ระดับน้ำตาลมักผันแปรและลดต่ำลงในช่วงชั่วโมงสุดท้ายของการฟอกไต")}</p>
                  <p>{tx("• ควรลดขนาดอินซูลินลงร้อยละ 10-15 ในระหว่างและทันทีหลังทำ dialysis")}</p>
                  <p>{tx("• หาก A1C < 7.5% ควรลดขนาดยาอินซูลินเพื่อความปลอดภัยจากภาวะน้ำตาลต่ำรุนแรง")}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex justify-end">
          <button onClick={onClose} className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors">
            {lang === 'th' ? 'ปิดหน้าต่าง' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Modal 3: CKD Renal Adjustment Matrix (CPG 2566 ตารางที่ 2 หน้า 98) ---
const CkdMatrixModal = ({ isOpen, onClose, lang }) => {
  const [userEgfr, setUserEgfr] = useState('');
  const numEgfr = parseFloat(userEgfr);
  const isFiltering = !isNaN(numEgfr) && numEgfr >= 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-emerald-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-600 text-white shadow-sm shadow-emerald-600/30">
              <GuideKidneyIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'th' ? 'ตารางการปรับยาลดระดับน้ำตาลในผู้ป่วยโรคไตเรื้อรัง (CKD)' : 'Renal Dose Adjustment Matrix (CKD Stages 1-5 & Dialysis)'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'th' ? 'ตามแนวทางเวชปฏิบัติสำหรับโรคเบาหวาน 2566 ตารางที่ 2 หน้า 98' : 'Based on Thai CPG 2023 Table 2 (Chapter 9)'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Live Filter Bar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {lang === 'th' ? 'ทดสอบกรองตามค่า eGFR ของผู้ป่วย:' : 'Filter by Patient eGFR:'}
            </label>
            <div className="flex items-center gap-1.5">
              <input
                type="number"
                value={userEgfr}
                onChange={e => setUserEgfr(e.target.value)}
                placeholder={tx("เช่น 28")}
                className="w-24 px-3 py-1.5 text-xs font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl"
              />
              <span className="text-xs text-slate-500">{tx("มล./นาที")}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1 font-semibold text-emerald-700 dark:text-emerald-400"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>{tx(" ปกติ")}</span>
            <span className="flex items-center gap-1 font-semibold text-amber-700 dark:text-amber-400"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>{tx(" ปรับขนาดยา")}</span>
            <span className="flex items-center gap-1 font-semibold text-rose-700 dark:text-rose-400"><span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>{tx(" ห้ามใช้")}</span>
          </div>
        </div>

        {/* Table Body */}
        <div className="p-5 overflow-y-auto flex-1">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <th className="p-3">{tx("กลุ่มยา")}</th>
                  <th className="p-3">{tx("ชื่อยา (Drug)")}</th>
                  <th className="p-3">{tx("ระยะที่ 3 (eGFR 30-59)")}</th>
                  <th className="p-3">{tx("ระยะที่ 4 (eGFR 15-29)")}</th>
                  <th className="p-3">{tx("ระยะที่ 5 และ 5D (ฟอกไต)")}</th>
                  <th className="p-3">{tx("ผลข้างเคียงเด่น")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {GD().ckdDosingTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
                    <td className="p-3 font-semibold text-slate-500 dark:text-slate-400">{row.class}</td>
                    <td className="p-3 font-bold text-slate-900 dark:text-white">{row.drug}</td>
                    <td className="p-3 text-slate-700 dark:text-slate-300">{row.ckd3}</td>
                    <td className="p-3 text-slate-700 dark:text-slate-300">
                      <span className={guidelinesData.ckdDosingTable[idx].ckd4.includes('ห้ามใช้') ? 'text-rose-600 dark:text-rose-400 font-bold' : ''}>
                        {row.ckd4}
                      </span>
                    </td>
                    <td className="p-3 text-slate-700 dark:text-slate-300">
                      <span className={guidelinesData.ckdDosingTable[idx].ckd5_hd.includes('ห้ามใช้') ? 'text-rose-600 dark:text-rose-400 font-bold' : guidelinesData.ckdDosingTable[idx].ckd5_hd.includes('ไม่ต้องปรับ') ? 'text-emerald-600 dark:text-emerald-400 font-bold' : ''}>
                        {row.ckd5_hd}
                      </span>
                    </td>
                    <td className="p-3 text-slate-500 dark:text-slate-400 italic">{row.sideEffect}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex justify-end">
          <button onClick={onClose} className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors">
            {lang === 'th' ? 'ปิดหน้าต่าง' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
