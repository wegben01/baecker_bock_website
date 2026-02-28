"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { COMPANY } from "@/lib/constants";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { stiffness: 50, damping: 30 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => spring.set(value), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref}>
      <AnimatedDigits motionValue={spring} />
      {suffix}
    </span>
  );
}

function AnimatedDigits({ motionValue }: { motionValue: MotionValue<number> }) {
  const display = useTransform(motionValue, (v) => Math.round(v).toString());
  return <motion.span>{display}</motion.span>;
}

const stats = [
  { value: COMPANY.founded, label: "Gegründet", suffix: "" },
  { value: COMPANY.generation, label: "Generation", suffix: "." },
  { value: COMPANY.employees, label: "Mitarbeiter", suffix: "+" },
  { value: COMPANY.branches, label: "Standorte", suffix: "+" },
];

export function TraditionSection() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/Bock_Familie.jpg"
                alt="Die Familie Bock – Inhaberfamilie von Bäcker Bock in Nürnberg"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <p className="text-terracotta-500 text-sm font-medium tracking-widest uppercase mb-3">
                Tradition & Handwerk
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-900 mb-6">
                Familienunternehmen in {COMPANY.generation}. Generation
              </h2>
              <p className="text-charcoal-600 text-lg leading-relaxed mb-4">
                Seit {COMPANY.founded} steht der Name Bock für echtes Bäckerhandwerk in
                Nürnberg. Was als kleine Backstube begann, ist heute ein Familienbetrieb
                mit über {COMPANY.employees} Mitarbeitern und {COMPANY.branches} Filialen
                in der Region.
              </p>
              <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
                Unsere Backwaren werden täglich frisch aus den feinsten und regionalen
                Zutaten und mit viel Liebe hergestellt. Viele unserer Produkte sind
                bio-zertifiziert – denn Qualität beginnt bei den Zutaten.
              </p>
            </ScrollReveal>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} delay={index * 0.1}>
                  <div className="text-center">
                    <p className="font-serif text-3xl md:text-4xl font-bold text-terracotta-600">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-sm text-charcoal-500 mt-1">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
