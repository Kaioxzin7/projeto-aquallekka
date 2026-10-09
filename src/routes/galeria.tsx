import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { Gallery } from "@/components/site/Gallery";
import { SlideButton } from "@/components/site/SlideButton";
import { CtaSection, PageHero } from "@/components/site/CtaSection";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Aquallekka" },
      { name: "description", content: "Galeria de inspirações do universo do aquarismo: aquários plantados, peixes ornamentais, vidro e sistemas de sump." },
      { property: "og:title", content: "Galeria — Aquallekka" },
      { property: "og:description", content: "A beleza dos ambientes aquáticos em imagens." },
    ],
  }),
  component: Galeria,
});

function Galeria() {
  return (
    <>
      <PageHero eyebrow="Galeria" title="Profundidade, luz e vida." text="Uma seleção de imagens que traduz a atmosfera do aquarismo. Toque em qualquer foto para ampliar." image={IMG.peixes} />
      <section className="container-x section-y">
        <Gallery />
        <Reveal className="mt-16 flex flex-col items-center gap-5 rounded-3xl bg-mist p-10 text-center">
          <p className="max-w-xl text-muted-foreground">
            As imagens acima são ilustrativas. Os trabalhos reais da Aquallekka são publicados no Instagram oficial.
          </p>
          <SlideButton label="Ver trabalhos no Instagram" href={SITE.instagram} variant="dark" />
        </Reveal>
      </section>
      <CtaSection />
    </>
  );
}
