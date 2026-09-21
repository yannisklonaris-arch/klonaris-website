import { Link } from "react-router-dom";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { useI18n } from "@/i18n";
import { usePageMeta } from "@/lib/seo";
import { Reveal, LineReveal, SectionTag, CornerFrame } from "@/components/Reveal";

export default function WebDesign() {
  const { t } = useI18n();
  const w = t.web;
  usePageMeta(w.metaTitle, w.metaDesc);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="schematic-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(30,58,138,0.18)_0%,rgba(7,11,20,0.95)_70%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-14 sm:px-8 lg:pt-44">
          <Reveal>
            <SectionTag label={w.tag} />
          </Reveal>
          <h1 className="mt-6 max-w-3xl font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-metal sm:text-5xl lg:text-6xl">
            <LineReveal lines={[w.title]} />
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#94A3B8]">{w.sub}</p>
          </Reveal>
          <Reveal delay={0.45}>
            <Link
              to="/contact"
              data-testid="web-cta-primary"
              className="btn-metal group mt-9 inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-transform duration-200 hover:-translate-y-0.5"
            >
              {w.cta}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8" data-testid="web-pricing">
        <Reveal>
          <SectionTag label={w.pricing.tag} />
          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-[#F1F5F9] sm:text-4xl">
            {w.pricing.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <CornerFrame className="mt-10 bg-[#0A1020] p-7 sm:p-10">
            <p className="font-heading text-4xl font-extrabold tracking-tight text-metal sm:text-5xl">
              {w.pricing.from}
            </p>
            <div className="mt-8 grid gap-px border border-[#1E293B] bg-[#1E293B] sm:grid-cols-2">
              {w.pricing.items.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-4 bg-[#070B14] p-6">
                  <span className="text-sm text-[#CBD5E1]">{item.label}</span>
                  <span className="font-mono text-sm font-bold whitespace-nowrap text-[#F1F5F9]">{item.price}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xs leading-relaxed text-[#64748B]">{w.pricing.note}</p>
          </CornerFrame>
        </Reveal>
      </section>

      {/* INCLUDED */}
      <section className="border-y border-[#1E293B] bg-[#080E1C]" data-testid="web-included">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <Reveal>
            <SectionTag label={w.included.tag} />
            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-[#F1F5F9] sm:text-4xl">
              {w.included.title}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-px border border-[#1E293B] bg-[#1E293B] sm:grid-cols-2 lg:grid-cols-4">
            {w.included.items.map((item, i) => (
              <Reveal key={item} delay={i * 0.05} className="bg-[#070B14]">
                <div className="flex h-full items-start gap-3 p-6">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-[#CBD5E1]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-xs leading-relaxed text-[#64748B]">{w.included.note}</p>
          </Reveal>
        </div>
      </section>

      {/* OWNERSHIP */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8" data-testid="web-ownership">
        <Reveal>
          <CornerFrame className="flex items-start gap-5 bg-[#0A1020] p-7 sm:p-10">
            <ShieldCheck className="mt-1 h-8 w-8 shrink-0 text-[#334D74]" aria-hidden="true" />
            <div>
              <SectionTag label={w.ownership.tag} />
              <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-[#F1F5F9]">
                {w.ownership.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#94A3B8]">{w.ownership.text}</p>
            </div>
          </CornerFrame>
        </Reveal>
      </section>

      {/* TYPES */}
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8" data-testid="web-types">
        <Reveal>
          <SectionTag label={w.types.tag} />
          <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-[#F1F5F9] sm:text-4xl">
            {w.types.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2">
            {w.types.items.map((item) => (
              <span
                key={item}
                className="border border-[#334D74] bg-[#0D1527] px-3 py-1.5 font-mono text-[11px] tracking-[0.1em] text-[#94A3B8] uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-[#1E293B]">
        <div className="schematic-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-heading text-4xl font-extrabold tracking-tight text-metal sm:text-5xl">
              {w.finalCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#94A3B8]">{w.finalCta.sub}</p>
            <Link
              to="/contact"
              data-testid="web-final-cta"
              className="btn-metal group mt-10 inline-flex items-center gap-2 px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-transform duration-200 hover:-translate-y-0.5"
            >
              {w.finalCta.cta}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
