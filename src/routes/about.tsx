import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta-band";
import { useT } from "@/i18n/i18n";
import { routeSeo } from "@/lib/seo";
import factoryFloor from "@/assets/factory-floor.jpg";
import qualityInspection from "@/assets/quality-inspection.jpg";

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
  const MILESTONES = [
    { year: "1998", title: t("Founded in Cairo", "التأسيس بالقاهرة"), body: t("Abu Ghali begins as a specialised machine shop serving Egyptian water utilities.", "بدأت أبو غالي كورشة تشغيل متخصصة لخدمة هيئات المياه المصرية.") },
    { year: "2005", title: t("First OEM contract", "أول عقد تصنيع للغير"), body: t("Signs a multi-year contract to supply machined components to a European hydraulics OEM.", "توقيع عقد متعدد السنوات لتوريد قطع مشغّلة لشركة هيدروليك أوروبية.") },
    { year: "2011", title: t("Casting foundry", "افتتاح المسبك"), body: t("Vertically integrates by opening an in-house sand-casting foundry for ferrous alloys.", "التكامل الرأسي بافتتاح مسبك سباكة داخلي للسبائك الحديدية.") },
    { year: "2016", title: t("ISO 9001 certification", "شهادة ISO 9001"), body: t("Formal certification of the quality management system, unlocking regulated-sector business.", "اعتماد نظام إدارة الجودة رسميًا وفتح الأبواب أمام القطاعات المنظمة.") },
    { year: "2021", title: t("5-axis machining", "التشغيل خماسي المحاور"), body: t("Investment in 5-axis machining centres expands complex-geometry capability.", "الاستثمار في مراكز CNC خماسية المحاور لتوسيع القدرة على الأشكال المعقدة.") },
    { year: "2024", title: t("18,000 m² facility", "منشأة 18,000 م²"), body: t("Completed factory expansion consolidates all processes under a single roof.", "استكمال توسعة المصنع وتوحيد جميع العمليات تحت سقف واحد.") },
  ];
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
          "أبو غالي للصناعات الحديثة مؤسسة صناعية مصرية عائلية. منذ عام 1998 نُصنّع قطعًا هندسية دقيقة لهيئات المياه ومحطات الطاقة وخطوط تجميع السيارات وبرامج التصنيع للشركات العالمية.",
        )}
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <SectionHead
            eyebrow={t("Our approach", "منهجنا")}
            title={t(<>Industrial work,<br />done properly.</>, <>عمل صناعي<br />يُنجَز باتقان.</>)}
          />
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>{t(
              "We built Abu Ghali around a simple idea: industrial customers deserve suppliers who behave like engineers, not traders. That means honest lead times, documented tolerances, traceable materials and one point of accountability from RFQ to delivery.",
              "بنينا أبو غالي على فكرة بسيطة: عملاء الصناعة يستحقون مورّدين يتصرفون كمهندسين لا كتجار. هذا يعني مواعيد تسليم واقعية، وتفاوتات موثّقة، وخامات قابلة للتتبّع، وجهة مسؤولة واحدة من طلب السعر إلى التسليم.",
            )}</p>
            <p>{t(
              "Over 25 years we've grown from a small Cairo machine shop into a vertically integrated manufacturer running CNC machining, casting, hydraulics, rubber moulding and tool making — all inside a single, audited quality system.",
              "على مدى 25 عامًا نمونا من ورشة صغيرة بالقاهرة إلى مصنع متكامل رأسيًا يضم تشغيل CNC، والسباكة، والهيدروليك، وتصنيع الكاوتش، والإسطمبات — كلها ضمن نظام جودة واحد معتمد.",
            )}</p>
            <p>{t(
              "Today we serve Egyptian utilities and government infrastructure programmes, supply serial parts to European OEMs, and manufacture spare parts for oil, gas and energy operators across the region.",
              "اليوم نخدم هيئات المياه والبرامج الحكومية للبنية التحتية، ونورّد قطعًا كمية لشركات أوروبية، ونصنع قطع غيار لشركات النفط والغاز والطاقة في المنطقة.",
            )}</p>
          </div>
        </div>
      </Section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <SectionHead
            eyebrow={t("Timeline", "الخط الزمني")}
            title={t(<>From workshop<br />to industrial partner.</>, <>من ورشة صغيرة<br />إلى شريك صناعي.</>)}
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-3">
            {MILESTONES.map((m) => (
              <div key={m.year} className="bg-background p-8">
                <div className="num-display text-4xl font-semibold text-accent">{m.year}</div>
                <h3 className="mt-4 text-lg font-semibold text-primary">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <img src={factoryFloor} alt={t("Abu Ghali factory floor", "أرض مصنع أبو غالي")} loading="lazy" width={1920} height={1088} className="rounded-xl object-cover" />
          <img src={qualityInspection} alt={t("Quality inspection at Abu Ghali", "الفحص والجودة داخل أبو غالي")} loading="lazy" width={1280} height={960} className="rounded-xl object-cover" />
        </div>
      </Section>

      <CtaBand />
    </>
  );
}