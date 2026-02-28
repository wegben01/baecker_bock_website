import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";

const featuredProduct = {
  name: "Brote & Brötchen",
  slug: "brote",
  description:
    "Vom knusprigen Bauernbrot bis zum feinen Vollkornbrötchen – täglich frisch aus dem Ofen. Unsere Brote werden nach traditionellen Rezepten mit langer Teigführung gebacken.",
  isOrganic: true,
  image:
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80&auto=format&fit=crop",
};

const products = [
  {
    name: "Kuchen & Torten",
    slug: "kuchen",
    description:
      "Handgefertigte Torten für jeden Anlass und saisonale Kuchenspezialitäten.",
    isOrganic: false,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Snacks & Belegte",
    slug: "snacks",
    description:
      "Frisch belegte Brötchen, herzhafte Plunder und warme Snacks für unterwegs.",
    isOrganic: false,
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Feingebäck",
    slug: "feingebaeck",
    description:
      "Traditionelle Nürnberger Lebkuchen, Plätzchen und feine Gebäckspezialitäten.",
    isOrganic: true,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&auto=format&fit=crop",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-20 md:py-28 bg-cream-50">
      <Container>
        <SectionHeading
          title="Unsere Spezialitäten"
          subtitle="Täglich frisch – aus den besten Zutaten der Region."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Product - Large */}
          <ScrollReveal>
            <Link
              href={`/produkte#${featuredProduct.slug}`}
              className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative aspect-[4/3] lg:aspect-[3/2] overflow-hidden">
                  <Image
                    src={featuredProduct.image}
                    alt={featuredProduct.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  {featuredProduct.isOrganic && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="organic">Bio</Badge>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900 mb-2">
                    {featuredProduct.name}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed mb-4">
                    {featuredProduct.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-terracotta-600 group-hover:text-terracotta-700 transition-colors">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Secondary Products - Stacked */}
          <div className="grid grid-cols-1 grid-rows-3 gap-6 h-full">
            {products.map((product, index) => (
              <ScrollReveal key={product.name} delay={index * 0.1} className="h-full">
                <Link
                  href={`/produkte#${product.slug}`}
                  className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-400 focus-visible:ring-offset-2"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-row h-full">
                    <div className="relative w-32 sm:w-40 shrink-0 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="160px"
                      />
                      {product.isOrganic && (
                        <div className="absolute top-2 right-2">
                          <Badge variant="organic">Bio</Badge>
                        </div>
                      )}
                    </div>
                    <div className="p-4 sm:p-5 flex flex-col justify-center min-w-0">
                      <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-charcoal-600 leading-relaxed mb-2 line-clamp-2">
                        {product.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-medium text-terracotta-600 group-hover:text-terracotta-700 transition-colors">
                        Mehr erfahren
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
