import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { useI18n } from "@/i18n";

export default function Footer() {
  const { t } = useI18n();
  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/creation-sites-web", label: t.nav.web },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-[#1E293B] bg-[#05080F]">
      <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
        <div className="grid gap-12 pb-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}logo-full.png`}
              alt="Klonaris — Structured Documentation"
              data-testid="footer-logo"
              className="h-24 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#94A3B8]">{t.footer.tagline}</p>
            <div className="mt-6 inline-flex items-center gap-2 border border-[#1E293B] bg-[#0D1527] px-3 py-2">
              <ShieldCheck className="h-4 w-4 text-[#38BDF8]" aria-hidden="true" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#94A3B8]">
                {t.footer.badge}
              </span>
            </div>
            <div className="mt-5 space-y-1.5">
              <a
                href="mailto:yannis.klonaris@outlook.be"
                data-testid="footer-email"
                className="block font-mono text-[11px] tracking-[0.08em] text-[#64748B] transition-colors duration-200 hover:text-[#38BDF8]"
              >
                yannis.klonaris@outlook.be
              </a>
              <a
                href="tel:+32470814911"
                data-testid="footer-phone"
                className="block font-mono text-[11px] tracking-[0.08em] text-[#64748B] transition-colors duration-200 hover:text-[#38BDF8]"
              >
                +32 470 81 49 11
              </a>
            </div>
          </div>
          <nav aria-label="Footer">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#475569]">
              {t.footer.navTitle}
            </p>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                    className="text-sm text-[#94A3B8] transition-colors duration-200 hover:text-[#F1F5F9]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#475569]">
              {t.footer.legalTitle}
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  to="/privacy"
                  data-testid="footer-privacy"
                  className="text-sm text-[#94A3B8] transition-colors duration-200 hover:text-[#F1F5F9]"
                >
                  {t.footer.privacyLink}
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  data-testid="footer-legal"
                  className="text-sm text-[#94A3B8] transition-colors duration-200 hover:text-[#F1F5F9]"
                >
                  {t.footer.legalLink}
                </Link>
              </li>
              <li>
                <Link
                  to="/conditions-generales"
                  data-testid="footer-terms"
                  className="text-sm text-[#94A3B8] transition-colors duration-200 hover:text-[#F1F5F9]"
                >
                  {t.footer.termsLink}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#1E293B] py-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#475569]">{t.footer.rights}</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#334155]">
            [ {t.footer.stamp} ]
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none select-none px-5 pt-4 pb-10 sm:px-8">
        <img src={`${import.meta.env.BASE_URL}logo-text.png`} alt="" className="w-full opacity-[0.07]" />
      </div>
    </footer>
  );
}
