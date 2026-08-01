import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta-band";
import { CapabilitiesShowcase } from "@/components/site/capabilities-showcase";
import { useT } from "@/i18n/i18n";
import { routeSeo } from "@/lib/seo";

export const Route = createFileRoute("/capabilities")({
  head: () =>
    routeSeo({
      title: "Manufacturing Capabilities — Abu Ghali Modern Industries",
      description: "CNC machining, metal casting, hydraulic components, rubber manufacturing, tool & die and water flanges — all engineered under one roof in Cairo.",
      path: "/capabilities",
    }),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow={t("Manufacturing capabilities", "قدراتنا التصنيعية")}
        title={t(
          <>Every process<br />under one roof.</>,
          <>جميع مراحل التصنيع<br />تحت سقف واحد.</>,
        )}
        intro={t(
          "From raw material to inspected part, Abu Ghali manufactures across eight integrated capabilities — engineered under a single quality system in our 18,000 m² Cairo facility.",
          "من المادة الخام إلى القطعة المفحوصة، تُنفّذ أبو غالي جميع مراحل التصنيع عبر ثماني قدرات متكاملة، ضمن نظام جودة واحد داخل مصنعها بمساحة 18,000 م² في القاهرة.",
        )}
      />
      <CapabilitiesShowcase />
      <CtaBand />
    </>
  );
}