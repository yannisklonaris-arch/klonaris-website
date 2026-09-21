import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useI18n, type Lang } from "@/i18n";

function Wordmark() {
  const { t } = useI18n();
  return (
    <Link to="/" data-testid="logo-link" className="group flex items-center gap-3">
      <img
        src="/logo-mark.png"
        alt="Klonaris"
        className="h-9 w-9 shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <span className="leading-none">
        <img src="/logo-text.png" alt={t.brand.name} className="h-3.5 w-auto" />
        <span className="mt-1 block font-mono text-[9px] tracking-[0.2em] text-[#475569]">
          {t.brand.sub}
        </span>
      </span>
    </Link>
  );
}

function LangToggle({ onSwitch }: { onSwitch?: () => void }) {
  const { lang, setLang } = useI18n();
  const options: Lang[] = ["fr", "en"];
  return (
    <div
      data-testid="lang-toggle"
      className="flex items-center border border-[#1E293B] font-mono text-[11px] tracking-[0.15em]"
      role="group"
      aria-label="Language / Langue"
    >
      {options.map((l) => (
        <button
          key={l}
          data-testid={`lang-${l}`}
          onClick={() => {
            setLang(l);
            onSwitch?.();
          }}
          aria-pressed={lang === l}
          className={`px-2.5 py-1.5 uppercase transition-colors duration-200 ${
            lang === l ? "bg-[#16233B] text-[#38BDF8]" : "text-[#64748B] hover:text-[#CBD5E1]"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/creation-sites-web", label: t.nav.web },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1E293B]/80 bg-[#070B14]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.slice(0, 4).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className={({ isActive }) =>
                `font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                  isActive ? "text-[#38BDF8]" : "text-[#94A3B8] hover:text-[#F1F5F9]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <LangToggle />
          <Link
            to="/contact"
            data-testid="header-cta"
            className="btn-metal group inline-flex items-center gap-2 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] transition-transform duration-200 hover:-translate-y-0.5"
          >
            {t.nav.cta}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </div>
        <div className="flex items-center gap-3 lg:hidden">
          <LangToggle />
          <button
            data-testid="mobile-menu-button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? t.nav.close : t.nav.menu}
            className="flex h-9 w-9 items-center justify-center border border-[#1E293B] text-[#CBD5E1]"
          >
            {open ? <X className="h-4 w-4" aria-hidden="true" /> : <Menu className="h-4 w-4" aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-[#1E293B] bg-[#070B14] lg:hidden" data-testid="mobile-menu">
          <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                data-testid={`mobile-nav-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                className={({ isActive }) =>
                  `border-b border-[#1E293B]/60 py-3.5 font-mono text-xs uppercase tracking-[0.2em] ${
                    isActive ? "text-[#38BDF8]" : "text-[#94A3B8]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              data-testid="mobile-header-cta"
              className="btn-metal mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.15em]"
            >
              {t.nav.cta}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
