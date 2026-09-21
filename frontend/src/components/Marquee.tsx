export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div
      className="relative overflow-hidden border-y border-[#1E293B] bg-[#080E1C] py-4"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 pr-10 font-mono text-xs uppercase tracking-[0.35em] text-[#64748B]"
          >
            {item}
            <span className="text-[#38BDF8]">+</span>
          </span>
        ))}
      </div>
    </div>
  );
}
