"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, CheckCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { COMPANY } from "@/lib/constants";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: `${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}`,
    href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      `${COMPANY.address.street}, ${COMPANY.address.zip} ${COMPANY.address.city}`
    )}`,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@baecker_bock",
    href: COMPANY.social.instagram,
  },
];

export default function KontaktPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <>
      <PageHero
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihre Nachricht."
        variant="image"
        backgroundImage="/images/brand/Bock_Brand_3.png"
      />

      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <ScrollReveal>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-charcoal-900 mb-6">
                  Sprechen Sie uns an
                </h2>
                <p className="text-charcoal-600 text-lg mb-8">
                  Ob Fragen zu unseren Produkten, Bestellungen oder allgemeines
                  Feedback – wir sind gerne für Sie da.
                </p>
              </ScrollReveal>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <ScrollReveal key={item.label} delay={index * 0.08}>
                    <a
                      href={item.href}
                      target={item.label === "Instagram" ? "_blank" : undefined}
                      rel={
                        item.label === "Instagram"
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center shrink-0 group-hover:bg-terracotta-200 transition-colors">
                        <item.icon className="w-5 h-5 text-terracotta-600" />
                      </div>
                      <div>
                        <p className="text-sm text-charcoal-500">{item.label}</p>
                        <p className="font-medium text-charcoal-900">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.4} className="mt-8">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-terracotta-600" />
                    <h3 className="font-serif text-lg font-bold text-charcoal-900">
                      Öffnungszeiten Hauptfiliale
                    </h3>
                  </div>
                  <div className="space-y-1 text-charcoal-600">
                    <p>Montag – Freitag: 06:00 – 18:00 Uhr</p>
                    <p>Samstag: 06:00 – 18:00 Uhr</p>
                    <p>Sonntag: 07:30 – 17:00 Uhr</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form with Animation */}
            <ScrollReveal delay={0.2}>
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-sm text-center flex flex-col items-center justify-center min-h-[460px]"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.1,
                      }}
                      className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </motion.div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-2">
                      Vielen Dank!
                    </h3>
                    <p className="text-charcoal-600 mb-8 max-w-sm">
                      Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns
                      schnellstmöglich bei Ihnen.
                    </p>
                    <Button
                      onClick={() => setFormState("idle")}
                      variant="ghost"
                    >
                      Weitere Nachricht senden
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-sm"
                  >
                    <h3 className="font-serif text-xl font-bold text-charcoal-900 mb-6">
                      Nachricht senden
                    </h3>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-charcoal-700 mb-1">
                            Vorname
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2.5 rounded-xl border border-charcoal-200 bg-cream-50 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent transition"
                            placeholder="Max"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal-700 mb-1">
                            Nachname
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-2.5 rounded-xl border border-charcoal-200 bg-cream-50 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent transition"
                            placeholder="Mustermann"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-1">
                          E-Mail
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-2.5 rounded-xl border border-charcoal-200 bg-cream-50 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent transition"
                          placeholder="max@beispiel.de"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal-700 mb-1">
                          Nachricht
                        </label>
                        <textarea
                          rows={5}
                          className="w-full px-4 py-2.5 rounded-xl border border-charcoal-200 bg-cream-50 text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-terracotta-400 focus:border-transparent transition resize-none"
                          placeholder="Ihre Nachricht..."
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                      >
                        {formState === "submitting" ? (
                          <span className="inline-flex items-center gap-2">
                            <svg
                              className="animate-spin w-4 h-4"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Wird gesendet...
                          </span>
                        ) : (
                          "Nachricht senden"
                        )}
                      </Button>
                      <p className="text-xs text-charcoal-400 text-center">
                        Dies ist eine Demo. Das Formular ist nicht funktional.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
