import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero, Section, SectionHead } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta-band";
import { routeSeo } from "@/lib/seo";
import { useT } from "@/i18n/i18n";
import qualityInspection from "@/assets/quality-inspection.jpg";

export const Route = createFileRoute("/quality")({
  head: () =>
    routeSeo({
      title: "Quality — Abu Ghali | الجودة",
      description: "ISO 9001-aligned quality management, CMM inspection, full traceability — نظام جودة متوافق مع ISO 9001 وفحص CMM وتتبّع كامل للخامات وتوثيق شامل.",
      path: "/quality",
      image: qualityInspection,
    }),
  component: QualityPage,
});

function QualityPage() {
  const t = useT();
  const STEPS = [
    { n: "01", title: t("RFQ engineering review", "المراجعة الهندسية للطلب"), body: t("Every RFQ is reviewed by manufacturing engineers who validate tolerances, materials and DFM before quoting.", "يراجع مهندسو التصنيع كل طلب سعر للتحقق من التفاوتات والخامات وقابلية التصنيع قبل التسعير.") },
    { n: "02", title: t("Material certification", "شهادات الخامات"), body: t("Raw material sourced against EN 10204 3.1 certificates, matched to heat number, and recorded for full traceability.", "توريد الخامات بشهادات EN 10204 3.1 مع مطابقة رقم الصهرة وتسجيلها للتتبّع الكامل.") },
    { n: "03", title: t("In-process inspection", "الفحص أثناء التشغيل"), body: t("First-article and in-process checks with calibrated instruments — recorded against the production traveller.", "فحص أول قطعة وفحوصات أثناء التشغيل بأدوات معايرة، مسجّلة على بطاقة الإنتاج.") },
    { n: "04", title: t("Final CMM inspection", "الفحص النهائي CMM"), body: t("Coordinate-measuring machine inspection with documented dimensional reports issued with every shipment.", "فحص بأجهزة CMM مع تقارير أبعاد موثقة تصدر مع كل شحنة.") },
    { n: "05", title: t("Functional testing", "الاختبارات التشغيلية"), body: t("Pressure testing for hydraulic components, leak testing for water fittings, and load testing where required.", "اختبار ضغط للهيدروليك، اختبار تسريب لوصلات المياه، واختبار حمل عند الطلب.") },
    { n: "06", title: t("Documented release", "الإفراج الموثّق"), body: t("Every batch is released with material certs, dimensional reports and packaging that survives long-haul export.", "تُفرَج كل دفعة مع شهادات الخامات وتقارير الأبعاد وتغليف يتحمل الشحن الدولي.") },
  ];
  return (
    <>
      <PageHero
        eyebrow={t("Quality", "الجودة")}
        title={t(<>Documented quality<br />is the product.</>, <>الجودة الموثّقة<br />هي المنتج.</>)}
        intro={t(
          "Industrial customers buy tolerance, material and predictability. Our quality system is designed to prove all three — on every batch, in writing.",
          "عملاء الصناعة يشترون الدقة والخامة والالتزام. نظام جودتنا مصمم ليُثبت الثلاثة في كل دفعة وبالتوثيق.",
        )}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div className="overflow-hidden rounded-xl border border-hairline">
            <img src={qualityInspection} alt={t("Quality inspection at Abu Ghali", "الفحص والجودة داخل أبو غالي")} loading="lazy" width={1280} height={960} className="w-full object-cover" />
          </div>
          <div>
            <div className="eyebrow-accent">
              <span className="inline-block h-px w-6 bg-accent" />
              {t("ISO 9001 aligned", "متوافق مع ISO 9001")}
            </div>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-primary md:text-5xl">
              {t(<>A quality system<br />built for regulated buyers.</>, <>نظام جودة<br />مصمم للقطاعات المنظمة.</>)}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t(
                "Our quality management system is aligned to ISO 9001 and structured around the requirements of regulated buyers — water utilities, oil & gas operators, automotive OEMs and government infrastructure programmes.",
                "نظام إدارة الجودة لدينا متوافق مع ISO 9001 ومصمم وفق متطلبات القطاعات المنظّمة — هيئات المياه، شركات النفط والغاز، شركات السيارات، والبرامج الحكومية.",
              )}
            </p>
            <ul className="mt-8 space-y-3 text-primary">
              {[
                t("EN 10204 3.1 material certification", "شهادات خامات EN 10204 3.1"),
                t("CMM-inspected dimensional reports", "تقارير أبعاد بفحص CMM"),
                t("Full batch traceability from mill to shipment", "تتبّع كامل للدفعة من المصنع حتى الشحن"),
                t("Calibrated instruments on documented schedules", "أدوات معايرة بجداول موثقة"),
                t("Documented non-conformance and corrective action", "توثيق عدم المطابقة والإجراءات التصحيحية"),
              ].map((i, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <SectionHead
            eyebrow={t("Quality process", "منظومة الجودة")}
            title={t(<>Six checkpoints,<br />zero shortcuts.</>, <>ست نقاط فحص،<br />بلا اختصارات.</>)}
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-xl border border-hairline bg-background p-8">
                <div className="num-display text-3xl font-semibold text-accent">{s.n}</div>
                <h3 className="mt-4 text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}