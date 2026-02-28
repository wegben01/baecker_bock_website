import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Globe, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "./Container";
import { COMPANY } from "@/lib/constants";
import { navigation } from "@/data/navigation";

const socialLinks = [
  { icon: Instagram, href: COMPANY.social.instagram, label: "Instagram" },
  { icon: Facebook, href: COMPANY.social.facebook, label: "Facebook" },
  { icon: Globe, href: COMPANY.social.google, label: "Google Business" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-100">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#1A1A1A]">
                <Image
                  src="/images/logo.png"
                  alt="Bäcker Bock"
                  fill
                  className="object-cover scale-[1.15]"
                />
              </div>
              <span className="font-serif text-xl font-bold text-white">
                Bäcker Bock
              </span>
            </div>
            <p className="text-cream-300 text-sm leading-relaxed mb-4">
              Handwerksbäckerei seit {COMPANY.founded}. Familienunternehmen in{" "}
              {COMPANY.generation}. Generation – {COMPANY.slogan}.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-charcoal-800 flex items-center justify-center text-cream-300 hover:bg-terracotta-500 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-900"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream-300 hover:text-terracotta-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-900 rounded"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-cream-300 hover:text-terracotta-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-900 rounded"
                >
                  <Phone className="w-4 h-4 shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-2 text-sm text-cream-300 hover:text-terracotta-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-900 rounded"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-cream-300">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    {COMPANY.address.street}
                    <br />
                    {COMPANY.address.zip} {COMPANY.address.city}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h3 className="font-serif text-lg font-bold text-white mb-4">
              Öffnungszeiten
            </h3>
            <p className="text-xs text-cream-300/70 mb-2">Hauptfiliale Laufamholz</p>
            <div className="space-y-1 text-sm text-cream-300">
              <p>Mo–Fr: 06:00–18:00</p>
              <p>Sa: 06:00–18:00</p>
              <p>So: 07:30–17:00</p>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <Container className="py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-charcoal-400">
            &copy; {new Date().getFullYear()} {COMPANY.fullName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/impressum"
              className="text-xs text-charcoal-400 hover:text-cream-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-900 rounded"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-xs text-charcoal-400 hover:text-cream-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-900 rounded"
            >
              Datenschutz
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
