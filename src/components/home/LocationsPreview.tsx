import { MapPin, ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { locations } from "@/data/locations";

const featured = locations.filter((l) => l.isMain || l.id === "schwaig" || l.id === "waldluststrasse");

export function LocationsPreview() {
  return (
    <section className="py-20 md:py-28 bg-cream-100">
      <Container>
        <SectionHeading
          title="Finden Sie uns"
          subtitle="Über 14 Filialen in Nürnberg und Umgebung."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((location, index) => (
            <ScrollReveal key={location.id} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-terracotta-600" />
                  </div>
                  <div className="min-h-[3rem] flex flex-col justify-center">
                    <h3 className="font-serif text-lg font-bold text-charcoal-900">
                      {location.name}
                    </h3>
                    {location.isMain && (
                      <span className="text-xs text-terracotta-500 font-medium">
                        Hauptfiliale
                      </span>
                    )}
                  </div>
                </div>
                <div className="space-y-2 text-sm text-charcoal-600 flex-1">
                  <p>{location.street}, {location.zip} {location.city}</p>
                  <div className="flex items-center gap-1.5 text-charcoal-500">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>{location.hours.weekdays}</span>
                  </div>
                </div>
                <a
                  href={`tel:${location.phone.replace(/\s/g, "")}`}
                  className="mt-3 block text-terracotta-600 hover:text-terracotta-700 transition-colors rounded text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2"
                >
                  {location.phone}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center">
          <Button href="/standorte" variant="primary" size="lg">
            Alle Standorte anzeigen
            <ArrowRight className="w-4 h-4" />
          </Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
