import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/SiteLayout";
import { Hero, Leistungen, Vorteile, Ablauf, UeberUns, WhyERCA, FAQ, Kontakt } from "@/components/landing/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ERCA Bauleitung – Professionelle Bauleitung für Sanierungen & Umbauten" },
      { name: "description", content: "Externe Bauleitung für Sanierungen, Modernisierungen und Umbauprojekte. Über 30 Jahre Erfahrung. Ein Ansprechpartner für Termine, Qualität und Kosten." },
      { property: "og:title", content: "ERCA Bauleitung – Erfahrung, die Ihr Projekt schützt" },
      { property: "og:description", content: "Unabhängige Bauleitung für Hausverwaltungen, Investoren, Eigentümer und Bauträger." },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "ERCA Bauleitung",
        description: "Externe Bauleitung für Sanierungen, Modernisierungen und Umbauprojekte.",
        areaServed: "Deutschland",
        serviceType: "Bauleitung",
        url: "/",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell onHome>
      <Hero />
      <Leistungen />
      <Vorteile />
      <Ablauf />
      <UeberUns />
      <WhyERCA />
      <FAQ />
      <Kontakt />
    </PageShell>
  );
}
