// Sources checked 26 Oct 2026 (v1.4.0). Shown as "Source:" lines in the drug detail view.
// CPG 2566: official PDF linked from the Diabetes Association of Thailand's CPG page (printed page numbers).
const SRC_CPG_URL = 'https://drive.google.com/file/d/1OAIDiCyGsJYA1-wTAxoOu6yL_YL9c7IG/view';
const SRC = {
  cpgA1c: { en: 'CPG 2566, Table 1 (pp. 78-79): A1C lowering by drug class', th: 'CPG 2566 ตารางที่ 1 (หน้า 78-79): ประสิทธิภาพลด A1C ตามกลุ่มยา', url: SRC_CPG_URL },
  cpgKidney: { en: 'CPG 2566, Table 2 (p. 98) and text pp. 99-100: drugs in CKD', th: 'CPG 2566 ตารางที่ 2 (หน้า 98) และเนื้อหาหน้า 99-100: ยาในผู้ป่วย CKD', url: SRC_CPG_URL },
  cpgInsulinCkd: { en: 'CPG 2566, p. 100: insulin in CKD (reduce the starting dose by 25% if eGFR 10-50, by 50% if < 10)', th: 'CPG 2566 หน้า 100: อินซูลินในผู้ป่วย CKD (ลดขนาดเริ่มต้นร้อยละ 25 ถ้า eGFR 10-50 และร้อยละ 50 ถ้า < 10)', url: SRC_CPG_URL },
  cpgInsulinTable: { en: 'CPG 2566, Table 2 (p. 80): insulins in Thailand', th: 'CPG 2566 ตารางที่ 2 (หน้า 80): อินซูลินในประเทศไทย', url: SRC_CPG_URL },
  cpgGlp1Table: { en: 'CPG 2566, Table 3 (p. 81): GLP-1 analogues in Thailand', th: 'CPG 2566 ตารางที่ 3 (หน้า 81): ยา GLP-1 analog ในประเทศไทย', url: SRC_CPG_URL },
  nlem: { en: 'National List of Essential Medicines B.E. 2569, section 6.1 (Royal Gazette)', th: 'บัญชียาหลักแห่งชาติ พ.ศ. 2569 หมวด 6.1 (ราชกิจจานุเบกษา)', url: 'https://ratchakitcha.soc.go.th/documents/111371.pdf' },
  thaiFda: { en: 'Thai FDA drug register', th: 'ระบบตรวจสอบทะเบียนยา อย.', url: 'https://pertento.fda.moph.go.th/FDA_SEARCH_DRUG/SEARCH_DRUG/FRM_SEARCH_DRUG.aspx' }
};
const dailymed = (setid) => 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=' + setid;
const emaPi = (name) => 'https://www.ema.europa.eu/en/documents/product-information/' + name + '-epar-product-information_en.pdf';

// Product label behind each drug's doses: [label, url]. null = no label checked yet.
const DRUG_LABEL = {
  metformin_ir: ['US label: metformin hydrochloride tablets', dailymed('011de1a5-1ac0-4831-9e8d-26ec79ba2205')],
  metformin_xr: ['US label: metformin hydrochloride (incl. extended-release)', dailymed('011de1a5-1ac0-4831-9e8d-26ec79ba2205')],
  glipizide: ['US label: glipizide tablets', dailymed('00729e82-150a-464a-abe7-a3319721fbdb')],
  gliclazide_mr: null,
  glimepiride: ['US label: glimepiride tablets', dailymed('0003458f-352a-46fa-9d99-230daa76ae29')],
  glibenclamide: ['US label: glyburide tablets', dailymed('05341afe-5b7a-462a-a196-689cb09f83fc')],
  repaglinide: ['EU product information: NovoNorm', emaPi('novonorm')],
  pioglitazone: ['US label: Actos', dailymed('d2ddc491-88a9-4063-9150-443b4fa4330c')],
  linagliptin: ['US label: Tradjenta (Trajenta)', dailymed('b1da67d4-51e0-41b7-9fe1-7f38c0d1baa1')],
  sitagliptin: ['US label: Januvia', dailymed('194c3718-5eb5-4cf5-85d0-2bb1ed8293b8')],
  vildagliptin: ['EU product information: Galvus', emaPi('galvus')],
  dapagliflozin: ['US label: Farxiga (Forxiga)', dailymed('01f90c94-71cb-4a1f-81ff-8004b850529b')],
  empagliflozin: ['US label: Jardiance', dailymed('1782b947-4a72-4feb-a488-1469d9af82bd')],
  semaglutide_sc: ['EU product information: Ozempic', emaPi('ozempic')],
  semaglutide_oral: ['US label: Rybelsus', dailymed('27f15fac-7d98-4114-a2ec-92494a91da98')],
  dulaglutide: ['US label: Trulicity', dailymed('0a4716d0-9c9c-4bc3-a8f1-6784599aae89')],
  liraglutide: ['US label: Victoza', dailymed('1d18f106-0584-4fee-97ab-32771a64b809')],
  acarbose: ['US label: acarbose tablets', dailymed('067c0adc-7322-489d-9baa-1d061b37be36')],
  insulin_rapid: ['US labels: NovoLog (aspart), Humalog (lispro), Apidra (glulisine)', dailymed('13891e5a-e57a-46e8-911c-2f680352b52b')],
  insulin_short_ri: ['US label: Humulin R', dailymed('81199e55-ade9-46de-a5a3-c0415acee403')],
  insulin_nph: ['US label: Humulin N', dailymed('f6edd793-440b-40c2-96b5-c16133b7a921')],
  insulin_glargine_u100: ['US label: Lantus', dailymed('3a97c40f-0c83-42d7-a8ee-484b208db4e3')],
  insulin_degludec: ['US label: Tresiba', dailymed('456c5e87-3dfd-46fa-8ac0-c6128d4c97c6')],
  insulin_glargine_u300: ['US label: Toujeo', dailymed('257ca17b-6ff7-4f2e-9037-4c185bac5768')],
  insulin_premix_human: ['US label: Humulin 70/30', dailymed('e245e0c5-b2d6-418b-baa4-1c3324292885')],
  insulin_premix_analog: ['US label: NovoLog Mix 70/30 (NovoMix 30)', dailymed('19888a44-b330-462a-864d-338c5893dd63')],
  soliqua: ['US label: Soliqua 100/33', dailymed('4bba538b-cf7c-4310-ae8f-cb711ed21bcc')],
  xultophy: ['US label: Xultophy 100/3.6', dailymed('21335fe4-d395-4501-ac2a-2f20d7520da9')],
  metformin_dapagliflozin: ['US label: Xigduo XR', dailymed('ac8a0f7b-9f69-4495-abbc-3a47cd75a859')],
  metformin_sitagliptin: ['US label: Janumet', dailymed('d19c7ed0-ad5c-426e-b2df-722508f97d67')],
  empagliflozin_linagliptin: ['US label: Glyxambi', dailymed('ddbab689-f76c-488c-9613-4168d41dd730')]
};

// Tablet pictures drawn only from a written product description (colour and shape).
// Drugs not listed here show "N/A": no description was found (or, for pens and vials, no label gives colours).
const DRUG_PICTURE = {
  repaglinide: { brand: 'NovoNorm 0.5 mg', fill: '#f8fafc', shape: 'round', en: 'white, round', th: 'สีขาว กลม', src: ['EU product information: NovoNorm', emaPi('novonorm')] },
  pioglitazone: { brand: 'Actos 15 mg', fill: '#f7f5ee', shape: 'round', en: 'white to off-white, round', th: 'สีขาวถึงขาวนวล กลม', src: ['US label: Actos', dailymed('d2ddc491-88a9-4063-9150-443b4fa4330c')] },
  linagliptin: { brand: 'Trajenta 5 mg', fill: '#f2a0a0', shape: 'round', en: 'light red, round', th: 'สีแดงอ่อน กลม', src: ['US label: Tradjenta', dailymed('b1da67d4-51e0-41b7-9fe1-7f38c0d1baa1')] },
  sitagliptin: { brand: 'Januvia 100 mg', fill: '#e6d2b0', shape: 'round', en: 'beige, round', th: 'สีเบจ กลม', src: ['US label: Januvia', dailymed('194c3718-5eb5-4cf5-85d0-2bb1ed8293b8')] },
  vildagliptin: { brand: 'Galvus 50 mg', fill: '#fbf6dc', shape: 'round', en: 'white to light yellowish, round', th: 'สีขาวถึงเหลืองอ่อน กลม', src: ['EU product information: Galvus', emaPi('galvus')] },
  dapagliflozin: { brand: 'Forxiga 10 mg', fill: '#f0c84a', shape: 'diamond', en: 'yellow, diamond-shaped', th: 'สีเหลือง รูปข้าวหลามตัด', src: ['US label: Farxiga', dailymed('01f90c94-71cb-4a1f-81ff-8004b850529b')] },
  empagliflozin: { brand: 'Jardiance 10 mg', fill: '#f5e6a3', shape: 'round', en: 'pale yellow, round', th: 'สีเหลืองอ่อน กลม', src: ['US label: Jardiance', dailymed('1782b947-4a72-4feb-a488-1469d9af82bd')] },
  semaglutide_oral: { brand: 'Rybelsus 3/7/14 mg', fill: '#faf3d6', shape: 'oval', en: 'white to light yellow, oval', th: 'สีขาวถึงเหลืองอ่อน รูปไข่', src: ['US label: Rybelsus', dailymed('27f15fac-7d98-4114-a2ec-92494a91da98')] },
  acarbose: { brand: 'Glucobay (Bayer)', fill: '#faf3d8', shape: 'round', en: 'white to yellow-tinged, round (US label of the same maker, Precose)', th: 'สีขาวถึงเหลืองนวล กลม (ฉลากสหรัฐฯ ของผู้ผลิตเดียวกัน Precose)', src: ['US label: Precose', dailymed('c85bc02a-bf18-4690-84b8-2c256bce5f9f')] },
  metformin_dapagliflozin: { brand: 'Xigduo XR 10/1000 mg', fill: '#e9b92e', shape: 'oval', en: 'yellow to dark yellow, oval', th: 'สีเหลืองถึงเหลืองเข้ม รูปไข่', src: ['US label: Xigduo XR', dailymed('ac8a0f7b-9f69-4495-abbc-3a47cd75a859')] },
  metformin_sitagliptin: { brand: 'Janumet 50/1000 mg', fill: '#d9534f', shape: 'capsule', en: 'red, capsule-shaped', th: 'สีแดง รูปแคปซูล', src: ['US label: Janumet', dailymed('d19c7ed0-ad5c-426e-b2df-722508f97d67')] },
  empagliflozin_linagliptin: { brand: 'Glyxambi 10/5 mg', fill: '#f5e6a3', shape: 'triangle', en: 'pale yellow, rounded triangle', th: 'สีเหลืองอ่อน สามเหลี่ยมมุมมน', src: ['US label: Glyxambi', dailymed('ddbab689-f76c-488c-9613-4168d41dd730')] }
};

// Tablet drawn from its description, or an "N/A" box when there is no reference
const SourcedPicture = ({ drug, className = 'w-12 h-12' }) => {
  const p = drug && DRUG_PICTURE[drug.id];
  if (!p) {
    return (
      <svg viewBox="0 0 64 64" className={className} role="img" aria-label="No reference picture" data-picture="na">
        <rect x="5" y="5" width="54" height="54" rx="10" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" opacity="0.45" />
        <text x="32" y="38" textAnchor="middle" fontSize="15" fontWeight="700" fill="currentColor" opacity="0.6" fontFamily="sans-serif">N/A</text>
      </svg>
    );
  }
  const stroke = '#64748b';
  const shape = {
    round: <circle cx="32" cy="32" r="19" />,
    oval: <ellipse cx="32" cy="32" rx="23" ry="14" />,
    capsule: <rect x="8" y="20" width="48" height="24" rx="12" />,
    diamond: <path d="M32 9 55 32 32 55 9 32Z" strokeLinejoin="round" />,
    triangle: <path d="M32 11c2 0 3.3 1 4.4 2.9l15.4 26.6c1.1 1.9 1.1 3.7 0 5.3-1 1.5-2.6 2.2-4.6 2.2H16.8c-2 0-3.6-.7-4.6-2.2-1.1-1.6-1.1-3.4 0-5.3l15.4-26.6C28.7 12 30 11 32 11Z" />
  }[p.shape];
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={p.brand + ': ' + p.en} data-picture={p.shape}>
      <g fill={p.fill} stroke={stroke} strokeWidth="1.6">{shape}</g>
    </svg>
  );
};

// Thai FDA register: current ("คงอยู่") records per drug, searched by brand name 26 Oct 2026.
// No current record was found for NovoNorm (repaglinide), Victoza (liraglutide) or Glucobay (acarbose):
// their registrations are cancelled, and no product was found under the generic names either.
const THAI_REG = {"metformin_ir":[{"name":"GLUCOPHAGE (850 MG)","reg":"1A 406/49","newcode":"U1DR1A1022490040611C"},{"name":"GLUCOPHAGE (500 MG)","reg":"1A 405/49","newcode":"U1DR1A1022490040511C"},{"name":"SIAMFORMET (500 MG TABLET)","reg":"1A 110/27","newcode":"U1DR1A1022270011011C"},{"name":"SIAMFORMET (850 MG TABLET)","reg":"1A 292/34","newcode":"U1DR1A1022340029211C"},{"name":"METFOR - 850","reg":"1A 79/45","newcode":"U1DR1A1022450007911C"},{"name":"METFOR - 500","reg":"1A 78/45","newcode":"U1DR1A1022450007811C"}],"metformin_xr":[{"name":"GLUCOPHAGE XR 750 MG (PROLONGED RELEASE TABLETS)","reg":"1C 24/59 (N)","newcode":"U1DR1C1062590002411C"},{"name":"GLUCOPHAGE XR 1000 MG PROLONGED RELEASE TABLETS","reg":"1C 75/54 (N)","newcode":"U1DR1C1062540007511C"}],"glipizide":[{"name":"MINIDIAB (TABLET)","reg":"1C 288/41","newcode":"U1DR1C1022410028811C"}],"gliclazide_mr":[{"name":"DIAMICRON MR 60 MG","reg":"1C 19/54 (N)","newcode":"U1DR1C1062540001911C"}],"glimepiride":[{"name":"AMARYL (4 MG)","reg":"1C 39/50 (N)","newcode":"U1DR1C1062500003911C"},{"name":"AMARYL (3 MG)","reg":"1C 40/50 (N)","newcode":"U1DR1C1062500004011C"},{"name":"AMARYL (2 MG)","reg":"1C 41/50 (N)","newcode":"U1DR1C1062500004111C"}],"glibenclamide":[{"name":"DAONIL","reg":"1C 101/51","newcode":"U1DR1C1022510010111C"}],"pioglitazone":[{"name":"ACTOS (PIOGLITAZONE ) 15 MG TABLETS","reg":"1C 14/43 (N)","newcode":"U1DR1C1062430001411C"},{"name":"ACTOS (PIOGLITAZONE ) 30 MG TABLETS","reg":"1C 15/43 (N)","newcode":"U1DR1C1062430001511C"},{"name":"UTMOS 15","reg":"1A 17/51 (NG)","newcode":"U1DR1A1052510001711C"},{"name":"UTMOS 30","reg":"1A 40/50 (NG)","newcode":"U1DR1A1052500004011C"}],"linagliptin":[{"name":"TRAJENTA","reg":"1C 91/55 (N)","newcode":"U1DR1C1062550009111C"}],"sitagliptin":[{"name":"JANUVIA (50 MG)","reg":"1C 16/55 (N)","newcode":"U1DR1C1062550001611C"},{"name":"JANUVIA (100 MG)","reg":"1C 71/55 (N)","newcode":"U1DR1C1062550007111C"}],"vildagliptin":[{"name":"GALVUS 50 MG","reg":"1C 14/59 (N)","newcode":"U1DR1C1062590001411C"}],"dapagliflozin":[{"name":"FORXIGA (10 MG FILM - COATED TABLETS)","reg":"1C 64/57 (N)","newcode":"U1DR1C1062570006411C"}],"empagliflozin":[{"name":"JARDIANCE 25 MG","reg":"1C 95/58 (N)","newcode":"U1DR1C1062580009511C"},{"name":"JARDIANCE 10 MG","reg":"1C 94/58 (N)","newcode":"U1DR1C1062580009411C"}],"semaglutide_sc":[{"name":"OZEMPIC 2 MG","reg":"1C 15052/66 (NBC)","newcode":"U1DR1C1072661505211C"},{"name":"OZEMPIC 0.5 MG","reg":"1C 15024/63 (NB)","newcode":"U1DR1C10B2631502411C"},{"name":"OZEMPIC 1 MG","reg":"1C 15025/63 (NB)","newcode":"U1DR1C10B2631502511C"},{"name":"OZEMPIC 0.25 MG","reg":"1C 15023/63 (NB)","newcode":"U1DR1C10B2631502311C"}],"semaglutide_oral":[{"name":"RYBELSUS 7 MG","reg":"1C 15172/64 (NBC)","newcode":"U1DR1C1072641517211C"},{"name":"RYBELSUS 14 MG","reg":"1C 15173/64 (NBC)","newcode":"U1DR1C1072641517311C"},{"name":"RYBELSUS 3 MG","reg":"1C 15171/64 (NBC)","newcode":"U1DR1C1072641517111C"}],"dulaglutide":[{"name":"TRULICITY 1.5 MG","reg":"1C 17/63 (NB)","newcode":"U1DR1C10B2630001711C"},{"name":"TRULICITY 0.75 MG","reg":"1C 16/63 (NB)","newcode":"U1DR1C10B2630001611C"}],"insulin_rapid":[{"name":"NOVORAPID FLEXPEN","reg":"1C 12/61 (NB)","newcode":"U1DR1C10B2610001211C"},{"name":"NOVORAPID FLEXPEN","reg":"1C 9/61 (NB)","newcode":"U1DR1C10B2610000911C"},{"name":"NovoRapid Penfill","reg":"1C 10/64 (NB)","newcode":"U1DR1C10B2640001011C"},{"name":"NOVORAPID PENFILL","reg":"1C 23/53 (NB)","newcode":"U1DR1C10B2530002311C"},{"name":"HUMALOG KWIKPEN","reg":"1C 9/67 (NB)","newcode":"U1DR1C10B2670000911C"},{"name":"HUMALOG","reg":"1C 23/63 (NB)","newcode":"U1DR1C10B2630002311C"}],"insulin_short_ri":[{"name":"ACTRAPID PENFILL","reg":"1C 14/64 (NB)","newcode":"U1DR1C10B2640001411C"},{"name":"ACTRAPID PENFILL","reg":"1C 24/53 (B)","newcode":"U1DR1C1042530002411C"},{"name":"ACTRAPID","reg":"1C 5/61 (B)","newcode":"U1DR1C1042610000511C"},{"name":"HUMULIN R","reg":"1C 23/63 (B)","newcode":"U1DR1C1042630002311C"},{"name":"BIOSULIN R","reg":"1C 6/64 (B)","newcode":"U1DR1C1042640000611C"},{"name":"WINSULIN-R","reg":"1C 14/58 (B)","newcode":"U1DR1C1042580001411C"}],"insulin_nph":[{"name":"INSULATARD PENFILL","reg":"1C 11/64 (NB)","newcode":"U1DR1C10B2640001111C"},{"name":"INSULATARD PENFILL","reg":"1C 25/53 (B)","newcode":"U1DR1C1042530002511C"},{"name":"INSULATARD","reg":"1C 3/61 (B)","newcode":"U1DR1C1042610000311C"},{"name":"HUMULIN N","reg":"1C 20/63 (B)","newcode":"U1DR1C1042630002011C"},{"name":"HUMULIN N","reg":"1C 21/63 (B)","newcode":"U1DR1C1042630002111C"},{"name":"BIOSULIN N","reg":"1C 5/64 (B)","newcode":"U1DR1C1042640000511C"},{"name":"WINSULIN-N","reg":"1C 13/58 (B)","newcode":"U1DR1C1042580001311C"}],"insulin_glargine_u100":[{"name":"LANTUS (100 UNITS/ML)","reg":"1C 78/45 (N)","newcode":"U1DR1C1062450007811C"},{"name":"GLARITUS","reg":"1C 10/58 (BF)","newcode":"U1DR1C10F2580001011C"},{"name":"SEMGLEE","reg":"1C 15123/63 (NBS)","newcode":"U1DR1C10L2631512311C"}],"insulin_degludec":[{"name":"TRESIBA 100 U/ML","reg":"1C 28/63 (NB)","newcode":"U1DR1C10B2630002811C"}],"insulin_glargine_u300":[{"name":"TOUJEO","reg":"1C 20/60 (NB)","newcode":"U1DR1C10B2600002011C"}],"insulin_premix_human":[{"name":"MIXTARD 30 PENFILL","reg":"1C 23/53 (B)","newcode":"U1DR1C1042530002311C"},{"name":"MIXTARD 30","reg":"1C 4/61 (B)","newcode":"U1DR1C1042610000411C"},{"name":"Mixtard 30 Penfill","reg":"1C 9/64 (NB)","newcode":"U1DR1C10B2640000911C"},{"name":"HUMULIN 70/30","reg":"1C 19/63 (B)","newcode":"U1DR1C1042630001911C"},{"name":"HUMULIN 70/30","reg":"1C 22/63 (B)","newcode":"U1DR1C1042630002211C"},{"name":"BIOSULIN 30:70","reg":"1C 7/64 (B)","newcode":"U1DR1C1042640000711C"},{"name":"WINSULIN-30/70","reg":"1C 12/58 (B)","newcode":"U1DR1C1042580001211C"}],"insulin_premix_analog":[{"name":"NOVOMIX 30 PENFILL","reg":"1C 10/61 (NB)","newcode":"U1DR1C10B2610001011C"},{"name":"NOVOMIX 30 FLEXPEN","reg":"1C 13/61 (NB)","newcode":"U1DR1C10B2610001311C"},{"name":"NOVOMIX 30 FLEXPEN","reg":"1C 11/61 (NB)","newcode":"U1DR1C10B2610001111C"},{"name":"HUMALOG MIX 25","reg":"1C 24/63 (NB)","newcode":"U1DR1C10B2630002411C"},{"name":"HUMALOG MIX 50/50 KWIKPEN","reg":"1C 4/63 (NB)","newcode":"U1DR1C10B2630000411C"},{"name":"HUMALOG MIX 75/25 KWIKPEN","reg":"1C 6/63 (NB)","newcode":"U1DR1C10B2630000611C"},{"name":"Ryzodeg","reg":"1C 27/60 (NB)","newcode":"U1DR1C10B2600002711C"}],"soliqua":[{"name":"SOLIQUA (100 UNITS/ML + 50 MICROGRAMS/ML)","reg":"2C 15085/61 (NB)","newcode":"U1DR2C10B2611508511C"},{"name":"SOLIQUA (100 UNITS/ML + 33 MICROGRAMS/ML)","reg":"2C 15084/61 (NB)","newcode":"U1DR2C10B2611508411C"}],"xultophy":[{"name":"XULTOPHY","reg":"2C 15004/60 (NB)","newcode":"U1DR2C10B2601500411C"}],"metformin_dapagliflozin":[{"name":"XIGDUO XR (TABLETS 10 MG/1000 MG)","reg":"2C 18/59 (N)","newcode":"U1DR2C1062590001811C"},{"name":"XIGDUO XR (TABLETS 5 MG/1000 MG)","reg":"2C 16/59 (N)","newcode":"U1DR2C1062590001611C"}],"metformin_sitagliptin":[{"name":"JANUMET XR (50 MG/1000 MG)","reg":"2C 20/63 (N)","newcode":"U1DR2C1062630002011C"},{"name":"JANUMET XR (100 MG/1000 MG)","reg":"2C 21/63 (N)","newcode":"U1DR2C1062630002111C"},{"name":"JANUMET (50 MG/500 MG)","reg":"2C 5/57 (N)","newcode":"U1DR2C1062570000511C"},{"name":"JANUMET (50 MG/1000 MG)","reg":"2C 7/57 (N)","newcode":"U1DR2C1062570000711C"}],"empagliflozin_linagliptin":[{"name":"GLYXAMBI 10 MG/5 MG","reg":"2C 15/60 (N)","newcode":"U1DR2C1062600001511C"},{"name":"GLYXAMBI 25 MG/5 MG","reg":"2C 16/60 (N)","newcode":"U1DR2C1062600001611C"}]};
