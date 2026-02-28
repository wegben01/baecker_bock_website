"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleCloseMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 md:h-24">
            {/* Logo */}
            <Link href="/" className="relative flex items-center gap-3 group rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2">
              <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden bg-[#1A1A1A]">
                <Image
                  src="/images/logo.png"
                  alt="Bäcker Bock"
                  fill
                  className="object-cover scale-[1.15]"
                  priority
                />
              </div>
              <span
                className={cn(
                  "font-serif text-xl md:text-[1.7rem] font-bold transition-colors",
                  isScrolled ? "text-charcoal-900" : "text-white"
                )}
              >
                Bäcker Bock
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-5 py-2.5 text-base font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2",
                      pathname === item.href
                        ? isScrolled
                          ? "text-terracotta-600 bg-terracotta-50"
                          : "text-white bg-white/20"
                        : isScrolled
                          ? "text-charcoal-700 hover:text-terracotta-600 hover:bg-terracotta-50"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={cn(
                "md:hidden p-2 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2",
                isScrolled
                  ? "text-charcoal-900 hover:bg-charcoal-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Menü öffnen"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
      />
    </>
  );
}
