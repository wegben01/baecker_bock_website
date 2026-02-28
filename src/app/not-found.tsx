import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cream-50">
      <Container className="text-center">
        <p className="font-serif text-8xl md:text-9xl font-bold text-terracotta-200">
          404
        </p>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-charcoal-900 mt-4 mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-charcoal-600 mb-8 max-w-md mx-auto">
          Die gesuchte Seite existiert leider nicht. Vielleicht finden Sie, was Sie
          suchen, auf unserer Startseite.
        </p>
        <Button href="/" size="lg">
          Zur Startseite
        </Button>
      </Container>
    </section>
  );
}
