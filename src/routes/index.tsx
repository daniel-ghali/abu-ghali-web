import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, CheckCircle2, Cog, Factory, Gauge, Globe, Layers, ShieldCheck, Wrench, Boxes } from "lucide-react";
import { useT, useLocale } from "@/i18n/i18n";
import { CapabilitiesShowcase } from "@/components/site/capabilities-showcase";
import { Section, SectionHead, useDesktopReveal } from "@/components/site/section";
import { routeSeo } from "@/lib/seo";
import heroCnc from "@/assets/hero-cnc.jpg";
import capFlanges from "@/assets/capability-flanges.jpg";
import capCasting from "@/assets/capability-casting.jpg";
import capHydraulics from "@/assets/capability-hydraulics.jpg";
import capRubber from "@/assets/capability-rubber.jpg";
import factoryFloor from "@/assets/factory-floor.jpg";
import qualityInspection from "@/assets/quality-inspection.jpg";
import industryWater from "@/assets/industry-water.jpg";
import industryOilgas from "@/assets/industry-oilgas.jpg";
import industryAuto from "@/assets/industry-auto.jpg";
import industryEnergy from "@/assets/industry-energy.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    routeSeo({
      title: "Abu Ghali Modern Industries — Precision Manufacturing, Cairo",
      description: "Egyptian precision manufacturer: CNC machining, water flanges, castings, hydraulics and OEM parts for infrastructure, energy, oil & gas and automotive.",
      path: "/",
      image: heroCnc,
      preloadImage: true,
    }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <CapabilitiesShowcase />
      <Industries />
      <WhyUs />
      <FeaturedProducts />
      <FactoryStrip />
      <Projects />
    </>
  );
}

function Hero() {
  const t = useT();

  const HERO_SLIDES = [
    {
      image: heroCnc,
      altEn: "Five-axis CNC machining centre cutting steel component",
      altAr: "مركز تشغيل CNC خماسي المحاور أثناء تشغيل قطعة من الصلب",
      tagEn: "5-Axis CNC Machining",
      tagAr: "تشغيل معادن خماسي المحاور",
    },
    {
      image: factoryFloor,
      altEn: "Abu Ghali modern industrial manufacturing facility floor",
      altAr: "أرض مصنع أبو غالي للصناعات الحديثة بالقاهرة",
      tagEn: "18,000 m² Integrated Facility",
      tagAr: "منشأة متكاملة على مساحة 18,000 م²",
    },
    {
      image: qualityInspection,
      altEn: "CMM precision quality inspection at Abu Ghali",
      altAr: "فحص الجودة والدقة على ماكينات CMM",
      tagEn: "CMM Quality Inspection",
      tagAr: "فحص واختبار الجودة بدقة CMM",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [HERO_SLIDES.length]);

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground min-h-[560px] sm:min-h-[620px] md:min-h-[730px] flex flex-col justify-between">
      {/* Background Image Slider with Crisp Visibility */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={HERO_SLIDES[currentSlide].image}
            alt={t(HERO_SLIDES[currentSlide].altEn, HERO_SLIDES[currentSlide].altAr)}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-full w-full object-cover object-center"
          />
        </AnimatePresence>

        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/25 rtl:bg-gradient-to-l"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30" />
      </div>

      <div className="container-x relative flex flex-1 flex-col justify-center pt-12 pb-14 sm:pt-20 sm:pb-16 md:pt-28 md:pb-10">
        <div className="relative flex max-w-3xl flex-col justify-center space-y-6 gap-9">
         
          {/* Heading with sophisticated staggered animation */}
          <h1 className="text-3xl font-bold leading-[1.06] tracking-tight sm:text-4xl md:text-6xl lg:text-[62px]">
              {t(
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="inline-block"
                  >
                    Engineered in Egypt.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="inline-block"
                  >
                    Trusted <span className="text-accent">worldwide.</span>
                  </motion.div>
                </>,
                <>
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="inline-block"
                  >
                    هندسة مصرية
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="inline-block"
                  >
                    بجودة <span className="text-accent">عالمية.</span>
                  </motion.div>
                </>,
              )}
            </h1>

          {/* Description with professional fade animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <p className="max-w-2xl text-base leading-relaxed text-white/90 md:text-xl font-normal">
              {t(
                "A fully-integrated precision manufacturer: CNC machining, water flanges, castings, hydraulic assemblies and OEM parts for infrastructure, energy and industrial programmes worldwide.",
                "شريك صناعي متكامل في التصنيع الدقيق: تشغيل CNC، فلانشات شبكات المياه، المصبوبات، الأنظمة الهيدروليكية وقطع OEM لمشروعات البنية التحتية والطاقة والصناعة حول العالم.",
              )}
            </p>
          </motion.div>

          {/* Action CTAs with professional staggered appearance */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <Link
                to="/quote"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-[0_18px_40px_-22px_rgba(0,0,0,0.65)] transition duration-200 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {t("Request a quotation", "اطلب عرض سعر")}
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease: "easeOut" }}
            >
              <Link
                to="/capabilities"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-base font-medium text-white backdrop-blur-md transition duration-200 hover:border-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {t("Explore capabilities", "استكشف قدراتنا")} <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slide Indicator & Active Tag with elegant fade-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
          className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-14 sm:mt-12"
        >
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-8 bg-accent" : "w-3 bg-white/40 hover:bg-white/70"}`}
                aria-label={`Go to slide ${idx + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.25, ease: "easeOut" }}
            className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80 bg-white/10 px-3 py-1 rounded-md backdrop-blur-sm border border-white/10"
          >
            {t(HERO_SLIDES[currentSlide].tagEn, HERO_SLIDES[currentSlide].tagAr)}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  const t = useT();
  const items = [
    t("25+ Years of manufacturing", "أكثر من 25 عامًا من التصنيع"),
    t("58 Precision machines", "58 ماكينة دقيقة"),
    t("800+ Industrial clients", "أكثر من 800 عميل صناعي"),
    t("OEM programmes", "برامج تصنيع OEM"),
    t("Custom engineering", "هندسة مخصصة"),
    t("Global export capability", "قدرة تصدير عالمية"),
  ];
  
  return (
    <div className="border-y border-hairline bg-surface">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-10 gap-y-4 py-6">
        {items.map((i, idx) => (
          <motion.div 
            key={String(i)} 
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.4, delay: idx * 0.05, ease: "easeOut" }}
            className="flex items-center gap-2 text-sm font-medium text-primary/80"
          >
            <CheckCircle2 className="h-4 w-4 text-accent" />
            {i}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Industries() {
  const t = useT();
  const isDesktop = useDesktopReveal();
  
  const items = [
    { titleEn: "Water Infrastructure", titleAr: "شبكات المياه", image: industryWater, descEn: "Flanges, valve bodies and fittings for municipal and industrial water networks.", descAr: "فلانشات وأجسام محابس ووصلات لشبكات المياه البلدية والصناعية." },
    { titleEn: "Oil & Gas", titleAr: "النفط والغاز", image: industryOilgas, descEn: "Machined pressure components and spare parts for upstream and downstream operations.", descAr: "قطع ضغط دقيقة وقطع غيار لعمليات الاستخراج والتكرير." },
    { titleEn: "Energy", titleAr: "الطاقة", image: industryEnergy, descEn: "Precision assemblies for power generation, transmission and renewable energy plants.", descAr: "تجميعات دقيقة لمحطات توليد الكهرباء والنقل والطاقة المتجددة." },
    { titleEn: "Automotive", titleAr: "السيارات", image: industryAuto, descEn: "OEM and aftermarket components for local and export automotive supply chains.", descAr: "قطع أصلية وبديلة لخطوط تصنيع السيارات محليًا وللتصدير." },
    { titleEn: "Construction", titleAr: "المقاولات", image: factoryFloor, descEn: "Heavy-duty components for infrastructure, cranes, formwork and construction equipment.", descAr: "قطع تحمّل عالي للبنية التحتية والأوناش ومعدات المقاولات." },
    { titleEn: "OEM Manufacturing", titleAr: "تصنيع OEM", image: capHydraulics, descEn: "Contract manufacturing for global OEMs — from serial parts to complete sub-assemblies.", descAr: "تصنيع تعاقدي للشركات العالمية — من القطع الكمية حتى التجميعات الكاملة." },
  ];
  
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionHead
              eyebrow={t("Industries served", "القطاعات التي نخدمها")}
              title={t(<>Where our parts<br />end up working.</>, <>أين تعمل<br />قطعنا يوميًا.</>)}
              intro={t(
                "Abu Ghali components run in water networks across Egypt, hydraulic systems abroad, and OEM production lines from Cairo to Central Europe.",
                "تعمل قطع أبو غالي في شبكات المياه بمصر، والأنظمة الهيدروليكية بالخارج، وخطوط إنتاج شركات عالمية من القاهرة إلى وسط أوروبا.",
              )}
            />
          </motion.div>
          <Link to="/industries" className="ag-link text-sm">
            {t("All industries", "كل القطاعات")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
          {items.map((i, index) => (
            <motion.div
              key={i.titleEn}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15, margin: "0px 0px -100px 0px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.08, 
                ease: "easeOut"
              }}
              className="group relative overflow-hidden bg-background"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={i.image}
                  alt={t(i.titleEn, i.titleAr)}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <ScrollHeadingAnimation>
                    <h3 className="text-2xl font-semibold">
                      {t(i.titleEn, i.titleAr)}
                    </h3>
                  </ScrollHeadingAnimation>
                  <p className="mt-2 max-w-sm text-sm text-white/80">{t(i.descEn, i.descAr)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const t = useT();
  const isDesktop = useDesktopReveal();
  
  const WHY = [
    {
      icon: Cog,
      titleEn: "Engineering-led",
      titleAr: "قيادة هندسية",
      descEn: "Every RFQ is reviewed by manufacturing engineers who give DFM feedback before the first chip is cut.",
      descAr: "يراجع كل طلب سعر مهندسو تصنيع يقدّمون ملاحظات DFM قبل بدء الإنتاج.",
    },
    {
      icon: Gauge,
      titleEn: "Precision as standard",
      titleAr: "الدقة معيار ثابت",
      descEn: "CMM-inspected parts to tolerances of ±0.005 mm, backed by documented measurement reports.",
      descAr: "قطع مفحوصة على CMM بدقة ±0.005 مم مع تقارير قياس موثقة.",
    },
    {
      icon: ShieldCheck,
      titleEn: "Quality certified",
      titleAr: "جودة معتمدة",
      descEn: "ISO 9001-aligned quality system with full material traceability from mill certificate to shipping.",
      descAr: "نظام جودة متوافق مع ISO 9001 مع تتبّع كامل للمواد من الشهادة حتى التسليم.",
    },
    {
      icon: Factory,
      titleEn: "Capacity that scales",
      titleAr: "طاقة قابلة للتوسع",
      descEn: "58 machines running two shifts — from single prototypes to serial runs of 100,000+ pieces per year.",
      descAr: "58 ماكينة تعمل على وردياتين — من النموذج الواحد حتى إنتاج 100,000+ قطعة سنويًا.",
    },
    {
      icon: Layers,
      titleEn: "25 years of know-how",
      titleAr: "خبرة 25 عامًا",
      descEn: "A quarter century of continuous manufacturing across water, energy, automotive and OEM industries.",
      descAr: "ربع قرن من التصنيع المستمر في قطاعات المياه والطاقة والسيارات والتصنيع للغير.",
    },
    {
      icon: Wrench,
      titleEn: "Full-service support",
      titleAr: "دعم متكامل",
      descEn: "Engineering, tooling, machining, finishing, packaging and export logistics from one accountable partner.",
      descAr: "هندسة، إسطمبات، تشغيل، تشطيب، تعبئة ولوجستيات تصدير من شريك واحد.",
    },
  ];

  return (
    <section className="bg-background">
      {/* Header Strip */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-x py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t("Why Abu Ghali", "لماذا أبو غالي")}
              </div>
              <ScrollHeadingAnimation>
                <h2 className="mt-5 text-4xl font-bold leading-[1.06] tracking-tight md:text-5xl">
                  {t(
                    <>Engineering discipline,<br />industrial capacity.</>,
                    <>انضباط هندسي<br />وطاقة صناعية.</>,
                  )}
                </h2>
              </ScrollHeadingAnimation>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                {t(
                  "We compete on the things that actually matter to procurement and engineering teams: predictability, tolerance, documentation and delivery.",
                  "نتنافس على ما يهم فرق المشتريات والهندسة فعلًا: الالتزام والدقة والتوثيق والتسليم في الموعد.",
                )}
              </p>
            </div>
            <Link
              to="/about"
              className="self-start inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:border-accent hover:text-accent lg:self-auto"
            >
              {t("About us", "من نحن")} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className="container-x py-12 md:py-20">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <motion.div
              key={w.titleEn}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15, margin: "0px 0px -100px 0px" }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.06, 
                ease: "easeOut"
              }}
              className="group relative flex flex-col bg-background p-6 sm:p-8"
            >
              {/* Step number */}
              <span className="num-display absolute top-6 inset-e-7 text-[42px] font-black text-primary/6 select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-surface text-accent">
                <w.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <ScrollHeadingAnimation>
                <h3 className="mt-6 text-lg font-bold text-primary">
                  {t(w.titleEn, w.titleAr)}
                </h3>
              </ScrollHeadingAnimation>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground flex-1">
                {t(w.descEn, w.descAr)}
              </p>

              {/* Accent line */}
              <div className="mt-6 h-0.5 w-8 rounded-full bg-hairline" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PRODUCTS = [
  { code: "AG-WF-125", title: "PN16 Water Flange DN125", desc: "Carbon steel, DIN 2632, epoxy coated for municipal potable-water networks.", material: "S235JR", spec: "DIN 2632 PN16" },
  { code: "AG-HC-40", title: "Hydraulic Cylinder Body 40 mm", desc: "Honed and chrome-plated bore for mobile equipment cylinders, up to 250 bar.", material: "ST52 / 34 CrMo4", spec: "ISO 6020" },
  { code: "AG-CS-A216", title: "Cast Valve Body A216 WCB", desc: "Sand-cast, machined and pressure-tested valve body for industrial water and steam.", material: "A216 WCB", spec: "ASME B16.34" },
  { code: "AG-RB-EPDM", title: "EPDM Gasket Ring Assortment", desc: "Compression-moulded EPDM sealing rings for flanged pipe connections and pumps.", material: "EPDM 70 Sh", spec: "DIN EN 1514-1" },
];

function FeaturedProducts() {
  const t = useT();
  
  return (
    <section className="bg-surface py-16 sm:py-20 md:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <SectionHead
            eyebrow={t("Featured products", "منتجات مختارة")}
            title={t(<>Standard parts.<br />Engineered exactly.</>, <>قطع قياسية.<br />مصنوعة بدقة.</>)}
            intro={t(
              "A snapshot of catalog items customers order regularly. Every product is quotable in custom sizes, materials and finishes on request.",
              "نماذج من القطع القياسية التي يطلبها عملاؤنا بانتظام. كل منتج قابل للتصنيع بمقاسات وخامات وتشطيبات مخصصة عند الطلب.",
            )}
          />
          <Link to="/products" className="ag-link text-sm">
            {t("Browse products", "كل المنتجات")} <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PRODUCTS.map((p, index) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15, margin: "0px 0px -100px 0px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1, 
                ease: "easeOut"
              }}
              className="group flex flex-col overflow-hidden rounded-xl border border-hairline bg-background"
            >
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr]">
                <div className="relative aspect-video sm:aspect-square overflow-hidden bg-surface">
                  <img
                    src={p.title.includes("Flange") ? capFlanges : p.title.includes("Cylinder") ? capHydraulics : p.title.includes("Cast") ? capCasting : capRubber}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                    {p.code}
                  </div>
                  <ScrollHeadingAnimation>
                    <h3 className="mt-3 text-xl font-semibold leading-snug text-primary">
                      {p.title}
                    </h3>
                  </ScrollHeadingAnimation>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-hairline pt-4 text-xs">
                    <div>
                      <dt className="text-muted-foreground">{t("Material", "الخامة")}</dt>
                      <dd className="mt-0.5 font-medium text-primary">{p.material}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">{t("Standard", "المواصفة")}</dt>
                      <dd className="mt-0.5 font-medium text-primary">{p.spec}</dd>
                    </div>
                  </dl>
                  <Link
                    to="/quote"
                    className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-primary"
                  >
                    {t("Request quotation", "اطلب عرض سعر")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FactoryStrip() {
  const t = useT();
  
  const stats = [
    { value: "18,000", unit: "m²", labelEn: "Facility area", labelAr: "مساحة المصنع" },
    { value: "2", unit: "", labelEn: "Shifts / day", labelAr: "ورديتان / يوم" },
    { value: "220", unit: "+", labelEn: "Engineers & operators", labelAr: "مهندسون وفنيون" },
  ];

  return (
    <section className="bg-background">
      <div className="container-x py-16 sm:py-20 md:py-28">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1.1fr_1fr]">

          {/* Left — Photo */}
          <div className="relative overflow-hidden rounded-2xl border border-hairline min-h-[300px] sm:min-h-[420px] lg:min-h-[600px]">
            <img
              src={factoryFloor}
              alt={t(
                "Abu Ghali factory floor with CNC machines and overhead cranes",
                "أرض مصنع أبو غالي بماكينات CNC وأوناش علوية",
              )}
              loading="lazy"
              width={1920}
              height={1088}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            {/* Bottom caption strip */}
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 border-t border-white/10 bg-primary/80 px-5 py-3 backdrop-blur-md">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                {t("Cairo, Egypt · 18,000 m²", "القاهرة، مصر · 18,000 م²")}
              </span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                ISO 9001
              </span>
            </div>
          </div>

          {/* Right — Content panel */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-hairline bg-primary text-primary-foreground">
            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 md:p-10">
              {/* Eyebrow */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t("Inside the factory", "داخل المصنع")}
                </div>

                {/* Heading */}
                <ScrollHeadingAnimation>
                  <h2 className="mt-6 text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                    {t(
                      <>One facility.<br />Every process.<br /><span className="text-accent">Total accountability.</span></>,
                      <>منشأة واحدة.<br />كل العمليات.<br /><span className="text-accent">مسؤولية كاملة.</span></>,
                    )}
                  </h2>
                </ScrollHeadingAnimation>

                {/* Body */}
                <p className="mt-5 text-sm leading-relaxed text-white/70 md:text-base">
                  {t(
                    "18,000 square metres of production hosting CNC machining, casting, hydraulics, rubber moulding, tool making, finishing, inspection and packaging — audited to a single quality system.",
                    "18,000 متر مربع من الإنتاج تضم تشغيل CNC، والسباكة، والهيدروليك، وتصنيع الكاوتش، والإسطمبات، والتشطيب، والفحص، والتعبئة، تحت نظام جودة واحد.",
                  )}
                </p>
              </div>

              {/* Stats */}
              <div className="mt-8 sm:mt-10">
                <dl className="grid grid-cols-3 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  {stats.map((s, i) => (
                    <div
                      key={s.labelEn}
                      className={`flex flex-col items-center justify-center px-2 py-4 text-center sm:px-3 sm:py-5 ${i > 0 ? "border-s border-white/10" : ""}`}
                    >
                      <dt className="num-display text-xl font-black text-white sm:text-2xl md:text-3xl">
                        {s.value}
                        {s.unit && <span className="text-xs font-semibold text-white/40 ms-0.5 sm:text-sm">{s.unit}</span>}
                      </dt>
                      <dd className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
                        {t(s.labelEn, s.labelAr)}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* CTA */}
                <Link
                  to="/factory"
                  className="mt-6 flex min-h-[48px] items-center justify-between rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-semibold text-white"
                >
                  <span>{t("Take the factory tour", "جولة داخل المصنع")}</span>
                  <ArrowUpRight className="h-5 w-5 text-accent" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const PROJECTS_DATA = [
  {
    clientEn: "Holding Company for Water & Wastewater",
    clientAr: "الشركة القابضة لمياه الشرب والصرف الصحي",
    industryEn: "Water Infrastructure",
    industryAr: "شبكات المياه",
    scopeEn: "12,400 DN80–DN600 flanged assemblies for a nationwide potable-water rehabilitation programme.",
    scopeAr: "12,400 قطعة فلانشية من DN80 إلى DN600 ضمن برنامج قومي لإعادة تأهيل شبكات مياه الشرب على مستوى البلاد.",
    yearEn: "2023",
    yearAr: "2023",
  },
  {
    clientEn: "Suez Oil Processing Company",
    clientAr: "شركة السويس لتكرير البترول",
    industryEn: "Oil & Gas",
    industryAr: "النفط والغاز",
    scopeEn: "Serial production of machined pressure fittings and spare parts for downstream refining operations.",
    scopeAr: "تصنيع متواصل لوصلات الضغط والقطع الغيار المشغّلة لعمليات التكرير النهائية.",
    yearEn: "2022",
    yearAr: "2022",
  },
  {
    clientEn: "European hydraulics OEM",
    clientAr: "شركة أوروبية للأنظمة الهيدروليكية",
    industryEn: "OEM Manufacturing",
    industryAr: "التصنيع للغير (OEM)",
    scopeEn: "Contract manufacturing of cylinder bodies and manifolds shipped weekly to Central European assembly lines.",
    scopeAr: "تصنيع تعاقدي لأجسام الأسطوانات والمشعبات يتم شحنه أسبوعيًا إلى خطوط التجميع في أوروبا الوسطى.",
    yearEn: "Ongoing",
    yearAr: "مستمر",
  },
  {
    clientEn: "Nasr Automotive Manufacturing",
    clientAr: "النصر لصناعة السيارات",
    industryEn: "Automotive",
    industryAr: "السيارات",
    scopeEn: "Cast and machined chassis components for light-commercial vehicle assembly in 6th of October City.",
    scopeAr: "مكونات شاسيه مصبوبة ومشغّلة لتجميع المركبات التجارية الخفيفة في مدينة السادس من أكتوبر.",
    yearEn: "2024",
    yearAr: "2024",
  },
];

function Projects() {
  const t = useT();
  const { isAr } = useLocale();
  
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
      >
        <SectionHead
          eyebrow={t("Selected projects", "مشاريع مختارة")}
          title={t(<>Manufacturing that ships.</>, <>تصنيع يصل إلى الميدان.</>)}
          intro={t(
            "A representative selection of programmes delivered to Egyptian utilities, international OEMs and infrastructure contractors.",
            "نماذج مختارة من البرامج التي نفذناها لهيئات المياه المصرية والشركات العالمية ومقاولي البنية التحتية.",
          )}
        />
        <Link to="/projects" className="ag-link text-sm">
          {t("All projects", "كل المشاريع")} <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>

      <div className="mt-12 overflow-hidden rounded-xl border border-hairline sm:mt-16">
        {PROJECTS_DATA.map((p, i) => (
          <motion.div
            key={isAr ? p.clientAr : p.clientEn}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
            transition={{ 
              duration: 0.8, 
              delay: i * 0.08, 
              ease: "easeOut"
            }}
            className={`grid gap-4 p-6 sm:gap-6 sm:p-8 md:grid-cols-[1fr_1.4fr_auto] md:items-center md:gap-10 ${i > 0 ? "border-t border-hairline" : ""}`}
          >
            <div>
              <div className="eyebrow text-accent">{isAr ? p.industryAr : p.industryEn}</div>
              <ScrollHeadingAnimation>
                <h3 className="mt-2 text-lg font-semibold text-primary sm:mt-3 sm:text-xl">
                  {isAr ? p.clientAr : p.clientEn}
                </h3>
              </ScrollHeadingAnimation>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{isAr ? p.scopeAr : p.scopeEn}</p>
            <div className="flex items-center justify-between gap-6 md:justify-end">
              <span className="num-display text-lg font-semibold text-primary">{isAr ? p.yearAr : p.yearEn}</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Numbers() {
  const t = useT();
  
  const stats = [
    { k: "25+", l: t("Years in operation", "سنة من العمل") },
    { k: "58", l: t("CNC & production machines", "ماكينة CNC وإنتاج") },
    { k: "800+", l: t("Industrial clients served", "عميل صناعي") },
    { k: "42", l: t("Export destinations", "دولة تصدير") },
    { k: "18,000", l: t("m² manufacturing facility", "م² مساحة المصنع") },
    { k: "±0.005", l: t("mm achievable tolerance", "مم أدنى دقة") },
  ];
  
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-20 md:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHead
            eyebrow={t("By the numbers", "بالأرقام")}
            title={<span className="text-white">{t("Twenty-five years of measurable output.", "خمسة وعشرون عامًا من الأرقام القابلة للقياس.")}</span>}
            intro={<span className="text-white/70">{t("Industrial manufacturing is a numbers game — capacity, tolerance, delivery. Ours are on the table.", "التصنيع الصناعي لغة أرقام — طاقة ودقة وتسليم. أرقامنا واضحة أمامك.")}</span>}
          />
        </motion.div>
        
        <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3 sm:mt-16">
          {stats.map((s, idx) => (
            <motion.div 
              key={String(s.l)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: "easeOut" }}
              className="bg-primary p-6 sm:p-8"
            >
              <dt className="num-display text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                {s.k}
              </dt>
              <dd className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/60 sm:mt-3 sm:text-sm">{s.l}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

// keep unused import trimmed
void Boxes;

// Reusable heading animation component - repeats every scroll with buttery smooth easing
function ScrollHeadingAnimation({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.9, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

