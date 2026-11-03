
// --- Modal 8: Diabetic Foot & Neuropathy Evaluation (CPG 2566 บทที่ 15) ---
const FootCareModal = ({ isOpen, onClose, lang }) => {
  // Interactive Ipswich Touch Test: 6 sites (Right: 1, 3, 5; Left: 1, 3, 5)
  const [ipswichState, setIpswichState] = useState({
    r1: true, r3: true, r5: true,
    l1: true, l3: true, l5: true
  });

  if (!isOpen) return null;

  const toggleSite = (site) => {
    setIpswichState(prev => ({ ...prev, [site]: !prev[site] }));
  };

  const lossCount = Object.values(ipswichState).filter(v => !v).length;
  const hasLops = lossCount >= 2;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-amber-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-600 text-white shadow-sm shadow-amber-600/30">
              <GuideFootIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'th' ? 'การตรวจประเมินเท้าและเส้นประสาทเบาหวาน (Diabetic Foot)' : 'Diabetic Foot & Neuropathy Evaluation'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'th' ? 'การประเมินความเสี่ยงและแบบทดสอบ Ipswich Touch Test (CPG 2566 บทที่ 15)' : 'Ipswich Touch Test & Risk Stratification (CPG 2023)'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1 text-xs">
          {/* Interactive Ipswich Touch Test */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                {tx("แบบทดสอบสัมผัสปลายนิ้วเท้า (Ipswich Touch Test - IpTT):")}
              </span>
              <button
                type="button"
                onClick={() => setIpswichState({ r1: true, r3: true, r5: true, l1: true, l3: true, l5: true })}
                className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
              >
                <RefreshCwIcon className="w-3.5 h-3.5" />
                {tx("รีเซ็ต")}
              </button>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-3 leading-relaxed">
              {tx("วิธีตรวจ: ผู้ตรวจใช้นิ้วชี้แตะเบาๆ (light touch) 1-2 วินาทีที่ปลายนิ้วโป้ง นิ้วกลาง และนิ้วก้อยของเท้าทั้งสองข้าง (รวม 6 ตำแหน่ง) ขณะผู้ป่วยหลับตา หากตอบผิดตั้งแต่ 2 ตำแหน่งขึ้นไป ถือว่าสูญเสียการรับความรู้สึกป้องกันตนเอง (LOPS)")}
            </p>

            {/* Interactive Visual Toes Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto my-2">
              {/* Right Foot */}
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <span className="font-bold text-slate-700 dark:text-slate-300 block mb-2">{tx("เท้าขวา (Right Foot)")}</span>
                <div className="flex justify-center gap-2">
                  {[
                    { id: 'r1', label: tx("นิ้วโป้ง (1)") },
                    { id: 'r3', label: tx("นิ้วกลาง (3)") },
                    { id: 'r5', label: tx("นิ้วก้อย (5)") }
                  ].map(toe => (
                    <button
                      key={toe.id}
                      type="button"
                      onClick={() => toggleSite(toe.id)}
                      className={`px-2.5 py-3 rounded-xl border text-[11px] font-bold transition-all flex flex-col items-center gap-1 ${
                        ipswichState[toe.id]
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300'
                          : 'bg-rose-50 border-rose-300 text-rose-800 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-300 shadow-sm'
                      }`}
                    >
                      <span className="text-xs">{ipswichState[toe.id] ? tx("✓ รู้สึก") : tx("✗ ไม่รู้สึก")}</span>
                      <span className="text-[10px] text-slate-500">{toe.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Left Foot */}
              <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
                <span className="font-bold text-slate-700 dark:text-slate-300 block mb-2">{tx("เท้าซ้าย (Left Foot)")}</span>
                <div className="flex justify-center gap-2">
                  {[
                    { id: 'l1', label: tx("นิ้วโป้ง (1)") },
                    { id: 'l3', label: tx("นิ้วกลาง (3)") },
                    { id: 'l5', label: tx("นิ้วก้อย (5)") }
                  ].map(toe => (
                    <button
                      key={toe.id}
                      type="button"
                      onClick={() => toggleSite(toe.id)}
                      className={`px-2.5 py-3 rounded-xl border text-[11px] font-bold transition-all flex flex-col items-center gap-1 ${
                        ipswichState[toe.id]
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300'
                          : 'bg-rose-50 border-rose-300 text-rose-800 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-300 shadow-sm'
                      }`}
                    >
                      <span className="text-xs">{ipswichState[toe.id] ? tx("✓ รู้สึก") : tx("✗ ไม่รู้สึก")}</span>
                      <span className="text-[10px] text-slate-500">{toe.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Test Interpretation Output */}
            <div className={`p-3.5 rounded-xl border mt-3 flex items-center justify-between ${
              hasLops
                ? 'bg-rose-50 border-rose-300 text-rose-900 dark:bg-rose-950/50 dark:border-rose-800 dark:text-rose-200'
                : 'bg-emerald-50 border-emerald-300 text-emerald-900 dark:bg-emerald-950/50 dark:border-emerald-800 dark:text-emerald-200'
            }`}>
              <div>
                <span className="font-bold block text-sm">
                  {hasLops ? tx("ตรวจพบภาวะสูญเสียการรับความรู้สึกป้องกันตนเอง (Positive LOPS)") : tx("การรับความรู้สึกที่เท้าปกติ (Normal Sensation)")}
                </span>
                <span className="text-[11px] opacity-80">
                  {hasLops ? txf("ตอบไม่รู้สึก {} จาก 6 ตำแหน่ง (เกณฑ์ผิดปกติคือ ≥ 2 ตำแหน่ง) มีความเสี่ยงเกิดแผลที่เท้าสูง", [lossCount]) : tx("ตอบถูก 5-6 ตำแหน่ง ไม่พบภาวะ LOPS")}
                </span>
              </div>
              <span className="text-2xl font-black">{hasLops ? tx("เสี่ยงสูง") : tx("ปกติ")}</span>
            </div>
          </div>

          {/* Foot Risk Categorization */}
          <div>
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-2.5">
              {tx("การแบ่งระดับความเสี่ยงการเกิดแผลที่เท้า (CPG 2566 ตารางที่ 1 หน้า 171):")}
            </h4>
            <div className="space-y-2">
              {GD().footRiskCategories.map(cat => (
                <div key={cat.level} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 dark:text-white">{cat.titleTh}</span>
                    <span className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 px-2 py-0.5 rounded-md">
                      {cat.followUpTh.split(' ')[0]} {cat.followUpTh.split(' ')[1]}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mb-1 leading-relaxed">
                    <strong>{tx("เกณฑ์:")}</strong> {cat.criteriaTh}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    <strong>{tx("ข้อควรปฏิบัติ:")}</strong> {cat.followUpTh}
                  </p>
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

// --- Modal 9: Gestational Diabetes Mellitus (GDM) (CPG 2566 บทที่ 18) ---
const GdmModal = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-pink-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-pink-600 text-white shadow-sm shadow-pink-600/30">
              <GuideGdmIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'th' ? 'โรคเบาหวานในหญิงตั้งครรภ์ (GDM & Pre-gestational DM)' : 'Diabetes in Pregnancy Guidelines'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'th' ? 'เกณฑ์วินิจฉัย เป้าหมายน้ำตาล และการรักษา (CPG 2566 บทที่ 18)' : 'Diagnostic Criteria, Glycemic Targets & Therapy (CPG 2023)'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-xs leading-relaxed">
          {/* Target Glycemic Table */}
          <div className="bg-pink-50/50 dark:bg-pink-950/30 p-4 rounded-2xl border border-pink-200 dark:border-pink-900">
            <h4 className="text-xs font-bold text-pink-900 dark:text-pink-300 uppercase tracking-wider mb-2.5">
              {lang === 'th' ? 'เป้าหมายระดับน้ำตาลในเลือดขณะตั้งครรภ์ (CPG 2566 ตารางที่ 1 หน้า 218):' : 'Glycemic Targets During Pregnancy:'}
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {GD().gdmCriteria.targets.map((t, idx) => (
                <div key={idx} className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-pink-100 dark:border-pink-800 text-center">
                  <span className="text-[10px] text-slate-500 block mb-0.5">{t.timing}</span>
                  <span className="text-base font-extrabold text-pink-600 dark:text-pink-400">{t.target}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic Criteria Comparison */}
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 space-y-3">
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              {lang === 'th' ? 'เกณฑ์การตรวจวินิจฉัยเบาหวานขณะตั้งครรภ์ (GDM):' : 'GDM Diagnostic Criteria:'}
            </h4>

            {/* Two-step */}
            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                {tx("1. วิธี Two-step (50g GCT แล้วตามด้วย 100g OGTT) - เกณฑ์ Carpenter & Coustan:")}
              </span>
              <p className="text-slate-500 dark:text-slate-400 mb-2">
                {tx("คัดกรองด้วย 50g GCT หากค่าน้ำตาลที่ 1 ชม. ≥ 140 มก./ดล. ให้ตรวจยืนยันด้วย 100g OGTT:")}
              </p>
              <div className="grid grid-cols-4 gap-1.5 text-center mb-1.5">
                {GD().gdmCriteria.twoStepCarpenter.cutoffs.map((c, i) => (
                  <div key={i} className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="block text-[10px] text-slate-400">{c.time}</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200">{c.value}</span>
                  </div>
                ))}
              </div>
              <span className="text-[11px] font-semibold text-rose-600 dark:text-rose-400">
                {GD().gdmCriteria.twoStepCarpenter.diagnosisTh}
              </span>
            </div>

            {/* One-step */}
            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700">
              <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1">
                {tx("2. วิธี One-step (75g OGTT ครั้งเดียว) - เกณฑ์ IADPSG / IDF:")}
              </span>
              <div className="grid grid-cols-3 gap-1.5 text-center mb-1.5">
                {GD().gdmCriteria.oneStepIdf.cutoffs.map((c, i) => (
                  <div key={i} className="p-2 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="block text-[10px] text-slate-400">{c.time}</span>
                    <span className="font-bold text-slate-700 dark:text-slate-200">{c.value}</span>
                  </div>
                ))}
              </div>
              <span className="text-[11px] font-semibold text-rose-600 dark:text-rose-400">
                {GD().gdmCriteria.oneStepIdf.diagnosisTh}
              </span>
            </div>
          </div>

          {/* Pharmacotherapy Notes */}
          <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 space-y-1.5">
            <span className="font-bold text-slate-800 dark:text-slate-200 block text-xs">
              {tx("หลักการรักษาด้วยยาในสตรีมีครรภ์:")}
            </span>
            <p>• <strong>{tx("ยาฉีดอินซูลินเป็นยามาตรฐานอันดับแรก:")}</strong>{tx(" ฮิวแมนอินซูลิน (NPH, RI) และอินซูลินอะนาล็อกออกฤทธิ์เร็ว (Aspart, Lispro) ปลอดภัยและมีประสิทธิภาพสูงสุด")}</p>
            <p>• <strong>{tx("ยาเม็ดลดระดับน้ำตาล:")}</strong>{tx(" CPG 2566 ระบุว่าสามารถพิจารณาใช้ ")}<strong>Metformin</strong>{tx(" ได้ในกรณีที่ไม่สามารถฉีดอินซูลินได้ หรือใช้ร่วมกับอินซูลินเมื่อต้องใช้อินซูลินขนาดสูงมาก")}</p>
            <p>• <strong>{tx("ยาที่ห้ามใช้เด็ดขาด:")}</strong>{tx(" ยาซัลโฟนิลยูเรีย (Sulfonylurea), SGLT-2 inhibitors, GLP-1 receptor agonists, Pioglitazone, และยาต้านความดันกลุ่ม ACEI/ARB")}</p>
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

// --- Modal 10: Diabetes Remission & Lifestyle Therapy (CPG 2566 บทที่ 6) ---
const RemissionModal = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-emerald-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-600 text-white shadow-sm shadow-emerald-600/30">
              <GuideRemissionIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {lang === 'th' ? 'โรคเบาหวานระยะสงบ (Diabetes Remission)' : 'Diabetes Remission & Lifestyle Modification'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'th' ? 'บทใหม่ในแนวทางเวชปฏิบัติสำหรับโรคเบาหวาน พ.ศ. 2566 (บทที่ 6 หน้า 67-73)' : 'New Chapter in Thai CPG 2023 (Chapter 6)'}
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto space-y-4 flex-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
          {/* Definition Banner */}
          <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-2xl border border-emerald-200 dark:border-emerald-800">
            <span className="text-sm font-bold text-emerald-900 dark:text-emerald-300 block mb-1">
              {tx("คำจำกัดความโรคเบาหวานระยะสงบ (Diabetes Remission):")}
            </span>
            <p className="font-semibold text-emerald-800 dark:text-emerald-200 text-xs">
              {tx("คือ ระดับน้ำตาลสะสม A1C < 6.5% ต่อเนื่องเป็นเวลาอย่างน้อย 3 เดือนขึ้นไป โดยไม่ต้องใช้ยาลดระดับน้ำตาลในเลือด")}
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wider block">
              {tx("ผู้ป่วยที่มีโอกาสเข้าสู่โรคเบาหวานระยะสงบได้สูง:")}
            </span>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>{tx("เป็นโรคเบาหวานชนิดที่ 2 ระยะเวลาเป็นโรคไม่เกิน 5-6 ปี")}</li>
              <li>{tx("ดัชนีมวลกาย BMI ≥ 27 กก./ตร.ม. (มีภาวะน้ำหนักเกินหรืออ้วน)")}</li>
              <li>{tx("มีความมุ่งมั่นและพร้อมปรับเปลี่ยนพฤติกรรมชีวิตอย่างเคร่งครัด")}</li>
              <li>{tx("สามารถลดน้ำหนักตัวได้อย่างมีนัยสำคัญ: ")}<strong>{tx("ลดลงอย่างน้อยร้อยละ 10-15 ของน้ำหนักตัว หรือ 10-15 กิโลกรัม")}</strong>{tx(" (อิงจาก DiRECT Study)")}</li>
            </ul>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 space-y-2">
            <span className="font-bold text-slate-800 dark:text-slate-200 text-xs uppercase tracking-wider block">
              {tx("หลักการปรับเปลี่ยนพฤติกรรมเข้มงวด:")}
            </span>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li><strong>{tx("โภชนบำบัด:")}</strong>{tx(" จำกัดพลังงานรวมลง 500-1,000 กิโลแคลอรี/วัน เน้นผักใบ อาหารไม่ผ่านการแปรรูป ลดน้ำตาลและแป้งขัดสี")}</li>
              <li><strong>{tx("การออกกำลังกาย:")}</strong>{tx(" อย่างน้อย 150 นาที/สัปดาห์ ผสมผสานแอโรบิกและการฝึกกล้ามเนื้อแรงต้าน 2-3 ครั้ง/สัปดาห์")}</li>
              <li><strong>{tx("การติดตามต่อเนื่อง:")}</strong>{tx(" แม้จะเข้าสู่ระยะสงบแล้ว ผู้ป่วยยังคงต้องตรวจเช็ค A1C อย่างน้อยปีละ 1 ครั้ง และตรวจคัดกรองภาวะแทรกซ้อนที่ตา ไต และเท้าทุกปีเช่นเดียวกับผู้ป่วยเบาหวานทั่วไป")}</li>
            </ul>
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

// --- Modal 12: Drug Comparison Matrix Modal ---
const CompareModal = ({ isOpen, onClose, compareList, onRemoveFromCompare, onClearCompare, lang }) => {
  if (!isOpen || compareList.length === 0) return null;
  const t = translations[lang];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-6xl w-full max-h-[94vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-start sm:items-center justify-between gap-2 bg-teal-50/50 dark:bg-slate-800/40">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 rounded-2xl bg-teal-600 text-white shadow-sm shadow-teal-600/30 shrink-0">
              <CompareIcon className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {t.compareTableTitle}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {lang === 'th' ? `กำลังเปรียบเทียบ ${compareList.length} รายการ (เปรียบเทียบได้สูงสุด 4 รายการ)` : `Comparing ${compareList.length} drugs side-by-side`}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={onClearCompare}
              title={t.clearCompare}
              className="whitespace-nowrap px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-xl transition-colors"
            >
              {t.clearShort}
            </button>
            <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <XIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 overflow-y-auto flex-1 text-xs">
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                  <th className="p-3 w-40 font-bold bg-slate-100 dark:bg-slate-800 sticky left-0 z-10 border-r border-slate-200 dark:border-slate-700">
                    {t.param}
                  </th>
                  {compareList.map(drug => (
                    <th key={drug.id} className="p-3 min-w-[200px] text-center border-r last:border-r-0 border-slate-200 dark:border-slate-700">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ backgroundColor: `${drug.color}20`, color: drug.color }}>
                          {lang === 'th' ? drug.classNameTh : drug.classNameEn}
                        </span>
                        <button onClick={() => onRemoveFromCompare(drug.id)} className="text-slate-400 hover:text-rose-500 p-0.5">
                          <XIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="font-extrabold text-sm text-slate-900 dark:text-white">{drug.genericName}</div>
                      <div className="text-[11px] text-slate-500 font-normal">{drug.brandNames.slice(0, 2).join(', ')}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <td className="p-3 font-bold bg-slate-50 dark:bg-slate-850 sticky left-0 border-r border-slate-200 dark:border-slate-700">{t.a1cPotency}</td>
                  {compareList.map(d => (
                    <td key={d.id} className="p-3 text-center font-bold text-teal-600 dark:text-teal-400 border-r last:border-r-0">{d.a1cReduction}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50 dark:bg-slate-850 sticky left-0 border-r border-slate-200 dark:border-slate-700">{t.weightImpact}</td>
                  {compareList.map(d => (
                    <td key={d.id} className="p-3 text-center border-r last:border-r-0">{pickLang(d, 'weightDetail', lang)}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50 dark:bg-slate-850 sticky left-0 border-r border-slate-200 dark:border-slate-700">{t.hypoRiskLevel}</td>
                  {compareList.map(d => {
                    const badge = getHypoBadge(d.hypoRisk, lang);
                    return (
                      <td key={d.id} className="p-3 text-center border-r last:border-r-0">
                        <span className={`px-2 py-0.5 rounded-md font-semibold ${badge.bg}`}>{badge.text}</span>
                      </td>
                    );
                  })}
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50 dark:bg-slate-850 sticky left-0 border-r border-slate-200 dark:border-slate-700">{t.cardioBenefit}</td>
                  {compareList.map(d => (
                    <td key={d.id} className="p-3 text-center border-r last:border-r-0">
                      {d.cvBenefit ? <span className="text-rose-600 font-bold">✓ Proven ASCVD Benefit</span> : <span className="text-slate-400">Neutral</span>}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50 dark:bg-slate-850 sticky left-0 border-r border-slate-200 dark:border-slate-700">{t.hfBenefit}</td>
                  {compareList.map(d => (
                    <td key={d.id} className="p-3 text-center border-r last:border-r-0">
                      {d.hfBenefit ? <span className="text-sky-600 font-bold">✓ Proven HF Benefit</span> : <span className="text-slate-400">Neutral</span>}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50 dark:bg-slate-850 sticky left-0 border-r border-slate-200 dark:border-slate-700">{t.ckdBenefit}</td>
                  {compareList.map(d => (
                    <td key={d.id} className="p-3 text-center border-r last:border-r-0">
                      {d.ckdBenefit ? <span className="text-emerald-600 font-bold">✓ Slows CKD / ESRD</span> : <span className="text-slate-400">Neutral</span>}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50 dark:bg-slate-850 sticky left-0 border-r border-slate-200 dark:border-slate-700">{t.renalAdjustment}</td>
                  {compareList.map(d => (
                    <td key={d.id} className="p-3 text-xs border-r last:border-r-0 leading-relaxed">
                      {lang === 'th' ? d.renalAdjustment.summaryTh : d.renalAdjustment.summaryEn}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50 dark:bg-slate-850 sticky left-0 border-r border-slate-200 dark:border-slate-700">{t.startingDose}</td>
                  {compareList.map(d => (
                    <td key={d.id} className="p-3 text-xs border-r last:border-r-0">
                      {lang === 'th' ? d.startingDoseTh : d.startingDoseEn}
                    </td>
                  ))}
                </tr>
                <tr className="bg-amber-50/40 dark:bg-amber-950/20">
                  <td className="p-3 font-bold bg-amber-50 dark:bg-amber-950/50 sticky left-0 border-r border-slate-200 dark:border-slate-700 text-amber-900 dark:text-amber-300">
                    {lang === 'th' ? 'ขนาดยาสูงสุด (Max Dose)' : 'Max Dose'}
                  </td>
                  {compareList.map(d => (
                    <td key={d.id} className="p-3 text-xs border-r last:border-r-0 font-bold text-amber-950 dark:text-amber-200">
                      {lang === 'th' ? d.maxDoseTh : d.maxDoseEn}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50 dark:bg-slate-850 sticky left-0 border-r border-slate-200 dark:border-slate-700">{t.sideEffects}</td>
                  {compareList.map(d => (
                    <td key={d.id} className="p-3 text-xs border-r last:border-r-0">
                      <ul className="list-disc pl-4 space-y-0.5">
                        {(lang === 'th' ? d.adverseEffectsTh : d.adverseEffectsEn).slice(0, 2).map((ae, i) => (
                          <li key={i}>{ae}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50 dark:bg-slate-850 sticky left-0 border-r border-slate-200 dark:border-slate-700">{t.warnings}</td>
                  {compareList.map(d => (
                    <td key={d.id} className="p-3 text-xs border-r last:border-r-0">
                      <span className="text-rose-600 dark:text-rose-400 font-medium leading-relaxed">
                        {(lang === 'th' ? d.warningsTh : d.warningsEn)[0]}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50 dark:bg-slate-850 sticky left-0 border-r border-slate-200 dark:border-slate-700">{t.nlemStatus}</td>
                  {compareList.map(d => (
                    <td key={d.id} className="p-3 text-center border-r last:border-r-0">
                      {d.nlem ? <span className="text-emerald-700 dark:text-emerald-300 font-bold">{nlemLabel(d, lang)}</span> : <span className="text-slate-400">Non-NLEM</span>}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-3 font-bold bg-slate-50 dark:bg-slate-850 sticky left-0 border-r border-slate-200 dark:border-slate-700">{t.priceEstimate}</td>
                  {compareList.map(d => (
                    <td key={d.id} className="p-3 text-center font-bold border-r last:border-r-0">{formatCurrency(d.priceLevel, lang)}</td>
                  ))}
                </tr>
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

// --- Inpatient insulin: starting dose, daily insulin + POCT glucose chart with TDD per day ---
// Sources: ADA Standards of Care 2025 s16 (goal 100-180, intensify at >=180 x2/24 h, review at <70, POCT timing,
// premixes not routinely recommended); RABBIT 2 / RABBIT 2 Surgery (weight-based TDD, half basal); CPG 2566 pp. 109-110.
const IP_SLOTS = ['b', 'l', 'd', 'hs'];
const IP_REGIMENS = {
  basal_bolus: { b: 'insulin_rapid', l: 'insulin_rapid', d: 'insulin_rapid', hs: 'insulin_glargine_u100' },
  basal: { b: '', l: '', d: '', hs: 'insulin_glargine_u100' },
  premix: { b: 'insulin_premix_human', l: '', d: 'insulin_premix_human', hs: '' }
};
const ipNum = (v) => { const n = parseFloat(v); return Number.isFinite(n) ? n : null; };
const InpatientInsulinModal = ({ isOpen, onClose, lang }) => {
  const th = lang === 'th';
  const [weight, setWeight] = useState('60');
  const [bg0, setBg0] = useState('220');
  const [lowDose, setLowDose] = useState(false);
  const [regimen, setRegimen] = useState('basal_bolus');
  const [insulin, setInsulin] = useState(IP_REGIMENS.basal_bolus);
  const blankDay = () => ({ u: { b: '', l: '', d: '', hs: '' }, g: { b: '', l: '', d: '', hs: '' } });
  const [days, setDays] = useState(() => [blankDay(), blankDay(), blankDay()]);
  if (!isOpen) return null;

  const insulins = antiDmDrugs.filter((x) => x.category === 'insulin');
  const nameOf = (id) => { const x = insulins.find((d) => d.id === id); return x ? x.brandNames[0] : ''; };
  const slotName = { b: th ? 'ก่อนเช้า' : 'Pre-breakfast', l: th ? 'ก่อนกลางวัน' : 'Pre-lunch', d: th ? 'ก่อนเย็น' : 'Pre-dinner', hs: th ? 'ก่อนนอน' : 'Bedtime' };

  // Starting dose (RABBIT 2): 0.4 U/kg if BG 140-200, 0.5 if 201-400; 0.3 if age >= 70 or creatinine >= 2.0
  const w = ipNum(weight), g0 = ipNum(bg0);
  const perKg = lowDose ? 0.3 : g0 != null && g0 > 200 ? 0.5 : 0.4;
  const tdd0 = w ? Math.round(w * perKg) : null;
  const basal0 = tdd0 != null ? Math.round(tdd0 / 2) : null;
  const meal0 = tdd0 != null ? Math.round(tdd0 / 2 / 3) : null;

  const pickRegimen = (k) => { setRegimen(k); setInsulin(IP_REGIMENS[k]); };
  const setCell = (i, kind, slot, v) => setDays((prev) => prev.map((d, j) => (j === i ? { ...d, [kind]: { ...d[kind], [slot]: v } } : d)));
  const used = IP_SLOTS.filter((s) => insulin[s]);

  // Per day: TDD = all units given; glucose summary and what the readings call for
  const summary = (d) => {
    const units = IP_SLOTS.map((s) => ipNum(d.u[s])).filter((x) => x != null);
    const gl = IP_SLOTS.map((s) => ipNum(d.g[s])).filter((x) => x != null);
    const tdd = units.length ? units.reduce((a, b) => a + b, 0) : null;
    const min = gl.length ? Math.min(...gl) : null, max = gl.length ? Math.max(...gl) : null;
    const mean = gl.length ? Math.round(gl.reduce((a, b) => a + b, 0) / gl.length) : null;
    const high = gl.filter((x) => x >= 180).length;
    const flag = min != null && min < 70 ? 'low' : high >= 2 ? 'high' : gl.length ? 'ok' : null;
    return { tdd, min, max, mean, flag };
  };
  const FLAG = {
    low: ['bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-900', th ? 'มีค่า < 70: ทบทวนและลดขนาดอินซูลิน' : '< 70 seen: review and reduce insulin'],
    high: ['bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-900', th ? '≥ 180 อย่างน้อย 2 ครั้ง: พิจารณาเพิ่มขนาด' : '≥ 180 twice or more: consider increasing'],
    ok: ['bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-900', th ? 'ไม่มีค่า < 70 และค่า ≥ 180 น้อยกว่า 2 ครั้ง' : 'No reading < 70 and fewer than 2 readings ≥ 180']
  };
  const inp = 'w-full min-w-[3.25rem] px-1.5 py-1 rounded-md border border-slate-300 dark:border-slate-700 dark:bg-slate-900 font-bold text-center tabular-nums';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden" data-inpatient-modal>
        <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 bg-sky-50/60 dark:bg-slate-800/40">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 rounded-2xl bg-sky-700 text-white shadow-sm shrink-0"><GuideInpatientIcon className="w-5 h-5" /></div>
            <div className="min-w-0">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">{th ? 'อินซูลินสำหรับผู้ป่วยใน (ไม่วิกฤต)' : 'Inpatient Insulin (non-critical care)'}</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">{th ? 'บันทึกอินซูลินและ POCT รายวัน พร้อมคำนวณ TDD' : 'Daily insulin and POCT glucose chart with TDD'}</p>
            </div>
          </div>
          <button onClick={onClose} aria-label={th ? 'ปิด' : 'Close'} className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"><XIcon className="w-5 h-5" /></button>
        </div>

        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1 text-xs">
          {/* Goals */}
          <div className="p-3 rounded-xl border border-sky-200 dark:border-sky-900 bg-sky-50 dark:bg-sky-950/40 text-slate-700 dark:text-slate-300 space-y-1" data-ip-goals>
            <p><b className="text-sky-800 dark:text-sky-300">{th ? 'เป้าหมาย:' : 'Goal:'}</b> {th ? 'น้ำตาล 100-180 มก./ดล. เริ่ม/เพิ่มอินซูลินเมื่อ ≥ 180 มก./ดล. 2 ครั้งใน 24 ชม. ทบทวนแผนเมื่อ < 70 มก./ดล.' : 'Glucose 100-180 mg/dL. Start or intensify insulin at ≥ 180 mg/dL twice within 24 h; review the plan at < 70 mg/dL.'}</p>
            <p><b className="text-sky-800 dark:text-sky-300">POCT:</b> {th ? 'รับประทานอาหารได้: ก่อนอาหารทุกมื้อ (และก่อนนอน) / งดอาหาร: ทุก 4-6 ชม.' : 'Eating: before each meal (and at bedtime). Not eating: every 4-6 h.'}</p>
            <p><b className="text-sky-800 dark:text-sky-300">{th ? 'แผนที่แนะนำ:' : 'Preferred plan:'}</b> {th ? 'กินได้ดี: basal + prandial + correction / กินได้น้อยหรืองด: basal ± correction / ไม่ใช้ sliding scale อย่างเดียว / อินซูลินผสม (premix) ไม่แนะนำเป็นประจำในโรงพยาบาล' : 'Eating well: basal + prandial + correction. Poor or no intake: basal ± correction. Avoid sliding scale alone. Premixed insulins are not routinely recommended in hospital.'}</p>
          </div>

          {/* Starting dose */}
          <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60" data-ip-start>
            <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2">{th ? 'ขนาดเริ่มต้นตามน้ำหนัก (ไม่เคยใช้อินซูลินหรือใช้น้อย)' : 'Weight-based starting dose (insulin-naive or low-dose)'}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 items-end">
              <label className="block"><span className="text-slate-500 dark:text-slate-400">{th ? 'น้ำหนัก (กก.)' : 'Weight (kg)'}</span><input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className={inp + ' mt-0.5'} /></label>
              <label className="block"><span className="text-slate-500 dark:text-slate-400">{th ? 'น้ำตาลแรกรับ (มก./ดล.)' : 'Admission glucose (mg/dL)'}</span><input type="number" value={bg0} onChange={(e) => setBg0(e.target.value)} className={inp + ' mt-0.5'} /></label>
              <label className="col-span-2 sm:col-span-1 flex items-center gap-2 py-1"><input type="checkbox" checked={lowDose} onChange={(e) => setLowDose(e.target.checked)} className="rounded" /><span className="text-slate-700 dark:text-slate-300">{th ? 'อายุ ≥ 70 ปี หรือ Cr ≥ 2.0 มก./ดล.' : 'Age ≥ 70 or creatinine ≥ 2.0 mg/dL'}</span></label>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-2 text-center" data-ip-start-result>
              <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"><span className="block text-slate-500 dark:text-slate-400">TDD ({perKg} U/kg)</span><b className="text-base text-sky-700 dark:text-sky-300">{tdd0 != null ? tdd0 + ' U' : 'N/A'}</b></div>
              <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"><span className="block text-slate-500 dark:text-slate-400">{th ? 'Basal วันละครั้ง (50%)' : 'Basal once daily (50%)'}</span><b className="text-base text-sky-700 dark:text-sky-300">{basal0 != null ? basal0 + ' U' : 'N/A'}</b></div>
              <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700"><span className="block text-slate-500 dark:text-slate-400">{th ? 'ก่อนอาหารต่อมื้อ' : 'Before each meal'}</span><b className="text-base text-sky-700 dark:text-sky-300">{meal0 != null ? meal0 + ' U' : 'N/A'}</b></div>
            </div>
            <p className="mt-1.5 text-slate-500 dark:text-slate-400">{th ? 'งดอาหาร: ให้ basal ต่อ งดยาก่อนอาหารจนกว่าจะกลับมากินได้' : 'Not eating: give the basal dose and hold the meal doses until eating resumes.'}</p>
          </div>

          {/* Daily chart */}
          <div data-ip-chart>
            <div className="flex flex-wrap items-center gap-1.5 mb-2">
              <span className="font-bold text-slate-800 dark:text-slate-200 mr-1">{th ? 'ตารางรายวัน:' : 'Daily chart:'}</span>
              {[['basal_bolus', 'Basal-bolus'], ['basal', th ? 'Basal อย่างเดียว' : 'Basal only'], ['premix', th ? 'Premix 2 มื้อ' : 'Premix twice daily']].map(([k, label]) => (
                <button key={k} onClick={() => pickRegimen(k)} aria-pressed={regimen === k} data-ip-regimen={k}
                  className={`px-2.5 py-1 rounded-md border font-bold ${regimen === k ? 'bg-sky-700 text-white border-sky-700' : 'bg-white text-slate-600 border-slate-200 hover:border-sky-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'}`}>{label}</button>
              ))}
            </div>
            <div className="overflow-x-auto relative rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full min-w-[640px] border-separate border-spacing-0">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800 text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <th className="px-2 py-1.5 text-left sticky left-0 bg-slate-50 dark:bg-slate-800">{th ? 'วัน' : 'Day'}</th>
                    {IP_SLOTS.map((s) => (
                      <th key={s} className="px-1.5 py-1.5 text-left align-bottom min-w-[118px]">
                        <span className="block">{slotName[s]}</span>
                        <select value={insulin[s]} onChange={(e) => setInsulin({ ...insulin, [s]: e.target.value })} aria-label={slotName[s]} data-ip-insulin={s}
                          className="mt-1 w-full px-1 py-0.5 rounded border border-slate-300 dark:border-slate-700 dark:bg-slate-900 normal-case tracking-normal font-semibold text-[11px] text-slate-700 dark:text-slate-200">
                          <option value="">{th ? '- ไม่มี -' : '- none -'}</option>
                          {insulins.map((x) => <option key={x.id} value={x.id}>{x.brandNames[0]}</option>)}
                        </select>
                      </th>
                    ))}
                    <th className="px-2 py-1.5 text-left">TDD</th>
                    <th className="px-2 py-1.5 text-left min-w-[150px]">POCT</th>
                  </tr>
                </thead>
                <tbody>
                  {days.map((d, i) => {
                    const sm = summary(d);
                    return (
                      <tr key={i} data-ip-day={i + 1}>
                        <td className="px-2 py-1.5 font-bold text-slate-700 dark:text-slate-200 border-t border-slate-100 dark:border-slate-800 sticky left-0 bg-white dark:bg-slate-900">{i + 1}</td>
                        {IP_SLOTS.map((s) => (
                          <td key={s} className="px-1.5 py-1.5 border-t border-slate-100 dark:border-slate-800">
                            <div className="grid grid-cols-2 gap-1">
                              <input type="number" value={d.u[s]} onChange={(e) => setCell(i, 'u', s, e.target.value)} disabled={!insulin[s]} placeholder="U" aria-label={slotName[s] + ' units'} className={inp + ' disabled:opacity-30'} />
                              <input type="number" value={d.g[s]} onChange={(e) => setCell(i, 'g', s, e.target.value)} placeholder="mg/dL" aria-label={slotName[s] + ' glucose'} className={inp} />
                            </div>
                          </td>
                        ))}
                        <td className="px-2 py-1.5 border-t border-slate-100 dark:border-slate-800 font-extrabold text-sky-700 dark:text-sky-300 tabular-nums whitespace-nowrap" data-ip-tdd>{sm.tdd != null ? sm.tdd + ' U' : '-'}</td>
                        <td className="px-2 py-1.5 border-t border-slate-100 dark:border-slate-800">
                          {sm.mean != null && <span className="block tabular-nums text-slate-600 dark:text-slate-300 whitespace-nowrap">{th ? 'เฉลี่ย' : 'Mean'} {sm.mean} ({sm.min}-{sm.max})</span>}
                          {sm.flag && <span className={`mt-0.5 inline-block px-1.5 py-0.5 rounded border text-[10px] font-bold leading-snug ${FLAG[sm.flag][0]}`} data-ip-flag={sm.flag}>{FLAG[sm.flag][1]}</span>}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <button onClick={() => setDays((p) => [...p, blankDay()])} data-ip-add className="px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 hover:border-sky-300">{th ? '+ เพิ่มวัน' : '+ Add day'}</button>
              {days.length > 1 && <button onClick={() => setDays((p) => p.slice(0, -1))} className="px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-300 hover:border-rose-300">{th ? '- ลบวันสุดท้าย' : '- Remove last day'}</button>}
              <span className="text-slate-500 dark:text-slate-400">{th ? 'ช่องซ้าย = ยูนิตที่ฉีดจริง (รวม correction), ช่องขวา = POCT; TDD = ผลรวมยูนิตทั้งวัน' : 'Left box = units actually given (incl. correction), right box = POCT; TDD = all units that day.'}</span>
            </div>
            {regimen === 'premix' && <p className="mt-2 p-2 rounded-lg border border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300">{th ? 'Premix (เช่น Mixtard 30, NovoMix 30) ไม่แนะนำเป็นประจำในโรงพยาบาล; หากใช้ ตรวจก่อนเช้าและก่อนเย็น ปรับยามื้อเย็นตามน้ำตาลก่อนเช้า และปรับยามื้อเช้าตามน้ำตาลก่อนเย็น' : 'Premixes (e.g. Mixtard 30, NovoMix 30) are not routinely recommended in hospital. If used: test before breakfast and dinner; adjust the dinner dose by the pre-breakfast reading and the breakfast dose by the pre-dinner reading.'}</p>}
            {used.length > 0 && <p className="mt-2 text-slate-500 dark:text-slate-400" data-ip-plan>{th ? 'แผน: ' : 'Plan: '}{used.map((s) => slotName[s] + ' ' + nameOf(insulin[s])).join(' · ')}</p>}
          </div>

          <p className="text-[10px] leading-snug text-slate-500 dark:text-slate-400" data-ip-source>
            {th ? 'ที่มา: ' : 'Sources: '}
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11635037/" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted">ADA Standards of Care in Diabetes 2025, section 16 (16.4b, 16.5b, 16.8b-16.10, 16.13)</a>;{' '}
            <a href="https://doi.org/10.2337/dc07-0295" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted">RABBIT 2 (Umpierrez 2007)</a>;{' '}
            <a href="https://doi.org/10.2337/dc10-1407" target="_blank" rel="noopener noreferrer" className="underline decoration-dotted">RABBIT 2 Surgery (Umpierrez 2011)</a>;{' '}
            {th ? 'CPG 2566 หน้า 109-110 (ตารางการเจาะเลือดและปรับอินซูลิน)' : 'CPG 2566 pp. 109-110 (glucose testing and insulin adjustment tables)'}
          </p>
        </div>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex justify-end">
          <button onClick={onClose} className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs">{th ? 'ปิดหน้าต่าง' : 'Close'}</button>
        </div>
      </div>
    </div>
  );
};
