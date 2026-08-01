import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { AGLogo } from "./ag-logo";
import { useT } from "@/i18n/i18n";

export function SiteFooter() {
  const t = useT();

  const columns = [
    {
      title: t("Company", "الشركة"),
      links: [
        { to: "/about", label: t("About", "من نحن") },
        { to: "/factory", label: t("Factory", "المصنع") },
        { to: "/quality", label: t("Quality", "الجودة") },
        { to: "/projects", label: t("Projects", "المشاريع") },
        { to: "/certificates", label: t("Certificates", "الشهادات") },
        { to: "/careers", label: t("Careers", "الوظائف") },
      ],
    },
    {
      title: t("Capabilities", "قدراتنا"),
      links: [
        { to: "/capabilities", label: t("CNC Machining", "تشغيل CNC") },
        { to: "/capabilities", label: t("Water Flanges", "الفلانشات") },
        { to: "/capabilities", label: t("Metal Casting", "صب المعادن") },
        { to: "/capabilities", label: t("Rubber Manufacturing", "تصنيع الكاوتش") },
        { to: "/capabilities", label: t("Tool & Die", "الإسطمبات") },
        { to: "/capabilities", label: t("Hydraulic Systems", "الأنظمة الهيدروليكية") },
      ],
    },
    {
      title: t("Industries", "القطاعات"),
      links: [
        { to: "/industries", label: t("Water Infrastructure", "المياه") },
        { to: "/industries", label: t("Oil & Gas", "النفط والغاز") },
        { to: "/industries", label: t("Energy", "الطاقة") },
        { to: "/industries", label: t("Automotive", "السيارات") },
        { to: "/industries", label: t("Construction", "المقاولات") },
        { to: "/industries", label: t("OEM Manufacturing", "التصنيع للغير (OEM)") },
      ],
    },
    {
      title: t("Resources", "الموارد"),
      links: [
        { to: "/products", label: t("Products", "المنتجات") },
        { to: "/downloads", label: t("Downloads", "التحميلات") },
        { to: "/news", label: t("News", "الأخبار") },
        { to: "/blog", label: t("Blog", "المدونة") },
        { to: "/contact", label: t("Contact", "تواصل معنا") },
        { to: "/quote", label: t("Request a Quote", "اطلب عرض سعر") },
      ],
    },
  ];

  const certs = [
    t("ISO 9001", "ISO 9001"),
    t("CE Compliant", "مطابقة CE"),
    t("OEM Manufacturing", "تصنيع للغير"),
    t("Registered Exporter", "مصدّر مسجل"),
  ];

  return (
    <footer className="bg-[#081729] text-primary-foreground">
      <div className="border-b border-white/10">
        <div className="container-x flex flex-col items-start justify-between gap-5 py-8 md:flex-row md:items-center md:py-10">
          <div className="max-w-xl">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl">
              {t("Send us your drawings — quotation in 48 hours.", "أرسل رسوماتك — عرض السعر خلال 48 ساعة.")}
            </h2>
            <p className="mt-2 text-sm text-white/60">
              {t("Engineering review included with every request.", "مراجعة هندسية مجانية مع كل طلب.")}
            </p>
          </div>
          <Link
            to="/quote"
            className="inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
          >
            {t("Request a quote", "اطلب عرض سعر")}
          </Link>
        </div>
      </div>

      {/* Main */}
      <div className="container-x grid gap-12 py-14 lg:grid-cols-[1fr_2.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <AGLogo className="h-11 w-11 rounded-full" />
            <div>
              <div className="text-[13px] font-bold tracking-[0.14em]">{t("ABU GHALI", "أبو غالي")}</div>
              <div className="text-[10px] font-medium tracking-[0.24em] text-white/60">
                {t("MODERN INDUSTRIES", "للصناعات الحديثة")}
              </div>
            </div>
          </div>

          <address className="mt-7 space-y-3 text-sm not-italic text-white/75">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span>
                {t(
                  <>Alexandria Street, off El-Trolley Street<br />Factory No. 26, Cairo, Egypt</>,
                  <>شارع اسكندرية متفرع من شارع الترول<br />مصنع رقم ٢٦، القاهرة، مصر</>,
                )}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <span className="flex flex-wrap items-center gap-x-3" dir="ltr">
                <a href="tel:+201016184004" className="hover:text-accent">+20 101 618 4004</a>
                <a href="tel:+201225044119" className="hover:text-accent">+20 122 504 4119</a>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              <a href="mailto:info@abughali-eg.net" className="hover:text-accent">info@abughali-eg.net</a>
            </div>
          </address>

          <div className="mt-7 flex items-center gap-2">
            <SocialIcon href="/contact" label="LinkedIn"><Linkedin className="h-4 w-4" /></SocialIcon>
            <SocialIcon href="/contact" label="Facebook"><Facebook className="h-4 w-4" /></SocialIcon>
            <SocialIcon href="/contact" label="Instagram"><Instagram className="h-4 w-4" /></SocialIcon>
            <SocialIcon href="/contact" label="WhatsApp"><MessageCircle className="h-4 w-4" /></SocialIcon>
          </div>
        </div>

        <nav aria-label={t("Footer", "روابط التذييل") as string} className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {columns.map((col) => (
            <div key={String(col.title)}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">{col.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm text-white/75">
                {col.links.map((l, i) => (
                  <li key={`${col.title}-${i}`}>
                    <Link to={l.to} className="inline-flex min-h-[36px] items-center transition hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 text-xs text-white/50">
          <span>
            © {new Date().getFullYear()} {t("Abu Ghali Modern Industries.", "مؤسسة أبو غالي للصناعات الحديثة.")}{" "}
            {t("All rights reserved.", "جميع الحقوق محفوظة.")}
          </span>
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {certs.map((c) => (
              <li key={String(c)} className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white/70 transition hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}