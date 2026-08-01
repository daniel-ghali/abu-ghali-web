import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, SectionHead } from "@/components/site/section";
import { routeSeo } from "@/lib/seo";
import { useT } from "@/i18n/i18n";

export const Route = createFileRoute("/careers")({
  head: () =>
    routeSeo({
      title: "Careers — Abu Ghali | الوظائف",
      description: "Join an Egyptian industrial manufacturer — انضم إلى مؤسسة صناعية مصرية بخبرة تتجاوز 25 عامًا. وظائف في التشغيل والهندسة والجودة والتشغيل.",
      path: "/careers",
    }),
  component: CareersPage,
});

const ROLES = [
  { title: "Senior CNC Programmer", dept: "Machining", type: "Full-time · Cairo" },
  { title: "Manufacturing Engineer — Castings", dept: "Engineering", type: "Full-time · Cairo" },
  { title: "Quality Inspector (CMM)", dept: "Quality", type: "Full-time · Cairo" },
  { title: "Export Sales Manager", dept: "Commercial", type: "Full-time · Cairo" },
  { title: "Tool Room Technician", dept: "Tooling", type: "Full-time · Cairo" },
  { title: "Maintenance Engineer", dept: "Operations", type: "Full-time · Cairo" },
];

function CareersPage() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow={t("Careers", "الوظائف")}
        title={t(<>Build a career in<br />serious manufacturing.</>, <>ابنِ مسيرتك في<br />تصنيع حقيقي.</>)}
        intro={t(
          "Abu Ghali is where Egyptian engineers and machinists spend decades building real careers — not job-hopping between generic offices.",
          "في أبو غالي يبني المهندسون والفنيون المصريون مسيرات مهنية حقيقية على مدى عقود — لا مجرد وظائف مؤقتة.",
        )}
      />

      <Section>
        <SectionHead eyebrow={t("Open roles", "الوظائف المتاحة")} title={t(<>Currently hiring.</>, <>وظائف شاغرة الآن.</>)} />
        <div className="mt-12 overflow-hidden rounded-xl border border-hairline">
          {ROLES.map((r, i) => (
            <div key={r.title} className={`grid gap-4 p-6 md:grid-cols-[2fr_1fr_1fr_auto] md:items-center md:p-8 ${i > 0 ? "border-t border-hairline" : ""}`}>
              <h3 className="text-lg font-semibold text-primary">{r.title}</h3>
              <div className="text-sm text-muted-foreground">{r.dept}</div>
              <div className="text-sm text-muted-foreground">{r.type}</div>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent md:justify-self-end">
                {t("Apply", "تقدم")} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}