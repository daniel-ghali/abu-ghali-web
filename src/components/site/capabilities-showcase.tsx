import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Cog, Factory, Package, ScanLine, Truck } from "lucide-react";
import { useT } from "@/i18n/i18n";
import { Reveal } from "./reveal";
import heroCnc from "@/assets/hero-cnc.jpg";
import capFlanges from "@/assets/capability-flanges.jpg";
import capCasting from "@/assets/capability-casting.jpg";
import capHydraulics from "@/assets/capability-hydraulics.jpg";
import capRubber from "@/assets/capability-rubber.jpg";
import factoryFloor from "@/assets/factory-floor.jpg";

type Cap = {
  n: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  image: string;
  specEn: string;
  specAr: string;
  specs: { kEn: string; kAr: string; v: string }[];
};

const CAPS: Cap[] = [
  {
    n: "01",
    titleEn: "CNC Machining",
    titleAr: "تشغيل المعادن CNC",
    descEn: "3, 4 and 5-axis milling and turning to drawings or samples — prototypes to serial production.",
    descAr: "تشغيل ثلاثي ورباعي وخماسي المحاور وفق الرسومات أو العينات، من النماذج الأولية حتى الإنتاج الكمي.",
    image: heroCnc,
    specEn: "±0.005 mm · 24 CNC centres",
    specAr: "±0.005 مم · 24 ماكينة CNC",
    specs: [
      { kEn: "Tolerance", kAr: "الدقة", v: "±0.005 mm" },
      { kEn: "Machines", kAr: "الماكينات", v: "24 CNC" },
      { kEn: "Materials", kAr: "الخامات", v: "Steel · SS · Al" },
    ],
  },
  {
    n: "02",
    titleEn: "Water Flanges & Fittings",
    titleAr: "الفلانشات ومستلزمات شبكات المياه",
    descEn: "Flanges and metallic fittings for water networks and treatment plants, to global standards.",
    descAr: "فلانشات ووصلات معدنية لشبكات المياه ومحطات المعالجة وفق المواصفات العالمية.",
    image: capFlanges,
    specEn: "DN25 – DN1200 · DIN · ANSI",
    specAr: "DN25 – DN1200 · DIN · ANSI",
    specs: [
      { kEn: "Standards", kAr: "المعايير", v: "DIN · ANSI · BS" },
      { kEn: "Sizes", kAr: "الأقطار", v: "DN25 – DN1200" },
      { kEn: "Pressure", kAr: "الضغط", v: "PN10 – PN40" },
    ],
  },
  {
    n: "03",
    titleEn: "Metal Casting",
    titleAr: "سباكة وصب المعادن",
    descEn: "Ferrous and non-ferrous casting with machining, finishing and inspection before delivery.",
    descAr: "سباكة الحديد والألومنيوم والنحاس مع التشغيل والتشطيب والفحص قبل التسليم.",
    image: capCasting,
    specEn: "0.2 – 250 kg · Iron · Bronze · Al",
    specAr: "0.2 – 250 كجم · حديد · برونز · ألومنيوم",
    specs: [
      { kEn: "Weight", kAr: "الأوزان", v: "0.2 – 250 kg" },
      { kEn: "Alloys", kAr: "الخامات", v: "Iron · Bronze · Al" },
      { kEn: "Pressure", kAr: "الضغط", v: "PN10 – PN40" },
    ],
  },
  {
    n: "04",
    titleEn: "Hydraulic Systems & Pumps",
    titleAr: "الأنظمة الهيدروليكية والطلمبات",
    descEn: "Cylinders, manifolds, pumps and complete assemblies — manufactured, maintained and bench-tested.",
    descAr: "بساتم ومشتتات وطلمبات وأنظمة هيدروليكية كاملة، تصنيع وصيانة واختبار أداء.",
    image: capHydraulics,
    specEn: "250 bar · Test bench",
    specAr: "250 بار · اختبار أداء",
    specs: [
      { kEn: "Pressure", kAr: "الضغط", v: "250 bar" },
      { kEn: "Scope", kAr: "النطاق", v: "OEM · Repair" },
    ],
  },
  {
    n: "05",
    titleEn: "Rubber Manufacturing",
    titleAr: "تصنيع منتجات الكاوتش",
    descEn: "Industrial rubber, silicone and EPDM parts produced to technical drawings.",
    descAr: "قطع الكاوتش الصناعي والسيليكون وEPDM حسب الرسومات الفنية.",
    image: capRubber,
    specEn: "EPDM · NBR · 40–90 Shore A",
    specAr: "EPDM · NBR · 40–90 شور A",
    specs: [
      { kEn: "Compounds", kAr: "الخامات", v: "EPDM · NBR" },
      { kEn: "Hardness", kAr: "الصلادة", v: "40 – 90 Shore A" },
    ],
  },
  {
    n: "06",
    titleEn: "Tool & Die and Industrial Gears",
    titleAr: "التروس والإسطمبات",
    descEn: "Design and manufacturing of production tools, dies and industrial gears, with refurbishment.",
    descAr: "تصميم وتصنيع الإسطمبات وقوالب الإنتاج والتروس الصناعية، مع إعادة التأهيل.",
    image: factoryFloor,
    specEn: "CAD/CAM · EDM · OEM",
    specAr: "CAD/CAM · EDM · OEM",
    specs: [
      { kEn: "Tool life", kAr: "العمر التشغيلي", v: "5M cycles" },
      { kEn: "Process", kAr: "التقنية", v: "CAD/CAM · EDM" },
    ],
  },
];

export function CapabilitiesShowcase() {
  const t = useT();

  const trust = [
    { k: "25+", en: "Years of manufacturing", ar: "سنة من التصنيع" },
    { k: "58", en: "Precision machines", ar: "ماكينة دقيقة" },
    { k: "800+", en: "Industrial clients", ar: "عميل صناعي" },
    { k: "42", en: "Export countries", ar: "دولة تصدير" },
  ];

  const flow = [
    { icon: ClipboardCheck, en: "Engineering review", ar: "مراجعة هندسية" },
    { icon: Cog, en: "Tool design", ar: "تصميم الإسطمبات" },
    { icon: Factory, en: "Manufacturing", ar: "التصنيع" },
    { icon: ScanLine, en: "Inspection", ar: "الفحص" },
    { icon: Package, en: "Packaging", ar: "التعبئة" },
    { icon: Truck, en: "Delivery", ar: "التسليم" },
  ];

  return (
    <section className="relative bg-background">
      <div className="container-x py-16 sm:py-20 md:py-24">
        <HeadingAnimation>
          <div className="eyebrow-accent">
            <span className="inline-block h-px w-6 bg-accent" />
            {t("Manufacturing capabilities", "قدراتنا التصنيعية")}
          </div>
          <h2 className="mt-5 text-3xl font-semibold leading-[1.06] tracking-tight text-primary sm:text-4xl md:text-5xl">
            {t(
              <>Every manufacturing process<br />under one roof.</>,
              <>جميع مراحل التصنيع<br />تحت سقف واحد.</>,
            )}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            {t(
              "From engineering review and tooling to machining, casting, assembly and final inspection — one partner for every stage.",
              "من المراجعة الهندسية وتصميم الإسطمبات إلى التشغيل والصب والتجميع والفحص النهائي — شريك واحد لكل مرحلة.",
            )}
          </p>
        </HeadingAnimation>

        <Reveal amount={0.1}>
          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline lg:grid-cols-4">
            {trust.map((s) => (
              <div
                key={s.en}
                className="bg-card p-5 text-left rtl:text-right transition hover:bg-surface/60 md:p-6"
              >
                <dt className="num-display text-2xl font-bold tracking-tight text-primary sm:text-3xl md:text-4xl">
                  {s.k}
                </dt>
                <dd className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {t(s.en, s.ar)}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
        {/* Workflow Process Section - Minimal Style */}
        <Reveal amount={0.1}>
          <div className="mt-10">
            <HeadingAnimation delay={0.1}>
              <h3 className="mb-6 text-center text-lg font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {t("A structured, six-stage process", "مراحل تصنيع منظمّة في 6 خطوات")}
              </h3>
            </HeadingAnimation>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-3 lg:grid-cols-6">
              {flow.map((step, i) => {
                const StepIcon = step.icon;
                return (
                  <motion.div
                    key={step.en}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                    className="flex flex-col items-center bg-card p-5 text-center transition hover:bg-surface/60"
                  >
                    {/* Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <StepIcon className="h-5 w-5" strokeWidth={2} />
                    </div>

                    {/* Number */}
                    <div className="num-display mt-3 text-xl font-bold tracking-tight text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Title */}
                    <h4 className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {t(step.en, step.ar)}
                    </h4>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPS.map((c, index) => (
            <Reveal key={c.n} delay={index * 0.05} amount={0.1}>
              <CapabilityCard cap={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ cap }: { cap: Cap }) {
  const t = useT();
  return (
    <CardAnimation>
      <article className="group flex flex-col overflow-hidden rounded-2xl border border-hairline bg-card transition ">
        <div className="relative aspect-16/10 overflow-hidden bg-surface">
          <img
            src={cap.image}
            alt={t(cap.titleEn, cap.titleAr)}
            loading="lazy"
            width={1600}
            height={1000}
            className="h-full w-full object-cover transition duration-700 "
          />
          <span className="num-display absolute inset-s-4 top-4 rounded-md bg-primary/85 px-2 py-1 text-[11px] font-semibold text-primary-foreground backdrop-blur">
            {cap.n}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold text-primary">{t(cap.titleEn, cap.titleAr)}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
            {t(cap.descEn, cap.descAr)}
          </p>
          <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-hairline pt-4">
            {cap.specs.map((s) => (
              <div key={s.kEn}>
                <dt className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {t(s.kEn, s.kAr)}
                </dt>
                <dd className="mt-0.5 text-sm font-semibold text-primary">{s.v}</dd>
              </div>
            ))}
          </dl>
          <Link
            to="/quote"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {t("Request a quotation", "اطلب عرض سعر")}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </article>
    </CardAnimation>
  );
}

// Reusable heading animation component - plays once on first view
function HeadingAnimation({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Card fade-up animation component - plays once on first view
function CardAnimation({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.1, once: true, margin: "0px 0px -50px 0px" }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}
