import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo.asset.json";
import { WhatsAppButton } from "./WhatsAppButton";

const NAV = [
  { href: "#start", label: "Start" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#vorteile", label: "Vorteile" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#ueber", label: "Über Uns" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function SiteHeader({ onHome = true }: { onHome?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkFor = (href: string) =>
    onHome ? href : `/${href}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-white/85 border-b border-hairline shadow-[0_4px_30px_-20px_rgba(20,30,60,0.3)]" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="ERCA Bauleitung Logo" className="h-9 w-auto md:h-11" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={linkFor(item.href)}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-navy transition-colors relative group"
            >
              {item.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform bg-teal" />
            </a>
          ))}
          <a
            href={linkFor("#kontakt")}
            className="ml-4 inline-flex items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-navy-deep transition-colors shadow-soft"
          >
            Erstberatung
          </a>
        </nav>

        <button
          aria-label="Menü öffnen"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-white/90 text-navy"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden container-px mx-auto max-w-7xl pb-6"
          >
            <div className="rounded-2xl border border-hairline bg-white/95 backdrop-blur-xl p-4 shadow-elegant">
              <div className="flex flex-col">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={linkFor(item.href)}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 text-base font-medium text-foreground border-b border-hairline last:border-0"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={linkFor("#kontakt")}
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Kostenlose Erstberatung
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/85">
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-xl bg-white p-2">
              <img src={logoAsset.url} alt="ERCA" className="h-8 w-auto" />
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/70 max-w-sm">
            Externe Bauleitung für Sanierungen, Modernisierungen und Umbauprojekte. Erfahrung, die Ihr Projekt schützt.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={`/${n.href}`} className="text-white/70 hover:text-teal transition-colors">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">Kontakt</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>ERCA Bauleitung</li>
            <li>E-Mail: info@erca-bauleitung.de</li>
            <li>Telefon: +49 150 000 00 00</li>
          </ul>
          <div className="mt-6 flex gap-4 text-sm">
            <Link to="/impressum" className="text-white/70 hover:text-teal">Impressum</Link>
            <Link to="/datenschutz" className="text-white/70 hover:text-teal">Datenschutz</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-6 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} ERCA Bauleitung. Alle Rechte vorbehalten.</span>
          <span>Erfahrung, die Ihr Projekt schützt.</span>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children, onHome }: { children: ReactNode; onHome?: boolean }) {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteHeader onHome={onHome} />
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}
