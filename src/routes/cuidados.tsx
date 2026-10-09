import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus } from "lucide-react";
import { IMG, CARE } from "@/lib/content";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { CtaSection, PageHero } from "@/components/site/CtaSection";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/cuidados")({
  head: () => ({
    meta: [
      { title: "Informações e cuidados com aquários — Aquallekka" },
      { name: "description", content: "Filtragem, parâmetros da água, compatibilidade entre peixes, manutenção e plantas: boas práticas de aquarismo explicadas com clareza." },
      { property: "og:title", content: "Informações e cuidados — Aquallekka" },
      { property: "og:description", content: "Boas práticas para um aquário equilibrado." },
    ],
  }),
  component: Cuidados,
});

function Cuidados() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <PageHero eyebrow="Informações e cuidados" title="Conhecer para cuidar melhor." text="Conteúdo informativo sobre boas práticas no aquarismo. Cada espécie tem necessidades próprias — pesquise sempre antes de decidir." image={IMG.agua} />
      <section className="container-x section-y grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <div className="md:sticky md:top-32 md:self-start">
          <SectionTitle eyebrow="Guia do aquarista" title="Os pilares de um aquário saudável" />
          <Reveal delay={150}>
            <img src={IMG.plantado} alt="Aquário plantado equilibrado" loading="lazy" width={1504} height={1008} className="mt-10 aspect-[4/3] w-full rounded-3xl object-cover shadow-card" />
          </Reveal>
        </div>
        <ul className="divide-y border-y">
          {CARE.map((c, i) => {
            const isOpen = open === i;
            return (
              <li key={c.title}>
                <h3>
                  <button className="flex w-full items-center justify-between gap-6 py-7 text-left" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-xs text-primary/50">0{i + 1}</span>
                      <span className="font-display text-2xl text-primary md:text-3xl">{c.title}</span>
                    </span>
                    <Plus className={cn("size-5 shrink-0 text-primary transition-transform duration-500", isOpen && "rotate-45")} />
                  </button>
                </h3>
                <div className={cn("grid transition-all duration-500", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                  <p className="overflow-hidden pb-0 pl-10 leading-relaxed text-muted-foreground">
                    <span className="block pb-8">{c.text}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <CtaSection />
    </>
  );
}
