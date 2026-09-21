import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

export function FieldLabel({ children, htmlFor }: { children: ReactNode; htmlFor: string }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block font-mono text-[10px] uppercase tracking-[0.22em] text-[#94A3B8]"
    >
      {children}
    </label>
  );
}

export function DarkSelect({
  id,
  testId,
  value,
  onChange,
  options,
}: {
  id: string;
  testId: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="relative">
      <select
        id={id}
        data-testid={testId}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none border border-[#1E293B] bg-[#0D1527] px-3 py-2.5 pr-9 text-sm text-[#F1F5F9] transition-colors duration-200 hover:border-[#334D74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} className="bg-[#0D1527]">
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-[#475569]"
        aria-hidden="true"
      />
    </div>
  );
}

export const inputClass =
  "w-full border border-[#1E293B] bg-[#0D1527] px-3 py-2.5 text-sm text-[#F1F5F9] placeholder:text-[#475569] transition-colors duration-200 hover:border-[#334D74] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]";
