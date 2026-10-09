import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { SlideButton } from "@/components/site/SlideButton";
import { ServiceCards } from "@/components/site/Services";
import { CtaSection, PageHero } from "@/components/site/CtaSection";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Aquarismo e serviços — Aquallekka" },
      { name: "description", content: "Fabricação de aquários e sistemas de sump. Consulte modelos e opções no catálogo oficial da Aquallekka no WhatsApp." },
      { property: "og:title", content: "Aquários e sistemas de sump — Aquallekka" },
      { property: "og:description", content: "Conheça as soluções da Aquallekka para o aquarismo." },
    ],
  }),
  component: Servicos,
});

function Servicos() {
  return (
    <>
      <PageHero eyebrow="Aquarismo e serviços" title="Aquários e sistemas de sump." text="Soluções voltadas à estrutura e ao funcionamento dos ambientes aquáticos." image={IMG.sump} />
      <section className="container-x section-y">
        <SectionTitle eyebrow="Especialidades" title="Nossas frentes de trabalho" />
        <div className="mt-14"><ServiceCards /></div>
      </section>
      <section className="relative overflow-hidden bg-abyss section-y text-abyss-foreground">
        <div className="absolute inset-0 bg-light-rays" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-14 md:grid-cols-2">
          <div>
            <SectionTitle dark eyebrow="O que é um sump?" title="A filtragem fora do aquário principal." text="O sump é um reservatório, geralmente instalado sob o aquário, que recebe a água por gravidade, passa por etapas de filtragem e retorna por meio de uma bomba. Ele permite acomodar mídias filtrantes e equipamentos sem ocupar o espaço visual do aquário, além de aumentar o volume total de água do sistema." />
            <Reveal delay={150} className="mt-10">
              <SlideButton label="Explorar catálogo" href={SITE.catalog} />
            </Reveal>
          </div>
          <Reveal delay={150}>
            <img src={IMG.sump} alt="Sump de vidro com compartimentos de filtragem" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full rounded-3xl object-cover" />
          </Reveal>
        </div>
      </section>
      <section className="container-x section-y text-center">
        <SectionTitle center eyebrow="Catálogo oficial" title="Modelos, opções e disponibilidade" text="Medidas, materiais, prazos e valores são informados diretamente pela Aquallekka no catálogo e no atendimento pelo WhatsApp." />
        <Reveal className="mt-10 flex justify-center">
          <SlideButton label="Consultar pelo WhatsApp" href={SITE.catalog} variant="dark" />
        </Reveal>
      </section>
      <CtaSection />
    </>
  );
}
