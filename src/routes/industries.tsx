import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/section";
import { CtaBand } from "@/components/site/cta-band";
import { routeSeo } from "@/lib/seo";
import { useT } from "@/i18n/i18n";
import industryWater from "@/assets/industry-water.jpg";
import industryOilgas from "@/assets/industry-oilgas.jpg";
import industryEnergy from "@/assets/industry-energy.jpg";
import industryAuto from "@/assets/industry-auto.jpg";
import factoryFloor from "@/assets/factory-floor.jpg";
import capHydraulics from "@/assets/capability-hydraulics.jpg";

export const Route = createFileRoute("/industries")({
  head: () =>
    routeSeo({
      title: "Industries Served — Abu Ghali | القطاعات — أبو غالي",
      description: "Precision components for water, oil & gas, energy, automotive, construction and OEM — قطع دقيقة لقطاعات المياه والنفط والغاز والطاقة والسيارات والمقاولات والتصنيع للغير.",
      path: "/industries",
      image: industryWater,
    }),
  component: IndustriesPage,
});

function IndustriesPage() {
  const t = useT();
  const INDS = [
    { titleEn: "Water Infrastructure", titleAr: "شبكات المياه", image: industryWater, descEn: "Flanges, valve bodies, fittings and machined components for municipal water networks, treatment plants and pumping stations. Trusted supplier to Egyptian utilities.", descAr: "فلانشات وأجسام محابس ووصلات وقطع مشغّلة لشبكات المياه ومحطات المعالجة والضخ. مورد موثوق لهيئات المياه المصرية.", parts: ["DN25–DN1200", "Valve bodies", "Pump housings", "Fittings"] },
    { titleEn: "Oil & Gas", titleAr: "النفط والغاز", image: industryOilgas, descEn: "Machined pressure fittings, spare parts and specialty components for upstream and downstream operations across the region.", descAr: "وصلات ضغط وقطع غيار متخصصة لعمليات الاستخراج والتكرير في المنطقة.", parts: ["Pressure fittings", "Machined bodies", "Spare parts", "Specialty alloys"] },
    { titleEn: "Energy", titleAr: "الطاقة", image: industryEnergy, descEn: "Precision components for power generation, transmission substations and renewable energy plants — from turbine parts to substation hardware.", descAr: "قطع دقيقة لمحطات توليد الكهرباء ومحطات المحوّلات ومشاريع الطاقة المتجددة.", parts: ["Turbine components", "Substation parts", "Transformer parts", "Enclosures"] },
    { titleEn: "Automotive", titleAr: "السيارات", image: industryAuto, descEn: "Cast and machined components for local automotive assembly and export programmes.", descAr: "قطع مصبوبة ومشغّلة لخطوط تجميع السيارات المحلية والتصدير.", parts: ["Chassis brackets", "Machined castings", "Engine parts", "Aftermarket parts"] },
    { titleEn: "Construction", titleAr: "المقاولات", image: factoryFloor, descEn: "Heavy-duty machined and cast components for cranes, formwork, infrastructure equipment and construction machinery.", descAr: "قطع تحمّل عالي للأوناش والشدات ومعدات البنية التحتية والمقاولات.", parts: ["Crane components", "Structural fittings", "Machinery parts", "Custom fabrication"] },
    { titleEn: "OEM Manufacturing", titleAr: "تصنيع OEM", image: capHydraulics, descEn: "Contract manufacturing for global OEMs — serial parts, sub-assemblies and complete build-to-print programmes shipped worldwide.", descAr: "تصنيع تعاقدي للشركات العالمية — قطع كمية وتجميعات وبرامج تصنيع حسب الرسومات تُشحن حول العالم.", parts: ["Contract machining", "Serial production", "Sub-assemblies", "Build-to-print"] },
    { titleEn: "Government & Infrastructure", titleAr: "الحكومة والبنية التحتية", image: industryWater, descEn: "Long-term supplier to Egyptian government infrastructure programmes including water, wastewater, road and utility projects.", descAr: "مورد طويل الأجل للبرامج الحكومية المصرية في المياه والصرف والطرق والمرافق.", parts: ["Approved vendor", "Framework contracts", "Public tenders", "Local content"] },
    { titleEn: "International Export", titleAr: "التصدير الدولي", image: industryOilgas, descEn: "Regular exports to Africa, the Middle East and Europe with in-house handling of documentation, EUR.1 certificates and freight coordination.", descAr: "تصدير منتظم إلى إفريقيا والشرق الأوسط وأوروبا، بإدارة داخلية للتوثيق وشهادات EUR.1 والشحن.", parts: ["EUR.1 certificates", "Global freight", "Multi-standard parts", "40+ countries"] },
  ];
  return (
    <>
      <PageHero
        eyebrow={t("Industries served", "القطاعات التي نخدمها")}
        title={t(<>Built for demanding<br />industrial sectors.</>, <>مصنوع لأشد<br />القطاعات الصناعية تطلبًا.</>)}
        intro={t(
          "Our components run inside water networks, refineries, power plants, automotive lines and OEM assemblies — anywhere precision, documentation and predictable delivery matter.",
          "تعمل قطعنا داخل شبكات المياه والمصافي ومحطات الطاقة وخطوط السيارات وبرامج التصنيع للغير — في كل مكان تكون فيه الدقة والتوثيق والتسليم في موعده أولوية.",
        )}
      />

      <Section>
        <div className="grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline md:grid-cols-2">
          {INDS.map((i) => (
            <div key={i.titleEn} className="flex flex-col overflow-hidden bg-background">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={i.image} alt={t(i.titleEn, i.titleAr)} loading="lazy" width={1280} height={800} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                <h3 className="absolute bottom-6 start-6 text-3xl font-semibold text-white">{t(i.titleEn, i.titleAr)}</h3>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <p className="text-muted-foreground">{t(i.descEn, i.descAr)}</p>
                <ul className="mt-6 grid grid-cols-2 gap-2 border-t border-hairline pt-6 text-sm">
                  {i.parts.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-primary/80">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}