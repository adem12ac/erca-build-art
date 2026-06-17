import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ClipboardCheck, HardHat, Users, ShieldCheck, Wallet,
  CheckCircle2, Phone, Mail, MessageCircle, ArrowRight, Award, Eye,
  Handshake, Clock, Sparkles, Compass, Building2, BadgeCheck,
  CalendarCheck, Search, PencilRuler, Construction, FileCheck2, Key,
} from "lucide-react";
import heroAsset from "@/assets/hero.asset.json";
import deskAsset from "@/assets/desk.asset.json";
import { WHATSAPP_URL } from "@/components/WhatsAppButton";

/* ---------- HERO ---------- */
export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="start" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden text-white bg-navy-deep">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src={heroAsset.url} alt="Bauleiter auf Baustelle bei Sonnenuntergang" loading="eager" className="h-full w-full object-cover animate-hero-zoom" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.20 0.10 263 / 0.82) 0%, oklch(0.24 0.10 263 / 0.60) 55%, oklch(0.30 0.10 263 / 0.40) 100%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/15" />
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        aria-hidden
        className="hidden md:block absolute top-[22%] right-[8%] h-24 w-24 rounded-2xl border border-white/20 backdrop-blur-md animate-float"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))" }}
      />
      <motion.div
        aria-hidden
        className="hidden md:block absolute bottom-[28%] left-[6%] h-16 w-16 rounded-full border border-teal/40 animate-float"
        style={{ animationDelay: "1.5s", background: "radial-gradient(circle at 30% 30%, rgba(94,234,212,0.35), transparent 70%)" }}
      />

      <div className="container-px mx-auto max-w-7xl pt-36 md:pt-44 pb-28 md:pb-40 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-white/90"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
          Unabhängige Bauleitung · Über 30 Jahre Erfahrung
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
        >
          Professionelle Bauleitung für{" "}
          <span className="text-gradient">Sanierungen, Modernisierungen</span> und Umbauprojekte.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-7 max-w-2xl text-lg md:text-xl text-white/85 leading-relaxed"
        >
          Über 30 Jahre Erfahrung. Ein Ansprechpartner. Volle Kontrolle über Termine, Qualität und Kosten.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-navy-deep shadow-elegant hover:shadow-[0_25px_50px_-15px_rgba(94,234,212,0.6)] transition-all duration-300"
          >
            Kostenlose Erstberatung
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            <MessageCircle size={16} /> WhatsApp Kontakt
          </a>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur"
        >
          {[
            { v: 30, suffix: "+", l: "Jahre Erfahrung" },
            { v: 500, suffix: "+", l: "Begleitete Projekte" },
            { v: 1, suffix: "", l: "Ansprechpartner" },
            { v: 100, suffix: "%", l: "Unabhängig" },
          ].map((s) => (
            <div key={s.l} className="bg-navy-deep/40 px-5 py-6">
              <div className="text-3xl md:text-4xl font-bold text-white"><Counter to={s.v} />{s.suffix}</div>
              <div className="mt-1 text-xs md:text-sm text-white/70 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  );
}

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
    const unsub = mv.on("change", (v) => setVal(Math.round(v)));
    return () => { controls.stop(); unsub(); };
  }, [inView, mv, to]);
  return <span ref={ref}>{val}</span>;
}

/* ---------- Reveal ---------- */
function Reveal({ children, delay = 0, y = 24 }: { children: ReactNode; delay?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.6, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ kicker, title, lead }: { kicker: string; title: ReactNode; lead?: string }) {
  return (
    <div className="max-w-3xl">
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-soft/40 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-deep">
          <span className="h-1 w-1 rounded-full bg-teal" /> {kicker}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- LEISTUNGEN ---------- */
const LEISTUNGEN = [
  {
    icon: ClipboardCheck,
    title: "Projektvorbereitung",
    items: ["Objektbesichtigung", "Bestandsaufnahme", "Sanierungskonzepte", "Budgetplanung"],
  },
  {
    icon: HardHat,
    title: "Bauleitung",
    items: ["Terminplanung", "Baustellenkontrolle", "Bauüberwachung", "Abnahmen"],
  },
  {
    icon: Users,
    title: "Handwerkerkoordination",
    items: ["Gewerke abstimmen", "Terminüberwachung", "Baustellenorganisation"],
  },
  {
    icon: ShieldCheck,
    title: "Qualitätsmanagement",
    items: ["Qualitätskontrollen", "Fotodokumentation", "Mängelmanagement", "Abnahmebegleitung"],
  },
  {
    icon: Wallet,
    title: "Kosten- & Terminmanagement",
    items: ["Rechnungsprüfung", "Nachtragsprüfung", "Budgetkontrolle", "Fortschrittsberichte"],
  },
];

export function Leistungen() {
  return (
    <section id="leistungen" className="relative py-24 md:py-36 bg-surface">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          kicker="Leistungen"
          title={<>Alles aus einer Hand — von der ersten Besichtigung bis zur <span className="text-gradient">Schlüsselübergabe</span>.</>}
          lead="Wir übernehmen die gesamte Steuerung Ihres Bauprojekts. Klar strukturiert, vollständig dokumentiert, kompromisslos qualitätsorientiert."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LEISTUNGEN.map((l, i) => (
            <Reveal key={l.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-hairline bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elegant">
                <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(circle, var(--teal) 0%, transparent 70%)" }} />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-white transition-transform group-hover:scale-110 group-hover:rotate-3" style={{ background: "var(--gradient-accent)" }}>
                    <l.icon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-tight">{l.title}</h3>
                  <ul className="mt-5 space-y-2.5">
                    {l.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- VORTEILE ---------- */
const VORTEILE = [
  { icon: Award, title: "Über 30 Jahre Erfahrung", text: "Praxiswissen aus hunderten Baustellen, Sanierungen und Umbauprojekten." },
  { icon: Handshake, title: "Ein Ansprechpartner", text: "Vom ersten Telefonat bis zur Schlüsselübergabe – persönlich und verbindlich." },
  { icon: Eye, title: "Volle Transparenz", text: "Fortschrittsberichte, Fotodokumentation, lückenlose Nachvollziehbarkeit." },
  { icon: Wallet, title: "Kostenkontrolle", text: "Angebote, Nachträge und Rechnungen werden fachkundig vor Freigabe geprüft." },
  { icon: ShieldCheck, title: "Qualitätskontrolle", text: "Kontinuierliche Prüfung auf Verarbeitung, Materialien und Regeln der Technik." },
  { icon: Clock, title: "Terminsicherheit", text: "Strukturierte Ablaufplanung und konsequente Steuerung aller Gewerke." },
  { icon: Sparkles, title: "Flexible Projektbetreuung", text: "Aktivieren Sie unsere Leistung nur dann, wenn Sie sie wirklich brauchen." },
  { icon: Compass, title: "Unabhängige Bauleitung", text: "Ausschließlich auf Ihrer Seite – ohne wirtschaftliche Verbindung zu Handwerksfirmen." },
];

export function Vorteile() {
  return (
    <section id="vorteile" className="relative py-24 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          kicker="Ihre Vorteile"
          title={<>Was Sie konkret davon haben.</>}
          lead="ERCA Bauleitung schützt Sie vor Terminverzögerungen, mangelhafter Ausführung und unkontrollierten Kostensteigerungen."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {VORTEILE.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="group h-full bg-white p-7 transition-colors hover:bg-surface-2">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                  <v.icon size={20} />
                </div>
                <h3 className="mt-5 text-base font-semibold leading-snug">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABLAUF (Timeline) ---------- */
const ABLAUF = [
  { icon: Phone, title: "Erstgespräch", text: "Wir verstehen Ihr Projekt, Ihre Ziele und Ihre Anforderungen – unverbindlich." },
  { icon: Search, title: "Objektbesichtigung", text: "Vor-Ort-Termin mit Bestandsaufnahme und vollständiger Fotodokumentation." },
  { icon: PencilRuler, title: "Planung", text: "Maßnahmenkatalog, Leistungsverzeichnis, Kostenrahmen und realistischer Terminplan." },
  { icon: Construction, title: "Bauleitung", text: "Steuerung aller Gewerke, regelmäßige Baustellenbegehungen, klare Kommunikation." },
  { icon: FileCheck2, title: "Qualitätskontrolle", text: "Fortlaufende Prüfungen, Mängelmanagement und Rechnungsfreigabe nach Kontrolle." },
  { icon: Key, title: "Fertigstellung", text: "Abnahme, vollständige Dokumentation, Übergabe – mängelfrei und nachvollziehbar." },
];

export function Ablauf() {
  return (
    <section id="ablauf" className="relative py-24 md:py-36 bg-navy-deep text-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div aria-hidden className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, var(--teal) 0%, transparent 60%)", opacity: 0.15 }} />

      <div className="container-px mx-auto max-w-7xl relative">
        <SectionHeader
          kicker="Ablauf"
          title={<span className="text-white">So arbeiten wir mit Ihnen zusammen.</span>}
        />
        <p className="mt-5 max-w-2xl text-lg text-white/70 leading-relaxed">
          Sechs klare Phasen. Jede Phase mit transparentem Ergebnis und nachvollziehbarer Dokumentation.
        </p>

        <div className="mt-20 relative">
          {/* center vertical line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal/0 via-teal/50 to-teal/0 md:-translate-x-1/2" />
          <div className="space-y-12 md:space-y-20">
            {ABLAUF.map((step, i) => {
              const isRight = i % 2 === 1;
              return (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className={`relative grid md:grid-cols-2 gap-8 items-center`}>
                    {/* node */}
                    <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-10">
                      <div className="relative h-10 w-10 rounded-full bg-navy border-2 border-teal flex items-center justify-center text-teal font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                        <span className="absolute inset-0 rounded-full border border-teal/40 animate-ping" />
                      </div>
                    </div>
                    <div className={`pl-16 md:pl-0 ${isRight ? "md:order-2 md:pl-16" : "md:pr-16 md:text-right"}`}>
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-teal ${isRight ? "" : "md:ml-auto"}`}>
                        <step.icon size={22} />
                      </div>
                      <h3 className="mt-4 text-2xl font-bold tracking-tight">{step.title}</h3>
                      <p className="mt-2 text-white/70 leading-relaxed max-w-md md:inline-block">{step.text}</p>
                    </div>
                    <div className={`hidden md:block ${isRight ? "md:order-1" : ""}`} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ÜBER ERCA ---------- */
export function UeberUns() {
  const features = [
    "Über 30 Jahre praktische Erfahrung",
    "Fokus auf Sanierungen, Modernisierungen und Umbauten",
    "Direkte Kommunikation auf Augenhöhe",
    "Lösungen statt Ausreden",
    "Wissen aus echten Baustellen — nicht aus dem Seminarraum",
  ];
  return (
    <section id="ueber" className="relative py-24 md:py-36">
      <div className="container-px mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-teal/20 to-navy/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-hairline shadow-elegant">
              <img src={deskAsset.url} alt="ERCA Bauleitung – Planung und Kontrolle" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-10 hidden sm:block">
              <div className="rounded-2xl bg-navy text-white px-6 py-5 shadow-elegant flex items-center gap-4">
                <BadgeCheck className="text-teal" size={32} />
                <div>
                  <div className="text-2xl font-bold leading-none"><Counter to={30} />+ Jahre</div>
                  <div className="text-xs text-white/70 uppercase tracking-wider mt-1">Bau- & Sanierungserfahrung</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeader
            kicker="Über ERCA"
            title={<>Erfahrung, die Ihr Projekt <span className="text-gradient">schützt</span>.</>}
          />
          <Reveal delay={0.12}>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-surface-2 border border-hairline px-4 py-2 text-sm font-semibold text-navy-deep">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white text-xs">EC</span>
              Erkan Catak · Inhaber & Bauleiter
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              ERCA Bauleitung steht für etwas, das sich nicht zertifizieren lässt: über drei Jahrzehnte Praxis im Bau-, Technik- und Sanierungsbereich. Wir kennen die Fragen, die auf einer Baustelle wirklich entstehen — weil wir sie selbst gelöst haben.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Wir sprechen die Sprache der Baustelle — und gleichzeitig die Sprache des Auftraggebers. Klare Ansagen statt endloser Berichte. Ein Ansprechpartner vom ersten Telefonat bis zur Schlüsselübergabe.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal text-navy-deep">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </span>
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST BLOCK ---------- */
export function WhyERCA() {
  const items = [
    { icon: Handshake, title: "Persönliche Betreuung", text: "Ein Ansprechpartner über die gesamte Projektlaufzeit." },
    { icon: HardHat, title: "Praxiserfahrung", text: "Wissen aus echten Baustellen, nicht aus Schulungen." },
    { icon: Eye, title: "Transparente Kommunikation", text: "Klare Berichte, faire Aussagen, keine Schönfärberei." },
    { icon: ShieldCheck, title: "Unabhängige Kontrolle", text: "Wir stehen ausschließlich auf Ihrer Seite." },
    { icon: Building2, title: "Schutz vor teuren Fehlern", text: "Frühzeitige Erkennung von Risiken bevor Kosten entstehen." },
  ];
  return (
    <section className="relative py-24 md:py-36 bg-surface overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 -top-40 h-[500px]" style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--teal) 18%, transparent), transparent 70%)" }} />
      <div className="container-px mx-auto max-w-7xl relative">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-hairline px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-deep">
              <span className="h-1 w-1 rounded-full bg-teal" /> Vertrauen
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Warum <span className="text-gradient">ERCA Bauleitung</span>?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-muted-foreground">
              Fünf Gründe, warum Hausverwaltungen, Investoren und Eigentümer auf uns vertrauen.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="group h-full surface-card p-7 transition-transform hover:-translate-y-2">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <it.icon size={22} />
                </div>
                <h3 className="mt-5 font-bold text-lg leading-tight">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQS = [
  { q: "Wann lohnt sich ein externer Bauleiter?", a: "Immer dann, wenn Sie keine eigene Bauleitung im Haus haben, aber dennoch professionelle Kontrolle über Termine, Qualität und Kosten benötigen. Besonders bei Sanierungen, Modernisierungen, Leerwohnungssanierungen und Umbauprojekten ist ein externer Bauleiter wirtschaftlicher als eine Festanstellung." },
  { q: "Was kostet eine Bauleitung?", a: "Die Vergütung erfolgt projektbezogen — entweder als prozentualer Anteil der Bausumme oder als Pauschale, abhängig von Umfang und Komplexität. Sie zahlen nur das, was tatsächlich erbracht wird. Keine Sozialabgaben, keine Fixkosten." },
  { q: "Für welche Projekte eignet sich ERCA?", a: "Sanierungen, Modernisierungen, Umbauten, Leerwohnungssanierungen, Mehrfamilienhäuser und gewerbliche Objekte. Wir begleiten Eigentümer, Hausverwaltungen, Bauträger und Immobilieninvestoren." },
  { q: "Wie läuft die Zusammenarbeit ab?", a: "Nach einem unverbindlichen Erstgespräch besichtigen wir das Objekt, entwickeln ein Maßnahmenkonzept und übernehmen anschließend die vollständige Bauleitung. Sie bleiben informiert, ohne sich um Detailprobleme kümmern zu müssen." },
  { q: "Werden auch Hausverwaltungen betreut?", a: "Ja. Für Hausverwaltungen übernehmen wir die Bauleitung bei Leerwohnungssanierungen und Modernisierungsmaßnahmen — inklusive Eigentümerdokumentation und Berichterstattung." },
  { q: "Werden Handwerker koordiniert?", a: "Vollständig. Wir steuern alle Gewerke aus einer Hand: Maler, Trockenbau, Fliesen, Boden, Elektro, Sanitär, Heizung, Fenster, Innenausbau und Rückbau. Die Handwerker sprechen mit uns, nicht mit Ihnen." },
  { q: "Gibt es regelmäßige Berichte?", a: "Ja. Sie erhalten regelmäßige Fortschrittsberichte, Fotodokumentationen und Baustellenprotokolle. Auf Wunsch in einem festen Rhythmus oder ereignisbezogen." },
  { q: "Wie erfolgt die Qualitätskontrolle?", a: "Durch laufende Baustellenbegehungen, dokumentierte Qualitätsprüfungen, Mängelprotokolle und konsequente Nachkontrollen. Rechnungen werden erst nach Prüfung der erbrachten Leistung freigegeben." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 md:py-36">
      <div className="container-px mx-auto max-w-5xl">
        <div className="text-center">
          <SectionHeader
            kicker="FAQ"
            title={<>Häufig gestellte Fragen.</>}
          />
        </div>
        <div className="mt-14 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className={`rounded-2xl border transition-all ${isOpen ? "border-teal/40 bg-white shadow-soft" : "border-hairline bg-white"}`}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 text-left px-6 py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base md:text-lg font-semibold text-foreground">{f.q}</span>
                    <span className={`shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline transition-transform ${isOpen ? "rotate-45 bg-navy text-white border-navy" : "text-navy"}`}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- KONTAKT ---------- */
export function Kontakt() {
  const [sent, setSent] = useState(false);
  return (
    <section id="kontakt" className="relative py-24 md:py-36 bg-navy-deep text-white overflow-hidden">
      <div aria-hidden className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full" style={{ background: "radial-gradient(circle, var(--teal) 0%, transparent 60%)", opacity: 0.15 }} />
      <div aria-hidden className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full" style={{ background: "radial-gradient(circle, oklch(0.5 0.15 250) 0%, transparent 60%)", opacity: 0.2 }} />

      <div className="container-px mx-auto max-w-7xl relative grid gap-14 lg:grid-cols-2 lg:items-start">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90">
              <span className="h-1 w-1 rounded-full bg-teal" /> Kontakt
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              Sprechen wir über Ihr <span className="text-gradient">Projekt</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-lg text-white/75 leading-relaxed max-w-md">
              Kostenlose und unverbindliche Erstberatung. Direkt mit Erkan Catak. Wir melden uns innerhalb von 24 Stunden zurück.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/15 text-orange">
                <Compass size={20} />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Adresse</div>
                <div className="font-semibold">Juliusstraße 21, 45128 Essen</div>
              </div>
            </div>
            <a href="tel:+4915212971388" className="flex items-center gap-4 group">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/15 text-teal group-hover:bg-teal group-hover:text-navy-deep transition-colors">
                <Phone size={20} />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Telefon</div>
                <div className="font-semibold">+49 152 1297 1388</div>
              </div>
            </a>
            <a href="mailto:info@erca-service.de" className="flex items-center gap-4 group">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/15 text-teal group-hover:bg-teal group-hover:text-navy-deep transition-colors">
                <Mail size={20} />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">E-Mail</div>
                <div className="font-semibold">info@erca-service.de</div>
              </div>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/15 text-teal group-hover:bg-teal group-hover:text-navy-deep transition-colors">
                <MessageCircle size={20} />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">WhatsApp</div>
                <div className="font-semibold">Direkte Nachricht senden</div>
              </div>
            </a>
          </div>
        </div>

        <Reveal delay={0.2}>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="relative rounded-3xl bg-white text-foreground p-7 md:p-10 shadow-elegant"
          >
            <div className="grid gap-5">
              <Field label="Name" name="name" required placeholder="Vor- und Nachname" />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Telefon" name="phone" placeholder="+49 ..." />
                <Field label="E-Mail" name="email" type="email" required placeholder="ihre@email.de" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Projektart</label>
                <select name="project" className="mt-2 w-full rounded-xl border border-hairline bg-surface px-4 py-3.5 text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition">
                  <option>Sanierung</option>
                  <option>Modernisierung</option>
                  <option>Umbauprojekt</option>
                  <option>Leerwohnungssanierung</option>
                  <option>Hausverwaltung – mehrere Objekte</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Nachricht</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Beschreiben Sie kurz Ihr Projekt..."
                  className="mt-2 w-full resize-none rounded-xl border border-hairline bg-surface px-4 py-3.5 text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-white hover:bg-navy-deep transition-colors shadow-soft"
                >
                  {sent ? "Vielen Dank!" : "Anfrage senden"}
                  {!sent && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline bg-white px-7 py-4 text-sm font-semibold text-navy hover:bg-surface transition-colors"
                >
                  <MessageCircle size={16} /> WhatsApp Kontakt
                </a>
              </div>
              {sent && (
                <p className="text-sm text-orange">Ihre Anfrage wurde notiert. Wir melden uns innerhalb von 24 Stunden.</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}{required && <span className="text-teal"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-hairline bg-surface px-4 py-3.5 text-sm focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition"
      />
    </div>
  );
}
