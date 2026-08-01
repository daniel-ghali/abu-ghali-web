import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Upload, Building2, Clock } from "lucide-react";
import { PageHero, Section } from "@/components/site/section";
import { routeSeo } from "@/lib/seo";
import { useT } from "@/i18n/i18n";

export const Route = createFileRoute("/contact")({
  head: () =>
    routeSeo({
      title: "Contact — Abu Ghali Modern Industries | تواصل معنا",
      description: "Contact our sales and engineering teams in Cairo — تواصل مع فريق المبيعات والهندسة في مؤسسة أبو غالي للصناعات الحديثة بالقاهرة.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  const t = useT();
  return (
    <>
      <PageHero
        eyebrow={t("Contact", "تواصل معنا")}
        title={t(<>Talk to engineers<br />who make things.</>, <>تحدث مع مهندسين<br />يصنعون فعلًا.</>)}
        intro={t(
          "Our sales and manufacturing engineers respond to RFQs and technical questions within one business day. Send drawings, specifications or a description of the part you need.",
          "يرد فريق المبيعات والهندسة على طلبات الأسعار والأسئلة الفنية خلال يوم عمل واحد. أرسل الرسومات أو المواصفات أو وصفًا للقطعة المطلوبة.",
        )}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <aside className="space-y-8">
            <div>
              <div className="eyebrow-accent">{t("Head office", "المكتب الرئيسي")}</div>
              <h3 className="mt-3 text-xl font-semibold text-primary">Abu Ghali Modern Industries</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t(
                  <>Alexandria Street, branching from El-Trolley Street<br />Factory No. 26, Cairo, Egypt</>,
                  <>شارع اسكندرية متفرع من شارع الترول<br />مصنع رقم ٢٦، القاهرة، مصر</>,
                )}
              </p>
            </div>
            <div className="space-y-4">
              <ContactRow icon={Phone} label={t("Mobile / WhatsApp", "موبايل / واتساب")}>
                <a href="tel:+201016184004" dir="ltr" className="block text-primary hover:text-accent">+20 101 618 4004</a>
                <a href="tel:+201225044119" dir="ltr" className="block text-primary hover:text-accent">+20 122 504 4119</a>
              </ContactRow>
              <ContactRow icon={Mail} label={t("Email", "البريد الإلكتروني")}>
                <a href="mailto:info@abughali-eg.net" className="text-primary hover:text-accent">info@abughali-eg.net</a>
              </ContactRow>
              <ContactRow icon={MapPin} label={t("Address", "العنوان")}>
                <span className="text-primary">
                  {t(
                    "Alexandria St., branching from El-Trolley St., Factory No. 26, Cairo",
                    "شارع اسكندرية متفرع من شارع الترول، مصنع رقم ٢٦، القاهرة",
                  )}
                </span>
              </ContactRow>
              <ContactRow icon={Clock} label={t("Working hours", "ساعات العمل")}>
                <span className="text-primary">{t("Sun–Thu · 08:00 – 17:00 EET", "الأحد–الخميس · 8:00 – 17:00")}</span>
              </ContactRow>
              <ContactRow icon={Building2} label={t("Export enquiries", "استفسارات التصدير")}>
                <a href="mailto:info@abughali-eg.net" className="text-primary hover:text-accent">info@abughali-eg.net</a>
              </ContactRow>
            </div>
          </aside>

          <form className="rounded-xl border border-hairline bg-background p-8 md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label={t("Full name", "الاسم بالكامل")}><input type="text" className="ag-input" /></Field>
              <Field label={t("Company", "الشركة")}><input type="text" className="ag-input" /></Field>
              <Field label={t("Work email", "البريد الإلكتروني")}><input type="email" className="ag-input" /></Field>
              <Field label={t("Phone / WhatsApp", "الهاتف / واتساب")}><input type="tel" className="ag-input" /></Field>
              <Field label={t("Country", "الدولة")} className="md:col-span-2"><input type="text" className="ag-input" /></Field>
              <Field label={t("Industry", "القطاع")} className="md:col-span-2">
                <select className="ag-input">
                  <option>{t("Select industry", "اختر القطاع")}</option>
                  <option>{t("Water Infrastructure", "شبكات المياه")}</option>
                  <option>{t("Oil & Gas", "النفط والغاز")}</option>
                  <option>{t("Energy", "الطاقة")}</option>
                  <option>{t("Automotive", "السيارات")}</option>
                  <option>{t("Construction", "المقاولات")}</option>
                  <option>{t("OEM Manufacturing", "تصنيع OEM")}</option>
                </select>
              </Field>
              <Field label={t("How can we help?", "كيف يمكننا مساعدتك؟")} className="md:col-span-2">
                <textarea className="ag-input min-h-36" placeholder={t("Describe your part, specifications, quantity and target lead time.", "اذكر القطعة والمواصفات والكمية وزمن التسليم المطلوب.")} />
              </Field>
              <Field label={t("Attach drawings (PDF, DWG, STEP)", "أرفق الرسومات (PDF, DWG, STEP)")} className="md:col-span-2">
                <label className="flex cursor-pointer items-center justify-center gap-3 rounded-md border border-dashed border-hairline bg-surface px-4 py-6 text-sm text-muted-foreground transition hover:border-accent hover:text-accent">
                  <Upload className="h-5 w-5" />
                  {t("Click to upload or drag files here (max 25 MB)", "اضغط للرفع أو اسحب الملفات هنا (حتى 25 ميجا)")}
                  <input type="file" className="hidden" multiple />
                </label>
              </Field>
            </div>
            <button type="submit" className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-4 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90 md:w-auto">
              {t("Send message", "أرسل الرسالة")}
            </button>
            <p className="mt-4 text-xs text-muted-foreground">
              {t(
                "We respond to every enquiry within one business day. Sensitive drawings are handled under NDA on request.",
                "نرد على كل استفسار خلال يوم عمل واحد. الرسومات الحساسة تُتعامل معها باتفاقية سرية (NDA) عند الطلب.",
              )}
            </p>
          </form>
        </div>
      </Section>

      <section className="bg-surface pb-24">
        <div className="container-x">
          <div className="overflow-hidden rounded-xl border border-hairline">
            <iframe
              title={t("Abu Ghali Modern Industries — Cairo", "أبو غالي للصناعات الحديثة — القاهرة")}
              src="https://www.google.com/maps?q=6th+of+October+City,+Giza,+Egypt&output=embed"
              loading="lazy"
              className="h-[420px] w-full border-0 grayscale"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({ icon: Icon, label, children }: { icon: typeof Mail; label: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-md border border-hairline text-accent">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm font-medium">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, children, className }: { label: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <label className={`flex flex-col gap-2 text-sm ${className ?? ""}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}