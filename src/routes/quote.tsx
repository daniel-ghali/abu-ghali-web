import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Upload,
  X,
  Check,
  ChevronRight,
  ChevronLeft,
  Building,
  User,
  Mail,
  Phone,
  Globe,
  Settings,
  Flame,
  Droplets,
  Layers,
  Wrench,
  Factory,
  FileText,
  Lock,
  Loader2,
  Trash2
} from "lucide-react";
import { PageHero, Section } from "@/components/site/section";
import { routeSeo } from "@/lib/seo";
import { useT, useLocale } from "@/i18n/i18n";
import { findItem, categoryAr, galleryFor, detailsFor } from "@/data/products";
import { ProductGallery } from "@/components/site/product-gallery";

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>): { product?: string } => ({
    product: typeof search["product"] === "string" ? (search["product"] as string) : undefined,
  }),
  head: () =>
    routeSeo({
      title: "Request a Quotation — Abu Ghali | اطلب عرض سعر",
      description: "Send drawings for a manufacturing quotation — أرسل الرسومات والمواصفات، ويردّ فريقنا الهندسي بعرض سعر خلال 48 ساعة.",
      path: "/quote",
    }),
  component: QuotePage,
});

const PROCESSES = [
  { en: "CNC Machining", ar: "تشغيل المعادن CNC", icon: Settings, descEn: "Milling, turning, and high precision machining", descAr: "فريزة، خراطة، وتشغيل عالي الدقة" },
  { en: "Metal Casting", ar: "سباكة وصب المعادن", icon: Flame, descEn: "Sand casting, investment casting of alloys", descAr: "سباكة رملية وسباكة شمعية للسبائك" },
  { en: "Hydraulic Systems", ar: "الأنظمة الهيدروليكية والطلمبات", icon: Droplets, descEn: "Pumps, valves, cylinders and power packs", descAr: "مضخات، صمامات، سلندرات ووحدات قدرة" },
  { en: "Rubber Products", ar: "منتجات الكاوتش", icon: Layers, descEn: "Molded rubber gaskets, seals and buffers", descAr: "جوانات كاوتش مصبوبة ومانعات تسريب" },
  { en: "Water Flanges", ar: "الفلانشات ومستلزمات شبكات المياه", icon: Wrench, descEn: "DIN, ANSI standard flanges and fittings", descAr: "فلانشات ومستلزمات مطابقة للمواصفات العالمية" },
  { en: "Tool & Die and Gears", ar: "التروس والإسطمبات", icon: Factory, descEn: "Gears, press tools, molds and extrusion dies", descAr: "تروس، إسطمبات كبس وبثق وقوالب" },
  { en: "Custom OEM", ar: "تصنيع للغير (OEM)", icon: Building, descEn: "Contract manufacturing to custom engineering drawings", descAr: "عقود تصنيع طبقاً للرسومات الهندسية للغير" },
];

function QuotePage() {
  const t = useT();
  const { isAr } = useLocale();
  const { product } = Route.useSearch();
  const item = findItem(product);

  const gallery = item ? galleryFor(item) : [];
  const details = item ? detailsFor(item) : [];

  const prefillDesc = item
    ? isAr
      ? `طلب عرض سعر للمنتج: ${item.titleAr} (${item.code})\n${details.map((d) => `${d.labelAr}: ${d.valueAr}`).join("\n")}\n\nالكمية المطلوبة:\nمدة التسليم المطلوبة:\nملاحظات إضافية:`
      : `Quotation request for: ${item.titleEn} (${item.code})\n${details.map((d) => `${d.labelEn}: ${d.valueEn}`).join("\n")}\n\nRequired quantity:\nRequired lead time:\nAdditional notes:`
    : "";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => ({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: item ? `${isAr ? item.titleAr : item.titleEn} (${item.code})` : "",
    process: item ? item.catEn : "",
    material: item?.material ?? "",
    standard: item?.standard ?? "",
    quantity: "",
    tolerance: "",
    lead_time: "",
    description: prefillDesc,
    nda: false,
  }));

  const [files, setFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prev) => ({ ...prev, [name]: val }));
  };

  const handleSelectProcess = (processEn: string) => {
    setFormData((prev) => ({ ...prev, process: processEn }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files) {
      setFiles((prev) => [...prev, ...Array.from(e.dataTransfer.files)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const stepsInfo = [
    { num: 1, titleEn: "Contact", titleAr: "الاتصال" },
    { num: 2, titleEn: "Part & Process", titleAr: "المنتج والعملية" },
    { num: 3, titleEn: "Specifications", titleAr: "المواصفات" },
    { num: 4, titleEn: "Drawings & NDA", titleAr: "الرسومات والسرية" },
  ];

  return (
    <>
      <PageHero
        eyebrow={item ? t("Product quotation", "عرض سعر لمنتج") : t("Request a quotation", "اطلب عرض سعر")}
        title={
          item
            ? t(
                <>Request a quotation for<br />{item.titleEn}.</>,
                <>اطلب عرض سعر لمنتج<br />{item.titleAr}.</>,
              )
            : t(
                <>Send drawings.<br />Receive pricing<br />within 48 hours.</>,
                <>أرسل الرسومات.<br />استلم عرض السعر<br />خلال 48 ساعة.</>,
              )
        }
        intro={
          item
            ? t(
                "Your request is pre-filled with this product's specifications. Adjust the quantity, material or tolerance and our engineers will send pricing and lead time within 48 hours.",
                "تم تعبئة الطلب تلقائيًا بمواصفات هذا المنتج. عدّل الكمية أو الخامة أو السماحات وسيرسل مهندسونا السعر ومدة التسليم خلال 48 ساعة.",
              )
            : t(
                "Every RFQ is reviewed by manufacturing engineers — not a chatbot, not a trader. Share your part and we'll come back with pricing, lead time and DFM feedback.",
                "يُراجع كل طلب سعر مهندسو تصنيع فعليون — لا بوت ولا وسيط. أرسل قطعتك وسنعود إليك بالسعر ومدة التسليم وملاحظات هندسية.",
              )
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr]">
          {/* Side Info / Gallery */}
          <aside className="space-y-6">
            {item && (
              <ProductGallery
                key={item.code}
                images={gallery}
                titleEn={item.titleEn}
                titleAr={item.titleAr}
                code={item.code}
              />
            )}

            {item ? (
              <article className="overflow-hidden rounded-xl border border-hairline bg-card shadow-sm">
                <div className="p-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {isAr ? categoryAr(item.catEn) : item.catEn}
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-primary">{isAr ? item.titleAr : item.titleEn}</h2>
                  <div className="mt-1 text-sm text-muted-foreground" dir={isAr ? "ltr" : "rtl"}>
                    {isAr ? item.titleEn : item.titleAr}
                  </div>
                  <h3 className="mt-6 border-t border-hairline pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {t("Full product specifications", "المواصفات الكاملة للمنتج")}
                  </h3>
                  <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 text-sm sm:grid-cols-2">
                    {details.map((d) => (
                      <div key={d.labelEn} className="border-b border-hairline/60 pb-2">
                        <dt className="text-xs text-muted-foreground">{t(d.labelEn, d.labelAr)}</dt>
                        <dd className="mt-0.5 font-semibold text-primary">{t(d.valueEn, d.valueAr)}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    to="/quote"
                    search={{}}
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground transition hover:text-accent"
                  >
                    <X className="h-3.5 w-3.5" />
                    {t("Clear product and send a general RFQ", "إلغاء التحديد وإرسال طلب عام")}
                  </Link>
                </div>
              </article>
            ) : (
              <div className="rounded-xl border border-hairline bg-surface/50 p-6 space-y-6">
                <h3 className="text-lg font-semibold text-primary">{t("Why Abu Ghali?", "لماذا أبو غالي؟")}</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex gap-3 items-start">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-semibold text-xs mt-0.5">1</span>
                    <div>
                      <strong className="text-primary block">{t("Direct Engineer Review", "مراجعة مباشرة من مهندسين")}</strong>
                      {t("Your request is reviewed by manufacturing experts, offering DFM (Design for Manufacturing) insights.", "يتم فحص طلبك بواسطة خبراء تصنيع يقدمون ملاحظات لتسهيل وتقليل تكلفة الإنتاج.")}
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-semibold text-xs mt-0.5">2</span>
                    <div>
                      <strong className="text-primary block">{t("Fast 48-Hour Response", "رد سريع خلال 48 ساعة")}</strong>
                      {t("We respect your time. Receive a comprehensive commercial offer and timeline within 48 hours.", "نحن نقدر وقتك. ستحصل على عرض تجاري وفني متكامل وجدول زمني خلال 48 ساعة.")}
                    </div>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent font-semibold text-xs mt-0.5">3</span>
                    <div>
                      <strong className="text-primary block">{t("IP & NDA Protection", "حماية الملكية والسرية")}</strong>
                      {t("We strictly protect your Intellectual Property. Request an NDA before sharing sensitive details.", "نحمي ملكيتك الفكرية بشكل صارم. يمكنك طلب توقيع اتفاقية عدم الإفصاح قبل إرسال التفاصيل.")}
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </aside>

          {/* Form Wizard */}
          <div className="rounded-2xl border border-hairline bg-card shadow-sm p-6 md:p-10 relative overflow-hidden">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 dark:bg-emerald-950/30">
                  <Check className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-primary">
                    {t("Request Received Successfully!", "تم استلام طلب السعر بنجاح!")}
                  </h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    {t(
                      "Thank you. Our manufacturing engineering team will review your specifications and drawings and reply with a complete quote within 48 hours.",
                      "شكراً لك. سيقوم فريقنا الهندسي بمراجعة المواصفات والرسومات الفنية والرد عليك بعرض سعر متكامل خلال 48 ساعة."
                    )}
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                      setFormData({
                        name: "",
                        company: "",
                        email: "",
                        phone: "",
                        country: "",
                        product: "",
                        process: "",
                        material: "",
                        standard: "",
                        quantity: "",
                        tolerance: "",
                        lead_time: "",
                        description: "",
                        nda: false,
                      });
                      setFiles([]);
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:bg-accent/90"
                  >
                    {t("Submit Another Request", "إرسال طلب سعر آخر")}
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Stepper Progress */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs text-muted-foreground font-semibold">
                    <span>
                      {t("Step", "الخطوة")} {step} {t("of", "من")} 4
                    </span>
                    <span>
                      {Math.round(((step - 1) / 3) * 100)}% {t("Completed", "مكتمل")}
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-hairline rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent"
                      initial={{ width: "25%" }}
                      animate={{ width: `${step * 25}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="hidden sm:grid grid-cols-4 gap-2 text-center text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                    {stepsInfo.map((s) => (
                      <span
                        key={s.num}
                        className={step >= s.num ? "text-accent" : "text-muted-foreground/60"}
                      >
                        {isAr ? s.titleAr : s.titleEn}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Form fields with AnimatePresence */}
                <div className="min-h-[350px]">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: isAr ? -15 : 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: isAr ? 15 : -15 }}
                        transition={{ duration: 0.2 }}
                        className="grid gap-6 md:grid-cols-2"
                      >
                        <div className="col-span-2">
                          <h3 className="text-lg font-semibold text-primary">{t("Contact Details", "معلومات الاتصال")}</h3>
                          <p className="text-xs text-muted-foreground">{t("Tell us who we are quoting for.", "أخبرنا لمن نقدم هذا العرض.")}</p>
                        </div>
                        <F label={t("Full name", "الاسم بالكامل")} icon={User}>
                          <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="ag-input"
                            placeholder={t("Your name", "اسمك") as string}
                          />
                        </F>
                        <F label={t("Company", "الشركة")} icon={Building}>
                          <input
                            required
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="ag-input"
                            placeholder={t("Company", "الشركة") as string}
                          />
                        </F>
                        <F label={t("Work email", "البريد الإلكتروني")} icon={Mail}>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="ag-input"
                            placeholder="you@company.com"
                          />
                        </F>
                        <F label={t("Phone", "رقم الهاتف")} icon={Phone}>
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="ag-input"
                            placeholder="+20 …"
                          />
                        </F>
                        <F label={t("Country", "الدولة")} icon={Globe} full>
                          <input
                            required
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="ag-input"
                            placeholder={t("Country of operation", "دولة النشاط") as string}
                          />
                        </F>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: isAr ? -15 : 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: isAr ? 15 : -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="text-lg font-semibold text-primary">{t("Product & Process", "المنتج والعملية")}</h3>
                          <p className="text-xs text-muted-foreground">{t("Select the required manufacturing process for your part.", "اختر عملية التصنيع المطلوبة لقطعتك.")}</p>
                        </div>

                        <F label={t("Product / part name or code", "اسم المنتج المطلوب أو الكود")} full>
                          <input
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            className="ag-input"
                            placeholder={t("e.g. Flange, Gear, Custom Shaft", "مثال: فلانشة، ترس، عمود مخصص") as string}
                          />
                        </F>

                        <div className="space-y-2">
                          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground block">
                            {t("Manufacturing Process", "عملية التصنيع")}
                          </label>
                          <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
                            {PROCESSES.map((p) => {
                              const IconComponent = p.icon;
                              const isSelected = formData.process === p.en;
                              return (
                                <button
                                  type="button"
                                  key={p.en}
                                  onClick={() => handleSelectProcess(p.en)}
                                  className={`flex items-start gap-4 p-4 rounded-xl border text-left transition duration-200 hover:border-accent hover:bg-surface/30 ${
                                    isSelected
                                      ? "border-accent bg-accent/5 ring-1 ring-accent text-primary"
                                      : "border-hairline bg-background text-muted-foreground"
                                  } ${isAr ? "text-right" : "text-left"}`}
                                >
                                  <div className={`p-2 rounded-lg ${isSelected ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>
                                    <IconComponent className="h-5 w-5 shrink-0" />
                                  </div>
                                  <div className="space-y-1">
                                    <h4 className="font-semibold text-sm text-primary">{isAr ? p.ar : p.en}</h4>
                                    <p className="text-xs text-muted-foreground/80">{isAr ? p.descAr : p.descEn}</p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: isAr ? -15 : 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: isAr ? 15 : -15 }}
                        transition={{ duration: 0.2 }}
                        className="grid gap-6 md:grid-cols-2"
                      >
                        <div className="col-span-2">
                          <h3 className="text-lg font-semibold text-primary">{t("Specifications & Requirements", "المواصفات والمتطلبات")}</h3>
                          <p className="text-xs text-muted-foreground">{t("Define the technical specifications for manufacturing.", "حدد المواصفات الفنية للتصنيع.")}</p>
                        </div>

                        <F label={t("Material", "الخامة")}>
                          <input
                            name="material"
                            value={formData.material}
                            onChange={handleChange}
                            className="ag-input"
                            placeholder="e.g. 304 SS, GGG40, Nylon"
                          />
                        </F>

                        <F label={t("Standard", "المواصفة")}>
                          <input
                            name="standard"
                            value={formData.standard}
                            onChange={handleChange}
                            className="ag-input"
                            placeholder="DIN / ANSI / ISO"
                          />
                        </F>

                        <F label={t("Target quantity", "الكمية المطلوبة")}>
                          <input
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="ag-input"
                            placeholder={t("e.g. 500 pcs / month", "مثال: 500 قطعة شهريًا") as string}
                          />
                        </F>

                        <F label={t("Target tolerance", "السماحات المطلوبة")}>
                          <input
                            name="tolerance"
                            value={formData.tolerance}
                            onChange={handleChange}
                            className="ag-input"
                            placeholder="±0.05 mm"
                          />
                        </F>

                        <F label={t("Target lead time", "مدة التسليم المطلوبة")} full>
                          <input
                            name="lead_time"
                            value={formData.lead_time}
                            onChange={handleChange}
                            className="ag-input"
                            placeholder={t("e.g. 4 weeks", "مثال: 4 أسابيع") as string}
                          />
                        </F>

                        <F label={t("Part description & specifications", "وصف القطعة والمواصفات")} full>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="ag-input min-h-32"
                            placeholder={
                              t(
                                "Describe the part, standards, coating, testing and any critical requirements.",
                                "اذكر وصف القطعة والمواصفات والطلاء والاختبارات وأي متطلبات حرجة.",
                              ) as string
                            }
                          />
                        </F>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: isAr ? -15 : 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: isAr ? 15 : -15 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        <div>
                          <h3 className="text-lg font-semibold text-primary">{t("Upload Drawings & Security", "الرسومات وحماية السرية")}</h3>
                          <p className="text-xs text-muted-foreground">{t("Upload files and configure confidentiality requirements.", "ارفع الملفات وحدد شروط الخصوصية.")}</p>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground block">
                            {t("Attach drawings (PDF, DWG, STEP, IGES — max 25 MB)", "أرفق الرسومات (PDF, DWG, STEP, IGES — حتى 25 ميجابايت)")}
                          </label>

                          <div
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            className={`flex flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center transition duration-200 ${
                              isDragOver
                                ? "border-accent bg-accent/5 text-accent"
                                : "border-hairline bg-surface/50 text-muted-foreground hover:border-accent hover:text-accent"
                            }`}
                          >
                            <Upload className="h-8 w-8 mb-3" />
                            <p className="text-sm font-semibold mb-1">
                              {t("Drag and drop files here", "اسحب وأفلت الملفات هنا")}
                            </p>
                            <p className="text-xs text-muted-foreground/80 mb-4">
                              {t("or click to browse from your device", "أو اضغط للتصفح من جهازك")}
                            </p>
                            <label className="cursor-pointer inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground transition hover:bg-accent/90">
                              {t("Browse Files", "تصفح الملفات")}
                              <input type="file" multiple className="hidden" onChange={handleFileChange} />
                            </label>
                          </div>
                        </div>

                        {files.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                              {t("Selected Files", "الملفات المحددة")} ({files.length})
                            </h4>
                            <div className="divide-y divide-hairline rounded-xl border border-hairline bg-background">
                              {files.map((file, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 text-sm">
                                  <div className="flex items-center gap-2 min-w-0">
                                    <FileText className="h-4 w-4 text-accent shrink-0" />
                                    <span className="truncate font-medium text-primary">{file.name}</span>
                                    <span className="text-xs text-muted-foreground shrink-0">
                                      ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                                    </span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => removeFile(idx)}
                                    className="p-1 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="p-4 rounded-xl border border-hairline bg-surface/30">
                          <label className="flex items-start gap-3 cursor-pointer text-sm">
                            <input
                              type="checkbox"
                              name="nda"
                              checked={formData.nda}
                              onChange={(e) => setFormData((prev) => ({ ...prev, nda: e.target.checked }))}
                              className="mt-1 h-4 w-4 rounded border-hairline text-accent focus:ring-accent"
                            />
                            <div className="space-y-1">
                              <span className="font-semibold text-primary flex items-center gap-1.5">
                                <Lock className="h-3.5 w-3.5 text-accent" />
                                {t("Request NDA before quoting", "أطلب اتفاقية سرية قبل تقديم العرض")}
                              </span>
                              <p className="text-xs text-muted-foreground/80">
                                {t(
                                  "We will execute a standard Non-Disclosure Agreement before reviewing your files.",
                                  "سنقوم بتوقيع اتفاقية سرية قياسية قبل فحص ملفاتك للحفاظ على السرية التامة."
                                )}
                              </p>
                            </div>
                          </label>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Form Navigation Controls */}
                <div className="flex justify-between items-center pt-6 border-t border-hairline mt-8">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-hairline bg-background px-5 py-2.5 text-sm font-semibold text-primary hover:bg-surface transition"
                    >
                      {isAr ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                      {t("Back", "السابق")}
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition ml-auto"
                    >
                      {t("Continue", "المتابعة")}
                      {isAr ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          {t("Sending...", "جاري الإرسال...")}
                        </>
                      ) : (
                        <>
                          {t("Submit RFQ", "أرسل طلب السعر")}
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

function F({
  label,
  children,
  full,
  icon: Icon,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
  full?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <label className={`flex flex-col gap-2 text-sm ${full ? "md:col-span-2" : ""}`}>
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground flex items-center gap-1.5">
        {Icon && <Icon className="h-3.5 w-3.5 text-accent" />}
        {label}
      </span>
      {children}
    </label>
  );
}
