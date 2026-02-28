import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PageHero } from "@/components/ui/PageHero";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Über Uns",
  description:
    "Erfahren Sie mehr über Bäcker Bock – Handwerksbäckerei seit 1903, Familienunternehmen in 5. Generation.",
};

const timeline = [
  {
    year: "1903",
    title: "Die Gründung",
    description:
      "Die Geschichte von Bäcker Bock beginnt mit einer kleinen Backstube in Nürnberg. Mit Leidenschaft und handwerklichem Können wird der Grundstein für eine Familientradition gelegt.",
  },
  {
    year: "1930er",
    title: "Zweite Generation",
    description:
      "Die nächste Generation übernimmt und baut die Bäckerei weiter aus. Trotz schwieriger Zeiten bleibt die Qualität der Backwaren kompromisslos.",
  },
  {
    year: "1960er",
    title: "Wachstum & Expansion",
    description:
      "Neue Filialen entstehen in Nürnberg. Das Sortiment wird erweitert, die Tradition des Handwerks bleibt erhalten.",
  },
  {
    year: "1990er",
    title: "Modernisierung",
    description:
      "Moderne Backtechnologie trifft auf traditionelle Rezepte. Bio-Zertifizierung wird eingeführt – ein wichtiger Schritt für Qualität und Nachhaltigkeit.",
  },
  {
    year: "Heute",
    title: "5. Generation",
    description:
      "Unter der Leitung von Monika Rauscher vereint Bäcker Bock Tradition und Innovation. Mit über 100 Mitarbeitern und 14 Filialen sind wir für unsere Kunden da.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        title="Über Uns"
        subtitle={`Seit ${COMPANY.founded} backen wir mit Herz und Handwerk – für Nürnberg und die Region.`}
        variant="image"
        backgroundImage="/images/Bock_Familie.jpg"
      />

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg max-w-md mx-auto lg:mx-0">
                <Image
                  src="/images/Bock_Inhaber_1.png"
                  alt="Die Inhaber von Bäcker Bock mit frisch gebackenem Brot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-terracotta-500 text-sm font-medium tracking-widest uppercase mb-3">
                Unsere Geschichte
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
                Mehr als 120 Jahre Bäckertradition
              </h2>
              <div className="space-y-4 text-charcoal-600 text-lg leading-relaxed">
                <p>
                  Was 1903 als kleine Backstube in Nürnberg begann, ist heute ein
                  Familienbetrieb in 5. Generation. Über 100 Mitarbeiterinnen und
                  Mitarbeiter sorgen täglich dafür, dass in unseren {COMPANY.branches}{" "}
                  Filialen frische, handwerklich hergestellte Backwaren auf Sie warten.
                </p>
                <p>
                  Unter der Leitung von Inhaberin Monika Rauscher verbinden wir
                  traditionelle Rezepte mit modernem Qualitätsbewusstsein. Viele unserer
                  Produkte sind bio-zertifiziert und werden ausschließlich mit regionalen
                  Zutaten hergestellt.
                </p>
                <p>
                  Bei Bäcker Bock gilt: Keine Kompromisse beim Geschmack, keine
                  Fertigmischungen, kein Standardware. Nur echtes Handwerk – mit Liebe
                  für dich gemacht.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Team / Familie Section */}
      <section className="py-16 md:py-24 bg-charcoal-900 text-white overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <ScrollReveal>
              <p className="text-terracotta-400 text-sm font-medium tracking-widest uppercase mb-3">
                Die Menschen hinter Bäcker Bock
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-cream-50 mb-6">
                Familiensache – damals wie heute
              </h2>
              <div className="space-y-4 text-charcoal-300 text-lg leading-relaxed">
                <p>
                  Bäcker Bock ist und bleibt ein echtes Familienunternehmen. Bei uns
                  arbeiten verschiedene Generationen Hand in Hand – vereint durch die
                  gemeinsame Leidenschaft für gutes Brot und ehrliches Handwerk.
                </p>
                <p>
                  Ob in der Backstube, im Verkauf oder in der Verwaltung: Jeder bringt
                  seine Stärken ein, damit Sie jeden Tag aufs Neue frische Qualität
                  genießen können. Dieses Miteinander spüren Sie – in jedem Bissen.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-6">
                <div className="h-px flex-1 bg-charcoal-700" />
                <p className="font-serif text-lg text-terracotta-400 italic whitespace-nowrap">
                  &ldquo;{COMPANY.slogan}&rdquo;
                </p>
                <div className="h-px flex-1 bg-charcoal-700" />
              </div>
            </ScrollReveal>

            {/* Family Image */}
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                <Image
                  src="/images/Bock_Familie.jpg"
                  alt="Die Familie Bock – drei Generationen im Familienbetrieb"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-charcoal-900/60 to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="relative py-16 md:py-24 bg-terracotta-50 overflow-hidden">
        <Container className="relative z-10">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
              Unsere Meilensteine
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-terracotta-500 mx-auto" />
          </ScrollReveal>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <ScrollReveal key={item.year} delay={index * 0.1}>
                <div className="flex gap-6 mb-10 last:mb-0">
                  {/* Year */}
                  <div className="shrink-0 w-20 text-right">
                    <span className="font-serif text-xl font-bold text-terracotta-600">
                      {item.year}
                    </span>
                  </div>

                  {/* Line */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-terracotta-500 shrink-0" />
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-1 bg-terracotta-200 mt-1" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-900 mb-6">
              Unser Versprechen
            </h2>
            <p className="text-xl text-charcoal-600 leading-relaxed mb-4">
              Wir versprechen Ihnen: Jedes Brot, jedes Brötchen, jeder Kuchen wird mit der
              gleichen Sorgfalt gebacken wie am ersten Tag.
            </p>
            <p className="font-serif text-2xl text-terracotta-600 italic">
              &ldquo;{COMPANY.slogan}&rdquo;
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
