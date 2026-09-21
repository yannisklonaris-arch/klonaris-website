import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";
import { usePageMeta } from "@/lib/seo";
import { Reveal, LineReveal, SectionTag } from "@/components/Reveal";

export default function Legal() {
  const { t } = useI18n();
  const l = t.legal;
  usePageMeta(l.metaTitle, l.metaDesc);

  return (
    <section className="relative">
      <div className="schematic-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-5 pt-36 pb-24 sm:px-8 lg:pt-44">
        <Reveal>
          <SectionTag label={l.tag} />
        </Reveal>
        <h1 className="mt-6 font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-metal sm:text-5xl">
          <LineReveal lines={[l.title]} />
        </h1>
        <Reveal delay={0.2}>
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#475569]">
            {l.updated}
          </p>
        </Reveal>
        <div className="mt-14">
          {l.sections.map((s, i) => (
            <Reveal key={s.h} delay={0.03}>
              <article className="grid gap-3 border-t border-[#1E293B] py-9 sm:grid-cols-[auto_1fr] sm:gap-10">
                <span className="font-mono text-sm tracking-[0.25em] text-[#38BDF8]" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-heading text-xl font-extrabold tracking-tight text-[#F1F5F9]">
                    {s.h}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#94A3B8]">{s.t}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.05}>
          <p className="mt-8 border-t border-[#1E293B] pt-8 text-xs text-[#64748B]">
            <Link to="/privacy" data-testid="legal-privacy-link" className="text-[#38BDF8] underline-offset-2 hover:underline">
              {t.footer.privacyLink}
            </Link>
            {" — "}
            <Link to="/conditions-generales" data-testid="legal-terms-link" className="text-[#38BDF8] underline-offset-2 hover:underline">
              {t.footer.termsLink}
            </Link>
            {" — "}
            <Link to="/contact" data-testid="legal-contact-link" className="text-[#38BDF8] underline-offset-2 hover:underline">
              {t.nav.contact}
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
