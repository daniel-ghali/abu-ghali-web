import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useT } from "@/i18n/i18n";
import { Reveal } from "./reveal";

export function CtaBand() {
  const t = useT();
  return (
    <section className="bg-surface">
      <div className="container-x py-16 sm:py-20 md:py-28">
        <Reveal direction="up" amount={0.15}>
          <div className="grid gap-8 rounded-2xl bg-primary p-6 text-primary-foreground sm:p-10 md:grid-cols-[1.4fr_1fr] md:p-14">
            <div>
              <div className="eyebrow-accent">
                <span className="inline-block h-px w-6 bg-accent" />
                {t("Ready when you are", "جاهزون لبدء مشروعك القادم؟")}
              </div>
              <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                {t(
                  <>Send drawings.<br />Receive a quotation within 48 hours.</>,
                  <>أرسل الرسومات الهندسية<br />واستلم عرض السعر خلال 48 ساعة.</>,
                )}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70 sm:text-base md:mt-6">
                {t(
                  "Our engineering team reviews every RFQ personally. Share your specifications, tolerances and volumes — we respond with pricing, lead times and DFM feedback.",
                  "يقوم فريقنا الهندسي بمراجعة كل طلب عرض سعر بشكل شخصي. أرسل مواصفاتك والتفاوتات والكميات — نرد بالأسعار وأوقات التوريد وملاحظات هندسية للتحسين.",
                )}
              </p>
            </div>
            <div className="flex flex-col justify-end gap-3">
              <Link
                to="/quote"
                className="inline-flex min-h-[48px] items-center justify-between gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition hover:bg-accent/90"
              >
                {t("Request a quotation", "أرسل طلب عرض سعر")} <ArrowUpRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex min-h-[48px] items-center justify-between gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-base font-semibold text-white transition hover:border-accent hover:text-accent"
              >
                {t("Contact sales", "تحدث مع مهندس")} <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
