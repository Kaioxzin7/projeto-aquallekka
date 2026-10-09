import { createFileRoute } from "@tanstack/react-router";
import { IMG } from "@/lib/content";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { CtaSection, PageHero } from "@/components/site/CtaSection";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre nós — Aquallekka" },
      { name: "description", content: "Conheça a Aquallekka, marca do universo do aquarismo com foco na fabricação de aquários e sistemas de sump." },
      { property: "og:title", content: "Sobre a Aquallekka" },
      { property: "og:description", content: "Dedicação, cuidado técnico e atenção aos detalhes no aquarismo." },
    ],
  }),
  component: Sobre,
});

const VALUES = [
  { t: "Cuidado técnico", d: "Cada aquário é a estrutura que sustenta um ecossistema vivo — por isso a construção merece atenção." },
  { t: "Atenção aos detalhes", d: "Vidro, colagens e acabamento fazem diferença na beleza e na percepção de qualidade." },
  { t: "Respeito à vida aquática", d: "Valorizamos informações responsáveis e o cuidado adequado com os animais." },
];

function Sobre() {
  return (
    <>
      <PageHero eyebrow="Sobre nós" title="Paixão por ambientes aquáticos." text="A Aquallekka atua no universo do aquarismo com foco na fabricação de aquários e em sistemas de sump." image={IMG.plantado} />
      <section className="container-x section-y grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <img src={IMG.fabricacao} alt="Montagem de um aquário de vidro em oficina" loading="lazy" width={1504} height={1008} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-card" />
        </Reveal>
        <div>
          <SectionTitle eyebrow="Nossa proposta" title="Estrutura, funcionamento e beleza." />
          <Reveal delay={150} className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>Um bom aquário começa muito antes da água: começa no vidro, na colagem e no planejamento do sistema que vai mantê-lo funcionando.</p>
            <p>É nesse ponto que a Aquallekka concentra seu trabalho — aquários fabricados com atenção e sistemas de sump que contribuem para a filtragem e a organização dos equipamentos.</p>
            <p>Acompanhe nossos trabalhos e novidades no Instagram oficial e consulte as opções disponíveis no catálogo do WhatsApp.</p>
          </Reveal>
        </div>
      </section>
      <section className="bg-mist section-y">
        <div className="container-x">
          <SectionTitle eyebrow="Valores" title="O que nos guia" center />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 120} className="rounded-3xl bg-card p-9 shadow-card">
                <p className="font-display text-6xl text-accent">0{i + 1}</p>
                <h3 className="mt-6 text-3xl text-primary">{v.t}</h3>
                <p className="mt-3 text-muted-foreground">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
