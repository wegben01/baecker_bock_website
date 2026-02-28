import type { Metadata } from "next";
import Image from "next/image";
import { Leaf } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { productCategories } from "@/data/products";

export const metadata: Metadata = {
  title: "Produkte",
  description:
    "Entdecken Sie unsere Backwaren – täglich frisch, bio-zertifiziert und mit Liebe gemacht.",
};

export default function ProduktePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-charcoal-900">
        <Container className="text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Unsere Produkte
          </h1>
          <p className="text-cream-300 text-lg max-w-xl mx-auto">
            Täglich frisch – aus den besten Zutaten der Region.
          </p>
          <div className="mt-4 h-1 w-16 rounded-full bg-terracotta-400 mx-auto" />
        </Container>
      </section>

      {/* Categories */}
      {productCategories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={catIndex % 2 === 0 ? "py-16 md:py-24 bg-cream-50" : "py-16 md:py-24 bg-cream-100 relative overflow-hidden"}
        >
          <Container>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${catIndex % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              {/* Image */}
              <ScrollReveal direction={catIndex % 2 === 0 ? "left" : "right"} className={catIndex % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </ScrollReveal>

              {/* Content */}
              <ScrollReveal direction={catIndex % 2 === 0 ? "right" : "left"} className={catIndex % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal-900">
                    {category.name}
                  </h2>
                </div>
                <p className="text-charcoal-600 text-lg leading-relaxed mb-8">
                  {category.description}
                </p>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-white rounded-xl p-4 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-serif text-base font-bold text-charcoal-900">
                          {product.name}
                        </h3>
                        {product.isOrganic && (
                          <Badge variant="organic" className="shrink-0">
                            <Leaf className="w-3 h-3" />
                            Bio
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-charcoal-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
