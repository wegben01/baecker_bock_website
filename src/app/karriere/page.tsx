import type { Metadata } from "next";
import {
  Heart,
  Users,
  Award,
  GraduationCap,
  Wheat,
  HandHeart,
  Mail,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PageHero } from "@/components/ui/PageHero";
import { jobs } from "@/data/jobs";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Karriere",
  description:
    "Werden Sie Teil der Bäcker Bock Familie. Offene Stellen in Nürnberg und Umgebung.",
};

const benefits = [
  {
    icon: Heart,
    title: "Familienunternehmen",
    description: "Persönliche Atmosphäre und kurze Entscheidungswege.",
  },
  {
    icon: Wheat,
    title: "Echtes Handwerk",
    description: "Traditionelle Rezepte und hochwertige Zutaten.",
  },
  {
    icon: Users,
    title: "Starkes Team",
    description: "Kollegiales Miteinander und echten Zusammenhalt.",
  },
  {
    icon: Award,
    title: "Faire Bezahlung",
    description: "Leistungsgerechte Vergütung und Sozialleistungen.",
  },
  {
    icon: GraduationCap,
    title: "Weiterbildung",
    description: "Entwicklungsmöglichkeiten und Meisterkurse.",
  },
  {
    icon: HandHeart,
    title: "Bio & Qualität",
    description: "Arbeiten mit besten, regionalen Zutaten.",
  },
];

const typeLabels: Record<string, string> = {
  vollzeit: "Vollzeit",
  teilzeit: "Teilzeit",
  ausbildung: "Ausbildung",
  minijob: "Minijob",
};

export default function KarrierePage() {
  return (
    <>
      <PageHero
        title="Karriere bei Bäcker Bock"
        subtitle="Werden Sie Teil unserer Familie – wir freuen uns auf Sie."
        variant="image"
        backgroundImage="/images/brand/Bock_Brand_5.png"
      />

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-cream-50">
        <Container>
          <SectionHeading
            title="Warum Bäcker Bock?"
            subtitle="Das erwartet Sie bei uns."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-terracotta-100 flex items-center justify-center mb-4">
                    <benefit.icon className="w-5 h-5 text-terracotta-600" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-charcoal-600">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24 bg-cream-100">
        <Container>
          <SectionHeading
            title="Offene Stellen"
            subtitle="Finden Sie die passende Position."
          />

          <div className="space-y-4 max-w-3xl mx-auto">
            {jobs.map((job, index) => (
              <ScrollReveal key={job.id} delay={index * 0.08}>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h3 className="font-serif text-xl font-bold text-charcoal-900">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Badge>{typeLabels[job.type]}</Badge>
                      <span className="text-sm text-charcoal-500">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-charcoal-600 mb-4">{job.description}</p>
                  <div>
                    <p className="text-sm font-medium text-charcoal-700 mb-2">
                      Was wir uns wünschen:
                    </p>
                    <ul className="space-y-1">
                      {job.requirements.map((req) => (
                        <li
                          key={req}
                          className="text-sm text-charcoal-600 flex items-start gap-2"
                        >
                          <span className="text-terracotta-500 mt-1">&#8226;</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Apply CTA */}
      <section className="relative py-16 md:py-24 bg-terracotta-500 overflow-hidden">
        <Container className="relative z-10">
          <ScrollReveal className="text-center max-w-2xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Jetzt bewerben
            </h2>
            <p className="text-lg text-white/85 mb-6">
              Senden Sie Ihre Bewerbung an unsere Personalabteilung. Wir freuen uns,
              Sie kennenzulernen!
            </p>
            <Button
              href={`mailto:${COMPANY.email}`}
              size="lg"
              className="bg-white text-terracotta-700 hover:bg-cream-100"
            >
              <Mail className="w-4 h-4" />
              {COMPANY.email}
            </Button>
            <p className="text-sm text-white/70 mt-4">
              Oder rufen Sie uns an: {COMPANY.phone}
            </p>
          </ScrollReveal>
        </Container>
      </section>
    </>
  );
}
