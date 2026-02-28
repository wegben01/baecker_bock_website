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
│   ├── ueber-uns/          # Über Uns
│   ├── standorte/          # Standorte
│   ├── karriere/           # Karriere
│   ├── kontakt/            # Kontakt
│   ├── impressum/          # Impressum
│   └── datenschutz/        # Datenschutz
├── components/
│   ├── layout/             # Header, Footer, MobileMenu, Container
│   ├── home/               # Hero, Tradition, Values, Products, Locations, CTA
│   └── ui/                 # Button, Badge, SectionHeading, ScrollReveal, CowSpotPattern
├── data/                   # locations.ts, navigation.ts, jobs.ts
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
- `CowSpotPattern` als dekoratives SVG-Element (aus dem Bäckertüten-Design)

## Wichtige Dateien

- **`src/lib/constants.ts`** - Alle Firmendaten (Name, Adresse, Telefon, etc.)
- **`src/data/locations.ts`** - 8 Filialstandorte mit Koordinaten und Öffnungszeiten
- **`src/data/jobs.ts`** - Stellenanzeigen
- **`next.config.ts`** - Unsplash Remote-Images konfiguriert

## Commands

```bash
npm run dev       # Dev-Server starten (Turbopack)
npm run build     # Produktions-Build
npm run start     # Produktions-Server
npm run lint      # ESLint
```

## Bilder

- Stock-Fotos von Unsplash (Remote-Images via next/image)
- Logo: `public/images/logo.png` (PNG mit transparentem Hintergrund)
- Tüten-Foto: `public/images/tueten.jpg`

## DSGVO

- Fonts: Self-hosted via next/font (kein Google CDN)
- Karten: Leaflet + OpenStreetMap (kein Google Maps)
- Kein Analytics/Tracking
- Impressum & Datenschutz als Pflichtseiten vorhanden
