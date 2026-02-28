import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Bäcker Bock Backwaren GmbH.",
};

export default function ImpressumPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal-900">
        <Container className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Impressum
          </h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-terracotta-400 mx-auto" />
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-cream-50">
        <Container className="max-w-3xl">
          <div className="prose prose-charcoal max-w-none space-y-6 text-charcoal-700">
            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              {COMPANY.fullName}
              <br />
              {COMPANY.address.street}
              <br />
              {COMPANY.address.zip} {COMPANY.address.city}
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              Vertreten durch
            </h2>
            <p>Geschäftsführerin: {COMPANY.owner}</p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              Kontakt
            </h2>
            <p>
              Telefon: {COMPANY.phone}
              <br />
              E-Mail: {COMPANY.email}
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              Registereintrag
            </h2>
            <p>
              Eintragung im Handelsregister.
              <br />
              Registergericht: {COMPANY.registerCourt}
              <br />
              Registernummer: {COMPANY.registerId}
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
              <br />
              {COMPANY.taxId}
            </p>

            <h2 className="font-serif text-2xl font-bold text-charcoal-900">
              Haftungsausschluss
            </h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
              keine Gewähr übernehmen.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
