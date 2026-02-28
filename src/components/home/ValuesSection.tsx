import { Wheat, Leaf, Heart } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
const values = [
  {
    icon: Wheat,
    title: "Echtes Handwerk",
    description:
      "Keine Fertigmischungen, keine Kompromisse – nur ehrliches Bäckerhandwerk nach traditionellen Rezepten.",
  },
  {
    icon: Leaf,
    title: "Bio-zertifiziert",
    description:
      "Regionale Zutaten von Partnern, denen wir vertrauen. Für Geschmack, den man schmeckt.",
  },
  {
    icon: Heart,
    title: "Mit Liebe gemacht",
    description:
      "Jedes Brot, jedes Brötchen wird mit Hingabe gefertigt – seit über 120 Jahren.",
  },
];

export function ValuesSection() {
  return (
    <section className="relative py-20 md:py-28 bg-charcoal-900 overflow-hidden">
      <Container className="relative z-10">
        <ScrollReveal>
          <p className="text-terracotta-400 text-sm font-medium tracking-widest uppercase mb-3 text-center">
            Unsere Versprechen
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Was uns ausmacht
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-charcoal-700">
          {values.map((value, index) => (
            <ScrollReveal key={value.title} delay={index * 0.15}>
              <div className="text-center px-6 md:px-8 py-6 md:py-0">
                <div className="w-14 h-14 rounded-full bg-terracotta-500/15 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-terracotta-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-cream-300 leading-relaxed max-w-xs mx-auto">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
