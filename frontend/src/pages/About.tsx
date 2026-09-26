import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/i18n";
import { usePageMeta } from "@/lib/seo";
import { Reveal, LineReveal, SectionTag, CornerFrame } from "@/components/Reveal";

const WORKSHOP_IMG = `${import.meta.env.BASE_URL}img/workshop.jpg`;

export default function About() {
  const { t } = useI18n();
  const a = t.about;
  usePageMeta(a.metaTitle, a.metaDesc);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="schematic-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(30,58,138,0.18)_0%,rgba(7,11,20,0.95)_70%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 pt-36 pb-16 sm:px-8 lg:pt-44 lg:pb-20">
          <Reveal>
            <SectionTag label={a.tag} />
          </Reveal>
          <h1 className="mt-6 max-w-3xl font-heading text-4xl leading-[1.05] font-extrabold tracking-tight text-metal sm:text-5xl">
            <LineReveal lines={[a.title]} />
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden border border-[#1E293B]">
                <img
                  src={WORKSHOP_IMG}
                  alt={a.imageCaption}
                  className="h-80 w-full object-cover opacity-80 lg:h-[440px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(200deg,rgba(56,189,248,0.08)_0%,rgba(7,11,20,0.55)_70%)]" aria-hidden="true" />
              </div>
              <span className="absolute -bottom-3 left-4 border border-[#1E293B] bg-[#070B14] px-3 py-1.5 font-mono text-[10px] tracking-[0.25em] text-[#94A3B8]">
                [ {a.imageCaption} ]
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#38BDF8]">
              {a.founderTag}
            </p>
            <h2 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-[#F1F5F9] sm:text-3xl">
              {a.founderTitle}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[#94A3B8]">{a.founderText}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-[#1E293B] bg-[#080E1C]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <Reveal>
            <SectionTag label={a.manifestoTag} />
          </Reveal>
          <div className="mt-14 space-y-0">
            {a.manifesto.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="grid gap-4 border-t border-[#1E293B] py-10 sm:grid-cols-[auto_1fr] sm:gap-12">
                  <span className="font-mono text-4xl font-bold text-[#1E293B]" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-3xl text-lg leading-relaxed text-[#CBD5E1]">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <SectionTag label={a.pillarsTag} />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {a.pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <CornerFrame className="h-full bg-[#0A1020] p-8">
                <span className="font-mono text-sm tracking-[0.3em] text-[#38BDF8]" aria-hidden="true">
                  {p.n}
                </span>
                <h3
                  data-testid={`pillar-${i}`}
                  className="mt-4 font-heading text-xl font-extrabold tracking-tight text-[#F1F5F9]"
                >
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">{p.text}</p>
              </CornerFrame>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Link
            to="/contact"
            data-testid="about-cta"
            className="btn-metal group mt-14 inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-transform duration-200 hover:-translate-y-0.5"
          >
            {a.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
