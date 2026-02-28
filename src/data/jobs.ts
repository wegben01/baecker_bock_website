import type { Job } from "@/types";

export const jobs: Job[] = [
  {
    id: "baecker",
    title: "Bäcker/in (m/w/d)",
    type: "vollzeit",
    location: "Nürnberg",
    description:
      "Sie sind ein/e leidenschaftliche/r Bäcker/in und lieben es, mit hochwertigen Zutaten zu arbeiten? Dann werden Sie Teil unseres Teams und backen Sie mit uns täglich frische Köstlichkeiten nach traditionellen Rezepten.",
    requirements: [
      "Abgeschlossene Ausbildung als Bäcker/in",
      "Erfahrung in der handwerklichen Bäckerei",
      "Teamfähigkeit und Zuverlässigkeit",
      "Leidenschaft fürs Backen",
    ],
  },
  {
    id: "konditor",
    title: "Konditor/in (m/w/d)",
    type: "vollzeit",
    location: "Nürnberg",
    description:
      "Kreieren Sie mit uns süße Meisterwerke! Als Konditor/in bei Bäcker Bock gestalten Sie Torten, Kuchen und feine Gebäcke, die unsere Kunden begeistern.",
    requirements: [
      "Abgeschlossene Ausbildung als Konditor/in",
      "Kreativität und Liebe zum Detail",
      "Erfahrung mit Torten und Feingebäck",
      "Hygienebewusstsein",
    ],
  },
  {
    id: "verkauf",
    title: "Verkäufer/in (m/w/d)",
    type: "teilzeit",
    location: "Verschiedene Filialen",
    description:
      "Sie sind freundlich, aufgeschlossen und lieben den Kontakt mit Menschen? Als Verkäufer/in sind Sie das Gesicht unserer Bäckerei und beraten unsere Kunden mit Herz und Kompetenz.",
    requirements: [
      "Freundliches Auftreten",
      "Erfahrung im Verkauf von Vorteil",
      "Flexibilität bei den Arbeitszeiten",
      "Teamgeist",
    ],
  },
  {
    id: "azubi",
    title: "Auszubildende/r Bäcker/in (m/w/d)",
    type: "ausbildung",
    location: "Nürnberg",
    description:
      "Starten Sie Ihre Karriere im Bäckerhandwerk! Bei uns lernen Sie das traditionelle Handwerk von der Pike auf und arbeiten mit hochwertigen, regionalen Zutaten.",
    requirements: [
      "Hauptschulabschluss oder höher",
      "Interesse am Bäckerhandwerk",
      "Bereitschaft zur Früharbeit",
      "Motivation und Lernbereitschaft",
    ],
  },
];
