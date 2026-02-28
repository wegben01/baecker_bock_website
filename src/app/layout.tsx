import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bäcker Bock | Nürnberg | mit Liebe für dich gemacht",
    template: "%s | Bäcker Bock",
  },
  description:
    "Handwerksbäckerei seit 1903. Familienunternehmen in 5. Generation. Täglich frische, bio-zertifizierte Backwaren aus regionalen Zutaten – mit Liebe für dich gemacht.",
  keywords: [
    "Bäcker Bock",
    "Bäckerei Nürnberg",
    "Handwerksbäckerei",
    "Bio Bäckerei",
    "Brot Nürnberg",
    "Familienunternehmen",
  ],
  openGraph: {
    title: "Bäcker Bock | Nürnberg",
    description: "Handwerksbäckerei seit 1903 – mit Liebe für dich gemacht.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-terracotta-500 focus:text-white focus:rounded-full focus:text-sm focus:font-medium"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
