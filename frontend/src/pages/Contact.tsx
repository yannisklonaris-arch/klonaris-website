import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ArrowUpRight, CheckCircle2, Clock3, Mail, Phone } from "lucide-react";
import { useI18n } from "@/i18n";
import { usePageMeta } from "@/lib/seo";
import { Reveal, LineReveal, SectionTag, CornerFrame } from "@/components/Reveal";
import { DarkSelect, FieldLabel, inputClass } from "@/components/Field";

interface QuotePayload {
  name: string;
  email: string;
  organization?: string;
  urgency: string;
  message: string;
  language: "fr" | "en";
  ai_consent: boolean;
}

interface QuoteResponse {
  id: string;
  status: string;
  emailSent: boolean;
}

const URGENCY_KEYS = ["standard", "priority", "critical"] as const;

type UrgencyKey = (typeof URGENCY_KEYS)[number];

export default function Contact() {
  const { t, lang } = useI18n();
  const c = t.contact;
  usePageMeta(c.metaTitle, c.metaDesc);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [urgency, setUrgency] = useState<UrgencyKey>(URGENCY_KEYS[0]);
  const [message, setMessage] = useState("");
  const [aiConsent, setAiConsent] = useState(false);
  const [sent, setSent] = useState(false);

  const mutation = useMutation({
  mutationFn: async (payload: QuotePayload) => {
    const response = await fetch("https://formspree.io/f/xdekwpkb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    return response.json();
  },
  onSuccess: () => {
    setSent(true);
    toast.success(c.form.successTitle);
  },
  onError: () => toast.error(c.form.errorMsg),
});

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!aiConsent) {
      toast.error(c.form.aiConsentRequired);
      return;
    }
    mutation.mutate({
      name: name.trim(),
      email: email.trim(),
      organization: organization.trim() || undefined,
      urgency,
      message: message.trim(),
      language: lang,
      ai_consent: aiConsent,
    });
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="schematic-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(30,58,138,0.18)_0%,rgba(7,11,20,0.95)_70%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-14 sm:px-8 lg:pt-44">
          <Reveal>
            <SectionTag label={c.tag} />
          </Reveal>
          <h1 className="mt-6 max-w-3xl font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-metal sm:text-5xl">
            <LineReveal lines={[c.title]} />
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#94A3B8]">{c.sub}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          <Reveal>
            <CornerFrame className="bg-[#0A1020] p-7 sm:p-10">
              {sent ? (
                <div className="py-10 text-center" data-testid="contact-success">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-[#34D399]" aria-hidden="true" />
                  <h2 className="mt-6 font-heading text-2xl font-extrabold tracking-tight text-[#F1F5F9]">
                    {c.form.successTitle}
                  </h2>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#94A3B8]">
                    {c.form.successMsg}
                  </p>
                  <div>
                    <Link
                      to="/"
                      data-testid="contact-success-home"
                      className="mt-8 inline-flex items-center gap-2 border border-[#334D74] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#CBD5E1] transition-colors duration-200 hover:border-[#38BDF8]"
                    >
                      Klonaris
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} data-testid="contact-form">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="contact-name">{c.form.name}</FieldLabel>
                      <input
                        id="contact-name"
                        data-testid="contact-name"
                        required
                        minLength={2}
                        maxLength={120}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputClass}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="contact-email">{c.form.email}</FieldLabel>
                      <input
                        id="contact-email"
                        data-testid="contact-email"
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={inputClass}
                        autoComplete="email"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <FieldLabel htmlFor="contact-org">{c.form.organization}</FieldLabel>
                      <input
                        id="contact-org"
                        data-testid="contact-organization"
                        maxLength={160}
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        className={inputClass}
                        autoComplete="organization"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <FieldLabel htmlFor="contact-urgency">{c.form.urgency}</FieldLabel>
                      <DarkSelect
                        id="contact-urgency"
                        testId="contact-urgency"
                        value={urgency}
                        onChange={(v) => setUrgency(v as UrgencyKey)}
                        options={URGENCY_KEYS.map((k) => ({ value: k, label: c.urgencies[k] }))}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <FieldLabel htmlFor="contact-message">{c.form.message}</FieldLabel>
                      <textarea
                        id="contact-message"
                        data-testid="contact-message"
                        required
                        minLength={20}
                        maxLength={4000}
                        rows={6}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={c.form.messagePlaceholder}
                        className={`${inputClass} resize-y`}
                      />
                    </div>
                  </div>
                  <p className="mt-6 text-xs leading-relaxed text-[#64748B]">
                    {c.form.privacyNote}{" "}
                    <Link to="/privacy" className="text-[#38BDF8] underline-offset-2 hover:underline">
                      {t.footer.privacyLink}
                    </Link>
                  </p>
                  <label className="mt-5 flex cursor-pointer items-start gap-3 border border-[#1E293B] bg-[#0D1527] p-4" htmlFor="contact-ai-consent">
                    <input
                      id="contact-ai-consent"
                      data-testid="contact-ai-consent"
                      type="checkbox"
                      checked={aiConsent}
                      onChange={(e) => setAiConsent(e.target.checked)}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center border bg-[#0D1527] transition-colors duration-200 peer-focus-visible:ring-2 peer-focus-visible:ring-[#38BDF8] ${
                        aiConsent ? "border-[#38BDF8]" : "border-[#334D74]"
                      }`}
                    >
                      <svg viewBox="0 0 12 12" className="h-3 w-3">
                        <path
                          d="M2 6.5l2.5 2.5L10 3.5"
                          fill="none"
                          stroke="#38BDF8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            strokeDasharray: 14,
                            strokeDashoffset: aiConsent ? 0 : 14,
                            transition: "stroke-dashoffset 0.3s ease-out 0.05s",
                          }}
                        />
                      </svg>
                    </span>
                    <span className="text-xs leading-relaxed text-[#94A3B8]">{c.form.aiConsent}</span>
                  </label>
                  <button
                    type="submit"
                    data-testid="contact-submit"
                    disabled={mutation.isPending}
                    className="btn-metal group mt-8 inline-flex items-center gap-2 px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {mutation.isPending ? c.form.sending : c.form.submit}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </form>
              )}
            </CornerFrame>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="border border-[#1E293B] bg-[#0A1020] p-7 sm:p-9">
              <h2 className="font-heading text-xl font-extrabold tracking-tight text-[#F1F5F9]">
                {c.handoff.title}
              </h2>
              <p data-testid="handoff-text" className="mt-4 text-sm leading-relaxed text-[#CBD5E1]">
                {c.handoff.text}
              </p>
            </div>
            <div className="mt-6 border border-[#1E293B] bg-[#0A1020] p-7 sm:p-9">
              <h2 className="font-heading text-xl font-extrabold tracking-tight text-[#F1F5F9]">
                {c.direct.title}
              </h2>
              <div className="mt-5 space-y-4">
                <a
                  href="mailto:yannis.klonaris@outlook.be"
                  data-testid="contact-email-link"
                  className="group flex items-center gap-3 text-sm text-[#CBD5E1] transition-colors duration-200 hover:text-[#38BDF8]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#1E293B] bg-[#0D1527]">
                    <Mail className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[#475569]">
                      {c.direct.emailLabel}
                    </span>
                    yannis.klonaris@outlook.be
                  </span>
                </a>
                <a
                  href="tel:+32470814911"
                  data-testid="contact-phone-link"
                  className="group flex items-center gap-3 text-sm text-[#CBD5E1] transition-colors duration-200 hover:text-[#38BDF8]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#1E293B] bg-[#0D1527]">
                    <Phone className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-[#475569]">
                      {c.direct.phoneLabel}
                    </span>
                    +32 470 81 49 11
                  </span>
                </a>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#1E293B] bg-[#0D1527]">
                    <Clock3 className="h-4 w-4 text-[#34D399]" aria-hidden="true" />
                  </span>
                  <span
                    data-testid="response-time"
                    className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#34D399]"
                  >
                    {c.direct.responseTime}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 border border-[#1E293B] bg-[#080E1C] p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#475569]">
                {t.footer.badge}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#64748B]">{t.home.confidentiality.items[1].text}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
