import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={cn(centered && "text-center", "mb-12 md:mb-16", className)}>
      <h2
        className={cn(
          "font-serif text-3xl md:text-4xl lg:text-5xl font-bold",
          light ? "text-white" : "text-charcoal-900"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg md:text-xl max-w-2xl",
            centered && "mx-auto",
            light ? "text-cream-200" : "text-charcoal-500"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-1 w-16 rounded-full",
          centered && "mx-auto",
          light ? "bg-terracotta-400" : "bg-terracotta-500"
        )}
      />
    </ScrollReveal>
  );
}
