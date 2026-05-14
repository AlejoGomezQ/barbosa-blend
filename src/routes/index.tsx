import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { CoffeeProfile } from "@/components/landing/CoffeeProfile";
import { Products } from "@/components/landing/Products";
import { Maquila } from "@/components/landing/Maquila";
import { Footer } from "@/components/landing/Footer";
import { FloatingWhatsApp } from "@/components/landing/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Café Barbosa — El aroma de mis montañas" },
      {
        name: "description",
        content:
          "Café 100% colombiano de Barbosa, Antioquia. Trece familias caficultoras, perfilado en laboratorio propio. Notas a panela, frutos rojos y chocolate.",
      },
      { property: "og:title", content: "Café Barbosa — El aroma de mis montañas" },
      {
        property: "og:description",
        content:
          "Café especial de altura cultivado en Barbosa, Antioquia por trece familias caficultoras. Pide en grano o molido en presentaciones de 200g, 400g y 2.5kg.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Café Barbosa",
          alternateName: "Asprocafesba",
          url: "/",
          email: "asprocafesba@gmail.com",
          telephone: "+57 301 497 5996",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Carrera 21 No. 11-30",
            addressLocality: "Barbosa",
            addressRegion: "Antioquia",
            addressCountry: "CO",
          },
          slogan: "El aroma de mis montañas",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main id="top" className="bg-background text-foreground">
      <Hero />
      <About />
      <CoffeeProfile />
      <Products />
      <Maquila />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
