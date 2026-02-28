import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Bäcker Bock Backwaren GmbH.",
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal-900">
        <Container className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Datenschutzerklärung
          </h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-terracotta-400 mx-auto" />
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-cream-50">
        <Container className="max-w-3xl">
          <div className="prose prose-charcoal max-w-none space-y-6 text-charcoal-700">
            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              1. Datenschutz auf einen Blick
            </h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit
              Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              2. Verantwortliche Stelle
            </h2>
            <p>
              {COMPANY.fullName}
              <br />
              {COMPANY.address.street}
              <br />
              {COMPANY.address.zip} {COMPANY.address.city}
              <br />
              <br />
              Telefon: {COMPANY.phone}
              <br />
              E-Mail: {COMPANY.email}
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              3. Datenerfassung auf unserer Website
            </h2>
            <p>
              Diese Website verwendet keine Cookies, kein Tracking und keine
              Analytics-Tools. Es werden keine personenbezogenen Daten automatisch
              erfasst oder an Dritte übermittelt.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              4. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Beim Besuch der Website
              werden automatisch Informationen in sogenannten Server-Log-Dateien
              gespeichert, die Ihr Browser automatisch übermittelt (z.B. IP-Adresse,
              Browsertyp, Zeitpunkt des Zugriffs).
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              5. Schriftarten
            </h2>
            <p>
              Diese Website nutzt selbst gehostete Schriftarten. Es erfolgt keine
              Verbindung zu externen Servern (wie Google Fonts) beim Laden der
              Schriftarten.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              6. Kartendienst
            </h2>
            <p>
              Für die Darstellung von Karten nutzen wir OpenStreetMap, einen
              Open-Source-Kartendienst. Beim Laden der Kartenkacheln werden
              Daten an die OpenStreetMap-Server übermittelt. Weitere Informationen
              finden Sie in der Datenschutzerklärung von OpenStreetMap.
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              7. Ihre Rechte
            </h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie
              sich dafür bitte an die oben genannte verantwortliche Stelle.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
