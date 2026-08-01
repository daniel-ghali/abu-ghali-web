import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHead } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta-band";
import { routeSeo } from "@/lib/seo";
import { useT } from "@/i18n/i18n";
import factoryFloor from "@/assets/factory-floor.jpg";
import heroCnc from "@/assets/hero-cnc.jpg";
import qualityInspection from "@/assets/quality-inspection.jpg";
import capCasting from "@/assets/capability-casting.jpg";
import capHydraulics from "@/assets/capability-hydraulics.jpg";
import capRubber from "@/assets/capability-rubber.jpg";

export const Route = createFileRoute("/factory")({
  head: () =>
    routeSeo({
      title: "Inside the Factory — Abu Ghali | داخل المصنع",
      description: "18,000 m² manufacturing facility in Cairo — منشأة تصنيع 18,000 م² في القاهرة تضم CNC والسباكة والهيدروليك والكاوتش والفحص والتعبئة تحت سقف واحد.",
      path: "/factory",
      image: factoryFloor,
    }),
  component: FactoryPage,
});

function FactoryPage() {
  const t = useT();
  const STATIONS = [
    { n: "01", title: t("CNC Machining Hall", "قاعة تشغيل CNC"), image: heroCnc, desc: t("24 CNC centres running two shifts — 3, 4 and 5-axis milling and turning.", "24 مركز CNC تعمل على ورديتين — تفريز وخراطة 3 و4 و5 محاور.") },
    { n: "02", title: t("Casting Foundry", "مسبك السباكة"), image: capCasting, desc: t("Sand-casting foundry for ferrous and non-ferrous alloys up to 250 kg.", "مسبك رملي للسبائك الحديدية وغير الحديدية حتى 250 كجم.") },
    { n: "03", title: t("Hydraulics Assembly", "تجميع الهيدروليك"), image: capHydraulics, desc: t("Honing, chrome finishing and 100% leak-tested cylinder bodies.", "تشطيب داخلي، طلاء كروم، واختبار تسريب 100% لأجسام البساتم.") },
    { n: "04", title: t("Rubber Moulding", "قوالب الكاوتش"), image: capRubber, desc: t("Compression and injection moulding lines for elastomer components.", "خطوط قولبة ضغط وحقن لقطع الإيلاستومر.") },
    { n: "05", title: t("Quality Lab", "معمل الجودة"), image: qualityInspection, desc: t("CMM, roundness testers and calibrated instruments for full metrology.", "أجهزة CMM واختبار الاستدارة وأدوات معايرة للفحص القياسي الكامل.") },
    { n: "06", title: t("Packaging & Dispatch", "التعبئة والشحن"), image: factoryFloor, desc: t("Export-grade packaging and full documentation for global shipments.", "تعبئة تصدير وتوثيق كامل للشحنات الدولية.") },
  ];
  return (
    <>
      <PageHero
        eyebrow={t("Factory", "المصنع")}
        title={t(<>Every process,<br />every checkpoint,<br />one facility.</>, <>كل العمليات،<br />كل نقاط الفحص،<br />منشأة واحدة.</>)}
        intro={t(
          "Our 18,000 m² Cairo plant integrates six production stations under a single quality system — the reason we can commit to lead times and hold tolerances across parts made from different processes.",
          "مصنعنا بالقاهرة على مساحة 18,000 م² يجمع ست محطات إنتاج تحت نظام جودة واحد — لهذا نلتزم بمواعيد التسليم والدقة عبر كل العمليات.",
        )}
      />

      <section className="relative">
        <img src={factoryFloor} alt={t("Abu Ghali factory floor", "أرض مصنع أبو غالي")} loading="lazy" width={1920} height={1088} className="h-[60vh] w-full object-cover" />
      </section>

      <Section>
        <SectionHead
          eyebrow={t("The production line", "خط الإنتاج")}
          title={t(<>Six stations,<br />one accountable flow.</>, <>ست محطات،<br />بمسار إنتاجي واحد.</>)}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STATIONS.map((s) => (
            <div key={s.title} className="group overflow-hidden rounded-xl border border-hairline bg-background">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-md bg-black/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.2em] text-white">{s.n}</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}