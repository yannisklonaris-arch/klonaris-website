import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

export function LineReveal({
  lines,
  className,
}: {
  lines: string[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block will-change-transform"
            initial={reduce ? false : { y: "115%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 + i * 0.13, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function SectionTag({ label }: { label: string }) {
  return (
    <p className="font-heading text-4xl font-extrabold tracking-tight text-[#38BDF8] sm:text-5xl">
      {label}
    </p>
  );
}

export function CornerFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative border border-[#1E293B] ${className}`}>
      <span aria-hidden="true" className="absolute -top-px -left-px h-3 w-3 border-t border-l border-[#94A3B8]" />
      <span aria-hidden="true" className="absolute -top-px -right-px h-3 w-3 border-t border-r border-[#94A3B8]" />
      <span aria-hidden="true" className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-[#94A3B8]" />
      <span aria-hidden="true" className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-[#94A3B8]" />
      {children}
    </div>
  );
}
