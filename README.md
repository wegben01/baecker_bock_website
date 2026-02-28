# Bäcker Bock - Moderne Website

Pitch-Projekt für eine neue, moderne Website der Handwerksbäckerei **Bäcker Bock** in Nürnberg. Familienunternehmen in 5. Generation seit 1903.

## Tech Stack

| Technologie | Version |
|------------|---------|
| [Next.js](https://nextjs.org/) | 15 (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | 5.7 |
| [Tailwind CSS](https://tailwindcss.com/) | 4.0 |
| [Framer Motion](https://motion.dev/) | 11 |
| [Lucide React](https://lucide.dev/) | Icons |
| [Leaflet](https://leafletjs.com/) + OpenStreetMap | Karten |

## Seiten

| Route | Seite |
|-------|-------|
| `/` | Startseite mit Hero, Tradition, Werte, Produkte, Standorte-Vorschau |
| `/ueber-uns` | Unternehmensgeschichte & Timeline seit 1903 |
| `/standorte` | Alle 8 Filialen mit Adressen und Öffnungszeiten |
| `/karriere` | Benefits, offene Stellen und Bewerbungs-CTA |
| `/kontakt` | Kontaktinformationen und Formular |
| `/impressum` | Impressum |
| `/datenschutz` | Datenschutzerklärung |

## Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Dev-Server starten
npm run dev

# Produktions-Build
npm run build

# Produktions-Server starten
npm run start
```

Der Dev-Server läuft unter [http://localhost:3000](http://localhost:3000).

## Design

- **Farbpalette:** Terracotta-Akzente (#C4854A), Creme-Hintergründe (#FFFDF9), Charcoal-Text (#1A1A1A)
- **Fonts:** Playfair Display (Überschriften) + Lato (Fließtext), self-hosted via `next/font`
- **Stil:** Warm, einladend, handwerklich - inspiriert vom Bäckertüten-Branding mit Kuh-Flecken-Muster

## DSGVO-Konformität

- Fonts lokal eingebunden (kein Google CDN)
- OpenStreetMap statt Google Maps
- Kein Tracking oder Analytics
- Impressum und Datenschutz vorhanden

## Deployment

Optimiert für [Vercel](https://vercel.com/). Build-Output: `standalone`.

```bash
npm run build
```

## Lizenz

Dieses Projekt ist ein Pitch-/Demonstrationsprojekt.
