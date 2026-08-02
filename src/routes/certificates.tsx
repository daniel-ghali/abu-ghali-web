import { createFileRoute } from "@tanstack/react-router";
import { Download, FileCheck2 } from "lucide-react";
import { PageHero, Section } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta-band";
import { Reveal } from "@/components/site/reveal";
import { routeSeo } from "@/lib/seo";
import { useT } from "@/i18n/i18n";

export const Route = createFileRoute("/certificates")({
  head: () =>
    routeSeo({
      title: "Certificates — Abu Ghali | الشهادات",
      description: "ISO 9001, CE, product certifications — شهادات ISO 9001 و CE واعتمادات المنتجات ووثائق الجودة متاحة للتحميل.",
      path: "/certificates",
    }),
  component: CertificatesPage,
});

function CertificatesPage() {
  const t = useT();
  const CERTS = [
    { title: "ISO 9001:2015", body: t("Quality management system certification covering all manufacturing processes.", "شهادة نظام إدارة الجودة تشمل كافة عمليات التصنيع."), issuer: t("Accredited certification body", "جهة اعتماد معتمدة"), valid: t("Renewed annually", "يُجدَّد سنويًا") },
    { title: t("CE Compliance", "مطابقة CE"), body: t("Declaration of conformity for machinery and pressure components placed on the European market.", "إقرار مطابقة للماكينات وقطع الضغط المطروحة في السوق الأوروبي."), issuer: t("Self-declared with technical file", "إقرار ذاتي مع ملف فني"), valid: t("Current", "ساري") },
    { title: "EN 10204 3.1", body: t("Standard for all metallic raw materials procured and traceable to shipment.", "معيار جميع الخامات المعدنية القابلة للتتبع حتى الشحن."), issuer: t("Mill / supplier certification", "شهادة المصنع/المورد"), valid: t("Batch-level", "على مستوى الدفعة") },
    { title: t("Approved Vendor — HCWW", "مورد معتمد — الشركة القابضة للمياه"), body: t("Registered as an approved vendor with the Holding Company for Water and Wastewater.", "مسجّل كمورد معتمد لدى الشركة القابضة لمياه الشرب والصرف الصحي."), issuer: t("Government registration", "تسجيل حكومي"), valid: t("Active", "نشط") },
    { title: t("Local Content Certification", "شهادة المكوّن المحلي"), body: t("Egyptian local-content certification for public tender participation.", "شهادة المكون المحلي المصرية للمشاركة في المناقصات الحكومية."), issuer: t("Ministry-issued", "صادرة عن الوزارة"), valid: t("Renewed annually", "يُجدَّد سنويًا") },
    { title: "EUR.1", body: t("Preferential origin certification for exports to EU and Euro-Med partner countries.", "شهادة منشأ تفضيلية للتصدير إلى الاتحاد الأوروبي ودول الشراكة."), issuer: t("Egyptian Customs Authority", "مصلحة الجمارك المصرية"), valid: t("Per shipment", "لكل شحنة") },
  ];
  return (
    <>
      <PageHero
        eyebrow={t("Certificates & compliance", "الشهادات والاعتمادات")}
        title={t(<>Documentation<br />ready for buyers,<br />auditors and customs.</>, <>وثائق جاهزة<br />للمشترين والمراجعين<br />والجمارك.</>)}
        intro={t(
          "Regulated industries need paperwork that stands up to audits. Abu Ghali maintains active certification across quality, product compliance and export documentation.",
          "القطاعات المنظّمة تتطلب توثيقًا يجتاز أشد عمليات التدقيق. نحافظ في أبو غالي على اعتمادات فعّالة في الجودة ومطابقة المنتجات ووثائق التصدير.",
        )}
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {CERTS.map((c, index) => (
            <Reveal key={c.title} delay={index * 0.06} amount={0.15}>
              <div className="flex h-full gap-6 rounded-xl border border-hairline bg-card p-8">
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-md bg-accent/10 text-accent">
                  <FileCheck2 className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-4 text-xs">
                    <span className="text-muted-foreground">{c.issuer} · {c.valid}</span>
                    <a href="/downloads" className="inline-flex items-center gap-2 font-semibold text-primary transition hover:text-accent">
                      <Download className="h-4 w-4" /> {t("Download PDF", "تحميل PDF")}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}