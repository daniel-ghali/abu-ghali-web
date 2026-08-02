import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { useT } from "@/i18n/i18n";
import { routeSeo } from "@/lib/seo";
import heroCnc from "@/assets/hero-cnc.jpg";
import capCasting from "@/assets/capability-casting.jpg";
import qualityInspection from "@/assets/quality-inspection.jpg";
import capFlanges from "@/assets/capability-flanges.jpg";

export const Route = createFileRoute("/blog")({
  head: () =>
    routeSeo({
      title: "Engineering Journal — Abu Ghali | المدونة الهندسية",
      description: "Engineering articles on precision manufacturing — مقالات هندسية عن التصنيع الدقيق والخامات والتفاوتات.",
      path: "/blog",
      image: heroCnc,
    }),
  component: BlogPage,
});

const POSTS = [
  { cat: "Precision", title: "Why ±0.005 mm is not a marketing number", excerpt: "What it actually takes — from machine choice to environmental control — to hold five-micron tolerances in production.", image: heroCnc, read: "6 min read" },
  { cat: "Materials", title: "Choosing between GGG40 and WCB for water valve bodies", excerpt: "A practical comparison of ductile iron and cast carbon steel for water infrastructure applications.", image: capCasting, read: "8 min read" },
  { cat: "Quality", title: "Reading an EN 10204 3.1 material certificate", excerpt: "A field guide for procurement teams on what to check and what most suppliers hope you won't.", image: qualityInspection, read: "5 min read" },
  { cat: "Water", title: "DIN vs ANSI flange interoperability in mixed-standard projects", excerpt: "Design and manufacturing considerations for pipelines that need to serve both European and American equipment.", image: capFlanges, read: "7 min read" },
];

function BlogPage() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow={t("Engineering journal", "المدونة الهندسية")}
        title={t(<>Notes from the<br />manufacturing floor.</>, <>ملاحظات من<br />أرض المصنع.</>)}
        intro={t(
          "Long-form articles on precision, materials, quality and the practical realities of industrial manufacturing — written by our engineering team.",
          "مقالات مطوّلة عن الدقة والخامات والجودة وواقع التصنيع الصناعي — بقلم فريقنا الهندسي.",
        )}
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {POSTS.map((p, index) => (
            <Reveal key={p.title} delay={index * 0.08} amount={0.15}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-hairline bg-background transition hover:border-primary/30">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" width={1280} height={800} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    <span className="text-accent">{p.cat}</span>
                    <span>{p.read}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold leading-snug text-primary">{p.title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{p.excerpt}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}