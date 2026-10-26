// Thai CPG 2566 Clinical Guidelines Data & Protocols
const guidelinesData = {
  // 1. T2D Treatment Algorithm (CPG 2566 แผนภูมิที่ 1 และ 2)
  startingAlgorithm: {
    titleEn: 'Type 2 Diabetes Pharmacotherapy Algorithm (CPG 2566)',
    titleTh: 'ขั้นตอนการรักษาโรคเบาหวานชนิดที่ 2 ในผู้ใหญ่ (แผนภูมิที่ 1 และ 2)',
    descriptionTh: 'แนวทางเวชปฏิบัติสำหรับโรคเบาหวาน พ.ศ. 2566 โดยราชวิทยาลัยอายุรแพทย์ฯ และสมาคมโรคเบาหวานแห่งประเทศไทยฯ',
    comorbidities: [
      { key: 'ascvd', labelTh: 'โรคหัวใจและหลอดเลือด (ASCVD)', labelEn: 'Atherosclerotic CVD (CAD, MI, Stroke/TIA, PAD)', descTh: 'เคยเป็นกล้ามเนื้อหัวใจขาดเลือด หลอดเลือดสมองตีบ หรือหลอดเลือดส่วนปลายตีบ' },
      { key: 'hf', labelTh: 'โรคหัวใจล้มเหลว (Heart Failure)', labelEn: 'Heart Failure (HFrEF / HFpEF)', descTh: 'ภาวะหัวใจล้มเหลวทั้งชนิดบีบตัวลดลงและปกติ (NYHA II-IV)' },
      { key: 'ckd', labelTh: 'โรคไตเรื้อรัง (CKD)', labelEn: 'Chronic Kidney Disease (eGFR < 60 or UACR ≥ 200 mg/g)', descTh: 'eGFR < 60 มล./นาที/1.73 ตร.ม. และ/หรือ มีโปรตีนไข่ขาวรั่วในปัสสาวะ UACR ≥ 200 มก./กรัม' },
      { key: 'obesity', labelTh: 'โรคอ้วนรุนแรง (BMI ≥ 30 kg/m²)', labelEn: 'Severe Obesity (BMI ≥ 30 kg/m²)', descTh: 'ดัชนีมวลกายตั้งแต่ 30 กก./ตร.ม. ขึ้นไป' }
    ],
    glycemicTiers: [
      {
        tier: 1,
        conditionTh: 'FPG < 160 มก./ดล. หรือ A1C < 8.0%',
        conditionEn: 'FPG < 160 mg/dL or A1C < 8.0%',
        actionTh: 'ปรับเปลี่ยนพฤติกรรมชีวิต (Lifestyle modification) เน้นโภชนบำบัด การออกกำลังกาย เรียนรู้โรคเบาหวานและการดูแลตนเอง ไม่เกิน 3 เดือน หากยังควบคุมไม่ได้ตามเป้าหมาย ให้เริ่มรักษาด้วยยา Metformin',
        actionEn: 'Lifestyle modification up to 3 months. If glycemic targets not achieved, initiate Metformin monotherapy.'
      },
      {
        tier: 2,
        conditionTh: 'FPG 160-199 มก./ดล. หรือ A1C 8.0-8.9%',
        conditionEn: 'FPG 160-199 mg/dL or A1C 8.0-8.9%',
        actionTh: 'เริ่มยา Metformin ทันที พร้อมกับการปรับเปลี่ยนพฤติกรรมชีวิต (หากมีข้อห้ามใช้ Metformin ให้เลือก SU, TZD, DPP-4i, SGLT2i, GLP-1 RA, AGI หรือ Repaglinide)',
        actionEn: 'Initiate Metformin immediately alongside lifestyle modification. (Alternative 1st line if Metformin intolerant: SU, TZD, DPP-4i, SGLT2i, GLP-1 RA, AGI, or Glinide).'
      },
      {
        tier: 3,
        conditionTh: 'FPG 200-299 มก./ดล. หรือ A1C 9.0-9.9%',
        conditionEn: 'FPG 200-299 mg/dL or A1C 9.0-9.9%',
        actionTh: 'พิจารณาเริ่มยาเม็ดลดน้ำตาล 2 ชนิดพร้อมกันตั้งแต่แรก (Dual combination therapy): Metformin + Sulfonylurea หรือ Metformin + TZD (หรือทางเลือก DPP-4i, SGLT2i, GLP-1 RA, Basal insulin)',
        actionEn: 'Consider initiating Dual Combination Therapy from diagnosis: Metformin + Sulfonylurea or Metformin + TZD (Alternative 2nd agent: DPP-4i, SGLT2i, GLP-1 RA, Basal insulin).'
      },
      {
        tier: 4,
        conditionTh: 'FPG ≥ 300 มก./ดล. หรือ A1C ≥ 10.0% ร่วมกับมีอาการจากน้ำตาลในเลือดสูงชัดเจน',
        conditionEn: 'FPG ≥ 300 mg/dL or A1C ≥ 10.0% WITH symptomatic hyperglycemia',
        actionTh: 'ให้ยาเม็ดลดน้ำตาล (± GLP-1 analog) ร่วมกับการฉีดอินซูลิน NPH ก่อนนอน (21.00-23.00 น.) หรือ LAA หรือ ULAA หรือร่วมกับการฉีด premixed human insulin หรือ premixed insulin analog วันละ 1-2 ครั้ง ก่อนอาหารเช้า และ/หรือ เย็น',
        actionEn: 'Initiate Insulin immediately (+/- Metformin): Basal insulin at bedtime (NPH 21:00-23:00, or LAA/ULAA) OR Premixed insulin 1-2 times daily before meals.'
      }
    ]
  },

  // 2. Insulin Reference & Pharmacokinetics (CPG 2566 ตารางที่ 2 หน้า 80)
  insulinsTable: [
    {
      categoryTh: 'ฮิวแมนอินซูลินออกฤทธิ์สั้น (Regular human insulin, RI)',
      categoryEn: 'Short-acting human insulin (Regular, RI)',
      brands: 'Actrapid HM, Humulin R, Biosulin R, Insugen R, Winsulin R',
      onset: '30 - 45 นาที',
      peak: '2 - 3 ชั่วโมง',
      duration: '4 - 8 ชั่วโมง',
      notesTh: 'ฉีดก่อนอาหาร 30 นาที เป็นอินซูลินชนิดเดียวที่ใช้ฉีดเข้าเส้นเลือดดำ (IV) ได้',
      notesEn: 'Inject 30 min before meals. Only insulin suitable for IV infusion in DKA/HHS.'
    },
    {
      categoryTh: 'ฮิวแมนอินซูลินออกฤทธิ์ปานกลาง (Insulin Isophane Suspension, NPH)',
      categoryEn: 'Intermediate-acting human insulin (NPH / Isophane)',
      brands: 'Insulatard HM, Humulin N, Biosulin N, Insugen N, Winsulin N',
      onset: '2 - 4 ชั่วโมง',
      peak: '4 - 8 ชั่วโมง',
      duration: '10 - 16 ชั่วโมง',
      notesTh: 'ฉีดก่อนนอน (21.00-23.00 น.) หรือวันละ 2 ครั้ง ต้องคลึงขวดเบาๆ 10-20 ครั้งก่อนฉีด',
      notesEn: 'Inject at bedtime (21:00-23:00) or BID. Roll gently 10-20 times before injection.'
    },
    {
      categoryTh: 'ฮิวแมนอินซูลินผสมสำเร็จรูป (Premixed human insulin 30/70)',
      categoryEn: 'Premixed human insulin (30% RI + 70% NPH)',
      brands: 'Mixtard 30 HM, Humulin 70/30, Biosulin 30:70, Insugen 30/70, Winsulin 30/70',
      onset: '30 - 60 นาที',
      peak: '2 และ 8 ชั่วโมง',
      duration: '12 - 20 ชั่วโมง',
      notesTh: 'ฉีดก่อนอาหารเช้าและเย็น 30 นาที ไม่สามารถปรับแยกขนาดยาออกฤทธิ์สั้น/ยาวได้',
      notesEn: 'Inject 30 min before breakfast and dinner. Fixed ratio, cannot adjust components separately.'
    },
    {
      categoryTh: 'อินซูลินอะนาล็อกออกฤทธิ์เร็ว (Rapid-acting insulin analog, RAA)',
      categoryEn: 'Rapid-acting insulin analog (RAA: Aspart, Lispro, Glulisine)',
      brands: 'Humalog (Lispro), NovoRapid (Aspart), Apidra (Glulisine)',
      onset: 'Lispro 5-15 นาที / Aspart, Glulisine 10-20 นาที',
      peak: '1 - 2 ชั่วโมง',
      duration: '3 - 4 ชั่วโมง',
      notesTh: 'ฉีดทันทีก่อนอาหาร (0-15 นาที) หรือหลังอาหารทันที ลดน้ำตาลหลังอาหารได้ดี เสี่ยงน้ำตาลต่ำน้อยกว่า RI',
      notesEn: 'Inject immediately before meals (0-15 min). Lower risk of delayed postprandial hypoglycemia.'
    },
    {
      categoryTh: 'อินซูลินอะนาล็อกออกฤทธิ์ยาว (Long-acting insulin analog, LAA)',
      categoryEn: 'Long-acting insulin analog (LAA: Glargine U100, Detemir)',
      brands: 'Lantus, Glaritus, Semglee (Glargine U100) / Levemir (Detemir)',
      onset: '2 ชั่วโมง',
      peak: 'ไม่มีพีค (Peakless / Flat)',
      duration: 'Glargine U100: 24 ชั่วโมง / Detemir: 18 - 24 ชั่วโมง',
      notesTh: 'ฉีดวันละ 1 ครั้งเวลาเดียวกัน ไม่มีพีค ลดน้ำตาลต่ำตอนกลางคืนได้ดีกว่า NPH มาก',
      notesEn: 'Once daily at same time. Flat profile, significantly less nocturnal hypoglycemia than NPH.'
    },
    {
      categoryTh: 'อินซูลินอะนาล็อกออกฤทธิ์ยาวพิเศษ (Ultra-long-acting insulin analog, ULAA)',
      categoryEn: 'Ultra-long-acting insulin analog (ULAA: Degludec, Glargine U300)',
      brands: 'Tresiba (Degludec) / Toujeo (Glargine U300)',
      onset: '6 ชั่วโมง',
      peak: 'ไม่มีพีค (Peakless)',
      duration: 'Degludec: 24 - 36+ ชั่วโมง / Toujeo: 24 - 30 ชั่วโมง',
      notesTh: 'ฉีดวันละ 1 ครั้ง ยืดหยุ่นเวลาฉีดได้ (± 8-16 ชม. สำหรับ Degludec และ ± 3 ชม. สำหรับ Toujeo)',
      notesEn: 'Once daily anytime. Flexible injection window (± 8-16 hrs for Degludec, ± 3 hrs for Toujeo).'
    },
    {
      categoryTh: 'อินซูลินอะนาล็อกผสมสำเร็จรูป (Biphasic insulin analogue)',
      categoryEn: 'Premixed insulin analog (Biphasic analog)',
      brands: 'NovoMix 30, Humalog Mix 25, Humalog Mix 50, Ryzodeg 70/30',
      onset: '10 - 20 นาที',
      peak: '1 และ 8 ชั่วโมง (Ryzodeg: 1 ชม.)',
      duration: 'NovoMix/Humalog Mix: 12-20 ชม. / Ryzodeg: 24-36 ชม.',
      notesTh: 'ฉีดทันทีก่อนอาหารเช้าและ/หรือเย็น คุมน้ำตาลหลังมื้อได้เร็วและต่อเนื่อง',
      notesEn: 'Inject immediately before breakfast and/or dinner.'
    }
  ],

  // 3. GLP-1 Analogs & Fixed Ratio Combinations (CPG 2566 ตารางที่ 3 หน้า 81)
  glp1Table: [
    {
      name: 'Liraglutide (Victoza)',
      type: 'SC Daily',
      halfLife: '13 ชั่วโมง',
      dose: '0.6 มก. วันละครั้ง x 1 สัปดาห์ -> ปรับเป็น 1.2 มก. (สูงสุด 1.8 มก.)',
      frequency: 'วันละ 1 ครั้ง (ฉีด SC)'
    },
    {
      name: 'Dulaglutide (Trulicity)',
      type: 'SC Weekly',
      halfLife: '4.5 - 4.7 วัน',
      dose: '0.75 มก. สัปดาห์ละครั้ง -> ปรับเป็น 1.5 มก.',
      frequency: 'สัปดาห์ละ 1 ครั้ง (ฉีด SC)'
    },
    {
      name: 'Semaglutide (Ozempic)',
      type: 'SC Weekly',
      halfLife: '7 วัน',
      dose: '0.25 มก. สัปดาห์ละครั้ง x 4 สัปดาห์ -> ปรับเป็น 0.5 มก. (สูงสุด 1.0 - 2.0 มก.)',
      frequency: 'สัปดาห์ละ 1 ครั้ง (ฉีด SC)'
    },
    {
      name: 'Oral Semaglutide (Rybelsus)',
      type: 'Oral Tablet',
      halfLife: '152 ชั่วโมง (~1 สัปดาห์)',
      dose: '3 มก. วันละครั้ง x 30 วัน -> 7 มก. (สูงสุด 14 มก.) ตอนท้องว่างกับน้ำ ≤ 120 มล.',
      frequency: 'วันละ 1 ครั้ง ตอนเช้าตื่นนอน'
    },
    {
      name: 'Soliqua 100/50 & 100/33 (Glargine + Lixisenatide)',
      type: 'Fixed Ratio Pen',
      halfLife: 'Glargine 24 ชม. + Lixi 3 ชม.',
      dose: 'ปรับตามขนาดยูนิตอินซูลินและให้ได้ขนาด Lixisenatide ที่ต้องการ (สูงสุด 60 dose steps)',
      frequency: 'วันละ 1 ครั้ง ภายใน 1 ชม. ก่อนอาหาร'
    },
    {
      name: 'Xultophy 100/3.6 (Degludec + Liraglutide)',
      type: 'Fixed Ratio Pen',
      halfLife: 'Degludec > 42 ชม. + Lira 13 ชม.',
      dose: 'เริ่ม 10-16 dose steps วันละ 1 ครั้ง ปรับสัปดาห์ละ 2 dose steps (สูงสุด 50 dose steps)',
      frequency: 'วันละ 1 ครั้ง พร้อมมื้ออาหาร'
    }
  ],

  // 4. CKD Renal Dosing Protocol (CPG 2566 ตารางที่ 2 หน้า 98)
  ckdDosingTable: [
    { class: 'Biguanides', drug: 'Metformin', ckd3: 'eGFR 30-45: ไม่เกิน 1,000 มก./วัน ติดตาม eGFR ทุก 3-6 เดือน', ckd4: 'eGFR < 30: ห้ามใช้เด็ดขาด', ckd5_hd: 'ห้ามใช้เด็ดขาด', sideEffect: 'Lactic acidosis' },
    { class: 'Sulfonylurea', drug: 'Glibenclamide', ckd3: 'ไม่ควรใช้ในโรคไตระยะที่ 3', ckd4: 'ห้ามใช้ในโรคไตระยะที่ 4 (eGFR < 30)', ckd5_hd: 'ห้ามใช้เด็ดขาด', sideEffect: 'น้ำตาลต่ำรุนแรง น้ำหนักเพิ่ม' },
    { class: 'Sulfonylurea', drug: 'Glipizide', ckd3: 'ไม่ต้องปรับขนาดยา', ckd4: 'ไม่ต้องปรับขนาดยา (ระวังน้ำตาลต่ำ)', ckd5_hd: 'หลีกเลี่ยงใน 5D (Hemodialysis)', sideEffect: 'น้ำตาลต่ำ น้ำหนักเพิ่ม' },
    { class: 'Sulfonylurea', drug: 'Gliclazide / MR', ckd3: 'ไม่ต้องปรับขนาดยา', ckd4: 'ไม่ต้องปรับขนาดยา (ระวังน้ำตาลต่ำ)', ckd5_hd: 'หลีกเลี่ยงใน 5D (Hemodialysis)', sideEffect: 'น้ำตาลต่ำ น้ำหนักเพิ่ม' },
    { class: 'Sulfonylurea', drug: 'Glimepiride', ckd3: 'เริ่มขนาดต่ำ 1 มก. วันละครั้ง', ckd4: 'ห้ามใช้ในโรคไตระยะที่ 4 (eGFR < 30)', ckd5_hd: 'ห้ามใช้เด็ดขาด', sideEffect: 'น้ำตาลต่ำ น้ำหนักเพิ่ม' },
    { class: 'Glinide', drug: 'Repaglinide', ckd3: 'ขนาดยาปกติ', ckd4: 'เริ่มขนาดต่ำ 0.5 มก. ก่อนอาหาร ถ้า eGFR < 30', ckd5_hd: 'ไม่ต้องปรับขนาดยา ปลอดภัยใน HD', sideEffect: 'น้ำตาลต่ำ (น้อยกว่า SU)' },
    { class: 'Alpha-GI', drug: 'Acarbose', ckd3: 'ขนาดยาปกติ', ckd4: 'ห้ามใช้ใน eGFR ≤ 30', ckd5_hd: 'ห้ามใช้เด็ดขาด', sideEffect: 'แน่นท้อง ท้องอืด ตับอักเสบ' },
    { class: 'TZD', drug: 'Pioglitazone', ckd3: 'ไม่ต้องปรับขนาดยา', ckd4: 'ไม่ต้องปรับขนาดยา', ckd5_hd: 'ไม่ต้องปรับขนาดยา ปลอดภัยใน HD/PD', sideEffect: 'บวมน้ำ หัวใจวาย กระดูกหัก' },
    { class: 'DPP-4i', drug: 'Linagliptin', ckd3: 'ไม่ต้องปรับขนาดยา (5 มก. วันละครั้ง)', ckd4: 'ไม่ต้องปรับขนาดยา (5 มก. วันละครั้ง)', ckd5_hd: 'ไม่ต้องปรับขนาดยา (5 มก. OD ปลอดภัยใน HD/PD)', sideEffect: 'คัดจมูก ปวดข้อ' },
    { class: 'DPP-4i', drug: 'Gemigliptin', ckd3: 'ไม่ต้องปรับขนาดยา (50 มก. วันละครั้ง)', ckd4: 'ไม่ต้องปรับขนาดยา (50 มก. วันละครั้ง)', ckd5_hd: 'ไม่ต้องปรับขนาดยา', sideEffect: 'คัดจมูก' },
    { class: 'DPP-4i', drug: 'Vildagliptin', ckd3: '50 มก. วันละ 1 ครั้ง ถ้า eGFR < 50', ckd4: '50 มก. วันละ 1 ครั้ง', ckd5_hd: '50 มก. วันละ 1 ครั้ง (ปลอดภัยใน HD/PD)', sideEffect: 'เอนไซม์ตับขึ้น' },
    { class: 'DPP-4i', drug: 'Saxagliptin', ckd3: '2.5 มก. วันละ 1 ครั้ง ถ้า eGFR < 50', ckd4: '2.5 มก. วันละ 1 ครั้ง', ckd5_hd: '2.5 มก. วันละครั้ง ให้หลังทำ dialysis', sideEffect: 'หัวใจวาย (ระวังใน HF)' },
    { class: 'DPP-4i', drug: 'Sitagliptin', ckd3: '50 มก. ต่อวัน ถ้า eGFR 30-49', ckd4: '25 มก. ต่อวัน ถ้า eGFR < 30', ckd5_hd: '25 มก. ต่อวัน (ปลอดภัยใน HD/PD)', sideEffect: 'คัดจมูก' },
    { class: 'DPP-4i', drug: 'Alogliptin', ckd3: '12.5 มก. ต่อวัน ถ้า eGFR 30-49', ckd4: '6.25 มก. ต่อวัน ถ้า eGFR < 30', ckd5_hd: '6.25 มก. ต่อวัน', sideEffect: 'คัดจมูก' },
    { class: 'SGLT-2i', drug: 'Empagliflozin', ckd3: '10 มก. ต่อวัน (ชะลอไตเสื่อมและลดตาย CV)', ckd4: 'ใช้ต่อได้ถ้าเริ่มก่อน eGFR < 20; ไม่ใช้ถ้า eGFR < 20', ckd5_hd: 'ห้ามใช้ในผู้ป่วยฟอกไต', sideEffect: 'เชื้อราทางเดินปัสสาวะ, ขาดน้ำ' },
    { class: 'SGLT-2i', drug: 'Dapagliflozin', ckd3: '10 มก. ต่อวัน (ชะลอไตเสื่อมและลดตาย CV)', ckd4: 'ใช้ต่อได้ถ้าเริ่มก่อน eGFR < 25; ไม่ใช้ถ้า eGFR < 20-25', ckd5_hd: 'ห้ามใช้ในผู้ป่วยฟอกไต', sideEffect: 'เชื้อราทางเดินปัสสาวะ, ขาดน้ำ' },
    { class: 'SGLT-2i', drug: 'Canagliflozin', ckd3: '100 มก. ต่อวัน ถ้า eGFR 30-60', ckd4: 'ไม่ใช้ถ้า eGFR < 30 (เว้นแต่ UACR > 300 มก./ก.)', ckd5_hd: 'ห้ามใช้', sideEffect: 'เชื้อราทางเดินปัสสาวะ, ขาดน้ำ' },
    { class: 'GLP-1 RA', drug: 'Liraglutide / Dulaglutide / Semaglutide', ckd3: 'ไม่ต้องปรับขนาดยา (ลดความเสี่ยงไต/หัวใจ)', ckd4: 'ใช้ได้ถ้า eGFR ≥ 15 ระวังขาดน้ำจากคลื่นไส้', ckd5_hd: 'ไม่ใช้เมื่อ eGFR < 15 หรือผู้ป่วยฟอกไต', sideEffect: 'คลื่นไส้ อาเจียน ขาดน้ำ' },
    { class: 'Insulin', drug: 'ทุกชนิด (RI, NPH, Analogs)', ckd3: 'eGFR 10-50: ลดขนาดยาลง 25%', ckd4: 'eGFR 10-50: ลดขนาดยาลง 25%', ckd5_hd: 'eGFR < 10 หรือฟอกไต: ลดขนาดยาลง 50%', sideEffect: 'น้ำตาลต่ำรุนแรง' }
  ],

  // 5. Hypoglycemia Classification & Protocols (CPG 2566 บทที่ 11)
  hypoProtocol: {
    levels: [
      {
        level: 1,
        titleTh: 'ระดับที่ 1 (Level 1: Glucose Alert Value)',
        criteriaTh: 'ระดับน้ำตาลในเลือด ≤ 70 มก./ดล.',
        symptomsTh: 'อาการออโตโนมิค: ใจสั่น หัวใจเต้นเร็ว มือสั่น เหงื่อออก รู้สึกหิว กังวล คลื่นไส้ ชา',
        actionTh: 'ใช้กฎ 15 (Rule of 15): รับประทานคาร์โบไฮเดรตดูดซึมเร็ว 15 กรัม ตรวจซ้ำใน 15 นาที'
      },
      {
        level: 2,
        titleTh: 'ระดับที่ 2 (Level 2: Clinically Significant Hypoglycemia)',
        criteriaTh: 'ระดับน้ำตาลในเลือด < 54 มก./ดล.',
        symptomsTh: 'อาการสมองขาดกลูโคส (Neuroglycopenia): มึนงง สับสน ปวดศีรษะ พฤติกรรมเปลี่ยน ตามัว พูดช้า แขนขาอ่อนแรง',
        actionTh: 'แก้ไขเร่งด่วนด้วยคาร์โบไฮเดรตดูดซึมเร็ว 15-30 กรัม ตรวจน้ำตาลซ้ำทุก 15 นาทีจนกว่าจะ > 70-80 มก./ดล.'
      },
      {
        level: 3,
        titleTh: 'ระดับที่ 3 (Level 3: Severe Hypoglycemia)',
        criteriaTh: 'ภาวะน้ำตาลต่ำรุนแรง ไม่จำกัดระดับน้ำตาล ผู้ป่วยมีอาการทางสมองรุนแรงจนไม่สามารถช่วยเหลือตนเองได้',
        symptomsTh: 'หมดสติ โคม่า ชัก หรือสูญเสียการรับรู้สติสัมปชัญญะ',
        actionTh: 'ห้ามกรอกน้ำหรืออาหารทางปากเด็ดขาด! ฉีด 50% Glucose 50 มล. IV หรือฉีด Glucagon 1 มก. SC/IM'
      }
    ],
    ruleOf15Foods: [
      { itemTh: 'น้ำส้มคั้น / น้ำผลไม้พร้อมดื่ม', portion: '180 มล. (ประมาณ 1 กล่องเล็ก)', carb: '15 กรัม' },
      { itemTh: 'น้ำอัดลม (ชนิดปกติ มีน้ำตาล)', portion: '180 มล. (ประมาณครึ่งกระป๋อง)', carb: '15 กรัม' },
      { itemTh: 'น้ำผึ้ง หรือ น้ำเชื่อม', portion: '3 ช้อนชา (1 ช้อนโต๊ะ / 15 มล.)', carb: '15 กรัม' },
      { itemTh: 'น้ำตาลทรายละลายน้ำเปล่า', portion: '3 ช้อนชา (12-15 กรัม)', carb: '15 กรัม' },
      { itemTh: 'ลูกอมเม็ดที่มีน้ำตาล', portion: '3 - 4 เม็ด', carb: '15 กรัม' },
      { itemTh: 'กลูโคสเม็ด (Glucose tablets)', portion: '3 เม็ด (เม็ดละ 5 กรัม)', carb: '15 กรัม' },
      { itemTh: 'ขนมปังขาวสไลด์', portion: '1 แผ่น', carb: '15 กรัม' },
      { itemTh: 'นมจืด', portion: '240 มล. (1 กล่อง)', carb: '12-15 กรัม' },
      { itemTh: 'กล้วยน้ำว้า', portion: '1 ผล', carb: '15 กรัม' }
    ]
  },

  // 6. DKA & HHS Emergency Resuscitation (CPG 2566 บทที่ 12)
  dkaHhsTable: [
    { param: 'ระดับน้ำตาลในเลือด (FPG)', mildDka: '≥ 250 มก./ดล.', modDka: '≥ 250 มก./ดล.', severeDka: '≥ 250 มก./ดล.', hhs: '≥ 600 มก./ดล. (สูงมาก)' },
    { param: 'Arterial / Venous pH', mildDka: '7.25 - 7.29', modDka: '7.00 - 7.24', severeDka: '< 7.00', hhs: '> 7.30' },
    { param: 'Serum Bicarbonate (HCO3)', mildDka: '15 - 18 mEq/L', modDka: '10 - < 15 mEq/L', severeDka: '< 10 mEq/L', hhs: '> 18 mEq/L' },
    { param: 'Urine / Blood Ketones', mildDka: 'บวก (β-OHB ≥ 3 mmol/L)', modDka: 'บวก (β-OHB ≥ 3 mmol/L)', severeDka: 'บวก (β-OHB ≥ 3 mmol/L)', hhs: 'ลบ หรือ พบน้อย (< 3 mmol/L)' },
    { param: 'Anion Gap (mEq/L)', mildDka: '> 10', modDka: '> 12', severeDka: '> 12', hhs: 'ปกติ หรือ < 12' },
    { param: 'Effective Serum Osmolality', mildDka: 'แปรผัน', modDka: 'แปรผัน', severeDka: 'แปรผัน', hhs: '≥ 320 mOsm/kg' },
    { param: 'ภาวะการรับรู้สติ', mildDka: 'รู้สึกตัวดี (Alert)', modDka: 'รู้สึกตัว/ซึม (Drowsy)', severeDka: 'ซึมมาก/โคม่า (Stupor/Coma)', hhs: 'ซึมมาก/โคม่า (Stupor/Coma)' }
  ],

  // 7. Ramadan Fasting Drug Adjustment (CPG 2566 บทที่ 8 หน้า 89-93)
  ramadanRules: [
    {
      drugClass: 'Metformin',
      actionTh: 'วันละ 1 ครั้ง: ทานมื้อพระอาทิตย์ตก (Iftar) / วันละ 2 ครั้ง: ทานมื้อ Iftar และ Suhoor / วันละ 3 ครั้ง: รวมมื้อเที่ยง+เย็นทานมื้อ Iftar และมื้อเช้าทาน Suhoor / ชนิด XR: ทานมื้อ Iftar'
    },
    {
      drugClass: 'Sulfonylureas (Glipizide, Gliclazide)',
      actionTh: 'วันละ 1 ครั้ง: ทานมื้อ Iftar / วันละ 2 ครั้ง: ทานขนาดเดิมที่มื้อ Iftar และลดขนาดยาลง 50% ที่มื้อ Suhoor; หลีกเลี่ยง Glibenclamide เด็ดขาด!'
    },
    {
      drugClass: 'DPP-4 Inhibitors & Pioglitazone',
      actionTh: 'ไม่ต้องปรับขนาดยา รับประทานเมื่อพระอาทิตย์ตก (Iftar) หรือพระอาทิตย์ขึ้น (Suhoor) ก็ได้ ไม่เพิ่มความเสี่ยงน้ำตาลต่ำ'
    },
    {
      drugClass: 'SGLT-2 Inhibitors',
      actionTh: 'รับประทานที่มื้อ Iftar ต้องดื่มน้ำมากๆ ในช่วงกลางคืน (≥ 2-2.5 ลิตร) ต้องเริ่มยามาแล้ว ≥ 12 สัปดาห์ก่อนรอมฎอน ระวังภาวะขาดน้ำและ DKA'
    },
    {
      drugClass: 'GLP-1 Receptor Agonists',
      actionTh: 'ฉีดยาหรือรับประทานหลังมื้อ Iftar หากมีอาการคลื่นไส้มากให้ลดขนาดยาลงครึ่งหนึ่ง'
    },
    {
      drugClass: 'Basal Insulin (NPH, Glargine, Degludec)',
      actionTh: 'ฉีดวันละ 1 ครั้ง: ฉีดหลังมื้อ Iftar และลดขนาดยาลง 15-30% / ฉีดวันละ 2 ครั้ง: ฉีดขนาดเดิมหลังมื้อ Iftar และลดขนาดยาลง 50% ก่อนมื้อ Suhoor'
    },
    {
      drugClass: 'Premixed Insulin',
      actionTh: 'ฉีดวันละ 1 ครั้ง: ขนาดเดิมหลังมื้อ Iftar / ฉีดวันละ 2 ครั้ง: ขนาดเดิมที่มื้อ Iftar และลดขนาดยาลง 25-50% ก่อนมื้อ Suhoor'
    },
    {
      drugClass: 'Bolus / Prandial Insulin (RI, Rapid Analog)',
      actionTh: 'ฉีดขนาดปกติก่อนมื้อ Iftar; งดมื้อเที่ยง; ลดขนาดยาลง 25-50% ก่อนมื้อ Suhoor'
    }
  ],

  // 8. Thai Diabetes Risk Score (DRS - CPG 2566 บทที่ 2 ตารางที่ 1 หน้า 17)
  thaiDrs: {
    ageItems: [
      { range: '35 - 44 ปี', points: 1 },
      { range: '45 - 49 ปี', points: 2 },
      { range: '50 - 59 ปี', points: 3 },
      { range: '≥ 60 ปีขึ้นไป', points: 4 }
    ],
    bmiItems: [
      { range: '< 23 kg/m²', points: 0 },
      { range: '23 - 27.49 kg/m²', points: 1 },
      { range: '≥ 27.5 kg/m²', points: 3 }
    ],
    whtrItems: [
      { range: 'รอบเอวต่อความสูง ≤ 0.5', points: 0 },
      { range: 'รอบเอวต่อความสูง > 0.5 - 0.6', points: 3 },
      { range: 'รอบเอวต่อความสูง > 0.6', points: 5 }
    ],
    bpItems: [
      { range: 'ปกติ (< 120/80 mmHg)', points: 0 },
      { range: 'ความดันโลหิต 120-139 / 80-89 mmHg (Pre-HT)', points: 2 },
      { range: 'เป็นโรคความดันโลหิตสูง (≥ 140/90 mmHg หรือทานยาอยู่)', points: 4 }
    ],
    familyItems: [
      { range: 'ไม่มีประวัติเบาหวานในญาติสายตรง', points: 0 },
      { range: 'มีประวัติเบาหวานในพ่อ แม่ พี่ หรือน้อง', points: 2 }
    ],
    fpgItems: [
      { range: 'FPG < 100 mg/dL', points: 0 },
      { range: 'FPG 100 - 125 mg/dL (IFG)', points: 5 }
    ]
  },

  // 9. Pregnancy / GDM Criteria (CPG 2566 บทที่ 18 & ภาคผนวก 1)
  gdmCriteria: {
    twoStepCarpenter: {
      name: 'Two-step approach (50g GCT -> 100g OGTT) - Carpenter & Coustan',
      screen: '50g GCT: ผิดปกติถ้า 1-hr PG ≥ 140 มก./ดล. ให้ทำ 100g OGTT ต่อ',
      cutoffs: [
        { time: 'ก่อนดื่ม (Fasting)', value: '≥ 95 มก./ดล.' },
        { time: '1 ชั่วโมงหลังดื่ม', value: '≥ 180 มก./ดล.' },
        { time: '2 ชั่วโมงหลังดื่ม', value: '≥ 155 มก./ดล.' },
        { time: '3 ชั่วโมงหลังดื่ม', value: '≥ 140 มก./ดล.' }
      ],
      diagnosisTh: 'วินิจฉัยเป็นเบาหวานขณะตั้งครรภ์ (GDM) เมื่อพบค่าผิดปกติตั้งแต่ 2 ค่าขึ้นไป'
    },
    oneStepIdf: {
      name: 'One-step approach (75g OGTT) - IADPSG / IDF Criteria',
      cutoffs: [
        { time: 'ก่อนดื่ม (Fasting)', value: '≥ 92 มก./ดล.' },
        { time: '1 ชั่วโมงหลังดื่ม', value: '≥ 180 มก./ดล.' },
        { time: '2 ชั่วโมงหลังดื่ม', value: '≥ 153 มก./ดล.' }
      ],
      diagnosisTh: 'วินิจฉัยเป็นเบาหวานขณะตั้งครรภ์ (GDM) เมื่อพบค่าผิดปกติตั้งแต่ 1 ค่าขึ้นไป'
    },
    targets: [
      { timing: 'ก่อนอาหารเช้า และมื้ออื่นๆ (Fasting / Preprandial)', target: '60 - 95 มก./ดล.' },
      { timing: 'หลังอาหาร 1 ชั่วโมง', target: '≤ 140 มก./ดล.' },
      { timing: 'หลังอาหาร 2 ชั่วโมง', target: '≤ 120 มก./ดล.' },
      { timing: 'เวลากลางดึก (02.00 - 04.00 น.)', target: '≥ 60 มก./ดล.' }
    ]
  },

  // 10. Diabetic Foot Risk Stratification (CPG 2566 บทที่ 15 หน้า 165-174)
  footRiskCategories: [
    {
      level: 0,
      titleTh: 'ระดับ 0: ความเสี่ยงต่ำมาก (Very Low Risk)',
      criteriaTh: 'ไม่มีประวัติแผลที่เท้า/ตัดขา การรับความรู้สึก (LOPS) ปกติ และคลำชีพจรหลังเท้าได้ปกติ (ABI 0.9-1.3)',
      followUpTh: 'ตรวจประเมินเท้าอย่างละเอียดปีละ 1 ครั้ง สอนการตรวจและดูแลเท้าด้วยตนเอง'
    },
    {
      level: 1,
      titleTh: 'ระดับ 1: ความเสี่ยงต่ำ (Low Risk)',
      criteriaTh: 'ไม่มีประวัติแผล แต่ตรวจพบ LOPS ผิดปกติ หรือชีพจรเท้าเบาลง หรือ ABI < 0.9 หรือ > 1.3',
      followUpTh: 'ตรวจประเมินเท้าทุก 6-12 เดือน แนะนำการเลือกรองเท้าที่เหมาะสม ห้ามเดินเท้าเปล่า'
    },
    {
      level: 2,
      titleTh: 'ระดับ 2: ความเสี่ยงปานกลาง (Moderate Risk)',
      criteriaTh: 'ตรวจพบความผิดปกติตั้งแต่ 2 ใน 3 ข้อ: 1) เท้าผิดรูป 2) LOPS ผิดปกติ 3) ชีพจรเท้าเบา/PAD',
      followUpTh: 'ตรวจประเมินเท้าทุก 3-6 เดือน พิจารณาแผ่นรองเท้า/รองเท้าสั่งตัดพิเศษ ส่งพบทีมแพทย์เฉพาะทาง'
    },
    {
      level: 3,
      titleTh: 'ระดับ 3: ความเสี่ยงสูง (High Risk)',
      criteriaTh: 'มีประวัติเคยเป็นแผลที่เท้า หรือเคยถูกตัดนิ้ว/เท้า/ขา หรือเป็นโรคไตวายระยะสุดท้าย (ESRD)',
      followUpTh: 'ตรวจประเมินเท้าทุก 1-3 เดือน ต้องใช้อุปกรณ์พยุงอุ้งเท้าและรองเท้าเฉพาะทางอย่างเคร่งครัด'
    }
  ]
};
