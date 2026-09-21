import { memo, useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { useI18n } from "@/i18n";
import type { Dict } from "@/i18n/fr";

type ComparatorContent = Dict["home"]["comparator"];

const MIN_POS = 6;
const MAX_POS = 94;
const CENTER = 50;
const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function useInView(ref: React.RefObject<HTMLDivElement | null>): boolean {
  const [inView, setInView] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.05,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function SrcTag({ children }: { children: ReactNode }) {
  return (
    <span className="absolute -bottom-2.5 left-2 border border-[#334D74] bg-[#070B14] px-1.5 py-0.5 font-mono text-[7px] tracking-[0.18em] text-[#94A3B8] uppercase">
      {children}
    </span>
  );
}

/* ---------- APRÈS : le livrable PDF ---------- */

const AfterScene = memo(function AfterScene({ c, shift }: { c: ComparatorContent; shift: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0B1220]" aria-hidden="true">
      <div className="schematic-grid absolute inset-0 opacity-20" />
      <div
        className="absolute top-1/2 left-1/2 flex w-full flex-col items-center px-4"
        style={{ transform: `translate(-50%, -50%) translate3d(${shift * -4}px, 0, 0)` }}
      >
        <span className="border border-[#38BDF8]/40 bg-[#070B14]/85 px-2.5 py-1 font-mono text-[9px] tracking-[0.25em] text-[#38BDF8] uppercase backdrop-blur-sm">
          {c.afterCaption}
        </span>

        <div className="relative mt-3 w-[44%] max-w-[250px]">
          <div
            className="absolute inset-0 border border-[#334D74]/50 bg-[#C9CED6]/50"
            style={{ transform: "translate3d(8px, 8px, 0) rotate(1.4deg)" }}
          />
          <div
            className="absolute inset-0 border border-[#334D74]/60 bg-[#DDE2E9]/70"
            style={{ transform: "translate3d(4px, 4px, 0) rotate(-0.8deg)" }}
          />
          <div className="relative aspect-[3/4] border border-[#94A3B8]/40 bg-[#F7F8FA] p-4 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.6)] sm:p-5">
            <div className="absolute top-0 right-0 h-7 w-7 sm:h-8 sm:w-8">
              <div
                className="absolute inset-0 bg-[#CBD5E1] shadow-[-3px_3px_6px_rgba(15,23,42,0.18)]"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              />
            </div>
            <div className="flex items-center justify-between border-b border-[#CBD5E1] pb-2">
              <span className="font-mono text-[8px] font-bold tracking-[0.28em] text-[#0F172A]">KLONARIS</span>
              <span className="border border-[#38BDF8]/70 px-1.5 py-0.5 font-mono text-[7px] font-bold tracking-[0.2em] text-[#0369A1]">
                PDF
              </span>
            </div>
            <p className="mt-3 font-heading text-[12px] font-extrabold tracking-tight text-[#0F172A] sm:text-[14px]">
              {c.docTitle}
            </p>
            <div className="mt-1.5 h-0.5 w-2/5 bg-[#38BDF8]" />
            <div className="mt-3.5 space-y-1.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span className="h-2 w-2 shrink-0 border border-[#38BDF8]/60 bg-[#38BDF8]/10" />
                  <div className="h-1 bg-[#CBD5E1]" style={{ width: `${36 - i * 6}%` }} />
                  <span className="flex-1 border-b border-dotted border-[#CBD5E1]" />
                  <span className="h-1.5 w-1.5 shrink-0 bg-[#E2E8F0]" />
                </div>
              ))}
            </div>
            <div className="mt-3.5">
              <div className="h-1.5 w-1/3 bg-[#334155]" />
              <div className="mt-2 space-y-1.5">
                <div className="h-1 w-full bg-[#CBD5E1]" />
                <div className="h-1 w-11/12 bg-[#CBD5E1]" />
                <div className="h-1 w-4/5 bg-[#CBD5E1]" />
              </div>
            </div>
            <div className="mt-3">
              <div className="h-1.5 w-2/5 bg-[#334155]" />
              <div className="mt-2 space-y-1.5">
                <div className="h-1 w-full bg-[#CBD5E1]" />
                <div className="h-1 w-3/5 bg-[#CBD5E1]" />
              </div>
            </div>
            <div className="absolute inset-x-4 bottom-3 flex items-center justify-between border-t border-[#CBD5E1] pt-1.5 sm:inset-x-5">
              <div className="h-1 w-1/4 bg-[#E2E8F0]" />
              <span className="font-mono text-[7px] tracking-[0.15em] text-[#64748B]">01 / 08</span>
            </div>
          </div>
        </div>

        <span className="mt-4 border border-[#34D399]/60 bg-[#070B14] px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] text-[#34D399] sm:text-[11px]">
          ✓ {c.afterStamp}
        </span>

        <div className="mt-4 flex max-w-[94%] flex-wrap items-center justify-center gap-1.5">
          {c.services.map((s) => (
            <span
              key={s}
              className="border border-[#334D74] bg-[#0D1527] px-2.5 py-1 font-mono text-[9px] tracking-[0.08em] text-[#94A3B8] sm:text-[10px]"
            >
              {s}
            </span>
          ))}
        </div>
        <span className="mt-2.5 font-mono text-[8px] tracking-[0.12em] text-[#64748B] italic sm:text-[9px]">
          {c.servicesNote}
        </span>
      </div>
    </div>
  );
});

/* ---------- AVANT : la pile de documents sources ---------- */

const BeforeScene = memo(function BeforeScene({ c, shift }: { c: ComparatorContent; shift: number }) {
  const l = c.srcLabels;
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0A0F1C]" aria-hidden="true">
      <div className="schematic-grid absolute inset-0 opacity-25" />

      {/* feuilles d'arrière-plan */}
      <div
        className="absolute top-[13%] left-[9%] w-[30%] border border-[#94A3B8]/20 bg-[#E8E6DF] p-3 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.55)]"
        style={{ transform: `translate3d(${shift * 4}px, 0, 0) rotate(-4deg)` }}
      >
        <div className="h-1.5 w-1/2 bg-[#A8A29E]/40" />
        <div className="mt-2.5 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/35" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/35" />
          <div className="h-1 w-full bg-[#A8A29E]/35" />
          <div className="h-1 w-2/3 bg-[#A8A29E]/35" />
        </div>
      </div>
      <div
        className="absolute top-[9%] left-[27%] hidden w-[30%] border border-[#94A3B8]/20 bg-[#DEDBD2] p-3 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.55)] min-[420px]:block"
        style={{ transform: `translate3d(${shift * 6}px, 0, 0) rotate(3deg)` }}
      >
        <div className="h-1.5 w-2/5 bg-[#A8A29E]/40" />
        <div className="mt-2.5 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/35" />
          <div className="h-1 w-10/12 bg-[#A8A29E]/35" />
          <div className="h-1 w-full bg-[#A8A29E]/35" />
          <div className="h-1 w-1/2 bg-[#A8A29E]/35" />
        </div>
      </div>

      {/* grande feuille de fond centrale */}
      <div
        className="absolute top-[18%] left-[22%] w-[32%] border border-[#94A3B8]/20 bg-[#E4E1D8] p-3 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.55)]"
        style={{ transform: `translate3d(${shift * 3}px, 0, 0) rotate(1deg)` }}
      >
        <div className="h-1.5 w-2/5 bg-[#A8A29E]/45" />
        <div className="mt-2.5 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/40" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/40" />
          <div className="h-1 w-full bg-[#A8A29E]/40" />
          <div className="h-1 w-10/12 bg-[#A8A29E]/40" />
          <div className="h-1 w-full bg-[#A8A29E]/40" />
          <div className="h-1 w-3/4 bg-[#A8A29E]/40" />
        </div>
      </div>

      {/* petite feuille d'arrière-plan haut-centre gauche */}
      <div
        className="absolute top-[20%] left-[43%] z-[3] hidden w-[18%] border border-[#94A3B8]/20 bg-[#E8E6DF] p-2 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] min-[420px]:block"
        style={{ transform: `translate3d(${shift * 4}px, 0, 0) rotate(-3deg)` }}
      >
        <div className="h-1 w-1/2 bg-[#A8A29E]/45" />
        <div className="mt-1.5 space-y-1">
          <div className="h-1 w-full bg-[#A8A29E]/40" />
          <div className="h-1 w-10/12 bg-[#A8A29E]/40" />
          <div className="h-1 w-2/3 bg-[#A8A29E]/40" />
        </div>
      </div>

      {/* petite feuille d'arrière-plan haut-centre droit avec surlignage */}
      <div
        className="absolute top-[26%] left-[57%] z-[3] hidden w-[16%] border border-[#94A3B8]/20 bg-[#F5F4EF] p-2 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] min-[420px]:block"
        style={{ transform: `translate3d(${shift * 6}px, 0, 0) rotate(4deg)` }}
      >
        <div className="space-y-1">
          <div className="h-1 w-full bg-[#A8A29E]/45" />
          <div className="h-1.5 w-3/4 bg-[#38BDF8]/25" />
          <div className="h-1 w-2/3 bg-[#A8A29E]/45" />
        </div>
      </div>

      {/* feuille de fond haut-droite avec repère PDF */}
      <div
        className="absolute top-[6%] left-[52%] hidden w-[26%] border border-[#94A3B8]/20 bg-[#EFEDE6] p-2.5 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.55)] min-[420px]:block"
        style={{ transform: `translate3d(${shift * 5}px, 0, 0) rotate(5deg)` }}
      >
        <span className="absolute top-1.5 right-1.5 border border-[#334D74]/70 bg-[#070B14]/80 px-1 font-mono text-[6px] tracking-[0.12em] text-[#64748B]">
          PDF
        </span>
        <div className="h-1.5 w-1/2 bg-[#A8A29E]/50" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/45" />
          <div className="h-1 w-10/12 bg-[#A8A29E]/45" />
          <div className="h-1 w-full bg-[#A8A29E]/45" />
          <div className="h-1 w-2/3 bg-[#A8A29E]/45" />
        </div>
      </div>

      {/* document intermédiaire centre-droit avec surlignage */}
      <div
        className="absolute top-[29%] left-[43%] z-[5] w-[28%] border border-[#94A3B8]/25 bg-[#FCFCFB] p-2.5 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]"
        style={{ transform: `translate3d(${shift * 8}px, 0, 0) rotate(-2.5deg)` }}
      >
        <div className="h-1.5 w-2/5 bg-[#78716C]/50" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/55" />
          <div className="h-2 w-3/4 bg-[#38BDF8]/30" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/55" />
          <div className="h-1 w-1/2 bg-[#A8A29E]/55" />
        </div>
      </div>

      {/* document intermédiaire centre-gauche avec repère DOCX */}
      <div
        className="absolute top-[43%] left-[4%] z-[5] w-[26%] border border-[#94A3B8]/25 bg-[#F5F4EF] p-2.5 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]"
        style={{ transform: `translate3d(${shift * 6}px, 0, 0) rotate(2.5deg)` }}
      >
        <span className="absolute top-1.5 right-1.5 border border-[#334D74]/70 bg-[#070B14]/80 px-1 font-mono text-[6px] tracking-[0.12em] text-[#64748B]">
          DOCX
        </span>
        <div className="h-1.5 w-1/2 bg-[#78716C]/50" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/50" />
          <div className="h-1 w-3/4 bg-[#A8A29E]/50" />
          <div className="ml-3 h-1 w-full bg-[#A8A29E]/40" />
          <div className="h-1 w-2/3 bg-[#A8A29E]/50" />
        </div>
      </div>

      {/* feuille de fond bas-centre avec annotation */}
      <div
        className="absolute bottom-[6%] left-[24%] w-[28%] border border-[#94A3B8]/20 bg-[#E8E6DF] p-2.5 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.55)]"
        style={{ transform: `translate3d(${shift * 4}px, 0, 0) rotate(1.5deg)` }}
      >
        <div className="space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/40" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/40" />
          <div className="h-1 w-2/3 bg-[#A8A29E]/40" />
        </div>
        <svg viewBox="0 0 24 24" className="absolute right-2 bottom-2 h-4 w-4">
          <circle cx="12" cy="12" r="9" fill="none" stroke="#B45309" strokeWidth="1.6" strokeDasharray="3 2" />
        </svg>
      </div>

      {/* mini capture de fond bas-droite */}
      <div
        className="absolute right-[22%] bottom-[9%] hidden w-[24%] border border-[#94A3B8]/25 bg-white shadow-[0_10px_28px_-10px_rgba(0,0,0,0.55)] min-[420px]:block"
        style={{ transform: `translate3d(${shift * 10}px, 0, 0) rotate(-2deg)` }}
      >
        <div className="flex items-center gap-1 border-b border-[#E2E8F0] bg-[#F1F5F9] px-1.5 py-1">
          <span className="h-1 w-1 rounded-full bg-[#CBD5E1]" />
          <span className="h-1 w-1 rounded-full bg-[#CBD5E1]" />
          <span className="h-1 w-1 rounded-full bg-[#CBD5E1]" />
        </div>
        <svg viewBox="0 0 120 56" className="w-full">
          <rect x="8" y="8" width="44" height="18" fill="#E2E8F0" />
          <polyline
            points="8,46 22,34 34,48 48,28 62,42 76,26 90,44 104,32 114,40"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="1.4"
          />
        </svg>
      </div>

      {/* feuille de raccord centre (pont DOCX → nouveau document) */}
      <div
        className="absolute top-[41%] left-[42%] z-[4] hidden w-[22%] border border-[#94A3B8]/20 bg-[#E8E6DF] p-2.5 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.55)] min-[420px]:block"
        style={{ transform: `translate3d(${shift * 5}px, 0, 0) rotate(3.5deg)` }}
      >
        <div className="h-1.5 w-1/2 bg-[#A8A29E]/45" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/40" />
          <div className="h-1 w-10/12 bg-[#A8A29E]/40" />
          <div className="h-1 w-2/3 bg-[#A8A29E]/40" />
        </div>
      </div>

      {/* feuille de raccord haut-droite (pont feuille surlignée → nouveau document) */}
      <div
        className="absolute top-[36%] left-[62%] z-[4] hidden w-[20%] border border-[#94A3B8]/20 bg-[#F5F4EF] p-2.5 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.55)] min-[420px]:block"
        style={{ transform: `translate3d(${shift * 8}px, 0, 0) rotate(4deg)` }}
      >
        <div className="space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/45" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/45" />
          <div className="h-1 w-3/5 bg-[#A8A29E]/45" />
        </div>
      </div>

      {/* document principal de la zone centrale droite */}
      <figure
        className="absolute top-[45%] left-[51%] z-[6] m-0 w-[26%] border border-[#94A3B8]/30 bg-[#FCFCFB] p-3 shadow-[0_14px_36px_-12px_rgba(0,0,0,0.65)]"
        style={{ transform: `translate3d(${shift * 7}px, 0, 0) rotate(-1.5deg)` }}
      >
        <span className="absolute top-1.5 right-1.5 border border-[#334D74]/70 bg-[#070B14]/80 px-1 font-mono text-[6px] tracking-[0.12em] text-[#64748B]">
          PDF
        </span>
        <div className="h-1.5 w-1/2 bg-[#78716C]/60" />
        <div className="mt-2.5 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/60" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/60" />
          <div className="h-2 w-3/4 bg-[#F59E0B]/35" />
          <div className="h-1 w-full bg-[#A8A29E]/60" />
          <div className="h-1 w-10/12 bg-[#A8A29E]/60" />
          <div className="h-1 w-1/2 bg-[#A8A29E]/60" />
        </div>
        <svg viewBox="0 0 24 24" className="absolute right-2 bottom-2 h-4 w-4">
          <circle cx="12" cy="12" r="9" fill="none" stroke="#B45309" strokeWidth="1.6" strokeDasharray="3 2" />
        </svg>
      </figure>

      {/* capture intermédiaire centre-gauche (comble la bande verticale vide) */}
      <figure
        className="absolute top-[50%] left-[9%] z-[8] m-0 w-[33%] border border-[#94A3B8]/30 bg-white shadow-[0_14px_36px_-12px_rgba(0,0,0,0.65)]"
        style={{ transform: `translate3d(${shift * 6}px, 0, 0) rotate(1.8deg)` }}
      >
        <div className="flex items-center gap-1 border-b border-[#E2E8F0] bg-[#F1F5F9] px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#CBD5E1]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#CBD5E1]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#CBD5E1]" />
        </div>
        <svg viewBox="0 0 160 92" className="w-full">
          <rect x="10" y="10" width="64" height="30" fill="#E2E8F0" />
          <rect x="82" y="10" width="68" height="8" fill="#EDF2F7" />
          <rect x="82" y="22" width="52" height="8" fill="#EDF2F7" />
          <rect x="82" y="34" width="60" height="8" fill="#EDF2F7" />
          <polyline
            points="10,78 24,62 38,82 54,56 70,74 86,52 102,78 118,60 134,72 150,58"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="1.6"
          />
          <line x1="10" y1="86" x2="150" y2="86" stroke="#CBD5E1" strokeWidth="1" />
        </svg>
      </figure>

      {/* feuille de raccord bas-centre (pont capture → rangée du bas) */}
      <div
        className="absolute top-[62%] left-[36%] z-[4] hidden w-[22%] border border-[#94A3B8]/20 bg-[#EFEDE6] p-2.5 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.55)] min-[420px]:block"
        style={{ transform: `translate3d(${shift * 5}px, 0, 0) rotate(-2.5deg)` }}
      >
        <div className="h-1.5 w-2/5 bg-[#A8A29E]/45" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/40" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/40" />
          <div className="h-1 w-3/5 bg-[#A8A29E]/40" />
        </div>
      </div>

      {/* feuille de jonction sous la capture principale (poche y 29-35 gauche) */}
      <div
        className="absolute top-[28%] left-[6%] z-[4] hidden w-[20%] border border-[#94A3B8]/20 bg-[#EFEDE6] p-2.5 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.55)] min-[420px]:block"
        style={{ transform: `translate3d(${shift * 5}px, 0, 0) rotate(2.5deg)` }}
      >
        <div className="h-1 w-1/2 bg-[#A8A29E]/45" />
        <div className="mt-1.5 space-y-1">
          <div className="h-1 w-full bg-[#A8A29E]/40" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/40" />
          <div className="h-1 w-3/5 bg-[#A8A29E]/40" />
        </div>
      </div>

      {/* feuille de jonction centre (poche x 43-51, y 50-62) */}
      <div
        className="absolute top-[52%] left-[42%] z-[4] hidden w-[16%] border border-[#94A3B8]/20 bg-[#F5F4EF] p-2 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] min-[420px]:block"
        style={{ transform: `translate3d(${shift * 6}px, 0, 0) rotate(-3deg)` }}
      >
        <div className="space-y-1">
          <div className="h-1 w-full bg-[#A8A29E]/45" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/45" />
          <div className="h-1 w-2/3 bg-[#A8A29E]/45" />
        </div>
      </div>

      {/* large feuille basse gauche (bande y 72-79, pont vers les notes) */}
      <div
        className="absolute top-[68%] left-[8%] z-[7] w-[36%] border border-[#94A3B8]/25 bg-[#EFEDE6] p-3 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]"
        style={{ transform: `translate3d(${shift * 4}px, 0, 0) rotate(-1.5deg)` }}
      >
        <div className="h-1.5 w-2/5 bg-[#A8A29E]/50" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/45" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/45" />
          <div className="h-1 w-2/3 bg-[#A8A29E]/45" />
        </div>
      </div>

      {/* feuille basse droite (pont entre le document à surlignage et la rangée du bas) */}
      <div
        className="absolute top-[62%] left-[52%] z-[5] hidden w-[26%] border border-[#94A3B8]/20 bg-[#FCFCFB] p-2.5 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.55)] min-[420px]:block"
        style={{ transform: `translate3d(${shift * 6}px, 0, 0) rotate(2deg)` }}
      >
        <div className="h-1.5 w-1/2 bg-[#A8A29E]/50" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/50" />
          <div className="h-1.5 w-3/4 bg-[#38BDF8]/25" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/50" />
          <div className="h-1 w-2/3 bg-[#A8A29E]/50" />
        </div>
      </div>

      {/* document de couverture bas-centre (par-dessus, poche y 72-80) */}
      <div
        className="absolute top-[71%] left-[44%] z-[9] w-[24%] border border-[#94A3B8]/25 bg-[#EFEDE6] p-2.5 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]"
        style={{ transform: `translate3d(${shift * 5}px, 0, 0) rotate(-2deg)` }}
      >
        <div className="h-1.5 w-1/2 bg-[#A8A29E]/50" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/45" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/45" />
          <div className="h-1 w-2/3 bg-[#A8A29E]/45" />
        </div>
        <svg viewBox="0 0 24 24" className="absolute right-2 bottom-2 h-3.5 w-3.5">
          <circle cx="12" cy="12" r="9" fill="none" stroke="#B45309" strokeWidth="1.6" strokeDasharray="3 2" />
        </svg>
      </div>

      {/* capture d'écran */}
      <figure
        className="absolute top-[11%] left-[5%] z-10 m-0 w-[35%] border border-[#94A3B8]/30 bg-white shadow-[0_14px_36px_-12px_rgba(0,0,0,0.65)]"
        style={{ transform: `translate3d(${shift * 9}px, 0, 0) rotate(-2deg)` }}
      >
        <div className="flex items-center gap-1 border-b border-[#E2E8F0] bg-[#F1F5F9] px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#CBD5E1]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#CBD5E1]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#CBD5E1]" />
        </div>
        <svg viewBox="0 0 160 80" className="w-full">
          <rect x="10" y="10" width="60" height="26" fill="#E2E8F0" />
          <rect x="78" y="10" width="72" height="8" fill="#EDF2F7" />
          <rect x="78" y="22" width="56" height="8" fill="#EDF2F7" />
          <polyline
            points="10,66 26,52 40,70 56,42 72,62 88,38 104,66 122,48 138,60 152,44"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="1.6"
          />
          <line x1="10" y1="74" x2="152" y2="74" stroke="#CBD5E1" strokeWidth="1" />
        </svg>
        <SrcTag>{l.shot}</SrcTag>
      </figure>

      {/* page PDF annotée */}
      <figure
        className="absolute top-[17%] left-[35%] z-10 m-0 w-[30%] border border-[#94A3B8]/25 bg-[#EFEDE6] p-3 shadow-[0_14px_36px_-12px_rgba(0,0,0,0.65)]"
        style={{ transform: `translate3d(${shift * 12}px, 0, 0) rotate(2.5deg)` }}
      >
        <div className="h-1.5 w-1/2 bg-[#A8A29E]/50" />
        <div className="mt-2 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/55" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/55" />
          <div className="h-2 w-10/12 bg-[#F59E0B]/40" />
          <div className="h-1 w-full bg-[#A8A29E]/55" />
          <div className="h-1 w-3/5 bg-[#A8A29E]/55" />
        </div>
        <svg viewBox="0 0 24 24" className="absolute top-2 right-2 h-4 w-4">
          <circle cx="12" cy="12" r="9" fill="none" stroke="#B45309" strokeWidth="1.6" strokeDasharray="3 2" />
        </svg>
        <SrcTag>{l.pdf}</SrcTag>
      </figure>

      {/* document aux paragraphes irréguliers */}
      <figure
        className="absolute top-[35%] left-[15%] z-20 m-0 w-[37%] border border-[#94A3B8]/30 bg-[#FCFCFB] p-3 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)]"
        style={{ transform: `translate3d(${shift * 5}px, 0, 0) rotate(-1deg)` }}
      >
        <div className="h-1.5 w-1/2 bg-[#78716C]/60" />
        <div className="mt-2.5 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/60" />
          <div className="h-1 w-11/12 bg-[#A8A29E]/60" />
          <div className="h-1 w-3/5 bg-[#A8A29E]/60" />
        </div>
        <div className="mt-3 ml-4 space-y-1.5">
          <div className="h-1 w-full bg-[#A8A29E]/45" />
          <div className="h-1 w-2/3 bg-[#A8A29E]/45" />
        </div>
        <div className="mt-3 space-y-1.5">
          <div className="h-1 w-10/12 bg-[#A8A29E]/60" />
          <div className="h-1 w-1/3 bg-[#A8A29E]/60" />
        </div>
        <SrcTag>{l.docx}</SrcTag>
      </figure>

      {/* note manuscrite */}
      <figure
        className="absolute bottom-[9%] left-[7%] z-10 m-0 w-[31%] bg-[#F3ECCF] p-3 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]"
        style={{ transform: `translate3d(${shift * 7}px, 0, 0) rotate(-3deg)` }}
      >
        <svg viewBox="0 0 120 44" className="w-full">
          <path d="M4 10c12-3 24 2 36-1s22 3 34 0 24 2 40-1" fill="none" stroke="#78716C" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M6 24c10 2 22-2 34 1s26-3 40 0" fill="none" stroke="#78716C" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M8 38c14-2 28 2 44-1" fill="none" stroke="#78716C" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <SrcTag>{l.notes}</SrcTag>
      </figure>

      {/* extrait surligné */}
      <figure
        className="absolute bottom-[13%] left-[37%] z-10 m-0 hidden w-[29%] border border-[#94A3B8]/25 bg-white p-2.5 shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)] min-[420px]:block"
        style={{ transform: `translate3d(${shift * 14}px, 0, 0) rotate(2deg)` }}
      >
        <div className="h-1 w-full bg-[#A8A29E]/50" />
        <div className="mt-1.5 h-2 w-4/5 bg-[#38BDF8]/35" />
        <div className="mt-1.5 h-1 w-3/5 bg-[#A8A29E]/50" />
        <SrcTag>{l.excerpt}</SrcTag>
      </figure>

      <span className="absolute bottom-[3.5%] left-[31%] z-30 -translate-x-1/2 border border-[#1E293B] bg-[#070B14]/85 px-2.5 py-1 font-mono text-[9px] tracking-[0.25em] whitespace-nowrap text-[#94A3B8] uppercase backdrop-blur-sm">
        {c.beforeCaption}
      </span>
    </div>
  );
});

/* ---------- Comparateur ---------- */

export function BeforeAfter() {
  const { t } = useI18n();
  const c = t.home.comparator;
  const [pos, setPos] = useState(CENTER);
  const [settled, setSettled] = useState(true);
  const [interacted, setInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const inView = useInView(containerRef);
  const reduced = usePrefersReducedMotion();

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(MAX_POS, Math.max(MIN_POS, next)));
    setInteracted(true);
  }, []);

  const shift = reduced ? 0 : (pos - CENTER) / CENTER;
  const clipMotion = settled && !reduced ? `clip-path 0.6s ${EASE}` : "none";
  const dividerMotion = settled && !reduced ? `left 0.6s ${EASE}` : "none";

  return (
    <div
      ref={containerRef}
      data-testid="before-after"
      className="relative aspect-[4/5] w-full touch-pan-y overflow-hidden border border-[#1E293B] bg-[#0A1020] select-none focus-within:ring-2 focus-within:ring-[#38BDF8]/60"
      style={{ perspective: "1200px" }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || dragging.current || !inView || reduced) return;
        setSettled(false);
        updateFromClientX(e.clientX);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType !== "mouse" || dragging.current) return;
        setSettled(true);
        setPos(CENTER);
      }}
    >
      <AfterScene c={c} shift={shift} />

      <div className="absolute inset-0 z-10" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, transition: clipMotion }}>
        <BeforeScene c={c} shift={shift} />
      </div>

      <span className="pointer-events-none absolute top-3 left-3 z-20 border border-[#1E293B] bg-[#070B14]/85 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-[#94A3B8] backdrop-blur-sm">
        {c.beforeLabel}
      </span>
      <span className="pointer-events-none absolute top-3 right-3 z-20 border border-[#38BDF8]/40 bg-[#070B14]/85 px-2.5 py-1 font-mono text-[10px] tracking-[0.25em] text-[#38BDF8] backdrop-blur-sm">
        {c.afterLabel}
      </span>

      <span
        className={`pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 border border-[#1E293B] bg-[#070B14]/85 px-3 py-1.5 font-mono text-[9px] tracking-[0.22em] whitespace-nowrap text-[#94A3B8] uppercase backdrop-blur-sm transition-opacity duration-500 ${
          interacted ? "opacity-0" : "opacity-100"
        }`}
      >
        {c.hint}
      </span>

      <div className="absolute inset-y-0 z-30" style={{ left: `${pos}%`, transition: dividerMotion }}>
        <div className="absolute inset-y-0 -left-px w-0.5 bg-gradient-to-b from-[#38BDF8]/0 via-[#38BDF8] to-[#38BDF8]/0" />
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          data-testid="before-after-handle"
          className="absolute top-1/2 left-0 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-pan-y items-center justify-center border border-[#38BDF8] bg-[#070B14] shadow-[0_0_24px_rgba(56,189,248,0.25)]"
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            setSettled(false);
          }}
          onPointerMove={(e) => {
            if (dragging.current) updateFromClientX(e.clientX);
          }}
          onPointerUp={() => {
            dragging.current = false;
          }}
          onPointerCancel={() => {
            dragging.current = false;
          }}
        >
          <ChevronsLeftRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={Math.round(pos)}
        aria-label={c.ariaLabel}
        data-testid="before-after-slider"
        className="sr-only"
        onChange={(e) => {
          setSettled(false);
          setPos(Number(e.target.value));
          setInteracted(true);
        }}
      />
    </div>
  );
}
