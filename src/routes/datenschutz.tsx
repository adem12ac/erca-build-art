import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteLayout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz – ERCA Bauleitung" },
      { name: "description", content: "Datenschutzerklärung gemäß DSGVO für ERCA Bauleitung." },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <PageShell onHome={false}>
      <div className="pt-32 pb-24 container-px mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Datenschutzerklärung</h1>
        <p className="mt-6 text-muted-foreground">Stand: {new Date().toLocaleDateString("de-DE")}</p>

        <section className="mt-10 space-y-3">
          <h2 className="text-xl font-semibold">1. Verantwortlicher</h2>
          <p>ERCA Bauleitung, Musterstraße 1, 12345 Musterstadt. E-Mail: info@erca-bauleitung.de</p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">2. Erhebung und Speicherung personenbezogener Daten</h2>
          <p className="text-muted-foreground">Beim Besuch dieser Website werden automatisch Informationen durch den Browser an unseren Server gesendet (IP-Adresse, Datum und Uhrzeit, Browser, Betriebssystem). Diese Daten werden zur technischen Bereitstellung verarbeitet (Art. 6 Abs. 1 lit. f DSGVO).</p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">3. Kontaktformular</h2>
          <p className="text-muted-foreground">Bei Kontaktaufnahme über das Formular werden die mitgeteilten Daten (Name, E-Mail, Telefonnummer, Nachricht) zur Bearbeitung Ihrer Anfrage gespeichert (Art. 6 Abs. 1 lit. b DSGVO).</p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">4. Ihre Rechte</h2>
          <p className="text-muted-foreground">Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Beschwerderecht bei einer Aufsichtsbehörde.</p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">5. WhatsApp-Kontakt</h2>
          <p className="text-muted-foreground">Wenn Sie uns über WhatsApp kontaktieren, gelten zusätzlich die Datenschutzbestimmungen von WhatsApp / Meta Platforms Ireland Ltd.</p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">6. SSL-Verschlüsselung</h2>
          <p className="text-muted-foreground">Diese Website nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung.</p>
        </section>
      </div>
    </PageShell>
  );
}
