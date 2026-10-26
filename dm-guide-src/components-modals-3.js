
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
