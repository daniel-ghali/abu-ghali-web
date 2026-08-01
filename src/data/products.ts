import capFlanges from "@/assets/capability-flanges.jpg";
import capHydraulics from "@/assets/capability-hydraulics.jpg";
import capCasting from "@/assets/capability-casting.jpg";
import capRubber from "@/assets/capability-rubber.jpg";
import heroCnc from "@/assets/hero-cnc.jpg";
import factoryFloor from "@/assets/factory-floor.jpg";
import qualityInspection from "@/assets/quality-inspection.jpg";
import industryWater from "@/assets/industry-water.jpg";
import industryOilgas from "@/assets/industry-oilgas.jpg";
import industryEnergy from "@/assets/industry-energy.jpg";
import industryAuto from "@/assets/industry-auto.jpg";

export const CAT_ALL = { en: "All", ar: "الكل" };

export const CATEGORIES = [
  { en: "CNC Machining", ar: "تشغيل المعادن CNC" },
  { en: "Water Flanges", ar: "الفلانشات ومستلزمات شبكات المياه" },
  { en: "Metal Casting", ar: "سباكة وصب المعادن" },
  { en: "Hydraulic Systems", ar: "الأنظمة الهيدروليكية والطلمبات" },
  { en: "Rubber Products", ar: "منتجات الكاوتش" },
  { en: "Tool & Die and Gears", ar: "التروس والإسطمبات" },
  { en: "Custom OEM", ar: "تصنيع للغير (OEM)" },
] as const;

export type CategoryEn = (typeof CATEGORIES)[number]["en"];

export type Item = {
  code: string;
  titleEn: string;
  titleAr: string;
  catEn: CategoryEn;
  image: string;
  material: string;
  standard: string;
};

export const ITEMS: Item[] = [
  { code: "AG-CNC-01", titleEn: "Precision Machined Shaft", titleAr: "عمود مشغّل بدقة عالية", catEn: "CNC Machining", image: heroCnc, material: "42CrMo4", standard: "ISO 2768-fH" },
  { code: "AG-CNC-02", titleEn: "5-Axis Machined Bracket", titleAr: "كتيفة مشغّلة خماسي المحاور", catEn: "CNC Machining", image: heroCnc, material: "AlMgSi1", standard: "Customer spec" },
  { code: "AG-CNC-03", titleEn: "Turned Stainless Fitting", titleAr: "وصلة استانلس مخروطة", catEn: "CNC Machining", image: heroCnc, material: "AISI 316L", standard: "ISO 2768-mK" },

  { code: "AG-WF-125", titleEn: "PN16 Water Flange DN125", titleAr: "فلانشة مياه DN125 · PN16", catEn: "Water Flanges", image: capFlanges, material: "S235JR", standard: "DIN 2632" },
  { code: "AG-WF-200", titleEn: "PN25 Water Flange DN200", titleAr: "فلانشة مياه DN200 · PN25", catEn: "Water Flanges", image: capFlanges, material: "S275", standard: "DIN 2633" },
  { code: "AG-WF-500", titleEn: "PN10 Water Flange DN500", titleAr: "فلانشة مياه DN500 · PN10", catEn: "Water Flanges", image: capFlanges, material: "S235JR", standard: "EN 1092-1" },

  { code: "AG-CS-WCB", titleEn: "Cast Valve Body A216 WCB", titleAr: "جسم محبس مسبوك A216 WCB", catEn: "Metal Casting", image: capCasting, material: "A216 WCB", standard: "ASME B16.34" },
  { code: "AG-CS-GGG40", titleEn: "Cast Pump Housing GGG40", titleAr: "جسم طلمبة مسبوك GGG40", catEn: "Metal Casting", image: capCasting, material: "GGG40", standard: "EN 1563" },

  { code: "AG-HC-40", titleEn: "Hydraulic Cylinder Body ø40", titleAr: "جسم بستم هيدروليك ø40", catEn: "Hydraulic Systems", image: capHydraulics, material: "ST52", standard: "ISO 6020" },
  { code: "AG-HC-80", titleEn: "Hydraulic Cylinder Body ø80", titleAr: "جسم بستم هيدروليك ø80", catEn: "Hydraulic Systems", image: capHydraulics, material: "34 CrMo4", standard: "ISO 6020" },
  { code: "AG-HM-04", titleEn: "Manifold Block 4-Port", titleAr: "بلوك مشعبات 4 مخارج", catEn: "Hydraulic Systems", image: capHydraulics, material: "AlMgSi1", standard: "Custom" },
  { code: "AG-HP-01", titleEn: "Hydraulic Pump Assembly", titleAr: "تجميعة طلمبة هيدروليك", catEn: "Hydraulic Systems", image: capHydraulics, material: "Cast Iron / Steel", standard: "Test Bench" },

  { code: "AG-RB-EPDM", titleEn: "EPDM Gasket Ring Set", titleAr: "طقم جوانات EPDM", catEn: "Rubber Products", image: capRubber, material: "EPDM 70", standard: "EN 1514-1" },
  { code: "AG-RB-NBR", titleEn: "NBR O-Ring Assortment", titleAr: "أورينجات NBR", catEn: "Rubber Products", image: capRubber, material: "NBR 70", standard: "ISO 3601" },
  { code: "AG-RB-MOUNT", titleEn: "Vibration Isolator Mount", titleAr: "قاعدة عزل اهتزاز", catEn: "Rubber Products", image: capRubber, material: "NR / Steel", standard: "Custom" },

  { code: "AG-TD-01", titleEn: "Progressive Stamping Die", titleAr: "إسطمبة تقدمية للكبس", catEn: "Tool & Die and Gears", image: factoryFloor, material: "D2 Tool Steel", standard: "In-house design" },
  { code: "AG-GR-01", titleEn: "Industrial Spur Gear", titleAr: "ترس صناعي مستقيم", catEn: "Tool & Die and Gears", image: factoryFloor, material: "Steel 20MnCr5", standard: "DIN 3962" },

  { code: "AG-OEM-01", titleEn: "OEM Machined Bracket", titleAr: "كتيفة OEM مشغّلة", catEn: "Custom OEM", image: capHydraulics, material: "6082-T6", standard: "Customer spec" },
];

export function findItem(code?: string) {
  if (!code) return undefined;
  return ITEMS.find((i) => i.code.toLowerCase() === code.toLowerCase());
}

export function categoryAr(catEn: string) {
  return CATEGORIES.find((c) => c.en === catEn)?.ar ?? catEn;
}

const CAT_EXTRA: Record<string, string[]> = {
  "CNC Machining": [heroCnc, factoryFloor, qualityInspection, capHydraulics],
  "Water Flanges": [capFlanges, industryWater, qualityInspection, factoryFloor],
  "Metal Casting": [capCasting, factoryFloor, qualityInspection, industryEnergy],
  "Hydraulic Systems": [capHydraulics, factoryFloor, qualityInspection, industryOilgas],
  "Rubber Products": [capRubber, factoryFloor, qualityInspection, industryAuto],
  "Tool & Die and Gears": [factoryFloor, heroCnc, qualityInspection, industryAuto],
  "Custom OEM": [capHydraulics, heroCnc, factoryFloor, qualityInspection],
};

/** Gallery images shown on the product quotation page (main image first). */
export function galleryFor(item: Item): { src: string; captionEn: string; captionAr: string }[] {
  const extras = CAT_EXTRA[item.catEn] ?? [factoryFloor, heroCnc, qualityInspection];
  const srcs = [item.image, ...extras].filter((s, i, a) => a.indexOf(s) === i).slice(0, 5);
  const captions = [
    { en: `${item.titleEn} — ${item.material}`, ar: `${item.titleAr} — ${item.material}` },
    { en: "Production run in our machining hall", ar: "خط الإنتاج داخل صالة التشغيل" },
    { en: "Dimensional inspection & quality control", ar: "الفحص الأبعادي ومراقبة الجودة" },
    { en: "Manufacturing floor & tooling", ar: "أرضية التصنيع والعدد والأدوات" },
    { en: "Typical field application", ar: "تطبيق نموذجي في الموقع" },
  ];
  return srcs.map((src, i) => ({
    src,
    captionEn: captions[i]?.en ?? item.titleEn,
    captionAr: captions[i]?.ar ?? item.titleAr,
  }));
}

/** Extended, product-agnostic manufacturing details shown in the RFQ. */
export function detailsFor(item: Item): { labelEn: string; labelAr: string; valueEn: string; valueAr: string }[] {
  return [
    { labelEn: "Part code", labelAr: "كود القطعة", valueEn: item.code, valueAr: item.code },
    { labelEn: "Category", labelAr: "الفئة", valueEn: item.catEn, valueAr: categoryAr(item.catEn) },
    { labelEn: "Material", labelAr: "الخامة", valueEn: item.material, valueAr: item.material },
    { labelEn: "Standard", labelAr: "المواصفة", valueEn: item.standard, valueAr: item.standard },
    { labelEn: "Tolerance", labelAr: "السماحات", valueEn: "±0.005 – ±0.05 mm", valueAr: "±0.005 – ±0.05 مم" },
    { labelEn: "Surface finish", labelAr: "تشطيب السطح", valueEn: "Ra 0.8 – 3.2 µm", valueAr: "Ra 0.8 – 3.2 ميكرومتر" },
    { labelEn: "Coating", labelAr: "الطلاء", valueEn: "Painting, galvanising, zinc or as specified", valueAr: "دهان أو جلفنة أو زنك أو حسب المواصفة" },
    { labelEn: "Minimum order", labelAr: "أقل كمية للطلب", valueEn: "1 pc (prototype) · series from 50 pcs", valueAr: "قطعة واحدة (نموذج) · إنتاج متسلسل من 50 قطعة" },
    { labelEn: "Lead time", labelAr: "مدة التسليم", valueEn: "2 – 5 weeks depending on quantity", valueAr: "من 2 إلى 5 أسابيع حسب الكمية" },
    { labelEn: "Inspection", labelAr: "الفحص", valueEn: "CMM report, hardness and material certificate", valueAr: "تقرير CMM واختبار الصلادة وشهادة الخامة" },
    { labelEn: "Packaging", labelAr: "التغليف", valueEn: "Export wooden pallets / crates", valueAr: "طبليات أو صناديق خشبية للتصدير" },
    { labelEn: "Customisation", labelAr: "التخصيص", valueEn: "Made to drawing or sample", valueAr: "يُصنّع حسب الرسم أو العينة" },
  ];
}
