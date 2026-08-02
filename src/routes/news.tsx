import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/section";
import { Reveal } from "@/components/site/reveal";
import { routeSeo } from "@/lib/seo";
import { useT } from "@/i18n/i18n";
import factoryFloor from "@/assets/factory-floor.jpg";
import heroCnc from "@/assets/hero-cnc.jpg";
import qualityInspection from "@/assets/quality-inspection.jpg";

export const Route = createFileRoute("/news")({
  head: () =>
    routeSeo({
      title: "News — Abu Ghali | الأخبار",
      description: "Company news, contract announcements and facility updates — أخبار الشركة وإعلانات العقود وتحديثات المصنع.",
      path: "/news",
      image: heroCnc,
    }),
  component: NewsPage,
});

const ITEMS = [
  { date: "March 2025", title: "Abu Ghali completes 12,400-unit water flange programme for HCWW", image: industryImage(0) },
  { date: "January 2025", title: "New 5-axis machining cell commissioned in CNC Hall 07", image: heroCnc },
  { date: "November 2024", title: "Renewed multi-year OEM contract with European hydraulics partner", image: qualityInspection },
  { date: "August 2024", title: "Factory expansion adds 4,000 m² of production space", image: factoryFloor },
];

function industryImage(_: number) {
  return factoryFloor;
}

function NewsPage() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow={t("News", "الأخبار")}
        title={t(<>What's happening<br />at Abu Ghali.</>, <>آخر أخبار<br />أبو غالي.</>)}
        intro={t(
          "Contract announcements, capacity updates and manufacturing milestones from our Cairo facility.",
          "إعلانات العقود وتحديثات الطاقة الإنتاجية ومحطات مهمة من مصنعنا بالقاهرة.",
        )}
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {ITEMS.map((n, index) => (
            <Reveal key={n.title} delay={index * 0.08} amount={0.15}>
              <article className="group overflow-hidden rounded-xl border border-hairline bg-background transition hover:border-primary/30">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={n.image} alt={n.title} loading="lazy" width={1280} height={800} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="eyebrow text-accent">{n.date}</div>
                  <h3 className="mt-4 text-2xl font-semibold leading-snug text-primary">{n.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}