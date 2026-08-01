import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, SectionHead } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta-band";
import { routeSeo } from "@/lib/seo";
import { useT, useLocale } from "@/i18n/i18n";
import { CATEGORIES, CAT_ALL, ITEMS, categoryAr } from "@/data/products";

export const Route = createFileRoute("/products")({
  head: () =>
    routeSeo({
      title: "Products — Abu Ghali | المنتجات — أبو غالي للصناعات الحديثة",
      description: "Standard and custom industrial products — منتجات صناعية قياسية ومخصصة: فلانشات المياه، البساتم، المصبوبات، منتجات الكاوتش وقطع OEM.",
      path: "/products",
      image: ITEMS[0]?.image ?? "/favicon.ico",
    }),
  component: ProductsPage,
});

function ProductsPage() {
  const t = useT();
  const { isAr } = useLocale();
  const [active, setActive] = useState<string>("all");
  const filtered = active === "all" ? ITEMS : ITEMS.filter((i) => i.catEn === active);
  const cats = [{ key: "all", en: CAT_ALL.en, ar: CAT_ALL.ar }, ...CATEGORIES.map((c) => ({ key: c.en, en: c.en, ar: c.ar }))];
  return (
    <>
      <PageHero
        eyebrow={t("Products", "المنتجات")}
        title={t(<>Standard parts.<br />Custom on request.</>, <>قطع قياسية.<br />ومخصصة عند الطلب.</>)}
        intro={t(
          "A curated catalog of industrial components we manufacture regularly. Every product is quotable in custom sizes, materials, coatings and quantities — send drawings for build-to-print items.",
          "مجموعة مختارة من القطع الصناعية التي نُصنّعها بانتظام. كل منتج قابل للتنفيذ بمقاسات وخامات وتشطيبات وكميات مخصصة — أرسل الرسومات للقطع حسب الطلب.",
        )}
      />

      <Section>
        <div className="mb-10 flex flex-wrap items-center gap-2">
          {cats.map((c) => {
            const isActive = active === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${isActive ? "border-primary bg-primary text-primary-foreground" : "border-hairline text-primary/70 hover:border-primary/40 hover:text-primary"}`}
              >
                {isAr ? c.ar : c.en}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.code} className="group flex flex-col overflow-hidden rounded-xl border border-hairline bg-card transition hover:border-primary/30">
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <img src={p.image} alt={isAr ? p.titleAr : p.titleEn} loading="lazy" width={1280} height={960} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-md bg-black/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-white backdrop-blur">
                  {p.code}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                  {isAr ? categoryAr(p.catEn) : p.catEn}
                </div>
                <h3 className="mt-2 text-lg font-semibold leading-snug text-primary">{isAr ? p.titleAr : p.titleEn}</h3>
                <dl className="mt-4 grid grid-cols-2 gap-2 border-t border-hairline pt-4 text-xs">
                  <div>
                    <dt className="text-muted-foreground">{t("Material", "الخامة")}</dt>
                    <dd className="mt-0.5 font-medium text-primary">{p.material}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{t("Standard", "المواصفة")}</dt>
                    <dd className="mt-0.5 font-medium text-primary">{p.standard}</dd>
                  </div>
                </dl>
                <Link to="/quote" search={{ product: p.code }} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:text-accent">
                  {t("Request quotation", "اطلب عرض سعر")} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CategoryGalleries active={active} />

      <CtaBand />
    </>
  );
}


function CategoryGalleries({ active }: { active: string }) {
  const t = useT();
  const { isAr } = useLocale();
  const cats = (active === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.en === active)) as readonly {
    en: string;
    ar: string;
  }[];

  return (
    <Section className="border-t border-hairline">
      <div id="gallery" className="sr-only" aria-hidden="true" />
      <SectionHead
        eyebrow={t("Gallery", "معرض الصور")}
        title={t(
          <>Product gallery by category.</>,
          <>معرض المنتجات حسب الفئة.</>,
        )}
        intro={t(
          "Photographs of parts we manufacture in-house, grouped by capability. Each caption lists the part name in English and Arabic, its material and the standard it is produced to.",
          "صور لقطع نُصنّعها داخل مصنعنا، مُصنّفة حسب القدرة التصنيعية. يوضّح كل تعليق اسم القطعة بالعربية والإنجليزية وخامتها والمواصفة المُصنّعة وفقها.",
        )}
      />

      <div className="mt-12 space-y-16">
        {cats.map((cat) => {
          const items = ITEMS.filter((i) => i.catEn === cat.en);
          if (items.length === 0) return null;
          const headingId = `gallery-${cat.en.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
          return (
            <section key={cat.en} aria-labelledby={headingId}>
              <div className="flex items-baseline justify-between gap-4 border-b border-hairline pb-3">
                <h3 id={headingId} className="text-lg font-semibold tracking-tight text-primary">
                  {isAr ? cat.ar : cat.en}{" "}
                  <span className="font-normal text-muted-foreground" dir={isAr ? "ltr" : "rtl"}>
                    · {isAr ? cat.en : cat.ar}
                  </span>
                </h3>
                <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {items.length} {t("products", "منتج")}
                </span>
              </div>
              <ul className="mt-6 grid list-none gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((it) => (
                  <li key={`g-${it.code}`}>
                    <figure className="group m-0">
                    <div className="overflow-hidden rounded-lg border border-hairline bg-surface">
                      <img
                        src={it.image}
                        alt={
                          isAr
                            ? `${it.titleAr} (${it.code}) — ${cat.ar}، خامة ${it.material}، وفق المواصفة ${it.standard} — تصنيع أبو غالي للصناعات الحديثة`
                            : `${it.titleEn} (${it.code}) — ${cat.en} part in ${it.material} manufactured to ${it.standard} by Abu Ghali Modern Industries`
                        }
                        loading="lazy"
                        decoding="async"
                        width={1280}
                        height={960}
                        className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="mt-3">
                      <div className="text-sm font-semibold leading-snug text-primary">
                        {isAr ? it.titleAr : it.titleEn}
                      </div>
                      <div className="mt-0.5 text-xs leading-snug text-muted-foreground" dir={isAr ? "ltr" : "rtl"}>
                        {isAr ? it.titleEn : it.titleAr}
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">
                        <span className="font-medium text-primary/80">{it.material}</span>
                        <span aria-hidden="true"> · </span>
                        <span>{it.standard}</span>
                      </div>
                      <div className="mt-1 text-[10px] font-semibold tracking-[0.16em] text-accent">{it.code}</div>
                    </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </Section>
  );
}