import type { ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  {
    id: "brote",
    name: "Brote & Brötchen",
    description:
      "Vom knusprigen Bauernbrot bis zum feinen Vollkornbrötchen – unsere Brote werden täglich frisch aus dem Ofen geholt. Viele Sorten sind bio-zertifiziert und werden ausschließlich mit regionalen Zutaten hergestellt.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80&auto=format&fit=crop",
    products: [
      {
        id: "bauernbrot",
        name: "Bauernbrot",
        category: "brote",
        description: "Kräftiges Mischbrot nach traditionellem Rezept mit langer Teigführung.",
        isOrganic: true,
      },
      {
        id: "vollkornbrot",
        name: "Vollkornbrot",
        category: "brote",
        description: "Saftiges Vollkornbrot mit Sonnenblumenkernen und Leinsaat.",
        isOrganic: true,
      },
      {
        id: "roggenlaib",
        name: "Roggenlaib",
        category: "brote",
        description: "Herzhafter Roggenlaib mit natürlichem Sauerteig.",
        isOrganic: false,
      },
      {
        id: "semmel",
        name: "Kaisersemmel",
        category: "brote",
        description: "Knusprige Kaisersemmel – der Klassiker zum Frühstück.",
        isOrganic: false,
      },
      {
        id: "laugenbrezel",
        name: "Laugenbrezel",
        category: "brote",
        description: "Frisch gebackene Laugenbrezel mit grobem Salz.",
        isOrganic: false,
      },
    ],
  },
  {
    id: "kuchen",
    name: "Kuchen & Torten",
    description:
      "Handgefertigte Torten für jeden Anlass und saisonale Kuchenspezialitäten. Von der klassischen Schwarzwälder Kirschtorte bis zu unseren beliebten Obstkuchen – alles aus eigener Herstellung.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80&auto=format&fit=crop",
    products: [
      {
        id: "schwarzwaelder",
        name: "Schwarzwälder Kirschtorte",
        category: "kuchen",
        description: "Der Klassiker mit echtem Kirschwasser und frischen Kirschen.",
        isOrganic: false,
      },
      {
        id: "kaesekuchen",
        name: "Käsekuchen",
        category: "kuchen",
        description: "Cremiger Käsekuchen nach Familienrezept mit Quark.",
        isOrganic: false,
      },
      {
        id: "obstkuchen",
        name: "Saisonaler Obstkuchen",
        category: "kuchen",
        description: "Frischer Obstkuchen mit saisonalen Früchten aus der Region.",
        isOrganic: true,
      },
      {
        id: "bienenstich",
        name: "Bienenstich",
        category: "kuchen",
        description: "Traditioneller Bienenstich mit Mandelkruste und Vanillecreme.",
        isOrganic: false,
      },
    ],
  },
  {
    id: "snacks",
    name: "Snacks & Belegte",
    description:
      "Für den kleinen Hunger zwischendurch: Frisch belegte Brötchen, herzhafte Plunder und warme Snacks – ideal für unterwegs oder die Mittagspause.",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80&auto=format&fit=crop",
    products: [
      {
        id: "schinkensemmel",
        name: "Schinkensemmel",
        category: "snacks",
        description: "Knusprige Semmel mit Schinken, Salat und Gurke.",
        isOrganic: false,
      },
      {
        id: "kaesesemmel",
        name: "Käsesemmel",
        category: "snacks",
        description: "Frische Semmel mit Käse, Tomate und Ei.",
        isOrganic: false,
      },
      {
        id: "schinkenkaese-croissant",
        name: "Schinken-Käse-Croissant",
        category: "snacks",
        description: "Buttercroissant gefüllt mit Schinken und Emmentaler.",
        isOrganic: false,
      },
      {
        id: "pizza-snack",
        name: "Pizza-Snack",
        category: "snacks",
        description: "Herzhafter Plunder mit Tomatensoße, Käse und Kräutern.",
        isOrganic: false,
      },
    ],
  },
  {
    id: "feingebaeck",
    name: "Feingebäck",
    description:
      "Traditionelle Nürnberger Lebkuchen, Plätzchen und feine Gebäckspezialitäten. Unsere Konditoren fertigen jedes Stück mit Liebe zum Detail und besten Zutaten.",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80&auto=format&fit=crop",
    products: [
      {
        id: "lebkuchen",
        name: "Nürnberger Lebkuchen",
        category: "feingebaeck",
        description: "Original Nürnberger Lebkuchen nach traditionsreichem Rezept.",
        isOrganic: true,
      },
      {
        id: "butterplaetzchen",
        name: "Butterplätzchen",
        category: "feingebaeck",
        description: "Zartes Buttergebäck – nicht nur zur Weihnachtszeit beliebt.",
        isOrganic: false,
      },
      {
        id: "nusskipferl",
        name: "Nusskipferl",
        category: "feingebaeck",
        description: "Zartes Kipferl mit gemahlenen Haselnüssen und Puderzucker.",
        isOrganic: true,
      },
      {
        id: "florentiner",
        name: "Florentiner",
        category: "feingebaeck",
        description: "Knuspriges Mandelgebäck mit Schokoladenüberzug.",
        isOrganic: false,
      },
    ],
  },
];
