import { Link } from "react-router-dom";
import { ArrowUpRight, TriangleAlert, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/i18n";
import { usePageMeta } from "@/lib/seo";
import { Reveal, LineReveal, SectionTag, CornerFrame } from "@/components/Reveal";

export default function HowItWorks() {
  const { t } = useI18n();
  const w = t.how;
  usePageMeta(w.metaTitle, w.metaDesc);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="schematic-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(30,58,138,0.18)_0%,rgba(7,11,20,0.95)_70%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-16 sm:px-8 lg:pt-44 lg:pb-20">
          <Reveal>
            <SectionTag label={w.tag} />
          </Reveal>
          <h1 className="mt-6 max-w-3xl font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-metal sm:text-5xl">
            <LineReveal lines={[w.title]} />
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#94A3B8]">{w.sub}</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <div className="relative border-l border-[#1E293B] pl-8 sm:pl-12">
          {w.steps.map((step, i) => {
            const isHuman = i === 5;
            return (
              <Reveal key={step.n} delay={0.04}>
                <div
                  data-testid={`step-${step.n}`}
                  className={`relative mb-6 border p-7 sm:p-9 ${
                    isHuman
                      ? "border-[#38BDF8]/50 bg-[#0D1527]"
                      : "border-[#1E293B] bg-[#0A1020]"
                  }`}
                >
                  <span
                    className={`absolute top-7 -left-8 flex h-4 w-4 -translate-x-1/2 items-center justify-center border sm:-left-12 ${
                      isHuman ? "border-[#38BDF8] bg-[#38BDF8]" : "border-[#334D74] bg-[#070B14]"
                    }`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="font-mono text-2xl font-bold text-[#334D74]">{step.n}</span>
                    <h2 className="font-heading text-xl font-extrabold tracking-tight text-[#F1F5F9] sm:text-2xl">
                      {step.title}
                    </h2>
                    {isHuman ? (
                      <span className="ml-auto border border-[#38BDF8]/60 bg-[#172E4C] px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-[#38BDF8]">
                        {w.humanBadge}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#94A3B8]">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.05}>
          <CornerFrame className="mt-16 bg-[#0A1020] p-8 sm:p-12">
            <SectionTag label={w.humanLoop.tag} />
            <h2 className="mt-5 max-w-xl font-heading text-2xl font-extrabold tracking-tight text-[#F1F5F9] sm:text-3xl">
              {w.humanLoop.title}
            </h2>
            <div className="mt-8 space-y-6">
              {w.humanLoop.points.map((p, i) => (
                <div key={i} className="flex items-start gap-4">
                  {i === 0 ? (
                    <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-[#F87171]" aria-hidden="true" />
                  ) : (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#34D399]" aria-hidden="true" />
                  )}
                  <p className="max-w-2xl text-sm leading-relaxed text-[#CBD5E1]">{p}</p>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              data-testid="method-cta"
              className="btn-metal group mt-10 inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-transform duration-200 hover:-translate-y-0.5"
            >
              {w.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </CornerFrame>
        </Reveal>
      </section>
    </>
  );
}
