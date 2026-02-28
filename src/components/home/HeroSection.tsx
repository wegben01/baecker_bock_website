"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 animate-ken-burns">
        <Image
          src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1920&q=80&auto=format&fit=crop"
          alt="Bäckertheke mit frischen Backwaren"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-charcoal-900/40" />
      </div>
      {/* CowSpotPattern removed – was causing unwanted bubble overlay */}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-terracotta-300 text-sm md:text-base font-medium tracking-widest uppercase mb-4">
            Handwerksbäckerei seit 1903
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
        >
          Bäcker Bock
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="font-serif text-xl md:text-2xl lg:text-3xl text-cream-200 italic mb-4"
        >
          mit Liebe für dich gemacht
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="text-cream-200 text-base md:text-lg mb-10 max-w-xl mx-auto"
        >
          Familienunternehmen in 5. Generation – täglich frische, bio-zertifizierte
          Backwaren aus regionalen Zutaten.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/standorte" size="lg" variant="primary">
            <MapPin className="w-4 h-4" />
            Unsere Standorte
          </Button>
          <Button
            href="/karriere"
            size="lg"
            variant="outline"
            className="border-cream-300 text-cream-100 hover:bg-white/10"
          >
            Karriere bei Bock
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-cream-300/50 animate-bounce-gentle" />
      </motion.div>
    </section>
  );
}
