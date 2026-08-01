import { createFileRoute } from "@tanstack/react-router";
import { Download, FileText } from "lucide-react";
import { PageHero, Section } from "@/components/site/section";
import { routeSeo } from "@/lib/seo";
import { useT } from "@/i18n/i18n";

export const Route = createFileRoute("/downloads")({
  head: () =>
    routeSeo({
      title: "Downloads — Abu Ghali | التحميلات",
      description: "Product catalogs, capability sheets and compliance documentation — كتالوجات المنتجات وأوراق القدرات ووثائق الاعتماد متاحة للتحميل.",
      path: "/downloads",
    }),
  component: DownloadsPage,
});

const DOCS = [
  { title: "Corporate Brochure 2025", size: "6.2 MB · PDF", cat: "Company" },
  { title: "Manufacturing Capabilities Sheet", size: "2.1 MB · PDF", cat: "Capabilities" },
  { title: "Water Flange Catalog", size: "8.4 MB · PDF", cat: "Products" },
  { title: "Hydraulic Components Catalog", size: "5.7 MB · PDF", cat: "Products" },
  { title: "Rubber Compounds Datasheet", size: "1.4 MB · PDF", cat: "Products" },
  { title: "ISO 9001 Certificate", size: "480 KB · PDF", cat: "Compliance" },
  { title: "Quality Manual (Excerpt)", size: "1.9 MB · PDF", cat: "Compliance" },
  { title: "Factory Fact Sheet", size: "1.1 MB · PDF", cat: "Company" },
];

function DownloadsPage() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow={t("Downloads", "التحميلات")}
        title={t(<>Documentation for<br />engineers and buyers.</>, <>وثائق للمهندسين<br />وفرق المشتريات.</>)}
        intro={t(
          "Catalogs, datasheets and compliance documents you can share internally with your engineering, procurement and QA teams.",
          "كتالوجات وبيانات فنية ووثائق اعتماد يمكن مشاركتها داخل فرق الهندسة والمشتريات والجودة لديك.",
        )}
      />
      <Section>
        <div className="grid gap-4">
          {DOCS.map((d) => (
            <a
              key={d.title}
              href="/contact"
              className="group flex items-center gap-6 rounded-xl border border-hairline bg-background p-6 transition hover:border-primary/40"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-accent/10 text-accent">
                <FileText className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{d.cat}</div>
                <div className="mt-1 text-lg font-semibold text-primary">{d.title}</div>
              </div>
              <div className="hidden text-sm text-muted-foreground md:block">{d.size}</div>
              <div className="inline-flex items-center gap-2 rounded-md border border-hairline px-4 py-2 text-sm font-semibold text-primary transition group-hover:border-accent group-hover:text-accent">
                <Download className="h-4 w-4" /> {t("Download", "تحميل")}
              </div>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}