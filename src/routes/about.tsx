import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useT } from "@/i18n/i18n";
import { routeSeo } from "@/lib/seo";
import factoryFloor from "@/assets/factory-floor.jpg";
import qualityInspection from "@/assets/quality-inspection.jpg";
import capHydraulics from "@/assets/capability-hydraulics.jpg";
import industryWater from "@/assets/industry-water.jpg";
import industryEnergy from "@/assets/industry-energy.jpg";
import industryAuto from "@/assets/industry-auto.jpg";
import { Layers, Gauge, Wrench, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () =>
    routeSeo({
      title: "About Abu Ghali Modern Industries | من نحن — أبو غالي للصناعات الحديثة",
      description: "25+ years of Egyptian precision manufacturing — أكثر من 25 عامًا من التصنيع المصري الدقيق لخدمة شبكات المياه والطاقة والسيارات والتصنيع للغير.",
      path: "/about",
      image: factoryFloor,
    }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();

  // ---------------------------------------------------------------------
  // Data
  // ---------------------------------------------------------------------

  const SPEC_PLATE = [
    { label: t("Est.", "التأسيس"), value: "1998" },
    { label: t("Facility", "المنشأة"), value: t("18,000 m²", "18,000 م²") },
    { label: t("Certification", "الاعتماد"), value: "ISO 9001" },
    { label: t("Disciplines", "التخصصات"), value: "05" },
    { label: t("Markets served", "الأسواق"), value: t("EG · Africa · EU", "مصر · أفريقيا · أوروبا") },
  ];

  const JOURNEY_STEPS = [
    {
      year: "1998",
      titleEn: "From a workshop to a trusted partner",
      titleAr: "من ورشة صغيرة إلى شريك موثوق",
      bodyEn: "Abu Ghali started with focused machining capability and a simple promise: solve complex industrial problems with precision and accountability.",
      bodyAr: "بدأت أبو غالي بقدرة تشغيلية مركزة ووعد بسيط: حل المشاكل الصناعية المعقدة بالدقة والمسؤولية.",
      captionEn: "Cairo workshop · early machining capability",
      captionAr: "ورشة القاهرة · القدرة التشغيلية المبكرة",
      image: factoryFloor,
    },
    {
      year: "2005",
      titleEn: "The first OEM milestone",
      titleAr: "أول معلم للتصنيع للغير",
      bodyEn: "Multi-year supply programmes for international customers established the company as a dependable manufacturing extension.",
      bodyAr: "أرسى التعاون طويل الأجل مع العملاء العالميين مكانة الشركة كمورد صناعي موثوق.",
      captionEn: "Hydraulic OEM programme · repeatable industrial supply",
      captionAr: "برنامج هيدروليك OEM · توريد صناعي متكرر",
      image: capHydraulics,
    },
    {
      year: "2011",
      titleEn: "Vertical integration takes hold",
      titleAr: "التكامل الرأسي يحقق قوة إنتاجية",
      bodyEn: "Adding casting capability gave Abu Ghali deeper control over quality, lead times and material performance.",
      bodyAr: "أضافت القدرة على السباكة مستوى أكبر من التحكم في الجودة ومواعيد التسليم وأداء المواد.",
      captionEn: "Foundry expansion · engineered casting capability",
      captionAr: "توسعة المسبك · قدرة سباكة مصممة",
      image: industryWater,
    },
    {
      year: "2016",
      titleEn: "Quality becomes a competitive advantage",
      titleAr: "الجودة تصبح ميزة تنافسية",
      bodyEn: "ISO 9001 certification opened access to regulated industries and stronger documentation standards.",
      bodyAr: "فتح اعتماد ISO 9001 أبواب القطاعات المنظمة ورفع مستوى التوثيق والمعايير.",
      captionEn: "Quality inspection · audited manufacturing control",
      captionAr: "الفحص والجودة · رقابة تصنيع موثقة",
      image: qualityInspection,
    },
    {
      year: "2021",
      titleEn: "Advanced machining expands the frontier",
      titleAr: "التشغيل المتقدم يوسع حدود الإنتاج",
      bodyEn: "5-axis machining unlocked more complex geometry, faster iterations and higher confidence on critical assemblies.",
      bodyAr: "مهد التشغيل بخمسة محاور الطريق أمام أشكال أكثر تعقيدًا وتكرارات أسرع وثقة أعلى في التجميعات الحرجة.",
      captionEn: "Advanced machining · complex geometry capability",
      captionAr: "تشغيل متقدم · قدرة على الأشكال المعقدة",
      image: industryEnergy,
    },
    {
      year: "2024",
      titleEn: "One facility, one accountable system",
      titleAr: "منشأة واحدة ونظام مسؤول واحد",
      bodyEn: "The expanded 18,000 m² factory now unifies machining, casting, hydraulics, finishing and inspection under a single operating model.",
      bodyAr: "أصبح المصنع الموسع على مساحة 18,000 م² يجمّع التشغيل، السباكة، الهيدروليك، التشطيب والفحص تحت نموذج تشغيل واحد.",
      captionEn: "Integrated factory · one accountable production system",
      captionAr: "مصنع متكامل · نظام إنتاج مسؤول واحد",
      image: industryAuto,
    },
  ];

  const MILESTONES = [
    {
      year: "1998",
      title: t("Founded in Cairo", "التأسيس بالقاهرة"),
      body: t("Started as a specialised machining workshop serving Egyptian water utilities.", "بدأت كورشة تشغيل متخصصة تخدم هيئات المياه المصرية."),
      detail: t("First customer programmes focused on precision machined parts and responsive delivery.", "ركزت أولى البرامج على القطع المشغّلة بدقة وتسليم سريع ومستجيب."),
    },
    {
      year: "2005",
      title: t("First OEM contract", "أول عقد تصنيع للغير"),
      body: t("Signed a multi-year supply agreement with a European hydraulics OEM.", "وقّعت عقد توريد متعدد السنوات مع شركة هيدروليك أوروبية."),
      detail: t("Built credibility through repeatability, quality documentation and on-time fulfilment.", "بنت المصداقية من خلال التكرارية والتوثيق والجداول الزمنية الدقيقة."),
    },
    {
      year: "2011",
      title: t("Casting foundry", "افتتاح المسبك"),
      body: t("Expanded into in-house casting to control material quality and delivery.", "توسّعت إلى السباكة الداخلية للسيطرة على جودة المواد والتسليم."),
      detail: t("Enabled wider part complexity and stronger vertical integration.", "مكّنت من تعقيد أكبر في القطع وتكامل رأسي أقوى."),
    },
    {
      year: "2016",
      title: t("ISO 9001 certification", "شهادة ISO 9001"),
      body: t("Formalised the quality system and strengthened regulated-sector access.", "رسّمت نظام الجودة ووطّدت الوصول إلى القطاعات المنظمة."),
      detail: t("Raised standards for traceability, inspection and customer confidence.", "رفعت معايير التتبع والفحص وثقة العميل."),
    },
    {
      year: "2021",
      title: t("5-axis machining", "التشغيل خماسي المحاور"),
      body: t("Invested in advanced machining centres to serve more complex assemblies.", "استثمرت في مراكز تشغيل متقدمة لتلبية تجميعات أكثر تعقيدًا."),
      detail: t("Expanded capability for higher-precision and multi-surface components.", "وسّعت القدرة على القطع عالية الدقة ذات الأسطح المتعددة."),
    },
    {
      year: "2024",
      title: t("18,000 m² facility", "منشأة 18,000 م²"),
      body: t("Completed a major expansion that unified production under one roof.", "أكملت توسعة كبيرة جمعت الإنتاج تحت سقف واحد."),
      detail: t("Created a single operating platform for machining, casting, finishing and inspection.", "أوجدت منصة تشغيلية واحدة للتشغيل، السباكة، التشطيب والفحص."),
    },
  ];

  const STORY_CHAPTERS = [
    {
      mark: t("§1", "١."),
      titleEn: "Start",
      titleAr: "البداية",
      bodyEn: "A focused workshop built around machining excellence and customer responsiveness.",
      bodyAr: "ورشة مركّزة بنيت على التميز في التشغيل والاستجابة السريعة للعملاء.",
    },
    {
      mark: t("§2", "٢."),
      titleEn: "Grow",
      titleAr: "النمو",
      bodyEn: "Strategic OEM partnerships widened the customer base and strengthened export capability.",
      bodyAr: "أرسى التعاون مع شركات تصنيع للغير قاعدة عملاء أوسع ورفع قدرة التصدير.",
    },
    {
      mark: t("§3", "٣."),
      titleEn: "Integrate",
      titleAr: "التكامل",
      bodyEn: "Casting, quality and finishing were added to create a truly vertically integrated manufacturer.",
      bodyAr: "أضيفت السباكة والجودة والتشطيب لتصبح الشركة مصنّعًا متكاملًا رأسيًا.",
    },
    {
      mark: t("§4", "٤."),
      titleEn: "Scale",
      titleAr: "التوسع",
      bodyEn: "The modern factory now supports complex programmes across water, energy, automotive and infrastructure.",
      bodyAr: "يدعم المصنع الحديث حالياً برامج معقدة في المياه والطاقة والسيارات والبنية التحتية.",
    },
  ];

  const CAPABILITIES = [
    {
      icon: Wrench,
      code: "HYD-01",
      image: capHydraulics,
      titleEn: "Hydraulic assemblies",
      titleAr: "التجميعات الهيدروليكية",
      bodyEn: "Precision-built components for demanding industrial applications requiring high integrity and pressure containment.",
      bodyAr: "مكونات مصممة بدقة لتطبيقات صناعية تتطلب صرامة عالية وثقة في التحمل الضغط.",
    },
    {
      icon: Gauge,
      code: "WTR-02",
      image: industryWater,
      titleEn: "Water infrastructure",
      titleAr: "البنية التحتية للمياه",
      bodyEn: "Critical parts for utilities, pumping stations and treatment networks — from flanges to valve bodies.",
      bodyAr: "قطع حيوية لمرافق المياه ومحطات الضخ وشبكات المعالجة — من الفلانشات إلى أجسام المحابس.",
    },
    {
      icon: Layers,
      code: "PWR-03",
      image: industryEnergy,
      titleEn: "Energy and mobility",
      titleAr: "الطاقة والحركة",
      bodyEn: "Components engineered for power systems, automotive supply chains and industrial reliability.",
      bodyAr: "قطع مصممة لأنظمة الطاقة وسلاسل إمداد السيارات والموثوقية الصناعية.",
    },
  ];

  const GALLERY = [
    { image: factoryFloor, titleEn: "Main production floor", titleAr: "أرضية الإنتاج الرئيسية", bodyEn: "Large-format production space designed for coordinated machining and assembly flow.", bodyAr: "مساحة إنتاج واسعة مصممة لتدفق تشغيل وتجميع منسق." },
    { image: qualityInspection, titleEn: "Quality control laboratory", titleAr: "مختبر مراقبة الجودة", bodyEn: "Inspection and metrology capability for critical dimensional verification.", bodyAr: "قدرة فحص ومقاييس للتحقق الأبعادي في القطع الحرجة." },
    { image: industryAuto, titleEn: "Automotive components", titleAr: "مكونات السيارات", bodyEn: "Production readiness for automotive-grade parts and structured supply chains.", bodyAr: "الاستعداد للإنتاج لقطع ذات مستوى سياراتي وسلاسل إمداد منظمة." },
    { image: capHydraulics, titleEn: "Hydraulic systems", titleAr: "الأنظمة الهيدروليكية", bodyEn: "Assembly capability for high-integrity hydraulic and pressure-containing components.", bodyAr: "قدرة تجميع للأنظمة الهيدروليكية وعناصر التحمل الضغط." },
    { image: industryWater, titleEn: "Water treatment components", titleAr: "مكونات معالجة المياه", bodyEn: "Specialised manufacturing for water infrastructure and utility applications.", bodyAr: "تصنيع متخصص لمكونات البنية التحتية للمياه وتطبيقات المرافق." },
    { image: industryEnergy, titleEn: "Power generation parts", titleAr: "قطع توليد الطاقة", bodyEn: "Precision parts built for energy systems and industrial reliability.", bodyAr: "قطع دقيقة مصممة لأنظمة الطاقة والموثوقية الصناعية." },
  ];

  const PRINCIPLES = [
    { en: "Honest lead times", ar: "مواعيد تسليم واقعية" },
    { en: "Documented tolerances", ar: "تفاوتات موثّقة" },
    { en: "Traceable materials", ar: "خامات قابلة للتتبّع" },
    { en: "One point of accountability", ar: "جهة مسؤولة واحدة" },
  ];

  // ---------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------

  return (
    <>
      <PageHero
        eyebrow={t("About Abu Ghali", "من نحن")}
        title={t(
          <>A quarter century of<br />precision manufacturing<br />from Cairo.</>,
          <>ربع قرن من<br />التصنيع الدقيق<br />من قلب القاهرة.</>,
        )}
        intro={t(
          "Abu Ghali Modern Industries is a family-founded Egyptian industrial manufacturer. Since 1998 we've engineered precision components for water utilities, energy operators, automotive assembly and international OEM programmes.",
          "أبو غالي للصناعات الحديثة مؤسسة صناعية مصرية عائلية رائدة. منذ عام 1998 ونحن نُصنّع قطعًا هندسية دقيقة لهيئات المياه ومحطات الطاقة وخطوط تجميع السيارات وبرامج التصنيع للشركات العالمية، مع التزام ثابت بالجودة والابتكار والريادة الصناعية في مصر والمنطقة.",
        )}
      />

      {/* -------------------------------------------------------------- */}
      {/* Signature: title-block spec plate, styled after a drawing's    */}
      {/* title block — the fixed data strip every engineering print has */}
      {/* -------------------------------------------------------------- */}
      <Reveal direction="up" amount={0.15}>
        <div className="border-y border-hairline bg-primary text-primary-foreground">
          <div className="container-x">
            <div className="grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-5 sm:divide-x">
              {SPEC_PLATE.map((field) => (
                <div key={field.label} className="border-b border-white/10 px-5 py-5 sm:border-b-0 [&:nth-child(odd)]:border-e sm:[&:nth-child(odd)]:border-e-0">
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/50">{field.label}</div>
                  <div className="mt-1.5 text-lg font-semibold tabular-nums">{field.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <SectionHead
            eyebrow={t("Our approach", "منهجنا")}
            title={t(<>Industrial work,<br />done properly.</>, <>عمل صناعي<br />يُنجَز باتقان.</>)}
          />
          <Reveal delay={0.1}>
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t(
                "We built Abu Ghali around a simple idea: industrial customers deserve suppliers who behave like engineers, not traders.",
                "بنينا أبو غالي على فكرة بسيطة: عملاء الصناعة يستحقون مورّدين يتصرفون كمهندسين لا كتجار.",
              )}
            </p>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>{t(
                "Over 25 years we've grown from a small Cairo machine shop into a vertically integrated manufacturer running CNC machining, casting, hydraulics, rubber moulding and tool making — all inside a single, audited quality system.",
                "على مدى 25 عامًا نمونا من ورشة صغيرة بالقاهرة إلى مصنع متكامل رأسيًا يضم تشغيل CNC، والسباكة، والهيدروليك، وتصنيع الكاوتش، والإسطمبات — كلها ضمن نظام جودة واحد معتمد.",
              )}</p>
              <p>{t(
                "Today we serve Egyptian utilities and government infrastructure programmes, supply serial parts to European OEMs, and manufacture spare parts for oil, gas and energy operators across the region.",
                "اليوم نخدم هيئات المياه والبرامج الحكومية للبنية التحتية، ونورّد قطعًا كمية لشركات أوروبية، ونصنع قطع غيار لشركات النفط والغاز والطاقة في المنطقة.",
              )}</p>
            </div>

            {/* What that promise means in practice — plain numbered list, no decoration */}
            <dl className="mt-10 border-t border-hairline pt-8">
              {PRINCIPLES.map((item, i) => (
                <div key={item.en} className="flex items-baseline gap-4 border-b border-hairline py-4 first:pt-0 last:border-b-0 last:pb-0">
                  <dt className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</dt>
                  <dd className="text-base font-medium text-primary">{t(item.en, item.ar)}</dd>
                </div>
              ))}
            </dl>
          </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------------------- */}
      {/* Journey — cinematic carousel, editorial chapters, milestones   */}
      {/* -------------------------------------------------------------- */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              eyebrow={t("Journey map", "خريطة الرحلة")}
              title={t(<>From first part to<br />full industrial platform.</>, <>من أول قطعة<br />إلى منصة صناعية كاملة.</>)}
              intro={t(
                "This is the full journey of Abu Ghali: from a specialised workshop to a vertically integrated manufacturing partner serving critical industries.",
                "هذه هي رحلة أبو غالي الكاملة: من ورشة متخصصة إلى شريك تصنيع متكامل رأسيًا يخدم القطاعات الحيوية.",
              )}
            />
            <div className="hidden shrink-0 items-baseline gap-2 pb-2 lg:flex">
              <span className="num-display text-lg font-semibold text-primary">1998</span>
              <span className="h-px w-10 bg-hairline" aria-hidden />
              <span className="num-display text-lg font-semibold text-accent">2024</span>
            </div>
          </div>

          {/* Cinematic carousel — full-bleed image, copy set directly on a gradient overlay */}
          <Reveal direction="up" amount={0.1}>
          <div className="mt-14">
            <Carousel opts={{ loop: true }}>
              <CarouselContent>
                {JOURNEY_STEPS.map((step) => (
                  <CarouselItem key={step.year}>
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={step.image}
                        alt={t(step.titleEn, step.titleAr)}
                        loading="lazy"
                        width={1600}
                        height={900}
                        className="h-[420px] w-full object-cover sm:h-[520px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" aria-hidden />
                      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-8 sm:p-12">
                        <div className="flex items-center gap-3">
                          <span className="num-display text-5xl font-semibold leading-none text-white sm:text-6xl">{step.year}</span>
                          <span className="h-px flex-1 max-w-16 bg-white/30" aria-hidden />
                          <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                            {t(step.captionEn, step.captionAr)}
                          </span>
                        </div>
                        <div className="max-w-2xl">
                          <h3 className="text-2xl font-semibold text-white sm:text-3xl">{t(step.titleEn, step.titleAr)}</h3>
                          <p className="mt-3 text-base leading-relaxed text-white/80">{t(step.bodyEn, step.bodyAr)}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-5 top-auto bottom-6 h-11 w-11 border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white sm:left-8" />
              <CarouselNext className="right-5 top-auto bottom-6 h-11 w-11 border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:text-white sm:right-8" />
            </Carousel>
          </div>
          </Reveal>

          {/* The story in four chapters — editorial strip, no card chrome */}
          <Reveal direction="up" amount={0.1}>
          <div className="mt-20 border-t border-hairline">
            <div className="grid divide-y divide-hairline sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 rtl:sm:divide-x-reverse">
              {STORY_CHAPTERS.map((chapter, index) => (
                <Reveal key={chapter.titleEn} delay={index * 0.08} amount={0.2}>
                  <div className="group px-1 py-8 transition-colors sm:px-8 sm:first:ps-0 sm:last:pe-0">
                    <span className="num-display block text-5xl font-light text-primary/15 transition-colors group-hover:text-accent/40">
                      {chapter.mark}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-primary">{t(chapter.titleEn, chapter.titleAr)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(chapter.bodyEn, chapter.bodyAr)}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          </Reveal>

          {/* Pull quote */}
          <Reveal direction="up" amount={0.2}>
          <div className="mt-4 border-t border-hairline pt-10">
            <p className="max-w-3xl border-s-2 border-accent ps-6 text-xl font-medium leading-relaxed text-primary sm:text-2xl">
              {t(
                "Every milestone reflects the same operating principle: deliver precision, protect schedule, and stand accountable from first quote to final dispatch.",
                "تعكس كل نقطة تحول مبدأ تشغيل واحد: توصيل دقة عالية، حماية الجدول الزمني، والالتزام بالمسؤولية من أول عرض سعر إلى آخر شحنة.",
              )}
            </p>
          </div>
          </Reveal>

          {/* Milestone ledger */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {MILESTONES.map((m, index) => (
              <Reveal key={m.year} delay={index * 0.05} amount={0.1}>
                <div className="group relative overflow-hidden bg-background p-8">
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100 rtl:origin-right" aria-hidden />
                  <div className="flex items-start justify-between">
                    <div className="num-display text-4xl font-semibold text-accent">{m.year}</div>
                    <ArrowUpRight className="h-5 w-5 text-primary/20 transition-colors group-hover:text-accent" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-primary">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                  <p className="mt-3 text-sm leading-relaxed text-primary/70">{m.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal direction="left" amount={0.15}>
            <div className="overflow-hidden rounded-2xl border border-hairline bg-background">
              <img src={factoryFloor} alt={t("Abu Ghali factory floor", "أرض مصنع أبو غالي")} loading="lazy" width={1920} height={1088} className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1} amount={0.15}>
            <div className="flex flex-col justify-between rounded-2xl border border-hairline bg-surface p-8">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{t("Operational footprint", "البصمة التشغيلية")}</div>
                <h3 className="mt-4 text-2xl font-semibold text-primary">{t("Integrated capability across production, inspection and dispatch.", "قدرة متكاملة في الإنتاج والفحص والشحن.")}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t("From machining to final handling, each stage is governed by a single quality culture and a single accountable team.", "من التشغيل إلى التسليم النهائي، تخضع كل مرحلة لثقافة جودة واحدة وفريق مسؤول واحد.")}</p>
              </div>
              <div className="mt-6 rounded-xl border border-hairline bg-background p-5 text-sm leading-relaxed text-muted-foreground">
                {t("The result is a manufacturing partner that can absorb complexity without losing control of cost, schedule or quality.", "والنتيجة هي شريك تصنيع قادر على استيعاب التعقيد دون فقدان السيطرة على التكلفة والجدول الزمني والجودة.")}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* -------------------------------------------------------------- */}
      {/* Capabilities — datasheet-style cards with a part-number tag    */}
      {/* -------------------------------------------------------------- */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-3">
          {CAPABILITIES.map((cap, index) => (
            <Reveal key={cap.titleEn} delay={index * 0.08} amount={0.15}>
              <div className="group overflow-hidden rounded-2xl border border-hairline bg-background transition-shadow hover:shadow-lg">
                <div className="relative overflow-hidden">
                  <img src={cap.image} alt={t(cap.titleEn, cap.titleAr)} loading="lazy" width={800} height={600} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-md bg-background/90 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur-sm">
                    {cap.code}
                  </div>
                </div>
                <div className="border-t border-hairline p-5">
                  <div className="flex items-center gap-2">
                    <cap.icon className="h-4 w-4 text-accent" strokeWidth={1.75} />
                    <h3 className="text-lg font-semibold text-primary">{t(cap.titleEn, cap.titleAr)}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(cap.bodyEn, cap.bodyAr)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <SectionHead
            eyebrow={t("Factory Gallery", "معرض المصنع")}
            title={t(<>A professional view of<br />our manufacturing environment.</>, <>عرض احترافي<br />لمحيط التصنيع لدينا.</>)}
            intro={t(
              "The facilities are designed for precision, repeatability and controlled growth — from the production floor to the inspection lab.",
              "تم تصميم المرافق لتحقيق الدقة والتكرار والنمو المُتحكم — من أرض الإنتاج إلى مختبر الفحص.",
            )}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GALLERY.map((item, index) => (
              <Reveal key={item.titleEn} delay={index * 0.05} amount={0.1}>
                <div className="group overflow-hidden rounded-2xl border border-hairline bg-background transition-shadow hover:shadow-lg">
                  <div className="overflow-hidden">
                    <img src={item.image} alt={t(item.titleEn, item.titleAr)} loading="lazy" width={800} height={600} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-primary">{t(item.titleEn, item.titleAr)}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(item.bodyEn, item.bodyAr)}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}