import { Link } from "react-router-dom";
import { useI18n } from "@/i18n";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <section className="relative flex min-h-[70vh] items-center">
      <div className="schematic-grid absolute inset-0 opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="font-mono text-7xl font-bold text-[#1E293B]" aria-hidden="true">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-[#F1F5F9]" data-testid="notfound-title">
          {t.notFound.title}
        </h1>
        <p className="mt-3 text-sm text-[#94A3B8]">{t.notFound.text}</p>
        <Link
          to="/"
          data-testid="notfound-home"
          className="btn-metal mt-8 inline-flex px-6 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em]"
        >
          {t.notFound.cta}
        </Link>
      </div>
    </section>
  );
}
