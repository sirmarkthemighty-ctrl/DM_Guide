
// --- Modal 4: Hypoglycemia Management & Rule of 15 (CPG 2566 บทที่ 11) ---
const HypoModal = ({ isOpen, onClose, lang }) => {
  const [timerSeconds, setTimerSeconds] = useState(15 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [activeTab, setActiveTab] = useState('rule15'); // 'rule15', 'levels', 'severe'

  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => setTimerSeconds(prev => prev - 1), 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
      try {
        const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
        audio.play().catch(() => {});
      } catch (e) {}
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  if (!isOpen) return null;

  const formatTimer = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-amber-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-600 text-white shadow-sm shadow-amber-600/30">
              <GuideHypoIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'th' ? 'การวินิจฉัยและรักษาภาวะน้ำตาลต่ำในเลือด (Hypoglycemia)' : 'Hypoglycemia Diagnosis & Management'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'th' ? 'กฎ 15 (Rule of 15) และแนวทางการรักษาภาวะน้ำตาลต่ำรุนแรง (CPG 2566 บทที่ 11)' : 'Rule of 15 & Severe Hypoglycemia Protocol (CPG 2023)'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 px-5 pt-3 bg-slate-50/70 dark:bg-slate-800/20 gap-2 overflow-x-auto hide-scrollbar">
          {[
            { key: 'rule15', labelTh: 'กฎ 15 & ตัวจับเวลา (Rule of 15)', labelEn: 'Rule of 15 & Timer' },
            { key: 'levels', labelTh: 'ระดับความรุนแรง (3 Levels)', labelEn: 'Severity Levels' },
            { key: 'severe', labelTh: 'ภาวะฉุกเฉินรุนแรง (IV / Glucagon)', labelEn: 'Severe Protocol' }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3.5 py-2 text-xs font-bold rounded-t-xl transition-colors border-b-2 whitespace-nowrap ${
                activeTab === tab.key
                  ? 'border-amber-600 text-amber-600 dark:text-amber-400 bg-white dark:bg-slate-900'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-300'
              }`}
            >
              {lang === 'th' ? tab.labelTh : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {activeTab === 'rule15' && (
            <div className="space-y-4">
              {/* Interactive Timer Banner */}
              <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 dark:from-amber-950/40 dark:to-orange-950/40 p-4 rounded-2xl border border-amber-200 dark:border-amber-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-amber-900 dark:text-amber-200 block mb-0.5">
                    {lang === 'th' ? 'ตัวจับเวลานับถอยหลังตรวจซ้ำใน 15 นาที (Rule of 15 Timer):' : 'Recheck in 15 Minutes Countdown:'}
                  </span>
                  <span className="text-3xl font-extrabold text-amber-600 dark:text-amber-400 font-mono tracking-wider">
                    {formatTimer(timerSeconds)}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    {timerSeconds === 0 ? tx("หมดเวลา 15 นาทีแล้ว! โปรดเจาะตรวจน้ำตาลซ้ำทันที") : tx("ทานคาร์โบไฮเดรต 15 กรัม แล้วรอตรวจน้ำตาลซ้ำ")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsTimerRunning(!isTimerRunning)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold text-white transition-colors shadow-sm ${
                      isTimerRunning ? 'bg-amber-700 hover:bg-amber-800' : 'bg-amber-600 hover:bg-amber-500'
                    }`}
                  >
                    {isTimerRunning ? tx("หยุดชั่วคราว") : tx("เริ่มนับ 15 นาที")}
                  </button>
                  <button
                    onClick={() => { setIsTimerRunning(false); setTimerSeconds(15 * 60); }}
                    className="p-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                    title={tx("รีเซ็ตเวลา")}
                  >
                    <RefreshCwIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Step-by-step Rule of 15 */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                  {lang === 'th' ? 'ขั้นตอนการปฏิบัติตามกฎ 15 (Rule of 15):' : 'Rule of 15 Instructions:'}
                </h4>
                <ol className="list-decimal pl-5 text-xs text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
                  <li><strong>{tx("ขั้นที่ 1:")}</strong>{tx(" รับประทานคาร์โบไฮเดรตที่ดูดซึมเร็ว ")}<strong>{tx("15 กรัม")}</strong>{tx(" ทันทีที่สงสัยหรือตรวจพบน้ำตาล ≤ 70 มก./ดล.")}</li>
                  <li><strong>{tx("ขั้นที่ 2:")}</strong>{tx(" พักผ่อนและรอเป็นเวลา ")}<strong>{tx("15 นาที")}</strong>{tx(" (กดปุ่มเริ่มนับเวลาด้านบน)")}</li>
                  <li><strong>{tx("ขั้นที่ 3:")}</strong>{tx(" เจาะตรวจระดับน้ำตาลปลายนิ้วซ้ำ (BGM):")}
                    <ul className="list-disc pl-5 mt-1 space-y-1 text-slate-600 dark:text-slate-400">
                      <li>{tx("หากระดับน้ำตาลยัง ")}<strong>{tx("≤ 70 มก./ดล.")}</strong>{tx(": ให้รับประทานคาร์โบไฮเดรต 15 กรัมซ้ำอีกครั้ง และรออีก 15 นาที")}</li>
                      <li>{tx("หากระดับน้ำตาล ")}<strong>{tx("> 80 มก./ดล.")}</strong>{tx(": ให้รับประทานอาหารมื้อหลักทันทีหากถึงเวลา หรือทานอาหารว่างที่มีคาร์โบไฮเดรตเชิงซ้อนและโปรตีน (เช่น นมจืด 1 กล่อง ขนมปัง 1 แผ่น) หากมื้อถัดไปอยู่ห่างเกินกว่า 1 ชั่วโมง")}</li>
                    </ul>
                  </li>
                </ol>
              </div>

              {/* Food Portion Table */}
              <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
                <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2.5">
                  {lang === 'th' ? 'ตัวอย่างอาหารที่มีคาร์โบไฮเดรต 15 กรัม (เลือกอย่างใดอย่างหนึ่ง):' : 'Examples of 15g Fast-Acting Carbs (Choose ONE):'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {GD().hypoProtocol.ruleOf15Foods.map((f, i) => (
                    <div key={i} className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{f.itemTh}</span>
                      <span className="text-amber-600 dark:text-amber-400 font-bold">{f.portion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'levels' && (
            <div className="space-y-3">
              {GD().hypoProtocol.levels.map((lvl) => (
                <div key={lvl.level} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{lvl.titleTh}</span>
                    <span className="text-xs font-extrabold px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                      {lvl.criteriaTh}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-2">
                    <strong>{tx("อาการที่พบ:")}</strong> {lvl.symptomsTh}
                  </p>
                  <p className="text-xs text-teal-700 dark:text-teal-400 font-semibold bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800">
                    <strong>{tx("แนวทางจัดการ:")}</strong> {lvl.actionTh}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'severe' && (
            <div className="space-y-3 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <div className="p-4 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900 space-y-2">
                <span className="text-sm font-bold text-rose-800 dark:text-rose-300 block">
                  {tx("แนวทางการรักษาภาวะน้ำตาลต่ำระดับรุนแรง (ผู้ป่วยหมดสติ / กลืนไม่ได้ / ชัก):")}
                </span>
                <p><strong>{tx("1. การรักษาที่บ้าน / นอกโรงพยาบาลโดยญาติหรือหน่วยกู้ชีพ:")}</strong></p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>{tx("ห้ามกรอกน้ำหรืออาหารทางปากเด็ดขาด")}</strong>{tx(" เพราะจะสำลักลงปอด")}</li>
                  <li>{tx("จัดท่านอนตะแคงและเปิดทางเดินหายใจ")}</li>
                  <li>{tx("หากมี ")}<strong>Glucagon kit:</strong>{tx(" ฉีด 1 มก. SC หรือ IM (เด็กหนัก < 25 กก. ฉีด 0.5 มก.) น้ำตาลจะเริ่มขึ้นใน 10-15 นาที")}</li>
                  <li>{tx("หากไม่มีกลูคากอน ให้ใช้น้ำหวานเข้มข้นหรือน้ำผึ้งป้ายกระพุ้งแก้มข้างที่นอนตะแคง และรีบโทรเรียกรถพยาบาล 1669")}</li>
                </ul>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-sm font-bold text-slate-900 dark:text-white block">
                  {tx("2. การรักษาในโรงพยาบาล / ห้องฉุกเฉิน (CPG 2566 หน้า 129-130):")}
                </span>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600 dark:text-slate-300">
                  <li>{tx("เปิดเส้นเลือดดำด้วยเข็มเบอร์ 18-20 เก็บตัวอย่างเลือดตรวจ plasma glucose, renal, LFT")}</li>
                  <li>{tx("ฉีด ")}<strong>{tx("50% Glucose (D50W) 50 มล.")}</strong>{tx(" (มีกลูโคส 25 กรัม) เข้าหลอดเลือดดำทันที โดยแบ่งฉีดส่วนแรก 10-20 มล. ก่อน จากนั้นตามด้วยส่วนที่เหลือ 30-40 มล. โดยไม่ต้องรอผลแล็บ")}</li>
                  <li>{tx("ตามด้วยการให้ ")}<strong>10% Dextrose (10%D)</strong>{tx(" หยดเข้าหลอดเลือดดำต่อเนื่อง อัตรา 2 มก./กก./นาที (คือ ")}<strong>{tx("60 มล./ชม.")}</strong>{tx(" ในคนหนัก 50 กก.) เพื่อรักษาระดับน้ำตาล 80-180 มก./ดล.")}</li>
                  <li><strong>{tx("กรณีเกิดจากยา Sulfonylurea:")}</strong>{tx(" น้ำตาลต่ำมักเป็นซ้ำยาวนาน (24-72 ชม.) พิจารณาให้ ")}<strong>{tx("Octreotide 50-100 mcg SC ทุก 8-12 ชม.")}</strong>{tx(" เพื่อยับยั้งการหลั่งอินซูลินจากตับอ่อน")}</li>
                </ul>
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

// --- Modal 5: DKA & HHS Resuscitation Protocol (CPG 2566 บทที่ 12) ---
const DkaHhsModal = ({ isOpen, onClose, lang }) => {
  const [patientWeight, setPatientWeight] = useState('60');
  const [measuredNa, setMeasuredNa] = useState('132');
  const [measuredGlucose, setMeasuredGlucose] = useState('450');
  const [measuredK, setMeasuredK] = useState('4.2');
  const [measuredCl, setMeasuredCl] = useState('98');
  const [measuredHco3, setMeasuredHco3] = useState('12');

  if (!isOpen) return null;

  const wt = parseFloat(patientWeight) || 60;
  const na = parseFloat(measuredNa) || 135;
  const glu = parseFloat(measuredGlucose) || 300;
  const k = parseFloat(measuredK) || 4.0;
  const cl = parseFloat(measuredCl) || 100;
  const hco3 = parseFloat(measuredHco3) || 15;

  // Calculators
  const correctedNa = (na + 1.6 * ((glu - 100) / 100)).toFixed(1);
  const effectiveOsm = (2 * na + (glu / 18)).toFixed(1);
  const anionGap = (na - (cl + hco3)).toFixed(1);

  // Initial fluid rate (Hour 1: 15-20 mL/kg)
  const fluidHour1Low = (wt * 15).toFixed(0);
  const fluidHour1High = (wt * 20).toFixed(0);

  // Insulin IV Rate: 0.1 U/kg/hr
  const insulinIvRate = (wt * 0.1).toFixed(1);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-rose-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-rose-600 text-white shadow-sm shadow-rose-600/30">
              <GuideDkaIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'th' ? 'การรักษาภาวะฉุกเฉินน้ำตาลในเลือดสูง DKA & HHS' : 'DKA & HHS Emergency Resuscitation Protocol'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'th' ? 'ตามแนวทางเวชปฏิบัติโรคเบาหวาน 2566 บทที่ 12 หน้า 137-147' : 'Based on Thai CPG 2023 Chapter 12'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1">
          {/* Quick Interactive Clinical Labs & Calculators */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block mb-2.5">
              {lang === 'th' ? 'เครื่องคำนวณ Corrected Sodium, Osmolality และ Anion Gap:' : 'Corrected Na, Osmolality & Anion Gap Calculators:'}
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 mb-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">{tx("น้ำหนัก (kg)")}</label>
                <input type="number" value={patientWeight} onChange={e => setPatientWeight(e.target.value)} className="w-full px-2 py-1.5 rounded-lg border dark:bg-slate-900 font-bold" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">Glucose (mg/dL)</label>
                <input type="number" value={measuredGlucose} onChange={e => setMeasuredGlucose(e.target.value)} className="w-full px-2 py-1.5 rounded-lg border dark:bg-slate-900 font-bold" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">Na (mEq/L)</label>
                <input type="number" value={measuredNa} onChange={e => setMeasuredNa(e.target.value)} className="w-full px-2 py-1.5 rounded-lg border dark:bg-slate-900 font-bold" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">K (mEq/L)</label>
                <input type="number" value={measuredK} onChange={e => setMeasuredK(e.target.value)} className="w-full px-2 py-1.5 rounded-lg border dark:bg-slate-900 font-bold" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">Cl (mEq/L)</label>
                <input type="number" value={measuredCl} onChange={e => setMeasuredCl(e.target.value)} className="w-full px-2 py-1.5 rounded-lg border dark:bg-slate-900 font-bold" />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-500 mb-0.5">HCO3 (mEq/L)</label>
                <input type="number" value={measuredHco3} onChange={e => setMeasuredHco3(e.target.value)} className="w-full px-2 py-1.5 rounded-lg border dark:bg-slate-900 font-bold" />
              </div>
            </div>

            {/* Calculated Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-[11px] text-slate-400 block">Corrected Sodium</span>
                <span className="text-lg font-bold text-slate-800 dark:text-slate-100">{correctedNa} mEq/L</span>
                <p className="text-[10px] text-slate-400">Na + 1.6 × ((Glu - 100) / 100)</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-[11px] text-slate-400 block">Effective Serum Osmolality</span>
                <span className={`text-lg font-bold ${parseFloat(effectiveOsm) >= 320 ? 'text-rose-600' : 'text-slate-800 dark:text-slate-100'}`}>
                  {effectiveOsm} mOsm/kg
                </span>
                <p className="text-[10px] text-slate-400">{parseFloat(effectiveOsm) >= 320 ? tx("≥ 320 เข้าเกณฑ์ HHS") : '2×Na + Glu/18'}</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
                <span className="text-[11px] text-slate-400 block">Anion Gap</span>
                <span className={`text-lg font-bold ${parseFloat(anionGap) > 12 ? 'text-rose-600' : 'text-slate-800 dark:text-slate-100'}`}>
                  {anionGap} mEq/L
                </span>
                <p className="text-[10px] text-slate-400">{parseFloat(anionGap) > 12 ? 'High Anion Gap Acidosis' : 'Na - (Cl + HCO3)'}</p>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Resuscitation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              {lang === 'th' ? '4 เสาหลักการรักษาภาวะฉุกเฉินน้ำตาลสูง (CPG 2566):' : '4 Core Pillars of Management:'}
            </h4>

            {/* Pillar 1: Fluid Resuscitation */}
            <div className="p-4 bg-sky-50/60 dark:bg-sky-950/40 rounded-2xl border border-sky-200 dark:border-sky-900 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sky-900 dark:text-sky-300 text-sm">
                  {tx("1. การให้สารน้ำทดแทน (Fluid Therapy - สำคัญอันดับแรก)")}
                </span>
                <span className="font-bold text-sky-700 dark:text-sky-400">
                  {tx("ชม. แรก: ")}{fluidHour1Low} - {fluidHour1High}{tx(" มล. (1-1.5 L)")}
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li><strong>{tx("ชั่วโมงแรก:")}</strong>{tx(" ให้ 0.9% NaCl 1,000 - 1,500 มล. (15-20 มล./กก./ชม.) ในชั่วโมงแรกเพื่อกู้ชีพจากภาวะช็อกและขาดน้ำ")}</li>
                <li><strong>{tx("ชั่วโมงที่ 2 เป็นต้นไป:")}</strong>{tx(" ดูค่า Corrected Sodium:")}
                  <ul className="list-circle pl-5 mt-0.5 space-y-0.5">
                    <li>{tx("หาก Corrected Na ปกติหรือสูง (≥ 135 mEq/L): ให้ ")}<strong>0.45% NaCl</strong>{tx(" อัตรา 250 - 500 มล./ชม.")}</li>
                    <li>{tx("หาก Corrected Na ต่ำ (< 135 mEq/L): ให้ ")}<strong>0.9% NaCl</strong>{tx(" อัตรา 250 - 500 มล./ชม.")}</li>
                  </ul>
                </li>
                <li><strong>{tx("เมื่อระดับน้ำตาลลดลงถึง 250 มก./ดล. (ใน DKA) หรือ 300 มก./ดล. (ใน HHS):")}</strong>{tx(" ต้องเปลี่ยนเป็นสารน้ำที่มีน้ำตาล ")}<strong>5% Dextrose in 0.45% NaCl</strong>{tx(" อัตรา 150-250 มล./ชม. เพื่อป้องกันน้ำตาลต่ำและสมองบวม")}</li>
              </ul>
            </div>

            {/* Pillar 2: Potassium */}
            <div className="p-4 bg-amber-50/60 dark:bg-amber-950/40 rounded-2xl border border-amber-200 dark:border-amber-900 space-y-2 text-xs">
              <span className="font-bold text-amber-900 dark:text-amber-300 text-sm block">
                {tx("2. การให้โพแทสเซียม (Potassium Protocol - ตรวจเช็คก่อนเริ่มอินซูลินเสมอ!)")}
              </span>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li><strong>{tx("หาก K < 3.3 mEq/L:")}</strong> <strong>{tx("ห้ามให้อินซูลินเด็ดขาด!")}</strong>{tx(" ให้แก้ K ก่อน โดยให้ KCl 40 mEq ต่อน้ำเกลือ 1 ลิตร จน K ≥ 3.3 จึงเริ่มอินซูลิน")}</li>
                <li><strong>{tx("หาก K 3.3 - 5.2 mEq/L:")}</strong>{tx(" ผสม KCl 20 - 30 mEq ต่อน้ำเกลือ 1 ลิตร และเริ่มให้อินซูลินได้ทันที (เพื่อรักษาระดับ K ในเลือดให้อยู่ที่ 4.0 - 5.0 mEq/L)")}</li>
                <li><strong>{tx("หาก K > 5.2 mEq/L:")}</strong>{tx(" ไม่ต้องผสม KCl ให้เริ่มอินซูลินได้เลย และตรวจติดตาม K ซ้ำทุก 2 ชั่วโมง")}</li>
              </ul>
            </div>

            {/* Pillar 3: Regular Insulin IV */}
            <div className="p-4 bg-teal-50/60 dark:bg-teal-950/40 rounded-2xl border border-teal-200 dark:border-teal-900 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-bold text-teal-900 dark:text-teal-300 text-sm">
                  {tx("3. การให้อินซูลินทางหลอดเลือดดำ (Regular Insulin IV Infusion)")}
                </span>
                <span className="font-bold text-teal-700 dark:text-teal-400">
                  {tx("อัตราเริ่มต้น: ~")}{insulinIvRate}{tx(" ยูนิต/ชม.")}
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>{tx("ผสม Regular Insulin (RI) 100 ยูนิต ใน 0.9% NaCl 100 มล. (ความเข้มข้น 1:1 = 1 U/mL) ต่อกับ infusion pump ก่อนให้ต้อง flush สายทิ้งประมาณ 30 มล.")}</li>
                <li><strong>{tx("วิธีให้:")}</strong>{tx(" ฉีด RI 0.1 ยูนิต/กก. IV bolus แล้วตามด้วยหยด 0.1 ยูนิต/กก./ชม. (หรือหยด 0.14 ยูนิต/กก./ชม. โดยไม่ต้อง bolus)")}</li>
                <li><strong>{tx("เป้าหมาย:")}</strong>{tx(" ระดับน้ำตาลในเลือดลดลงชั่วโมงละ ")}<strong>{tx("50 - 75 มก./ดล./ชม.")}</strong></li>
                <li>{tx("หากน้ำตาลลดลงไม่ถึง 50 มก./ดล. ใน ชม. แรก: ตรวจเช็คสายน้ำเกลือและพิจารณาปรับเพิ่มอินซูลินเป็น 2 เท่า")}</li>
                <li>{tx("เมื่อน้ำตาลลดลงถึง 250 มก./ดล. ใน DKA: ลดอัตราอินซูลินลงเหลือ ")}<strong>{tx("0.02 - 0.05 ยูนิต/กก./ชม.")}</strong>{tx(" ร่วมกับให้ 5% Dextrose")}</li>
              </ul>
            </div>

            {/* Pillar 4: Bicarbonate */}
            <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              <span className="font-bold text-slate-800 dark:text-slate-200 text-sm block">
                {tx("4. การให้ไบคาร์บอเนต (Sodium Bicarbonate - ข้อบ่งชี้เฉพาะ)")}
              </span>
              <p>{tx("• ให้เฉพาะกรณีที่เลือดเป็นกรดรุนแรงวิกฤต ")}<strong>Arterial/Venous pH &lt; 6.9</strong>{tx(" เท่านั้น!")}</p>
              <p>{tx("• ขนาด: NaHCO3 50-100 มล. + KCl 15-20 mEq ในน้ำปลอดเชื้อ 250-400 มล. หยดใน 2 ชั่วโมง จนกว่า pH ≥ 6.9")}</p>
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

// --- Modal 6: Ramadan Fasting Drug Adjustment (CPG 2566 บทที่ 8) ---
const RamadanModal = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-indigo-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-600 text-white shadow-sm shadow-indigo-600/30">
              <GuideRamadanIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'th' ? 'การดูแลตนเองและปรับยาในเดือนรอมฎอน (ถือศีลอด)' : 'Ramadan Fasting Diabetes Management Guide'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'th' ? 'ตามแนวทางเวชปฏิบัติสำหรับโรคเบาหวาน 2566 บทที่ 8 หน้า 89-93' : 'Based on Thai CPG 2023 Chapter 8 (IDF-DAR Guidelines)'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1">
          {/* Meal times during Ramadan (CPG 2566 chapter 8, p. 89) */}
          <div className="p-4 bg-indigo-50 dark:bg-indigo-950/40 rounded-2xl border border-indigo-200 dark:border-indigo-900 text-xs" data-ramadan-times>
            <h4 className="font-bold text-indigo-800 dark:text-indigo-300 text-sm mb-2 flex items-center gap-1.5">
              <MoonIcon className="w-4 h-4 shrink-0" />
              {lang === 'th' ? 'ช่วงเวลาในแต่ละวันของเดือนรอมฎอน' : 'The daily timetable in Ramadan'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-indigo-100 dark:border-slate-700 min-w-0" data-ramadan-time="suhoor">
                <span className="flex items-center gap-1.5 font-bold text-amber-700 dark:text-amber-300"><MoonIcon className="w-3.5 h-3.5 shrink-0" />Suhoor</span>
                <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">{lang === 'th' ? 'มื้อก่อนพระอาทิตย์ขึ้น' : 'Meal before sunrise'}</span>
                <p className="mt-1 text-slate-700 dark:text-slate-300 leading-snug">{lang === 'th' ? 'มื้อสุดท้ายก่อนเริ่มถือศีลอด รับประทานก่อนรุ่งเช้า' : 'The last meal before the fast begins, eaten before dawn.'}</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-indigo-100 dark:border-slate-700 min-w-0" data-ramadan-time="fast">
                <span className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-200"><SunIcon className="w-3.5 h-3.5 shrink-0" />{lang === 'th' ? 'ช่วงถือศีลอด' : 'Fasting hours'}</span>
                <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">{lang === 'th' ? 'พระอาทิตย์ขึ้นถึงพระอาทิตย์ตก' : 'Sunrise to sunset'}</span>
                <p className="mt-1 text-slate-700 dark:text-slate-300 leading-snug">{lang === 'th' ? 'งดอาหาร น้ำ การสูบบุหรี่ และการรับประทานยา' : 'No food, no water, no smoking and no oral medicines.'}</p>
              </div>
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-indigo-100 dark:border-slate-700 min-w-0" data-ramadan-time="iftar">
                <span className="flex items-center gap-1.5 font-bold text-indigo-700 dark:text-indigo-300"><MoonIcon className="w-3.5 h-3.5 shrink-0" />Iftar</span>
                <span className="block text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">{lang === 'th' ? 'มื้อเย็น เมื่อพระอาทิตย์ตก (ละศีลอด)' : 'Evening meal at sunset (breaking the fast)'}</span>
                <p className="mt-1 text-slate-700 dark:text-slate-300 leading-snug">{lang === 'th' ? 'มักเป็นมื้อใหญ่ เริ่มด้วยผลอินทผาลัม (น้ำตาลฟรุกโตสและกลูโคสสูง) แล้วตามด้วยอาหารหนัก; หลังพระอาทิตย์ตกมีการละหมาดตะรอเวียะห์ ซึ่งใช้แรงพอสมควร' : 'Often the main meal, started with dates (high in fructose and glucose), then a heavy meal; Taraweeh prayers after sunset involve moderate physical effort.'}</p>
              </div>
            </div>
            <p className="mt-2 text-[10px] text-slate-500 dark:text-slate-400">{lang === 'th' ? 'ที่มา: แนวทางเวชปฏิบัติสำหรับโรคเบาหวาน 2566 บทที่ 8 หน้า 89' : 'Source: Thai CPG for Diabetes 2566, chapter 8, p. 89'}</p>
          </div>

          {/* Breaking the Fast Alert Box */}
          <div className="p-4 bg-rose-50 dark:bg-rose-950/40 rounded-2xl border border-rose-200 dark:border-rose-900 text-xs">
            <span className="font-bold text-rose-800 dark:text-rose-300 text-sm block mb-1 flex items-center gap-1.5">
              <AlertTriangleIcon className="w-4 h-4" />
              {lang === 'th' ? 'ข้อบ่งชี้ที่ต้อง "ยุติการถือศีลอดทันที" (เมื่อมีข้อใดข้อหนึ่ง):' : 'Mandatory Criteria to Break the Fast Immediately:'}
            </span>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
              <li>{tx("ระดับน้ำตาลในเลือด ")}<strong>{tx("< 70 มก./ดล.")}</strong>{tx(" (ไม่ว่าเวลาใดก็ตาม)")}</li>
              <li>{tx("ระดับน้ำตาลในเลือด ")}<strong>{tx("> 300 มก./ดล.")}</strong></li>
              <li>{tx("มีอาการของน้ำตาลต่ำชัดเจน หรือมีอาการเจ็บป่วยเฉียบพลัน/ขาดน้ำ")}</li>
              <li><em>{tx("หมายเหตุ: การเจาะเลือดตรวจน้ำตาลปลายนิ้ว (BGM) ไม่ทำให้การถือศีลอดสิ้นสุดลง สามารถเจาะได้ตลอดเวลา")}</em></li>
            </ul>
          </div>

          {/* Dosing Adjustment Table */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3">
              {lang === 'th' ? 'แนวทางการปรับขนาดยาและเวลาการรับประทาน:' : 'Medication Timing & Dosing Adjustments:'}
            </h4>
            <div className="space-y-2.5">
              {GD().ramadanRules.map((r, i) => (
                <div key={i} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                  <span className="font-bold text-indigo-700 dark:text-indigo-400 block mb-1">{r.drugClass}</span>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{r.actionTh}</p>
                </div>
              ))}
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

// --- Modal 7: Thai Diabetes Risk Score (DRS - CPG 2566 บทที่ 2) ---
const ThaiDrsModal = ({ isOpen, onClose, lang }) => {
  const [agePts, setAgePts] = useState(1);
  const [bmiPts, setBmiPts] = useState(1);
  const [whtrPts, setWhtrPts] = useState(3);
  const [bpPts, setBpPts] = useState(2);
  const [famPts, setFamPts] = useState(0);
  const [fpgPts, setFpgPts] = useState(0);
  const [hasFpg, setHasFpg] = useState(false);

  if (!isOpen) return null;

  const totalScore = agePts + bmiPts + whtrPts + bpPts + famPts + (hasFpg ? fpgPts : 0);

  // Risk interpretation
  let riskPercent = '';
  let riskLevel = '';
  let adviceTh = '';

  if (!hasFpg) {
    if (totalScore <= 6) {
      riskPercent = '0 - 5%';
      riskLevel = tx("ความเสี่ยงต่ำ (Low Risk)");
      adviceTh = tx("ประเมินความเสี่ยงด้วยตนเองซ้ำทุก 5 ปี จนถึงอายุ 35 ปี");
    } else if (totalScore <= 9) {
      riskPercent = '6 - 10%';
      riskLevel = tx("ความเสี่ยงน้อย-ปานกลาง (Low-Moderate)");
      adviceTh = tx("ตรวจประเมินด้วยการตรวจเลือด FPG หรือ FCBG ทุก 3 ปี");
    } else if (totalScore <= 12) {
      riskPercent = '11 - 20%';
      riskLevel = tx("ความเสี่ยงปานกลาง-สูง (Moderate-High)");
      adviceTh = tx("ต้องตรวจเลือดคัดกรองเบาหวาน (FPG หรือ FCBG) แนะนำปรับพฤติกรรมชีวิต");
    } else if (totalScore <= 14) {
      riskPercent = '21 - 30%';
      riskLevel = tx("ความเสี่ยงสูง (High Risk)");
      adviceTh = tx("ต้องตรวจเลือดคัดกรองเบาหวาน หาก FPG 100-125 แนะนำตรวจ OGTT หรือ A1C");
    } else {
      riskPercent = '≥ 30%';
      riskLevel = tx("ความเสี่ยงสูงมาก (Very High Risk)");
      adviceTh = tx("มีความเสี่ยงเป็นเบาหวานสูงมากใน 10 ปีข้างหน้า ต้องตรวจเลือด FPG/OGTT ทันที และเข้าโปรแกรมปรับเปลี่ยนพฤติกรรมเข้มข้น");
    }
  } else {
    if (totalScore <= 7) {
      riskPercent = '0 - 5%';
      riskLevel = tx("ความเสี่ยงต่ำ");
      adviceTh = tx("ตรวจเลือดซ้ำทุก 3 ปี");
    } else if (totalScore <= 10) {
      riskPercent = '6 - 10%';
      riskLevel = tx("ความเสี่ยงน้อย-ปานกลาง");
      adviceTh = tx("ตรวจเลือดซ้ำทุก 1-3 ปี ปรับเปลี่ยนพฤติกรรมชีวิต");
    } else if (totalScore <= 14) {
      riskPercent = '11 - 20%';
      riskLevel = tx("ความเสี่ยงปานกลาง-สูง");
      adviceTh = tx("ตรวจติดตาม FPG ทุก 1 ปี หรือตรวจ OGTT/A1C");
    } else if (totalScore <= 16) {
      riskPercent = '21 - 30%';
      riskLevel = tx("ความเสี่ยงสูง");
      adviceTh = tx("เข้าโปรแกรมปรับพฤติกรรมเข้มข้น ลดน้ำหนัก ≥ 5-7%");
    } else {
      riskPercent = '≥ 30%';
      riskLevel = tx("ความเสี่ยงสูงมาก");
      adviceTh = tx("พบแพทย์เพื่อประเมินและป้องกันโรคเบาหวานอย่างจริงจัง");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-teal-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-teal-600 text-white shadow-sm shadow-teal-600/30">
              <GuideDrsIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'th' ? 'แบบประเมินความเสี่ยงโรคเบาหวานใน 10 ปีข้างหน้า (Thai DRS)' : 'Thai Diabetes Risk Score (10-Year DRS)'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'th' ? 'จากการสำรวจสุขภาพคนไทยด้วยการตรวจร่างกาย ครั้งที่ 4 (CPG 2566 ตารางที่ 1 หน้า 17)' : 'National Health Examination Survey IV Algorithm'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-xs">
          {/* Question 1: Age */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <label className="font-bold text-slate-800 dark:text-slate-200 block mb-2">{tx("1. อายุ (ปี):")}</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: tx("35 - 44 ปี (1 คะแนน)"), pts: 1 },
                { label: tx("45 - 49 ปี (2 คะแนน)"), pts: 2 },
                { label: tx("50 - 59 ปี (3 คะแนน)"), pts: 3 },
                { label: tx("≥ 60 ปีขึ้นไป (4 คะแนน)"), pts: 4 }
              ].map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setAgePts(opt.pts)}
                  className={`p-2 rounded-lg border font-semibold text-center transition-colors ${
                    agePts === opt.pts ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2: BMI */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <label className="font-bold text-slate-800 dark:text-slate-200 block mb-2">{tx("2. ดัชนีมวลกาย BMI (กก./ตร.ม.):")}</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { label: tx("< 23 kg/m² (0 คะแนน)"), pts: 0 },
                { label: tx("23 - 27.49 kg/m² (1 คะแนน)"), pts: 1 },
                { label: tx("≥ 27.5 kg/m² ขึ้นไป (3 คะแนน)"), pts: 3 }
              ].map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setBmiPts(opt.pts)}
                  className={`p-2 rounded-lg border font-semibold text-center transition-colors ${
                    bmiPts === opt.pts ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3: Waist to Height */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <label className="font-bold text-slate-800 dark:text-slate-200 block mb-2">{tx("3. สัดส่วนรอบเอวต่อความสูง (Waist-to-Height Ratio):")}</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { label: tx("รอบเอว ≤ ส่วนสูง ÷ 2 (≤ 0.5) (0 คะแนน)"), pts: 0 },
                { label: tx("รอบเอวต่อความสูง > 0.5 - 0.6 (3 คะแนน)"), pts: 3 },
                { label: tx("รอบเอวต่อความสูง > 0.6 (5 คะแนน)"), pts: 5 }
              ].map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setWhtrPts(opt.pts)}
                  className={`p-2 rounded-lg border font-semibold text-center transition-colors ${
                    whtrPts === opt.pts ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 4: Blood Pressure */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <label className="font-bold text-slate-800 dark:text-slate-200 block mb-2">{tx("4. ความดันโลหิตสูง:")}</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { label: tx("ไม่มี (< 120/80 mmHg) (0 คะแนน)"), pts: 0 },
                { label: tx("120-139 / 80-89 mmHg (2 คะแนน)"), pts: 2 },
                { label: tx("เป็นความดันสูง (≥ 140/90 หรือทานยา) (4 คะแนน)"), pts: 4 }
              ].map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setBpPts(opt.pts)}
                  className={`p-2 rounded-lg border font-semibold text-center transition-colors ${
                    bpPts === opt.pts ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 5: Family History */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <label className="font-bold text-slate-800 dark:text-slate-200 block mb-2">{tx("5. ประวัติโรคเบาหวานในญาติสายตรง (พ่อ แม่ พี่ หรือน้อง):")}</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: tx("ไม่มีประวัติ (0 คะแนน)"), pts: 0 },
                { label: tx("มีประวัติในญาติสายตรง (2 คะแนน)"), pts: 2 }
              ].map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setFamPts(opt.pts)}
                  className={`p-2 rounded-lg border font-semibold text-center transition-colors ${
                    famPts === opt.pts ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Optional FPG */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
            <div className="flex items-center justify-between mb-2">
              <label className="font-bold text-slate-800 dark:text-slate-200">{tx("6. ระดับน้ำตาลในเลือดขณะอดอาหาร (FPG) (ถ้ามีผลตรวจ):")}</label>
              <label className="flex items-center gap-1.5 cursor-pointer text-teal-600 font-semibold">
                <input type="checkbox" checked={hasFpg} onChange={e => setHasFpg(e.target.checked)} className="rounded" />
                <span>{tx("นำผล FPG มาคิดคะแนนด้วย")}</span>
              </label>
            </div>
            {hasFpg && (
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: tx("< 100 mg/dL (0 คะแนน)"), pts: 0 },
                  { label: tx("100 - 125 mg/dL (5 คะแนน)"), pts: 5 }
                ].map((opt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFpgPts(opt.pts)}
                    className={`p-2 rounded-lg border font-semibold text-center transition-colors ${
                      fpgPts === opt.pts ? 'bg-teal-600 text-white border-teal-600' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Output Score Card */}
          <div className="p-5 bg-gradient-to-r from-teal-500/15 to-emerald-500/15 dark:from-teal-950/40 dark:to-emerald-950/40 rounded-2xl border border-teal-300 dark:border-teal-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-teal-800 dark:text-teal-300 block mb-0.5">
                {tx("คะแนนรวมความเสี่ยง (Total Score):")}
              </span>
              <span className="text-3xl font-extrabold text-teal-700 dark:text-teal-300">
                {totalScore}{tx(" คะแนน")}
              </span>
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block mt-1">
                {tx("ระดับ: ")}{riskLevel}{tx(" (โอกาสเกิดโรคใน 10 ปี: ")}{riskPercent})
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                {adviceTh}
              </p>
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
