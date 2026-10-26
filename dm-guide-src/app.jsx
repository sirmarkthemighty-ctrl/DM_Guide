
// Application Version and Changelog Data
const APP_VERSION = "v1.5.3";

const changelogData = [
  {
    version: "v1.5.3",
    date: "October 26, 2026",
    dateTh: "26 ตุลาคม 2569",
    features: [
      "Ramadan tool: a timetable at the top explains Suhoor (meal before sunrise), the fasting hours (sunrise to sunset) and Iftar (evening meal at sunset), from CPG 2566 chapter 8, p. 89.",
      "Light mode: input boxes in the tools (e.g. the DKA/HHS calculator) stay white when the page is shown inside a dark-mode viewer.",
      "Renamed to Adult DM Guide.",
      "NLEM filter moved next to the FDA registration filter (shown while Thailand is selected), as in the Bronchodilator Guide.",
      "Pictures for 15 more drugs from written product descriptions: 6 tablets (Glucophage, Glucophage XR/SR, Minidiab, Diamicron MR, Amaryl, Daonil) from UK, Dutch, Australian and New Zealand product information, and 9 pens (Trulicity, Mounjaro, Humalog, Humulin N, Humulin 70/30, Humalog Mix 75/25, Lantus, Tresiba, Soliqua) from their instructions for use; parts a label does not describe are drawn as an outline. Ozempic, Victoza, Actrapid/Humulin R, Toujeo and Xultophy stay N/A (no colour in any label checked).",
      "Five new drug cards for guideline drugs registered in Thailand: mitiglinide (Glufast), gemigliptin (Zemiglo), alogliptin (Nesina), canagliflozin (Invokana) and tirzepatide (Mounjaro), from CPG 2566, the product labels and the Thai FDA register. Price level is N/A until checked.",
      "Countries filter (All, TH, US, UK, EU, JP) and an FDA registration filter (Currently, † Past, ⊘ Never), as in the Bronchodilator Guide. Default: currently registered in Thailand.",
      "Cards and list rows show a coloured chip per country: the Thai licence holder or an example product, † if registration was cancelled or discontinued, ⊘ if not found.",
      "Drug details: new Registration by country section (Thai FDA register numbers and licence holders, and US FDA, UK NHS dm+d, EU EMA/HPRA and Japan PMDA status with examples and sources).",
      "Kidney limits follow CPG 2566 (Table 2, p. 100): dapagliflozin is not used if eGFR < 25 and empagliflozin if eGFR < 20, on the cards, in the detail view and in the kidney tool. Sitagliptin: 50 mg if eGFR 30-50, 25 mg if < 30.",
      "NLEM status follows the National List of Essential Medicines B.E. 2569 and its codes (b basic, ex exclusive), with each listing's conditions. Metformin XR, gliclazide MR, glimepiride, acarbose, DPP-4 and SGLT2 inhibitors, GLP-1 receptor agonists, degludec, glargine U300 and the fixed combinations are not in it; repaglinide, aspart/lispro, their premixes and glargine U100 are listed as ex.",
      "A1C lowering values follow CPG 2566 Table 1 (sulfonylureas 1-2%, DPP-4 and SGLT2 inhibitors 0.8%, GLP-1 receptor agonists 1-1.5%).",
      "Removed a pioglitazone dose note that the guideline does not contain; added the Ozempic 2 mg pen, which is registered in Thailand.",
      "Brands without a current Thai FDA registration are marked († cancelled, ‡ not found under that name); NovoNorm, Victoza and Glucobay are tagged No current Thai registration.",
      "Drug pictures now come only from written product descriptions (US or EU labels): 12 tablets are drawn in their described colour and shape, and the detail view names the product shown. Drugs with no checked description, and all pens and vials (labels give no colours), show N/A.",
      "Show sources button in the drug detail view: each section lists the guideline table, the NLEM 2569 list and the product label behind it, or says No source recorded.",
      "Thai FDA registration numbers in the drug detail view, each linked to its register record.",
      "New layout matching the Bronchodilator Guide: large title with author and disclaimer link, round version/language/theme buttons, colour guide buttons (two rows of icon tiles on phones), one search/sort/view/Filters row pinned while scrolling, compact filter groups, removable filter chips and a result count.",
      "Drug cards: picture, Select and Details at the top right, class and NLEM tags, ASCVD/HF/CKD badges, a facts box (A1C, weight, hypoglycaemia, kidney, forms, starting dose) and the max dose as the card footer. A click anywhere on a card opens its details.",
      "List view: compact rows with the key facts (replaces the table).",
      "Drug details: one scrolling view of colour-coded sections that fold (dosing, kidney and liver, benefits, safety, Ramadan and pregnancy, patient advice, mechanism), with Expand all / Collapse all; the folds are remembered on this device. Hypoglycaemia risk detail is now shown.",
      "Compare bar at the bottom of the screen; a disclaimer section above the references.",
      "English mode now covers all ten tools (start wizard, insulin, kidney dosing, hypoglycaemia, DKA/HHS, Ramadan, Thai DRS, diabetic foot, GDM, remission): every heading, step, table and result is in English, including the guideline tables they use.",
      "New pictures for the ten tool buttons and their windows: capsule (start drugs), syringe (insulin), kidney, falling blood drop (hypoglycaemia), IV drip (DKA/HHS), crescent and star (Ramadan), risk gauge (Thai DRS), footprint (diabetic foot), pregnant woman (GDM) and falling trend (remission).",
      "Hypoglycaemia tool: on phones the tab row now scrolls, so the third tab (severe hypoglycaemia, IV / glucagon) can be reached.",
      "Phone layout: long drug names on cards now wrap onto a second line instead of being cut off.",
      "Language button shows ไทย / EN as plain text (flag emoji showed as letters on Windows).",
      "Shorter search box hint so it fits on a phone screen.",
      "English mode: card badges, compare button and monograph labels now in English.",
      "English versions of every drug's renal dosing by CKD stage, hepatic dosing, weight effect, hypoglycaemia detail, pregnancy/lactation and patient advice (all 31 drugs), plus English Benefits, Safety, Ramadan and Advice tabs.",
      "Renal dosing rows stack on phones so long advice is not squeezed.",
      "Sitagliptin and rapid-acting insulin: CKD 3a/3b rows now state the eGFR < 50 cut-off clearly instead of quoting a range that did not match the row."
    ],
    featuresTh: [
      "เครื่องมือรอมฎอน: เพิ่มตารางช่วงเวลาด้านบน อธิบาย Suhoor (มื้อก่อนพระอาทิตย์ขึ้น) ช่วงถือศีลอด (พระอาทิตย์ขึ้นถึงตก) และ Iftar (มื้อเย็นเมื่อพระอาทิตย์ตก) ตาม CPG 2566 บทที่ 8 หน้า 89",
      "โหมดสว่าง: ช่องกรอกข้อมูลในเครื่องมือ (เช่น เครื่องคำนวณ DKA/HHS) เป็นสีขาวแม้เปิดในหน้าจอที่ใช้โหมดมืด",
      "เปลี่ยนชื่อเป็น Adult DM Guide",
      "ย้ายตัวกรองบัญชียาหลักไปไว้ข้างตัวกรองทะเบียน อย. (แสดงเมื่อเลือกประเทศไทย) แบบเดียวกับ Bronchodilator Guide",
      "เพิ่มภาพยาอีก 15 รายการจากคำบรรยายลักษณะยา: ยาเม็ด 6 รายการ (Glucophage, Glucophage XR/SR, Minidiab, Diamicron MR, Amaryl, Daonil) จากเอกสารกำกับยาของสหราชอาณาจักร เนเธอร์แลนด์ ออสเตรเลีย และนิวซีแลนด์ และปากกา 9 รายการ (Trulicity, Mounjaro, Humalog, Humulin N, Humulin 70/30, Humalog Mix 75/25, Lantus, Tresiba, Soliqua) จากวิธีใช้ปากกา ส่วนที่ฉลากไม่ระบุสีวาดเป็นเส้นขอบ; Ozempic, Victoza, Actrapid/Humulin R, Toujeo และ Xultophy ยังเป็น N/A (ไม่มีฉลากใดระบุสี)",
      "เพิ่มการ์ดยา 5 รายการตามแนวทางที่มีทะเบียนในไทย: mitiglinide (Glufast), gemigliptin (Zemiglo), alogliptin (Nesina), canagliflozin (Invokana) และ tirzepatide (Mounjaro) จาก CPG 2566 เอกสารกำกับยา และทะเบียนยา อย. ระดับราคาเป็น N/A จนกว่าจะตรวจสอบ",
      "ตัวกรองประเทศ (ทั้งหมด, TH, US, UK, EU, JP) และตัวกรองทะเบียน อย. (ปัจจุบัน, † เคยมี, ⊘ ไม่เคยมี) แบบเดียวกับ Bronchodilator Guide ค่าเริ่มต้น: มีทะเบียนในไทยปัจจุบัน",
      "การ์ดและรายการแสดงชิปสีตามประเทศ: ผู้รับอนุญาตในไทยหรือตัวอย่างผลิตภัณฑ์, † ถ้าทะเบียนถูกยกเลิกหรือเลิกจำหน่าย, ⊘ ถ้าไม่พบ",
      "รายละเอียดยา: เพิ่มหัวข้อทะเบียนยาในแต่ละประเทศ (เลขทะเบียนและผู้รับอนุญาตในไทย และสถานะใน US FDA, UK NHS dm+d, EU EMA/HPRA, ญี่ปุ่น PMDA พร้อมตัวอย่างและแหล่งที่มา)",
      "เกณฑ์การใช้ยาในโรคไตตาม CPG 2566 (ตารางที่ 2 และหน้า 100): ไม่ใช้ dapagliflozin ถ้า eGFR < 25 และไม่ใช้ empagliflozin ถ้า eGFR < 20 ทั้งในการ์ด หน้ารายละเอียด และเครื่องมือโรคไต; sitagliptin 50 มก. ถ้า eGFR 30-50 และ 25 มก. ถ้า < 30",
      "สถานะบัญชียาหลักตามบัญชียาหลักแห่งชาติ พ.ศ. 2569 และรหัสบัญชีย่อย (b บัญชียาพื้นฐาน, ex บัญชียาเฉพาะโรค) พร้อมเงื่อนไขการใช้ metformin XR, gliclazide MR, glimepiride, acarbose, DPP-4 inhibitors, SGLT2 inhibitors, GLP-1 RA, degludec, glargine U300 และยาผสมคงที่ไม่อยู่ในบัญชี; repaglinide, aspart/lispro, ยาผสมสำเร็จรูปของทั้งสอง และ glargine U100 อยู่ในบัญชี ex",
      "ประสิทธิภาพลด A1C ตาม CPG 2566 ตารางที่ 1 (sulfonylurea 1-2%, DPP-4 และ SGLT2 inhibitors 0.8%, GLP-1 RA 1-1.5%)",
      "ตัดข้อความเรื่องขนาดยา pioglitazone ที่ไม่มีในแนวทางเวชปฏิบัติ; เพิ่มปากกา Ozempic 2 มก. ที่มีทะเบียนในไทย",
      "ทำเครื่องหมายชื่อการค้าที่ไม่พบทะเบียนยา อย. ที่ยังคงอยู่ († ทะเบียนถูกยกเลิก, ‡ ไม่พบภายใต้ชื่อนี้) และติดป้าย ไม่พบทะเบียนยาในไทยที่ยังคงอยู่ ที่ NovoNorm, Victoza และ Glucobay",
      "ภาพยามาจากคำบรรยายลักษณะยาในเอกสารกำกับยา (สหรัฐฯ หรือยุโรป) เท่านั้น: วาดเม็ดยา 12 รายการตามสีและรูปร่างที่ระบุ และหน้ารายละเอียดระบุชื่อผลิตภัณฑ์ที่แสดง ยาที่ไม่พบคำบรรยาย รวมถึงปากกาและขวดยาทุกชนิด (ฉลากไม่ระบุสี) แสดงเป็น N/A",
      "ปุ่มแสดงแหล่งที่มาในหน้ารายละเอียดยา: แต่ละหมวดระบุตารางในแนวทางเวชปฏิบัติ บัญชียาหลักแห่งชาติ 2569 และเอกสารกำกับยาที่ใช้อ้างอิง หรือระบุว่ายังไม่มีแหล่งอ้างอิงที่ตรวจสอบแล้ว",
      "เลขทะเบียนยา อย. ในหน้ารายละเอียดยา พร้อมลิงก์ไปยังข้อมูลทะเบียนแต่ละรายการ",
      "หน้าตาใหม่แบบเดียวกับ Bronchodilator Guide: ชื่อแอปขนาดใหญ่พร้อมชื่อผู้จัดทำและลิงก์ข้อจำกัดความรับผิดชอบ ปุ่มกลมสำหรับเวอร์ชัน/ภาษา/ธีม ปุ่มเครื่องมือสี (บนโทรศัพท์เป็นไอคอน 2 แถว) แถวค้นหา/เรียง/มุมมอง/ตัวกรองที่ค้างอยู่ด้านบนเมื่อเลื่อน กลุ่มตัวกรองแบบกะทัดรัด ป้ายตัวกรองที่กดเอาออกได้ และจำนวนผลลัพธ์",
      "การ์ดยา: รูปยา ปุ่มเลือกและรายละเอียดที่มุมขวาบน ป้ายกลุ่มยาและ NLEM ป้าย ASCVD/HF/CKD กล่องข้อมูลสำคัญ (A1C น้ำหนัก น้ำตาลต่ำ ไต รูปแบบยา ขนาดเริ่มต้น) และขนาดยาสูงสุดที่ท้ายการ์ด กดที่ใดก็ได้บนการ์ดเพื่อเปิดรายละเอียด",
      "มุมมองรายการ: แถวกะทัดรัดพร้อมข้อมูลสำคัญ (แทนตาราง)",
      "รายละเอียดยา: หน้าเดียวเลื่อนดูได้ แบ่งเป็นหมวดสีที่พับเก็บได้ (ขนาดยา ไตและตับ ประโยชน์ ความปลอดภัย รอมฎอนและการตั้งครรภ์ คำแนะนำผู้ป่วย กลไกการออกฤทธิ์) พร้อมปุ่มขยาย/ย่อทั้งหมด และจำการพับไว้ในเครื่องนี้ เพิ่มรายละเอียดความเสี่ยงน้ำตาลต่ำ",
      "แถบเปรียบเทียบที่ด้านล่างจอ และหมวดข้อจำกัดความรับผิดชอบก่อนเอกสารอ้างอิง",
      "โหมดภาษาอังกฤษครอบคลุมเครื่องมือทั้ง 10 รายการ (เริ่มยา อินซูลิน ยาในโรคไต น้ำตาลต่ำ DKA/HHS รอมฎอน Thai DRS เท้าเบาหวาน GDM ระยะสงบ): หัวข้อ ขั้นตอน ตาราง และผลลัพธ์ทั้งหมดเป็นภาษาอังกฤษ รวมถึงตารางแนวทางเวชปฏิบัติที่ใช้",
      "ไอคอนใหม่ของปุ่มเครื่องมือทั้ง 10 และหน้าต่างของแต่ละเครื่องมือ: แคปซูลยา (เริ่มยา) กระบอกฉีดยา (อินซูลิน) ไต หยดเลือดลูกศรลง (น้ำตาลต่ำ) ถุงน้ำเกลือ (DKA/HHS) จันทร์เสี้ยวและดาว (รอมฎอน) มาตรวัดความเสี่ยง (Thai DRS) รอยเท้า (เท้าเบาหวาน) หญิงตั้งครรภ์ (GDM) และกราฟลดลง (ระยะสงบ)",
      "เครื่องมือภาวะน้ำตาลต่ำ: บนโทรศัพท์แถบแท็บเลื่อนได้ จึงเปิดแท็บที่ 3 (ภาวะน้ำตาลต่ำรุนแรง IV / glucagon) ได้",
      "หน้าจอโทรศัพท์: ชื่อยายาวบนการ์ดขึ้นบรรทัดใหม่ ไม่ถูกตัดหาย",
      "ปุ่มสลับภาษาแสดงเป็น ไทย / EN (ธงชาติแสดงเป็นตัวอักษรบน Windows)",
      "ข้อความในช่องค้นหาสั้นลง พอดีกับหน้าจอโทรศัพท์",
      "โหมดภาษาอังกฤษ: ป้ายบนการ์ด ปุ่มเปรียบเทียบ และหัวข้อในหน้ารายละเอียดยาเป็นภาษาอังกฤษ",
      "เพิ่มข้อมูลภาษาอังกฤษของยาทั้ง 31 ชนิด: การปรับยาตามระยะโรคไต การปรับยาในโรคตับ ผลต่อน้ำหนัก ความเสี่ยงน้ำตาลต่ำ การตั้งครรภ์/ให้นมบุตร และคำแนะนำผู้ป่วย พร้อมแท็บประโยชน์ ความปลอดภัย รอมฎอน และคำแนะนำเป็นภาษาอังกฤษ",
      "แถวการปรับยาตามระยะโรคไตเรียงซ้อนบนโทรศัพท์ ข้อความไม่ถูกบีบ",
      "Sitagliptin และอินซูลินออกฤทธิ์เร็ว: แถว CKD 3a/3b ระบุจุดตัด eGFR < 50 ให้ชัดเจน แทนช่วงค่าที่ไม่ตรงกับแถว"
    ]
  },
  {
    version: "v1.2.0",
    date: "October 23, 2026",
    dateTh: "23 ตุลาคม 2569",
    features: [
      "Combined Categories & Drug Class accordion filter: clicking on Oral Agents, GLP-1 RA, Insulins, or Combinations expands to reveal its specific drug classes (Biguanides, SUs, DPP-4i, SGLT-2i, TZDs, Basal insulins, etc.).",
      "Rich high-fidelity drug pictures & device SVGs: custom pharmaceutical illustrations for scored oral tablets, prefilled insulin/GLP-1 pens with brand-accurate color caps, and glass vials.",
      "Bronchodilator-style card layout: 'Select' compare button pinned to top-right corner, with 'Details' button directly below it.",
      "Prominent Max Dose (ขนาดยาสูงสุด) badge on all 31 drug cards, detailed monographs, and compare tables based on Thai CPG 2566.",
      "Collapsible 'Filters' toggle button with active filter counter badge.",
      "Dark mode textbox & select styling overhaul: eliminated high-contrast clipping, native select dropdown dark palette, and seamless input borders.",
      "Collapsible References tab at the bottom with 8 authoritative guidelines and citations (CPG 2566, ADA 2024, KDIGO, IDF-DAR, NLEM, Thai DRS)."
    ],
    featuresTh: [
      "รวมหมวดหมู่และกลุ่มยาเป็นระบบ Accordion: เมื่อกดเลือกหมวดหมู่ (ยากิน, GLP-1 RA, อินซูลิน, ยาผสม) จะขยายแสดงกลุ่มยาย่อยทันที เช่น Biguanide, Sulfonylurea, DPP-4i, SGLT-2i, Basal insulin",
      "ภาพจำลองยาและอุปกรณ์ฉีดคุณภาพสูง (Drug Pictures SVG): ออกแบบเม็ดยาพร้อมรอยบากตามกลุ่มยา, ปากกาอินซูลิน/GLP-1 ระบุสีปลอกและปุ่มกดตามยี่ห้อจริง, และขวดยาฉีด 10 มล.",
      "จัดวางปุ่มบนการ์ดยาตามแบบ Bronchodilator Guide: ย้ายปุ่ม 'เลือก' (Select) ไปมุมบนขวา และปุ่ม 'รายละเอียด' (Details) อยู่ด้านล่างตรงกันพอดี",
      "แสดง 'ขนาดยาสูงสุด' (Max Dose) อย่างชัดเจนบนการ์ดยาทุกใบ พร้อมกรอบเน้นสีอำพันและในหน้าต่างเปรียบเทียบ",
      "ปุ่มเปิด-ปิดตัวกรอง (Filters Button) พร้อมตัวเลขแสดงจำนวนตัวกรองที่เปิดใช้งานอยู่",
      "ปรับปรุงกล่องข้อความค้นหาและเมนูเลือกในโหมดมืด (Dark Mode): สีกลมกลืน ไม่ตัดกันจนแสบตา และเมนูตัวเลือกแสดงผลคมชัด",
      "แถบเอกสารอ้างอิงแบบพับเก็บได้ (Collapsible References Tab) ด้านล่างสุด รวบรวมแนวทางเวชปฏิบัติหลัก 8 ฉบับ"
    ]
  },
  {
    version: "v1.1.0",
    date: "October 20, 2026",
    dateTh: "20 ตุลาคม 2569",
    features: [
      "10 Interactive Clinical Guideline Modules based on Thai CPG 2566: Starting Drug Wizard (Diagram 1 & 2), Insulin Titration Calculator, CKD Renal Dose Matrix, Hypoglycemia Rule of 15 Countdown, DKA/HHS Emergency Resuscitation, Ramadan Fasting Assessment, Thai DRS 10-Yr Diabetes Risk Score, Diabetic Foot Ipswich Touch Test, Gestational Diabetes (GDM), and Diabetes Remission Protocol.",
      "Full bilingual Thai and English interface across all tools, tables, and monographs."
    ],
    featuresTh: [
      "เพิ่มเครื่องมือแนวทางเวชปฏิบัติ CPG 2566 ครบทั้ง 10 โมดูล: แผนภูมิ 1 และ 2 การเริ่มยา, เครื่องคำนวณและปรับขนาดอินซูลิน, ตารางปรับยาในโรคไต (eGFR), ตัวจับเวลาภาวะน้ำตาลต่ำ Rule of 15, เครื่องช่วยฟื้นคืนชีพ DKA/HHS, การประเมินรอมฎอน, แบบประเมินความเสี่ยง Thai DRS, การตรวจเท้า Ipswich touch test, เบาหวานขณะตั้งครรภ์ GDM, และแนวทางเบาหวานระยะสงบ (Remission)",
      "รองรับสองภาษา (ไทยและอังกฤษ) อย่างสมบูรณ์ในทุกหน้าจอและทุกฐานข้อมูลยา"
    ]
  },
  {
    version: "v1.0.0",
    date: "October 15, 2026",
    dateTh: "15 ตุลาคม 2569",
    features: [
      "Initial launch of DM Guide 2566 with 31 anti-diabetic medications in Thailand.",
      "Renal dose adjustment thresholds, CV/HF/CKD organoprotective indications, and head-to-head comparison dock."
    ],
    featuresTh: [
      "เปิดตัวแอปพลิเคชัน DM Guide 2566 พร้อมฐานข้อมูลยาเบาหวาน 31 ชนิดในประเทศไทย",
      "ระบบตรวจสอบเกณฑ์การทำงานของไต (eGFR), ข้อบ่งใช้ลดโรคหัวใจและไต, และระบบเปรียบเทียบยาแบบ Head-to-Head"
    ]
  }
];

// Clinical References Data
const REFERENCES = [
  {
    key: 'cpg2566',
    cite: 'สมาคมโรคเบาหวานแห่งประเทศไทยฯ. แนวทางเวชปฏิบัติสำหรับโรคเบาหวาน 2566 (Clinical Practice Guideline for Diabetes 2023). พิมพ์ครั้งที่ 1. กรุงเทพฯ: บริษัท ศรีเมืองการพิมพ์ จำกัด; 2566.',
    url: 'https://www.dmthai.org/',
    usedForEn: 'Primary clinical foundation: Diagram 1 & 2 initiation algorithms, CKD renal matrix, insulin titration, hypoglycemia Rule of 15, DKA/HHS protocol, Ramadan fasting rules, and Ipswich touch test.',
    usedForTh: 'แกนหลักของแนวทางเวชปฏิบัติ: แผนภูมิ 1 และ 2 การเริ่มยา, เกณฑ์ปรับยาในโรคไต CKD, การปรับขนาดอินซูลิน, ภาวะน้ำตาลต่ำ Rule of 15, การดูแล DKA/HHS, การถือศีลอดรอมฎอน, และการตรวจเท้า Ipswich'
  },
  {
    key: 'ada2024',
    cite: 'American Diabetes Association (ADA). Standards of Care in Diabetes—2024. Diabetes Care 2024;47(Suppl. 1):S1-S343.',
    url: 'https://doi.org/10.2337/dc24-S009',
    usedForEn: 'Organoprotective prioritization with SGLT2i and GLP-1 RA in ASCVD, Heart Failure, and Diabetic Kidney Disease.',
    usedForTh: 'การจัดลำดับยาปกป้องอวัยวะ (SGLT2i และ GLP-1 RA) ในผู้ป่วย ASCVD, หัวใจล้มเหลว HF, และโรคไตเรื้อรัง CKD'
  },
  {
    key: 'kdigo2023',
    cite: 'Kidney Disease: Improving Global Outcomes (KDIGO) Diabetes Work Group. KDIGO 2023 Clinical Practice Guideline for the Management of Diabetes in Chronic Kidney Disease. Kidney Int. 2023;104(5S):S1-S127.',
    url: 'https://doi.org/10.1016/j.kint.2023.08.004',
    usedForEn: 'eGFR thresholds for SGLT-2 inhibitor initiation down to 20 mL/min and Metformin safety margins.',
    usedForTh: 'เกณฑ์ระดับ eGFR สำหรับเริ่มใช้และให้ยาต่อของกลุ่ม SGLT2i (จนถึง eGFR ≥ 20) และความปลอดภัยของ Metformin'
  },
  {
    key: 'idf_ramadan',
    cite: 'International Diabetes Federation (IDF) and DAR Global Educational Alliance. Diabetes and Ramadan: Practical Guidelines 2021. Brussels, Belgium: International Diabetes Federation, 2021.',
    url: 'https://www.idf.org/our-activities/education-prevention/diabetes-and-ramadan.html',
    usedForEn: 'Ramadan risk calculation scoring, pre-Ramadan medical assessment, and mealtime insulin dose shifting.',
    usedForTh: 'การคำนวณคะแนนความเสี่ยงรอมฎอน, การตรวจประเมินก่อนถือศีลอด, และการปรับเปลี่ยนเวลาฉีดอินซูลิน'
  },
  {
    key: 'thai_nlem',
    cite: 'คณะกรรมการพัฒนาระบบยาแห่งชาติ. ประกาศคณะกรรมการพัฒนาระบบยาแห่งชาติ เรื่อง บัญชียาหลักแห่งชาติ พ.ศ. 2569. ราชกิจจานุเบกษา; 2569 (National List of Essential Medicines B.E. 2569).',
    url: 'https://ratchakitcha.soc.go.th/documents/111371.pdf',
    usedForEn: 'NLEM status of each drug with its sub-list code (b basic, s supplemental, ex exclusive, R1/R2 special) and listing conditions (section 6.1, drugs used in diabetes).',
    usedForTh: 'สถานะยาในบัญชียาหลักแห่งชาติพร้อมรหัสบัญชีย่อย (b บัญชียาพื้นฐาน, s บัญชียาทางเลือก, ex บัญชียาเฉพาะโรค, R1/R2 บัญชียาพิเศษ) และเงื่อนไขการใช้ (หมวด 6.1 ยาเบาหวาน)'
  },
  {
    key: 'thai_fda',
    cite: 'สำนักงานคณะกรรมการอาหารและยา (อย.). ระบบตรวจสอบการอนุญาตผลิตภัณฑ์ยา (Thai FDA Drug Search System). กระทรวงสาธารณสุข.',
    url: 'https://pertento.fda.moph.go.th/FDA_SEARCH_DRUG/SEARCH_DRUG/FRM_SEARCH_DRUG.aspx',
    usedForEn: 'Approved generic and trade brand names, strength formulations, and dosage forms marketed in Thailand.',
    usedForTh: 'ชื่อการค้า, รูปแบบยา, ขนาดความแรง, และทะเบียนตำรับยาที่มีจำหน่ายจริงในประเทศไทย'
  },
  {
    key: 'thai_drs',
    cite: 'Aekplakorn W, Bunnag P, Woodward M, et al. A risk score for predicting incident diabetes in the Thai population. Diabetes Care. 2006;29(8):1872-1877.',
    url: 'https://doi.org/10.2337/dc06-0370',
    usedForEn: 'Thai Diabetes Risk Score (Thai DRS) 10-year risk prediction model and lifestyle intervention thresholds.',
    usedForTh: 'แบบประเมินความเสี่ยงต่อการเกิดโรคเบาหวานในคนไทย 10 ปี (Thai DRS) และเกณฑ์การปรับเปลี่ยนพฤติกรรม'
  },
  {
    key: 'ipswich_test',
    cite: 'Rayman G, Vas PR, Baker N, et al. The Ipswich Touch Test: a simple and novel method to identify inpatients with diabetes at risk of foot ulceration. Diabetes Care. 2011;34(7):1517-1518.',
    url: 'https://doi.org/10.2337/dc11-0156',
    usedForEn: 'Standardized 6-toe touch test for screening loss of protective sensation (LOPS) in diabetic peripheral neuropathy.',
    usedForTh: 'การตรวจความรู้สึกของนิ้วเท้า 6 จุด (Ipswich Touch Test) เพื่อคัดกรองภาวะสูญเสียความรู้สึกป้องกันตนเอง (LOPS)'
  }
];

// --- Collapsible References Component (Bronchodilator Style) ---
const ReferencesSection = ({ t, lang }) => {
  const [open, setOpen] = useState(false);
  return (
    <section className="mt-10 md:mt-14 pt-6 border-t border-slate-200 dark:border-slate-800 print:hidden" aria-labelledby="refs-heading">
      <h2 id="refs-heading" className="text-sm font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          className="w-full flex items-center justify-between gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors shadow-sm"
        >
          <span className="uppercase tracking-wider flex items-center gap-2">
            <BookOpenIcon className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            <span>{t.refTitle}</span>
            <span className="text-slate-400 font-bold normal-case tracking-normal">({REFERENCES.length})</span>
          </span>
          <span className={`text-slate-400 transition-transform duration-200 text-sm ${open ? 'rotate-180' : ''}`} aria-hidden="true">
            ▾
          </span>
        </button>
      </h2>

      {open && (
        <div className="mt-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-sm animate-in fade-in zoom-in-95">
          <ol className="flex flex-col gap-3.5">
            {REFERENCES.map((r, i) => (
              <li key={r.key} className="flex gap-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-b border-slate-100 dark:border-slate-800/80 pb-3 last:border-b-0 last:pb-0">
                <span className="shrink-0 font-bold text-teal-600 dark:text-teal-400 tabular-nums w-5 text-right">{i + 1}.</span>
                <span className="min-w-0 flex-1">
                  <span className="font-medium text-slate-800 dark:text-slate-200">{r.cite}</span>
                  {r.url && (
                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="ml-1 text-teal-600 dark:text-teal-400 hover:underline break-all inline-flex items-center gap-0.5">
                      <span>[{r.url}]</span>
                      <ExternalLinkIcon className="w-3 h-3 inline" />
                    </a>
                  )}
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                    <strong className="text-slate-700 dark:text-slate-300">{t.refUsedFor}:</strong> {lang === 'th' ? r.usedForTh : r.usedForEn}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </section>
  );
};

// --- Update Changelog Modal (Bronchodilator Style) ---
const ChangelogModal = ({ isOpen, onClose, lang, t }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95">
        {/* Modal Header */}
        <div className="px-5 sm:px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-teal-100 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 rounded-xl">
              <HistoryIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                {t.changelogTitle}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {t.changelogSub}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-slate-800 rounded-full transition-colors"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Changelog entries list */}
        <div className="p-4 sm:p-6 flex-grow overflow-y-auto space-y-5 bg-slate-50/50 dark:bg-slate-900/40">
          {changelogData.map((log, idx) => {
            const feats = lang === 'th' ? log.featuresTh : log.features;
            return (
              <div key={idx} className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-5 shadow-sm relative overflow-hidden">
                {idx === 0 && (
                  <div className="absolute top-0 right-0 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-widest border-b border-l border-emerald-200 dark:border-emerald-800">
                    {t.latest}
                  </div>
                )}
                <div className="flex items-baseline justify-between mb-3 border-b border-slate-100 dark:border-slate-700/80 pb-2.5">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                    {log.version}
                  </h3>
                  <span className="text-xs font-bold text-slate-400">
                    {lang === 'th' ? log.dateTh : log.date}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <SparklesIcon className="w-3.5 h-3.5" />
                    <span>{t.newFeatures}</span>
                  </span>
                  <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1.5 pl-5 list-disc leading-relaxed">
                    {feats.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---
function App() {
  const [lang, setLang] = useState('th');

  // Theme state
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('dmg-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    } catch (e) {}
    const stamped = document.documentElement.getAttribute('data-theme');
    if (stamped === 'light' || stamped === 'dark') return stamped;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('dmg-theme', next); } catch (e) {}
  };

  const t = translations[lang];
  DM_LANG = lang; // tool windows read this through tx() / GD()

  // Filters State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all', 'oral', 'glp1', 'insulin', 'combo'
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedClinicalFilters, setSelectedClinicalFilters] = useState([]); // 'ascvd', 'hf', 'ckd', 'weight_loss', 'weight_neutral', 'hypo_safe', 'nlem'
  const [sortOrder, setSortOrder] = useState('nameAsc');
  // Countries: drugs registered in any selected country are shown (default Thailand); each country is its own switch
  const [countries, setCountries] = useState(['th']);
  const toggleCountry = (r) => setCountries((prev) => (prev.includes(r) ? prev.filter((x) => x !== r) : REG_COUNTRIES.filter((x) => x === r || prev.includes(x))));
  const allCountries = countries.length === REG_COUNTRIES.length;
  const toggleAllCountries = () => setCountries(allCountries ? [] : [...REG_COUNTRIES]);
  // Registration status in the selected countries: Currently by default; at least one status stays on
  const REG_STATUSES = ['current', 'past', 'never'];
  const L_NLEM_TITLE = { th: 'บัญชียาหลักแห่งชาติ พ.ศ. 2569', en: 'Thai National List of Essential Medicines B.E. 2569' };
  const [regStatus, setRegStatus] = useState(['current']);
  // NLEM is Thailand's list, so the switch sits beside the FDA filter and only applies while Thailand is selected
  const [nlemOnly, setNlemOnly] = useState(false);
  const toggleRegStatus = (k) => setRegStatus((prev) => (prev.includes(k) ? (prev.length > 1 ? prev.filter((x) => x !== k) : prev) : REG_STATUSES.filter((x) => x === k || prev.includes(x))));
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [searchOpen, setSearchOpen] = useState(false); // phones: the search box opens across the row
  const searchRef = useRef(null);
  useEffect(() => { if (searchOpen && searchRef.current) searchRef.current.focus(); }, [searchOpen]);
  const [filtersOpen, setFiltersOpen] = useState(() => !(typeof window !== 'undefined' && window.innerWidth < 640));

  // Comparison State
  const [compareList, setCompareList] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Detail Modal State
  const [selectedDrugDetail, setSelectedDrugDetail] = useState(null);

  // Changelog Modal State
  const [isChangelogOpen, setIsChangelogOpen] = useState(false);

  // Clinical Guideline Modals State
  const [isStartingWizardOpen, setIsStartingWizardOpen] = useState(false);
  const [isInsulinCalcOpen, setIsInsulinCalcOpen] = useState(false);
  const [isCkdMatrixOpen, setIsCkdMatrixOpen] = useState(false);
  const [isHypoOpen, setIsHypoOpen] = useState(false);
  const [isDkaHhsOpen, setIsDkaHhsOpen] = useState(false);
  const [isRamadanOpen, setIsRamadanOpen] = useState(false);
  const [isThaiDrsOpen, setIsThaiDrsOpen] = useState(false);
  const [isFootCareOpen, setIsFootCareOpen] = useState(false);
  const [isGdmOpen, setIsGdmOpen] = useState(false);
  const [isRemissionOpen, setIsRemissionOpen] = useState(false);

  // Categories definition
  const CATEGORIES = [
    { key: 'all', label: t.allCategories, icon: null },
    { key: 'oral', label: t.oralMeds, icon: PillIcon },
    { key: 'glp1', label: t.glp1Meds, icon: PenSvg },
    { key: 'insulin', label: t.insulinMeds, icon: SyringeIcon },
    { key: 'combo', label: t.comboMeds, icon: ArrowRightLeft }
  ];

  // Map of classes grouped by category (Combined Categories & Classes architecture)
  const classesByCategory = useMemo(() => {
    const map = { oral: [], glp1: [], insulin: [], combo: [] };
    antiDmDrugs.forEach(d => {
      const cat = d.category || 'oral';
      if (!map[cat]) map[cat] = [];
      if (!map[cat].some(c => c.key === d.classKey)) {
        map[cat].push({
          key: d.classKey,
          nameEn: d.classNameEn,
          nameTh: d.classNameTh,
          color: d.color,
          category: cat
        });
      }
    });
    return map;
  }, []);

  // Distinct classes for pills
  const availableClasses = useMemo(() => {
    if (selectedCategory === 'all') {
      const all = [];
      Object.values(classesByCategory).forEach(arr => all.push(...arr));
      return all;
    }
    return classesByCategory[selectedCategory] || [];
  }, [selectedCategory, classesByCategory]);

  // Active filter count for badge
  const activeFilterCount = (selectedCategory !== 'all' ? 1 : 0) +
    (countries.join() !== 'th' ? 1 : 0) + (regStatus.join() !== 'current' ? 1 : 0) + (nlemOnly && countries.includes('th') ? 1 : 0) +
    selectedClasses.length +
    selectedClinicalFilters.length;

  // Toggle Compare Helper
  const toggleCompare = (drug) => {
    if (compareList.some(d => d.id === drug.id)) {
      setCompareList(prev => prev.filter(d => d.id !== drug.id));
    } else {
      if (compareList.length >= 4) {
        alert(t.compareLimitMsg);
        return;
      }
      setCompareList(prev => [...prev, drug]);
    }
  };

  const removeFromCompare = (id) => {
    setCompareList(prev => prev.filter(d => d.id !== id));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const handleSelectCategory = (catKey) => {
    setSelectedCategory(catKey);
    // When changing category, clear specific class filters that do not belong to this category
    if (catKey !== 'all') {
      const allowed = (classesByCategory[catKey] || []).map(c => c.key);
      setSelectedClasses(prev => prev.filter(k => allowed.includes(k)));
    }
  };

  const toggleClass = (key) => {
    setSelectedClasses(prev => 
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const clearCategoryClasses = () => {
    if (selectedCategory === 'all') {
      setSelectedClasses([]);
    } else {
      const allowed = (classesByCategory[selectedCategory] || []).map(c => c.key);
      setSelectedClasses(prev => prev.filter(k => !allowed.includes(k)));
    }
  };

  const toggleClinicalFilter = (key) => {
    setSelectedClinicalFilters(prev => 
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedClasses([]);
    setSelectedClinicalFilters([]);
    setCountries(['th']);
    setRegStatus(['current']);
    setNlemOnly(false);
    setSortOrder('nameAsc');
  };

  // Filter & Search Logic
  const filteredDrugs = useMemo(() => {
    return antiDmDrugs.filter(d => {
      // 1. Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchGeneric = d.genericName.toLowerCase().includes(query);
        const matchGenericTh = d.genericNameTh.toLowerCase().includes(query);
        const matchBrand = d.brandNames.some(b => b.toLowerCase().includes(query));
        const matchClass = d.classNameEn.toLowerCase().includes(query) || d.classNameTh.toLowerCase().includes(query);
        const matchMech = d.mechanismEn.toLowerCase().includes(query) || d.mechanismTh.toLowerCase().includes(query);
        if (!matchGeneric && !matchGenericTh && !matchBrand && !matchClass && !matchMech) return false;
      }

      // Registration: some selected country has one of the selected statuses
      if (!countries.some((r) => regStatus.includes(regOf(d, r).s))) return false;
      if (nlemOnly && countries.includes('th') && !d.nlem) return false;

      // 2. Main category
      if (selectedCategory !== 'all') {
        if (d.category !== selectedCategory) return false;
      }

      // 3. Class filter
      if (selectedClasses.length > 0) {
        if (!selectedClasses.includes(d.classKey)) return false;
      }

      // 4. Clinical priority filters
      if (selectedClinicalFilters.length > 0) {
        for (const cf of selectedClinicalFilters) {
          if (cf === 'ascvd' && !d.cvBenefit) return false;
          if (cf === 'hf' && !d.hfBenefit) return false;
          if (cf === 'ckd' && !d.ckdBenefit) return false;
          if (cf === 'weight_loss' && d.weightEffect !== 'loss') return false;
          if (cf === 'weight_neutral' && d.weightEffect !== 'neutral') return false;
          if (cf === 'hypo_safe' && d.hypoRisk !== 'very_low' && d.hypoRisk !== 'low') return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortOrder === 'nameAsc') return a.genericName.localeCompare(b.genericName);
      if (sortOrder === 'priceAsc') return (a.priceLevel == null ? 99 : a.priceLevel) - (b.priceLevel == null ? 99 : b.priceLevel) || a.genericName.localeCompare(b.genericName);
      if (sortOrder === 'class') return a.classNameEn.localeCompare(b.classNameEn);
      if (sortOrder === 'a1cDesc') {
        const aVal = parseFloat(a.a1cReduction) || 0;
        const bVal = parseFloat(b.a1cReduction) || 0;
        return bVal - aVal;
      }
      return 0;
    });
  }, [searchTerm, selectedCategory, selectedClasses, selectedClinicalFilters, sortOrder, countries, regStatus, nlemOnly]);

  // Guide (clinical tool) buttons: key, full name, colour, icon, opener
  const GUIDES = [
    ['start', t.toolStartingWizard, 'bg-teal-600 hover:bg-teal-700 border-teal-700', GuideStartIcon, () => setIsStartingWizardOpen(true)],
    ['insulin', t.toolInsulinCalc, 'bg-blue-600 hover:bg-blue-700 border-blue-700', GuideInsulinIcon, () => setIsInsulinCalcOpen(true)],
    ['ckd', t.toolCkdMatrix, 'bg-emerald-600 hover:bg-emerald-700 border-emerald-700', GuideKidneyIcon, () => setIsCkdMatrixOpen(true)],
    ['hypo', t.toolHypo, 'bg-amber-600 hover:bg-amber-700 border-amber-700', GuideHypoIcon, () => setIsHypoOpen(true)],
    ['dka', t.toolDkaHhs, 'bg-rose-600 hover:bg-rose-700 border-rose-700', GuideDkaIcon, () => setIsDkaHhsOpen(true)],
    ['ramadan', t.toolRamadan, 'bg-indigo-600 hover:bg-indigo-700 border-indigo-700', GuideRamadanIcon, () => setIsRamadanOpen(true)],
    ['drs', t.toolThaiDrs, 'bg-cyan-700 hover:bg-cyan-800 border-cyan-800', GuideDrsIcon, () => setIsThaiDrsOpen(true)],
    ['foot', t.toolFoot, 'bg-slate-700 hover:bg-slate-800 border-slate-800', GuideFootIcon, () => setIsFootCareOpen(true)],
    ['gdm', t.toolGdm, 'bg-pink-600 hover:bg-pink-700 border-pink-700', GuideGdmIcon, () => setIsGdmOpen(true)],
    ['remission', t.toolRemission, 'bg-violet-600 hover:bg-violet-700 border-violet-700', GuideRemissionIcon, () => setIsRemissionOpen(true)]
  ];

  const CLINICAL = [
    ['ascvd', t.ascvdFilter, 'bg-rose-600 text-white shadow-sm', 'text-rose-700 hover:bg-rose-50 dark:text-rose-300 dark:hover:bg-slate-700'],
    ['hf', t.hfFilter, 'bg-sky-600 text-white shadow-sm', 'text-sky-700 hover:bg-sky-50 dark:text-sky-300 dark:hover:bg-slate-700'],
    ['ckd', t.ckdFilter, 'bg-emerald-600 text-white shadow-sm', 'text-emerald-700 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-slate-700'],
    ['weight_loss', t.weightLossFilter, 'bg-purple-600 text-white shadow-sm', 'text-purple-700 hover:bg-purple-50 dark:text-purple-300 dark:hover:bg-slate-700'],
    ['hypo_safe', t.hypoSafeFilter, 'bg-teal-600 text-white shadow-sm', 'text-teal-700 hover:bg-teal-50 dark:text-teal-300 dark:hover:bg-slate-700']
  ];

  // Active filters as removable chips
  const classByKey = {};
  Object.values(classesByCategory).forEach((arr) => arr.forEach((c) => { classByKey[c.key] = c; }));
  const filterChips = [
    ...(searchTerm.trim() ? [{ key: 'q', label: '"' + searchTerm.trim() + '"', off: () => setSearchTerm('') }] : []),
    ...(countries.join() !== 'th' ? [{ key: 'countries', label: t.countriesLabel + ': ' + (countries.length ? countries.map((r) => t.countryCodes[r]).join(', ') : (lang === 'th' ? 'ไม่มี' : 'none')), off: () => setCountries(['th']) }] : []),
    ...(regStatus.join() !== 'current' ? [{ key: 'reg', label: t.regLabel + ': ' + regStatus.map((k) => t.regOpts[k]).join(', '), off: () => setRegStatus(['current']) }] : []),
    ...(nlemOnly && countries.includes('th') ? [{ key: 'nlem', label: t.nlemOnly, off: () => setNlemOnly(false) }] : []),
    ...(selectedCategory !== 'all' ? [{ key: 'cat', label: (CATEGORIES.find((c) => c.key === selectedCategory) || {}).label, off: () => setSelectedCategory('all') }] : []),
    ...selectedClasses.map((k) => ({ key: 'cls-' + k, label: classByKey[k] ? (lang === 'th' ? classByKey[k].nameTh.split('(')[0].trim() : classByKey[k].nameEn) : k, off: () => toggleClass(k) })),
    ...selectedClinicalFilters.map((k) => ({ key: 'cf-' + k, label: (CLINICAL.find((c) => c[0] === k) || [k, k])[1], off: () => toggleClinicalFilter(k) }))
  ];

  const segBox = 'flex flex-wrap bg-white dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm items-center min-h-[26px] md:min-h-[28px] gap-0.5 max-w-full';
  const segLabel = 'pl-1 pr-0.5 text-[10px] font-bold text-slate-400 whitespace-nowrap';
  const segBtn = 'min-h-[22px] md:min-h-[24px] px-1.5 md:px-2 rounded flex items-center justify-center gap-1 text-[10px] font-bold transition-all text-left';

  const guideButton = ([k, label, tone, Icon, open], phone) => (
    <button key={k} onClick={open} data-guide={k} aria-label={label} title={label}
      className={phone
        ? `flex flex-col items-center justify-center gap-0.5 min-w-0 ${tone} border text-white px-0.5 py-1.5 rounded-lg font-bold shadow-sm active:scale-95 transition-all`
        : `flex items-center justify-center gap-1.5 ${tone} border text-white px-3 py-2 rounded-lg font-bold shadow-sm transition-all active:scale-95 text-xs md:text-sm whitespace-nowrap`}>
      <Icon className={phone ? 'w-4 h-4 shrink-0' : 'w-3.5 h-3.5 md:w-4 md:h-4 shrink-0'} />
      <span className={phone ? 'text-[10px] leading-[1.15] text-center max-w-full break-words' : ''}>{phone ? t.guideShort[k] : t.guide[k]}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-100 px-3 sm:px-4 md:px-6 pt-3 md:pt-6 pb-32">
      <div className="max-w-6xl mx-auto relative pt-10 md:pt-0" id="main-app-container">

        {/* Top-right controls: version, language, theme */}
        <div className="absolute top-0 right-0 flex items-center gap-1.5 md:gap-2 z-20" data-top-controls>
          <button onClick={() => setIsChangelogOpen(true)} title={t.changelogBtn} data-version
            className="text-[10px] font-bold text-slate-500 dark:text-slate-300 bg-white dark:bg-slate-800 shadow-sm px-2.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 hover:bg-slate-50 hover:text-teal-700 hover:border-teal-200 dark:hover:bg-slate-700 transition-all">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {APP_VERSION}
          </button>
          <button onClick={() => setLang(lang === 'th' ? 'en' : 'th')} title={t.langSwitch} aria-label={t.langSwitch}
            className="text-[10px] md:text-xs font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 shadow-sm px-2.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
            {lang === 'th' ? 'ไทย' : 'EN'}
          </button>
          <button onClick={toggleTheme} aria-label={theme === 'dark' ? t.themeToLight : t.themeToDark} title={theme === 'dark' ? t.themeToLight : t.themeToDark}
            className="w-7 h-7 text-slate-600 dark:text-amber-300 bg-white dark:bg-slate-800 shadow-sm rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
            {theme === 'dark' ? <SunIcon className="w-3.5 h-3.5" /> : <MoonIcon className="w-3.5 h-3.5" />}
          </button>
        </div>

        <header className="mb-3 md:mb-4">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 dark:text-white mb-1 md:mb-2 leading-tight sm:pr-48">
            {t.title} <span className="align-middle text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800 border border-teal-200 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-800">CPG 2566</span>
          </h1>
          <p className="hidden sm:block text-xs md:text-sm text-slate-600 dark:text-slate-300" data-subtitle>{t.subtitle}</p>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 sm:block" data-credit-line>
            <p className="text-[10px] md:text-xs font-semibold text-indigo-500 dark:text-indigo-300 sm:mt-1">Made by Warodom Phaenthong, M.D.</p>
            <a href="#disclaimer-heading" onClick={(e) => { e.preventDefault(); const el = document.getElementById('disclaimer-heading'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
              className="block sm:mt-1 text-[11px] md:text-xs font-semibold text-amber-700 dark:text-amber-300 hover:underline">{t.discLink}</a>
          </div>
        </header>

        {/* Phones: guides as two rows of icon tiles (scroll away with the page) */}
        <div className="grid grid-cols-5 gap-1 sm:hidden mb-2" data-guide-buttons="phone">
          {GUIDES.map((g) => guideButton(g, true))}
        </div>

        {/* Guides (tablet up) and the search row: pinned */}
        <div className="sticky top-0 z-30 pt-2 pb-2 md:pt-3 md:pb-2.5 -mt-2 md:-mt-3 bg-slate-100/95 dark:bg-slate-950/95 backdrop-blur-md" data-search-bar>
          <div className="hidden sm:flex sm:flex-wrap sm:items-center sm:gap-2 w-full mb-2" data-guide-buttons="wide">
            {GUIDES.map((g) => guideButton(g, false))}
          </div>

          <div className="flex gap-2 md:gap-3 w-full h-9 md:h-10">
            <button onClick={() => setSearchOpen(true)} aria-label={t.searchOpen} title={t.searchOpen} aria-expanded={searchOpen} data-search-open
              className={`${searchOpen ? 'hidden' : 'flex sm:hidden'} shrink-0 h-full w-9 items-center justify-center rounded-lg border shadow-sm transition-colors ${searchTerm !== '' ? 'bg-teal-600 border-teal-600 text-white' : 'bg-white border-slate-200 text-slate-600 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'}`}>
              <SearchIcon className="w-4 h-4" />
            </button>
            <div className={`${searchOpen ? 'block flex-1' : 'hidden sm:block'} relative min-w-0 sm:flex-none sm:w-[45%] md:w-[38%] lg:w-1/3 h-full`} data-search-box>
              <input ref={searchRef} type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder={t.searchPlaceholder}
                onBlur={() => setSearchOpen(false)} onKeyDown={(e) => { if (e.key === 'Enter') e.currentTarget.blur(); }}
                className="w-full h-full pl-3 pr-9 md:pl-4 md:pr-10 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white dark:bg-slate-800 text-base sm:text-xs md:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 transition-shadow" />
              <SearchIcon className="hidden sm:block absolute right-2.5 md:right-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5 md:w-4 md:h-4 pointer-events-none" />
              <button onMouseDown={(e) => e.preventDefault()} onClick={() => { setSearchTerm(''); setSearchOpen(false); if (searchRef.current) searchRef.current.blur(); }} aria-label={t.searchClose} title={t.searchClose}
                className="flex sm:hidden absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"><XIcon className="w-4 h-4" /></button>
            </div>

            <div className={`${searchOpen ? 'hidden sm:block' : 'block'} relative flex-1 min-w-0 h-full`} data-sort>
              <div className="absolute inset-y-0 left-0 pl-2 sm:pl-2.5 flex items-center pointer-events-none">
                <SortIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-slate-400" />
              </div>
              <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} aria-label={t.sortLabel}
                className="w-full h-full pl-6 pr-1 sm:pl-8 sm:pr-6 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-200 text-[11px] md:text-xs font-bold appearance-none cursor-pointer">
                <option value="nameAsc">{t.sortByName}</option>
                <option value="a1cDesc">{t.sortByA1c}</option>
                <option value="priceAsc">{t.sortByPrice}</option>
                <option value="class">{t.sortByClass}</option>
              </select>
            </div>

            <div className={`${searchOpen ? 'hidden sm:flex' : 'flex'} bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-0.5 shadow-sm shrink-0 items-center h-full`}>
              <button onClick={() => setViewMode('grid')} aria-label={t.gridView} title={t.gridView} aria-pressed={viewMode === 'grid'}
                className={`h-full px-2 md:px-2.5 rounded-md transition-colors flex items-center justify-center ${viewMode === 'grid' ? 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-white' : 'text-slate-400 hover:text-slate-600'}`}>
                <LayoutGridIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </button>
              <button onClick={() => setViewMode('list')} aria-label={t.listView} title={t.listView} aria-pressed={viewMode === 'list'}
                className={`h-full px-2 md:px-2.5 rounded-md transition-colors flex items-center justify-center ${viewMode === 'list' ? 'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-white' : 'text-slate-400 hover:text-slate-600'}`}>
                <ListIcon className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </button>
            </div>

            <button onClick={() => setFiltersOpen((v) => !v)} aria-expanded={filtersOpen} aria-controls="filter-bar" aria-label={t.filtersBtn} title={t.filtersBtn} data-filters-toggle
              className={`shrink-0 h-full px-2 md:px-3 rounded-lg border shadow-sm flex items-center gap-1 md:gap-1.5 text-[10px] md:text-xs font-bold whitespace-nowrap transition-colors ${activeFilterCount ? 'bg-teal-600 border-teal-600 text-white hover:bg-teal-500' : filtersOpen ? 'bg-slate-200 border-slate-300 text-slate-900 dark:bg-slate-700 dark:border-slate-600 dark:text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300'}`}>
              <FilterIcon className="w-3 h-3 md:w-3.5 md:h-3.5" />
              <span className="max-[359px]:hidden">{t.filtersBtn}</span>{activeFilterCount > 0 && <span className="tabular-nums" data-filter-count>{activeFilterCount}</span>}
            </button>
          </div>
        </div>

        {/* Filter groups: compact segments that wrap; shown while opened with the Filters button */}
        <div id="filter-bar" className={`${filtersOpen ? 'flex' : 'hidden'} flex-col gap-2 md:gap-2.5 pb-2 md:pb-3 mb-3 md:mb-4 border-b border-slate-200 dark:border-slate-800`} data-filter-bar>
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2 w-full min-w-0" data-filter-row="registration">
            <div className={segBox} role="group" aria-label={t.countriesLabel} data-country-group>
              <span className={segLabel}>{t.countriesLabel}:</span>
              <button onClick={toggleAllCountries} aria-pressed={allCountries} data-country-all
                className={`${segBtn} whitespace-nowrap ${allCountries ? 'bg-slate-700 text-white shadow-sm dark:bg-slate-200 dark:text-slate-900' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700'}`}>
                {t.countriesAll}
              </button>
              {REG_COUNTRIES.map((r) => (
                <button key={r} onClick={() => toggleCountry(r)} aria-pressed={countries.includes(r)} title={t.countryNames[r]} data-country={r}
                  className={`${segBtn} whitespace-nowrap ${countries.includes(r) ? COUNTRY_COLORS[r].on : COUNTRY_COLORS[r].off}`}>
                  {t.countryCodes[r]}
                </button>
              ))}
            </div>
            <div className={segBox} role="group" aria-label={t.regLabel} title={t.regTitle} data-reg-group>
              <span className={`${segLabel} inline-flex items-center gap-0.5`}>{t.regLabel}<CheckIcon className="w-2.5 h-2.5 md:w-3 md:h-3 text-emerald-600 dark:text-emerald-400" /></span>
              {REG_STATUSES.map((k) => {
                const on = regStatus.includes(k);
                const tone = k === 'current' ? ['bg-emerald-600 text-white shadow-sm', 'text-emerald-700 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-slate-700']
                  : k === 'past' ? ['bg-amber-500 text-white shadow-sm', 'text-amber-700 hover:bg-amber-50 dark:text-amber-300 dark:hover:bg-slate-700']
                  : ['bg-slate-600 text-white shadow-sm', 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700'];
                return (
                  <button key={k} onClick={() => toggleRegStatus(k)} aria-pressed={on} data-reg={k}
                    className={`${segBtn} whitespace-nowrap ${on ? tone[0] : tone[1]}`}>
                    {k !== 'current' && <span aria-hidden="true">{k === 'past' ? '†' : '⊘'}</span>}{t.regOpts[k]}
                  </button>
                );
              })}
            </div>
            {countries.includes('th') && (
              <div className={segBox} data-nlem-group>
                <button onClick={() => setNlemOnly((v) => !v)} aria-pressed={nlemOnly} title={L_NLEM_TITLE[lang]} data-nlem-filter
                  className={`${segBtn} whitespace-nowrap ${nlemOnly ? 'bg-emerald-600 text-white shadow-sm' : 'text-emerald-700 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-slate-700'}`}>
                  <CheckIcon className="w-2.5 h-2.5 md:w-3 md:h-3" /> {t.nlemOnly}
                </button>
              </div>
            )}
          </div>

          <div className={segBox} role="group" aria-label={t.typeLabel} data-filter-row="type">
            <span className={segLabel}>{t.typeLabel}:</span>
            {CATEGORIES.map((cat) => {
              const on = selectedCategory === cat.key;
              return (
                <button key={cat.key} onClick={() => handleSelectCategory(cat.key)} aria-pressed={on}
                  className={`${segBtn} ${on ? 'bg-slate-700 text-white shadow-sm dark:bg-slate-200 dark:text-slate-900' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700'}`}>
                  {cat.key === 'all' ? t.allShort : cat.label}
                  {cat.key !== 'all' && classesByCategory[cat.key] && <span className="opacity-60 tabular-nums">{antiDmDrugs.filter((d) => d.category === cat.key).length}</span>}
                </button>
              );
            })}
          </div>

          {(selectedCategory !== 'all' || selectedClasses.length > 0) && (
          <div className={segBox} role="group" aria-label={t.classLabel} data-filter-row="class">
            <span className={segLabel}>{t.classLabel}:</span>
            {availableClasses.map((cls) => {
              const on = selectedClasses.includes(cls.key);
              return (
                <button key={cls.key} onClick={() => toggleClass(cls.key)} aria-pressed={on}
                  className={`${segBtn} ${on ? 'bg-slate-800 text-white shadow-sm dark:bg-white dark:text-slate-900' : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-700'}`}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: cls.color }} />
                  {lang === 'th' ? cls.nameTh.split('(')[0].trim() : cls.nameEn}
                </button>
              );
            })}
          </div>

          )}

          <div className={segBox} role="group" aria-label={t.benefitLabel} data-filter-row="clinical">
            <span className={segLabel}>{t.benefitLabel}:</span>
            {CLINICAL.map(([k, label, onCls, offCls]) => {
              const on = selectedClinicalFilters.includes(k);
              return (
                <button key={k} onClick={() => toggleClinicalFilter(k)} aria-pressed={on} className={`${segBtn} ${on ? onCls : offCls}`}>
                  {on && <CheckIcon className="w-2.5 h-2.5" />}{label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active filter chips, then the result count */}
        <div className={`${filtersOpen ? '' : 'mt-1 md:mt-1.5'} mb-2 md:mb-3 px-0.5`}>
          {filterChips.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 mb-1.5" role="group" data-active-filters>
              <button onClick={resetFilters} title={t.clearFilters} data-clear-filters
                className="shrink-0 min-h-[26px] px-2.5 rounded-full border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300 shadow-sm inline-flex items-center gap-1 text-[11px] font-bold whitespace-nowrap transition-colors">
                <XIcon className="w-3 h-3" /> {t.clearShort}
              </button>
              {filterChips.map((c) => (
                <button key={c.key} onClick={c.off} title={t.chipRemove(c.label)} aria-label={t.chipRemove(c.label)} data-chip={c.key}
                  className="max-w-full min-h-[26px] inline-flex items-center gap-1 pl-2.5 pr-1.5 py-0.5 rounded-full border border-teal-200 bg-teal-50 text-teal-800 hover:bg-teal-100 dark:border-teal-900 dark:bg-teal-950 dark:text-teal-300 text-[11px] font-bold leading-tight text-left transition-colors">
                  <span className="break-words min-w-0">{c.label}</span><XIcon className="w-3 h-3 shrink-0 opacity-60" />
                </button>
              ))}
            </div>
          )}
          <div className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400" aria-live="polite" data-count>
            {t.countShowing} <span className="font-bold text-slate-800 dark:text-slate-100 tabular-nums">{filteredDrugs.length}</span> {t.countOf} <span className="font-bold text-slate-800 dark:text-slate-100 tabular-nums">{antiDmDrugs.length}</span> {t.countDrugs}
          </div>
        </div>

        {filteredDrugs.length === 0 ? (
          <div className="py-12 md:py-16 text-center text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-800 border-dashed">
            <SearchIcon className="w-8 h-8 md:w-10 md:h-10 text-slate-300 mx-auto mb-3 md:mb-4" />
            <p className="text-base md:text-lg font-medium" data-empty-note>{countries.length ? t.noMeds : t.noCountry}</p>
            <button onClick={resetFilters} className="mt-2 text-teal-700 dark:text-teal-300 hover:underline text-sm md:text-base">{t.clearFilters}</button>
          </div>
        ) : (
          <div id="printable-drug-list" className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5' : 'flex flex-col gap-2 md:gap-3'}>
            {filteredDrugs.map((drug) => {
              const Comp = viewMode === 'grid' ? DrugCard : DrugListRow;
              return (
                <Comp key={drug.id} drug={drug} lang={lang} isCompared={compareList.some((d) => d.id === drug.id)}
                  onToggleCompare={toggleCompare} onSelectDetail={(d) => setSelectedDrugDetail(d)} regions={countries} />
              );
            })}
          </div>
        )}

        <DisclaimerSection t={t} />
        <ReferencesSection t={t} lang={lang} />
      </div>

      {/* Compare bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 p-2 sm:p-4 flex justify-center pointer-events-none">
          <div className="pointer-events-auto bg-slate-900 text-white px-2.5 py-2 rounded-xl shadow-2xl flex flex-wrap items-center gap-1.5 w-full max-w-3xl border border-slate-700 animate-in slide-in-from-bottom-4" data-select-bar>
            <span className="text-[11px] font-bold text-slate-300 px-1">{t.compareBarLabel}:</span>
            {compareList.map((d) => (
              <span key={d.id} className="inline-flex items-center gap-1 pl-2 pr-1 py-0.5 rounded-full bg-slate-800 border border-slate-600 text-[11px] font-bold">
                {d.genericName.split(/[ (]/)[0]}
                <button onClick={() => removeFromCompare(d.id)} aria-label={t.removeFromCompare(d.genericName)} title={t.removeFromCompare(d.genericName)} className="w-5 h-5 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-700"><XIcon className="w-3 h-3" /></button>
              </span>
            ))}
            <span className="ml-auto flex items-center gap-1.5">
              <button onClick={clearCompare} className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-slate-300 hover:text-white hover:bg-slate-800">{t.clearShort}</button>
              <button onClick={() => setIsCompareOpen(true)} disabled={compareList.length < 2}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-teal-500 hover:bg-teal-400 text-slate-900 disabled:opacity-50 flex items-center gap-1.5">
                <CompareIcon className="w-3.5 h-3.5" /> {t.compareBtn(compareList.length)}
              </button>
            </span>
          </div>
        </div>
      )}

      {/* Update Changelog Modal */}
      <ChangelogModal
        isOpen={isChangelogOpen}
        onClose={() => setIsChangelogOpen(false)}
        lang={lang}
        t={t}
      />

      {/* Modals Mounting */}
      <StartingWizardModal isOpen={isStartingWizardOpen} onClose={() => setIsStartingWizardOpen(false)} lang={lang} />
      <InsulinCalculatorModal isOpen={isInsulinCalcOpen} onClose={() => setIsInsulinCalcOpen(false)} lang={lang} />
      <CkdMatrixModal isOpen={isCkdMatrixOpen} onClose={() => setIsCkdMatrixOpen(false)} lang={lang} />
      <HypoModal isOpen={isHypoOpen} onClose={() => setIsHypoOpen(false)} lang={lang} />
      <DkaHhsModal isOpen={isDkaHhsOpen} onClose={() => setIsDkaHhsOpen(false)} lang={lang} />
      <RamadanModal isOpen={isRamadanOpen} onClose={() => setIsRamadanOpen(false)} lang={lang} />
      <ThaiDrsModal isOpen={isThaiDrsOpen} onClose={() => setIsThaiDrsOpen(false)} lang={lang} />
      <FootCareModal isOpen={isFootCareOpen} onClose={() => setIsFootCareOpen(false)} lang={lang} />
      <GdmModal isOpen={isGdmOpen} onClose={() => setIsGdmOpen(false)} lang={lang} />
      <RemissionModal isOpen={isRemissionOpen} onClose={() => setIsRemissionOpen(false)} lang={lang} />
      
      {/* Monograph Detail Modal */}
      <DrugDetailModal
        drug={selectedDrugDetail}
        isOpen={!!selectedDrugDetail}
        onClose={() => setSelectedDrugDetail(null)}
        lang={lang}
        onToggleCompare={toggleCompare}
        isCompared={selectedDrugDetail ? compareList.some(d => d.id === selectedDrugDetail.id) : false}
      />

      {/* Compare Modal */}
      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        compareList={compareList}
        onRemoveFromCompare={removeFromCompare}
        onClearCompare={clearCompare}
        lang={lang}
      />
    </div>
  );
}

// Render into DOM
const rootEl = document.getElementById('root');
if (rootEl) {
  ReactDOM.render(<App />, rootEl);
}
