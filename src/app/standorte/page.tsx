import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/ui/PageHero";
import { locations } from "@/data/locations";
import LocationMapWrapper from "@/components/ui/LocationMapWrapper";

export const metadata: Metadata = {
  title: "Standorte",
  description:
    "Finden Sie Ihre nächste Bäcker Bock Filiale. Über 14 Standorte in Nürnberg und Umgebung.",
};

const mainLocation = locations.find((l) => l.isMain);
const otherLocations = locations.filter((l) => !l.isMain);

export default function StandortePage() {
  return (
    <>
      <PageHero
        title="Unsere Standorte"
        subtitle="Über 14 Filialen in Nürnberg und Umgebung – immer in Ihrer Nähe."
        variant="image"
        backgroundImage="/images/brand/Bock_Brand_2.png"
      />

      {/* Map Section */}
      <section className="py-8 md:py-12 bg-cream-50">
        <Container>
          <LocationMapWrapper locations={locations} />
        </Container>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          {/* Hauptfiliale - Featured Card */}
          {mainLocation && (
            <ScrollReveal className="mb-10">
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-md border-2 border-terracotta-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className="relative h-56 md:h-auto min-h-[280px]">
                    <Image
                      src="/images/brand/Bock_Brand_4.png"
                      alt="Bäcker Bock Hauptfiliale"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  {/* Content side */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-terracotta-100 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-terracotta-600" />
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl font-bold text-charcoal-900">
                          {mainLocation.name}
                        </h2>
                        <Badge>Hauptfiliale</Badge>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2 text-charcoal-600">
                        <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-charcoal-400" />
                        <span>
                          {mainLocation.street}, {mainLocation.zip}{" "}
                          {mainLocation.city}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 shrink-0 text-charcoal-400" />
                        <a
                          href={`tel:${mainLocation.phone.replace(/\s/g, "")}`}
                          className="text-terracotta-600 hover:text-terracotta-700 transition-colors font-medium"
                        >
                          {mainLocation.phone}
                        </a>
                      </div>
                      <div className="flex items-start gap-2 text-charcoal-600">
                        <Clock className="w-4 h-4 shrink-0 mt-0.5 text-charcoal-400" />
                        <div>
                          <p>Mo–Fr: {mainLocation.hours.weekdays}</p>
                          <p>Sa: {mainLocation.hours.saturday}</p>
                          <p>So: {mainLocation.hours.sunday}</p>
                        </div>
                      </div>
                    </div>

                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                        `${mainLocation.street}, ${mainLocation.zip} ${mainLocation.city}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-terracotta-500 text-white font-medium hover:bg-terracotta-600 transition-colors text-sm"
                    >
                      <Navigation className="w-4 h-4" />
                      Route planen
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}

          {/* Other Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherLocations.map((location, index) => (
              <ScrollReveal key={location.id} delay={index * 0.05}>
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-terracotta-600" />
                    </div>
                    <div>
                      <h2 className="font-serif text-lg font-bold text-charcoal-900">
                        {location.name}
                      </h2>
                      <p className="text-sm text-charcoal-500">
                        {location.district}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start gap-2 text-sm text-charcoal-600">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-charcoal-400" />
                      <span>
                        {location.street}, {location.zip} {location.city}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 shrink-0 text-charcoal-400" />
                      <a
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="text-terracotta-600 hover:text-terracotta-700 transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-2 text-sm text-charcoal-600">
                      <Clock className="w-4 h-4 shrink-0 mt-0.5 text-charcoal-400" />
                      <div>
                        <p>Mo–Fr: {location.hours.weekdays}</p>
                        <p>Sa: {location.hours.saturday}</p>
                        <p>So: {location.hours.sunday}</p>
                      </div>
                    </div>
                  </div>

                  {/* Route planen */}
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      `${location.street}, ${location.zip} ${location.city}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-terracotta-600 hover:text-terracotta-700 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Route planen
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
