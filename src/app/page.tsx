import { HeroSection } from "@/components/home/HeroSection";
import { TraditionSection } from "@/components/home/TraditionSection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { LocationsPreview } from "@/components/home/LocationsPreview";
import { CTASection } from "@/components/home/CTASection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <TraditionSection />
      <ValuesSection />
      <ProductShowcase />
      <LocationsPreview />
      <CTASection />
    </>
  );
}
