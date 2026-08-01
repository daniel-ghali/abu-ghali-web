import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero, Section, SectionHead } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta-band";
import { routeSeo } from "@/lib/seo";
import { useT, useLocale } from "@/i18n/i18n";

export const Route = createFileRoute("/projects")({
  head: () =>
    routeSeo({
      title: "Projects & Case Studies — Abu Ghali | مشاريعنا",
      description: "Manufacturing programmes delivered to Egyptian utilities, international OEMs and infrastructure contractors — برامج تصنيع نُفّذت لهيئات مياه مصرية وشركات عالمية ومقاولي بنية تحتية.",
      path: "/projects",
    }),
  component: ProjectsPage,
});

const PROJECTS = [
  {
    clientEn: "Holding Company for Water & Wastewater", clientAr: "الشركة القابضة لمياه الشرب والصرف الصحي",
    industryEn: "Water Infrastructure", industryAr: "البنية التحتية للمياه",
    year: "2023", volumeEn: "12,400 units", volumeAr: "12,400 قطعة",
    scopeEn: "Design-support, manufacture and coating of DN80–DN600 flanged assemblies for a nationwide potable-water rehabilitation programme across Upper Egypt.",
    scopeAr: "دعم التصميم وتصنيع وطلاء وصلات فلانشات من DN80 إلى DN600 ضمن برنامج قومي لإعادة تأهيل شبكات مياه الشرب في محافظات الصعيد.",
  },
  {
    clientEn: "European Hydraulics OEM", clientAr: "شركة أوروبية للأنظمة الهيدروليكية (OEM)",
    industryEn: "OEM Manufacturing", industryAr: "التصنيع للغير (OEM)",
    year: "Ongoing since 2019", volumeEn: "6,500 / year", volumeAr: "6,500 قطعة سنويًا",
    scopeEn: "Serial contract manufacturing of cylinder bodies, manifolds and machined components shipped weekly to a Central European assembly line.",
    scopeAr: "تصنيع تعاقدي لأجسام البساتم والمشعبات والقطع المشغّلة، مع شحنات أسبوعية إلى خط تجميع في أوروبا الوسطى.",
  },
  {
    clientEn: "Suez Oil Processing Company", clientAr: "شركة السويس لتصنيع البترول",
    industryEn: "Oil & Gas", industryAr: "النفط والغاز",
    year: "2022", volumeEn: "820 units", volumeAr: "820 قطعة",
    scopeEn: "Machined pressure fittings and spare parts for downstream refining operations, delivered against 3.1 material certification and hydrostatic testing.",
    scopeAr: "تصنيع وصلات الضغط وقطع الغيار لعمليات التكرير، مع شهادات مواد 3.1 واختبارات هيدروستاتيكية معتمدة.",
  },
  {
    clientEn: "Nasr Automotive Manufacturing", clientAr: "النصر لصناعة السيارات",
    industryEn: "Automotive", industryAr: "السيارات",
    year: "2024", volumeEn: "18,000 units", volumeAr: "18,000 قطعة",
    scopeEn: "Cast and machined chassis brackets and engine mounts for light-commercial vehicle assembly in 6th of October City.",
    scopeAr: "تصنيع مسبوكات ومشغولات لكوابل الشاسيه ومساند المحرك لتجميع مركبات تجارية خفيفة في مدينة السادس من أكتوبر.",
  },
  {
    clientEn: "Regional Water Contractor (KSA)", clientAr: "مقاول مياه إقليمي (المملكة العربية السعودية)",
    industryEn: "Water Infrastructure", industryAr: "البنية التحتية للمياه",
    year: "2023", volumeEn: "4,200 units", volumeAr: "4,200 قطعة",
    scopeEn: "Exported flanged assemblies and pump housings for water-utility projects in the Kingdom of Saudi Arabia.",
    scopeAr: "تصدير وصلات فلانشات وأجسام طلمبات لمشروعات مرافق المياه في المملكة العربية السعودية.",
  },
  {
    clientEn: "Independent Power Producer", clientAr: "منتج مستقل للطاقة",
    industryEn: "Energy", industryAr: "الطاقة",
    year: "2021", volumeEn: "Custom", volumeAr: "حسب الطلب",
    scopeEn: "Turbine auxiliaries and enclosure hardware for a combined-cycle power plant, delivered under an ISO 9001-compliant supply agreement.",
    scopeAr: "ملحقات توربينات ومكونات هيكلية لمحطة طاقة ذات دورة مركبة، ضمن اتفاقية توريد معتمدة وفق ISO 9001.",
  },
];

function ProjectsPage() {
  const t = useT();
  const { isAr } = useLocale();
  return (
    <>
      <PageHero
        eyebrow={t("Projects & case studies", "المشاريع ودراسات الحالة")}
        title={t(<>Manufacturing<br />that ships, on time,<br />under specification.</>, <>تصنيع يصل<br />في الموعد،<br />بالمواصفات المطلوبة.</>)}
        intro={t(
          "A representative selection of programmes delivered to utilities, OEMs and infrastructure operators across Egypt and international markets.",
          "نماذج مختارة من البرامج التي نفّذناها لهيئات المياه والشركات العالمية ومشغّلي البنية التحتية في مصر والأسواق الدولية.",
        )}
      />

      <Section>
        <div className="overflow-hidden rounded-xl border border-hairline">
          {PROJECTS.map((p, i) => (
            <article
              key={p.clientEn}
              className={`grid gap-6 p-8 md:grid-cols-[1.2fr_1.6fr_auto] md:items-start md:gap-10 md:p-10 ${i > 0 ? "border-t border-hairline" : ""}`}
            >
              <div>
                <div className="eyebrow text-accent">{isAr ? p.industryAr : p.industryEn}</div>
                <h3 className="mt-3 text-2xl font-semibold text-primary">{isAr ? p.clientAr : p.clientEn}</h3>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  <span>{p.year}</span>
                  <span>{isAr ? p.volumeAr : p.volumeEn}</span>
                </div>
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">{isAr ? p.scopeAr : p.scopeEn}</p>
              <div className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-primary md:justify-self-end">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <SectionHead
            eyebrow={t("Trusted by", "يثقون بنا")}
            title={t(<>Long-term partners across infrastructure and industry.</>, <>شراكات طويلة الأمد في البنية التحتية والصناعة.</>)}
          />
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-3 lg:grid-cols-6">
            {["HCWW", "Suez Oil", "Nasr Auto", "Orascom", "EEHC", "Petrojet"].map((n) => (
              <div key={n} className="grid aspect-[3/2] place-items-center bg-background text-lg font-semibold tracking-tight text-primary/60">
                {n}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}