# Bäcker Bock Website

## Projektübersicht

Moderne Website für die Handwerksbäckerei Bäcker Bock in Nürnberg. Pitch-Projekt zur Präsentation eines Website-Redesigns (aktuell auf Wix). Deployment auf Vercel.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS v4 (mit `@theme` Direktive in `globals.css`)
- **Fonts:** Playfair Display (Serif) + Lato (Sans) via `next/font` (self-hosted, DSGVO-konform)
- **Animationen:** Framer Motion
- **Icons:** Lucide React
- **Karten:** Leaflet + OpenStreetMap (kein API-Key nötig)

## Projektstruktur

```
src/
├── app/                    # Seiten (App Router)
│   ├── layout.tsx          # Root Layout (Fonts, Header, Footer)
│   ├── page.tsx            # Startseite
│   ├── globals.css         # Design Tokens & Tailwind Config
│   ├── ueber-uns/          # Über Uns (Geschichte, Team, Timeline)
│   ├── produkte/           # Produkte (4 Kategorien)
│   ├── standorte/          # Standorte (Karte + 14 Filialen)
│   ├── karriere/           # Karriere (Benefits, Stellen)
│   ├── kontakt/            # Kontakt (Formular)
│   ├── impressum/          # Impressum
│   └── datenschutz/        # Datenschutz
├── components/
│   ├── layout/             # Header, Footer, MobileMenu, Container
│   ├── home/               # Hero, Tradition, Values, ProductShowcase, LocationsPreview, CTA
│   └── ui/                 # Button, Badge, SectionHeading, ScrollReveal, PageHero, LocationMap
├── data/                   # locations.ts, navigation.ts, jobs.ts, products.ts
├── lib/                    # utils.ts (cn()), constants.ts
└── types/                  # TypeScript Interfaces
```

## Design System

### Farben (definiert in `globals.css` via `@theme`)

| Token | Beispiel | Verwendung |
|-------|----------|------------|
| `terracotta-*` | `bg-terracotta-500` (#C4854A) | Primärfarbe, CTAs, Akzente |
| `cream-*` | `bg-cream-50` (#FFFDF9) | Seitenhintergründe |
| `charcoal-*` | `text-charcoal-900` (#1A1A1A) | Text, dunkle Bereiche |

### Typografie

- **Überschriften:** `font-serif` (Playfair Display)
- **Fließtext:** `font-sans` (Lato) - Standard

### Komponenten-Konventionen

- `cn()` aus `@/lib/utils` für bedingte Klassen
- `ScrollReveal` für Scroll-Animationen
- `Container` für konsistente max-width
- `SectionHeading` für einheitliche Sektions-Titel
- `PageHero` für konsistente Page-Header (variants: `image`, `gradient-warm`, `gradient-terracotta`)

## Wichtige Dateien

- **`src/lib/constants.ts`** - Alle Firmendaten (Name, Adresse, Telefon, etc.)
- **`src/data/locations.ts`** - 14 Filialstandorte mit Koordinaten und Öffnungszeiten
- **`src/data/jobs.ts`** - Stellenanzeigen
- **`src/data/products.ts`** - Produktkategorien und Einzelprodukte
- **`next.config.ts`** - Unsplash Remote-Images, devIndicators deaktiviert

## Commands

```bash
npm run dev       # Dev-Server starten (Turbopack)
npm run build     # Produktions-Build
npm run start     # Produktions-Server
npm run lint      # ESLint
```

## Bilder

### Lokale Bilder (`public/images/`)
- `Bock_Familie.jpg` - Familienfoto (Startseite Tradition, Über Uns Team-Sektion)
- `Bock_Inhaber_1.png` - Inhaber mit Brot (Über Uns Story)
- `logo.png` - Logo (Header, transparent)
- `tueten.jpg` - Bäckertüte

### Brand-Fotos (`public/images/brand/`)
| Bild | Inhalt | Verwendung |
|------|--------|------------|
| `Bock_Brand_1.png` | Kundin vor Filiale mit Tüte | CTA-Section Startseite (Hintergrund) |
| `Bock_Brand_2.png` | Mutter & Kind an Theke | Standorte PageHero |
| `Bock_Brand_3.png` | Kunde mit Kaffee & Zeitung | Kontakt PageHero |
| `Bock_Brand_4.png` | Filiale Außenansicht | Standorte Hauptfiliale-Karte |
| `Bock_Brand_5.png` | Mitarbeiterin mit Gebäck | Karriere PageHero |

### Stock-Fotos (Unsplash Remote)
- Hero-Section: Bäckertheke (`photo-1517433670267`)
- Produkt-Showcase: 4 Kategorie-Bilder (Brote, Kuchen, Snacks, Feingebäck)

## DSGVO

- Fonts: Self-hosted via next/font (kein Google CDN)
- Karten: Leaflet + OpenStreetMap (kein Google Maps)
- Kein Analytics/Tracking
- Impressum & Datenschutz als Pflichtseiten vorhanden
