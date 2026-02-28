import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  variant?: "default" | "image" | "gradient-warm" | "gradient-terracotta";
  backgroundImage?: string;
}

export function PageHero({
  title,
  subtitle,
  variant = "default",
  backgroundImage,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden",
        variant === "gradient-warm" &&
          "bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-terracotta-900",
        variant === "gradient-terracotta" &&
          "bg-gradient-to-r from-charcoal-900 to-charcoal-800",
        (variant === "default" || variant === "image") && "bg-charcoal-900"
      )}
    >
      {/* Background image (for "image" variant) */}
      {variant === "image" && backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal-900/70" />
        </>
      )}

      <Container className="relative z-10 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-cream-300 text-lg max-w-xl mx-auto">{subtitle}</p>
        )}
        <div className="mt-4 h-1 w-16 rounded-full bg-terracotta-400 mx-auto" />
      </Container>
    </section>
  );
}
