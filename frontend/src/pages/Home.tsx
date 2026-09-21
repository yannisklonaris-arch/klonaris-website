import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Plus,
  ShieldCheck,
} from "lucide-react";
import { useI18n } from "@/i18n";
import { usePageMeta } from "@/lib/seo";
import { Reveal, LineReveal, SectionTag } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { BeforeAfter } from "@/components/BeforeAfter";

const BLUEPRINT_IMG = "/img/blueprint.jpg";

export default function Home() {
  const { t } = useI18n();
  const h = t.home;
  usePageMeta(h.metaTitle, h.metaDesc);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const [spot, setSpot] = useState({ x: 50, y: 30 });

const iconClass = "h-12 w-12 transition-transform duration-300 group-hover:scale-110";
const iconStroke = {
  fill: "none",
  stroke: "#38BDF8",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function EyeReviewIcon() {
  return (
    <svg viewBox="0 0 48 48" className={iconClass} aria-hidden="true" {...iconStroke}>
      <path d="M6 24c6-8.5 12-12.5 18-12.5S36 15.5 42 24c-6 8.5-12 12.5-18 12.5S12 32.5 6 24Z" />
      <circle cx="24" cy="24" r="6.5" />
      <circle cx="24" cy="24" r="2.2" fill="#38BDF8" stroke="none" />
      <path d="M4 9V4h5M44 9V4h-5M4 39v5h5M44 39v5h-5" />
    </svg>
  );
}

function ClockBackIcon() {
  return (
    <svg viewBox="0 0 48 48" className={iconClass} aria-hidden="true" {...iconStroke}>
      <circle cx="24" cy="26" r="16" />
      <path d="M24 13v-2.5M24 41.5V39M11 26H8.5M39.5 26H37M15.5 17.5l-1.8-1.8M32.5 17.5l1.8-1.8M15.5 34.5l-1.8 1.8M32.5 34.5l1.8 1.8" />
      <path d="M24 26V17" />
      <path d="M24 26l7 4" />
    </svg>
  );
}

function DocLinesIcon() {
  return (
    <svg viewBox="0 0 48 48" className={iconClass} aria-hidden="true" {...iconStroke}>
      <path d="M12 4h16l8 8v32H12Z" />
      <path d="M28 4v8h8" />
      <rect x="17" y="14" width="12" height="2.4" fill="#38BDF8" stroke="none" />
      <path d="M17 23h14M17 28h14M17 33h10M17 38h12" />
    </svg>
  );
}

function EuroIcon() {
  return (
    <svg viewBox="0 0 48 48" className={iconClass} aria-hidden="true" {...iconStroke}>
      <circle cx="24" cy="24" r="19" />
      <path d="M32 15.5a10.4 10.4 0 1 0 0 17" />
      <path d="M12 21.5h18M12 26.5h18" />
    </svg>
  );
}

const benefitIcons = [EyeReviewIcon, ClockBackIcon, DocLinesIcon, EuroIcon];

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setSpot({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
        }}
        className="relative overflow-hidden"
      >
        <motion.div style={{ y: bgY }} className="absolute inset-0" aria-hidden="true">
          <img src={BLUEPRINT_IMG} alt="" className="h-[120%] w-full object-cover opacity-[0.09]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,rgba(30,58,138,0.22)_0%,rgba(7,11,20,0.96)_72%)]" />
        </motion.div>
        <div className="schematic-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background: `radial-gradient(560px at ${spot.x}% ${spot.y}%, rgba(56,189,248,0.07), transparent 70%)`,
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pt-36 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pt-44 lg:pb-28">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#38BDF8]">
                <span className="mr-2 inline-block h-1.5 w-1.5 animate-caret bg-[#38BDF8] align-middle" aria-hidden="true" />
                {h.heroTag}
              </p>
            </Reveal>
            <h1 className="mt-6 font-heading text-4xl leading-[1.04] font-extrabold tracking-tight text-metal sm:text-5xl lg:text-[64px]">
              <LineReveal lines={h.heroLines} />
            </h1>
            <Reveal delay={0.55}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-[#94A3B8]">{h.heroSub}</p>
            </Reveal>
            <Reveal delay={0.7}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  data-testid="hero-cta-primary"
                  className="btn-metal group inline-flex items-center gap-2 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {h.ctaPrimary}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/how-it-works"
                  data-testid="hero-cta-secondary"
                  className="inline-flex items-center gap-2 border border-[#334D74] px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-[#CBD5E1] transition-colors duration-200 hover:border-[#38BDF8] hover:text-[#F1F5F9]"
                >
                  {h.ctaSecondary}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.85}>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
                {h.heroMeta.map((m, i) => (
                  <span key={i} className="flex items-center gap-5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#64748B]">
                    {i > 0 && <span className="text-[#334D74]" aria-hidden="true">+</span>}
                    {m.href ? (
                      <Link
                        to={m.href}
                        data-testid="hero-meta-privacy-link"
                        className="transition-colors duration-200 hover:text-[#38BDF8]"
                      >
                        {m.label}
                      </Link>
                    ) : (
                      m.label
                    )}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.4} className="lg:pl-4">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[#475569]">
              {h.comparator.tag}
            </p>
            <BeforeAfter />
            <p
              data-testid="comparator-demo-note"
              className="mt-3 text-right font-mono text-[10px] tracking-[0.18em] text-[#475569]"
            >
              {h.comparator.demoNote}
            </p>
          </Reveal>
        </div>
      </section>

      <Marquee items={t.marquee} />

      {/* PROBLEMS */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal>
          <SectionTag label={h.problems.tag} />
          <h2 className="mt-5 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-[#F1F5F9] sm:text-4xl">
            {h.problems.title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#94A3B8]">{h.problems.sub}</p>
        </Reveal>
        <div className="mt-14 grid gap-px border border-[#1E293B] bg-[#1E293B] md:grid-cols-2">
          {h.problems.items.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08} className="bg-[#070B14]">
              <div
                data-testid={`problem-${p.n}`}
                className="group h-full p-8 transition-colors duration-300 hover:bg-[#0A1020] sm:p-10"
              >
                <p className="font-mono text-[11px] tracking-[0.25em] text-[#475569] transition-colors duration-300 group-hover:text-[#38BDF8]">
                  {p.n}
                </p>
                <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-[#F1F5F9]">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y border-[#1E293B] bg-[#080E1C]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <Reveal>
            <SectionTag label={h.benefits.tag} />
            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-[#F1F5F9] sm:text-4xl">
              {h.benefits.title}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {h.benefits.items.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <Reveal key={b.title} delay={i * 0.08}>
                  <div
                    data-testid={`benefit-${i}`}
                    className="group h-full border border-[#1E293B] bg-[#0A1020] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#38BDF8]/50"
                  >
                    <Icon />
                    <h3 className="mt-5 font-heading text-base font-bold tracking-tight text-[#F1F5F9]">
                      {b.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">{b.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONFIDENTIALITY */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <Reveal>
            <SectionTag label={h.confidentiality.tag} />
            <h2 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-[#F1F5F9] sm:text-4xl">
              {h.confidentiality.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#94A3B8]">
              {h.confidentiality.sub}
            </p>
            <ShieldCheck className="mt-8 h-10 w-10 text-[#334D74]" aria-hidden="true" />
            <Link
              to="/privacy"
              data-testid="confidentiality-cta"
              className="mt-6 inline-flex items-center gap-2 border-b border-[#38BDF8]/50 pb-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#38BDF8] transition-colors duration-200 hover:border-[#38BDF8]"
            >
              {h.confidentiality.cta}
            </Link>
          </Reveal>
          <div className="grid gap-px border border-[#1E293B] bg-[#1E293B] sm:grid-cols-2">
            {h.confidentiality.items.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08} className="bg-[#070B14]">
                <div className="h-full p-7" data-testid={`confidentiality-${i}`}>
                  <Plus className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-base font-bold tracking-tight text-[#F1F5F9]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-[#1E293B]">
        <div className="schematic-grid absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:py-32">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-heading text-4xl font-extrabold tracking-tight text-metal sm:text-5xl">
              {h.finalCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#94A3B8]">
              {h.finalCta.sub}
            </p>
            <Link
              to="/contact"
              data-testid="final-cta-button"
              className="btn-metal group mt-10 inline-flex items-center gap-2 px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] transition-transform duration-200 hover:-translate-y-0.5"
            >
              {h.finalCta.cta}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
