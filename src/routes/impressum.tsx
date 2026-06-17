import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteLayout";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – ERCA Bauleitung" },
      { name: "description", content: "Impressum und Anbieterkennzeichnung von ERCA Bauleitung, Erkan Catak, Essen." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <PageShell onHome={false}>
      <div className="pt-32 pb-24 container-px mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Impressum</h1>
        <p className="mt-6 text-muted-foreground">Angaben gemäß § 5 TMG</p>

        <section className="mt-10 space-y-2">
          <h2 className="text-xl font-semibold">Anbieter</h2>
          <p>ERCA Bauleitung<br/>Inhaber: Erkan Catak<br/>Juliusstraße 21<br/>45128 Essen<br/>Deutschland</p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p>Telefon: +49 152 1297 1388<br/>E-Mail: info@erca-service.de</p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>Erkan Catak, Anschrift wie oben.</p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-semibold">Haftung für Inhalte</h2>
          <p className="text-muted-foreground">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-semibold">Haftung für Links</h2>
          <p className="text-muted-foreground">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
        </section>

        <section className="mt-8 space-y-2">
          <h2 className="text-xl font-semibold">Urheberrecht</h2>
          <p className="text-muted-foreground">Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.</p>
        </section>
      </div>
    </PageShell>
  );
}
