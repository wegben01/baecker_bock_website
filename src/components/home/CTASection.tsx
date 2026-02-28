import Image from "next/image";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
export function CTASection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/brand/Bock_Brand_1.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-terracotta-700/80" />
      </div>
      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: CTA */}
          <ScrollReveal>
            <p className="text-white/70 text-sm font-medium tracking-widest uppercase mb-3">
              Wir freuen uns auf Sie
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Besuchen Sie uns
            </h2>
            <p className="text-lg text-white/85 mb-8">
              Kommen Sie vorbei und überzeugen Sie sich selbst von unseren
              frischen Backwaren. Über 14 Filialen in Nürnberg und Umgebung.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                href="/standorte"
                size="lg"
                className="bg-white text-terracotta-700 hover:bg-cream-100"
              >
                <MapPin className="w-4 h-4" />
                Filiale finden
              </Button>
              <Button
                href="/karriere"
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10"
              >
                Karriere bei Bock
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Right: Opening Hours */}
          <ScrollReveal delay={0.2}>
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Öffnungszeiten
                </h3>
              </div>
              <p className="text-sm text-white/70 mb-4">Hauptfiliale Laufamholz</p>
              <div className="space-y-2">
                <div className="flex justify-between text-white">
                  <span>Montag – Freitag</span>
                  <span className="font-medium">06:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Samstag</span>
                  <span className="font-medium">06:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Sonntag</span>
                  <span className="font-medium">07:30 – 17:00</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
