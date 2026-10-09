import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Filter, Gem, Ruler } from "lucide-react";
import { IMG, CARE } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Bubbles, Reveal, SectionTitle } from "@/components/site/Reveal";
import { SlideButton } from "@/components/site/SlideButton";
import { ServiceCards } from "@/components/site/Services";
import { ProcessScroll } from "@/components/site/ProcessScroll";
import { Gallery } from "@/components/site/Gallery";
import { CtaSection } from "@/components/site/CtaSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aquallekka — Muito além de um aquário. Um universo de vida." },
      { name: "description", content: "Fabricação de aquários e sistemas de sump. Conheça a Aquallekka e explore o universo do aquarismo com cuidado técnico e atenção aos detalhes." },
      { property: "og:title", content: "Aquallekka — Aquários e sistemas de sump" },
      { property: "og:description", content: "Projetos aquáticos pensados em cada detalhe. Conheça a Aquallekka." },
    ],
  }),
  component: Home,
});

const BADGES = [
  { label: "Fabricação", cls: "left-[4%] top-[28%] float-down" },
  { label: "Sump", cls: "right-[8%] top-[22%] float-up" },
  { label: "Acabamento", cls: "right-[26%] bottom-[18%] float-down" },
  { label: "Aquarismo", cls: "right-[4%] bottom-[34%] float-up" },
];

const DIFFS = [
  { icon: Gem, title: "Atenção ao acabamento", text: "Cuidado com cada detalhe visível do aquário." },
  { icon: Ruler, title: "Foco na estrutura", text: "A construção como base de um ambiente seguro." },
  { icon: Filter, title: "Sistemas de sump", text: "Soluções voltadas à filtragem e ao funcionamento." },
  { icon: Droplets, title: "Informação responsável", text: "Respeito às necessidades de cada espécie." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-abyss pb-20 pt-36 text-abyss-foreground md:items-center md:pb-0">
        <img src={IMG.hero} alt="Aquário plantado iluminado em ambiente escuro, com rochas, plantas e cardume" width={1920} height={1088} className="absolute inset-0 size-full object-cover object-[70%_center] animate-in fade-in zoom-in-105 duration-[2000ms]" />
        <div className="absolute inset-0 bg-hero-veil" aria-hidden="true" />
        <Bubbles />
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          {BADGES.map((b) => (
            <span key={b.label} className={`absolute ${b.cls} inline-flex items-center gap-2 rounded-full border border-abyss-foreground/15 bg-abyss/40 px-4 py-2 text-sm backdrop-blur-md`}>
              <span className="size-2 rounded-full bg-glow shadow-glow" /> {b.label}
            </span>
          ))}
        </div>
        <div className="container-x relative">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <p className="eyebrow text-glow">Aquallekka · Aquarismo</p>
            <h1 className="mt-6 text-5xl leading-[0.98] sm:text-6xl md:text-8xl">
              Muito além de um aquário. <em className="text-glow">Um universo de vida.</em>
            </h1>
            <p className="mt-7 max-w-xl text-base text-abyss-muted md:text-lg">
              Explore o fascinante mundo do aquarismo e descubra como criar ambientes aquáticos que unem beleza, equilíbrio e cuidado.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <SlideButton label="Conheça nosso trabalho" to="/galeria" />
              <SlideButton label="Fale com a Aquallekka" href={SITE.catalog} variant="ghost" />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="container-x section-y grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <div>
          <SectionTitle eyebrow="Sobre a Aquallekka" title="Projetos aquáticos pensados em cada detalhe." />
          <Reveal delay={150}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Conheça a Aquallekka e explore soluções para o universo do aquarismo, com foco na fabricação de aquários e em sistemas que contribuem para a estrutura e o funcionamento dos ambientes aquáticos.
            </p>
            <Link to="/sobre" className="mt-8 inline-flex items-center gap-2 font-medium text-primary hover:gap-3 transition-all">
              Saiba mais sobre nós <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={200} className="relative">
          <img src={IMG.vidro} alt="Detalhe da quina de um aquário de vidro" loading="lazy" width={1200} height={1504} className="aspect-[4/5] w-full rounded-3xl object-cover shadow-card" />
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-abyss p-5 text-abyss-foreground shadow-glow md:-left-10">
            <p className="eyebrow text-glow">Especialidade</p>
            <p className="mt-2 font-display text-2xl">Aquários & Sump</p>
          </div>
        </Reveal>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-mist section-y">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionTitle eyebrow="Aquarismo e serviços" title="O que fazemos" text="Atividades confirmadas nos canais oficiais da Aquallekka." />
            <Reveal><SlideButton label="Conhecer opções" href={SITE.catalog} variant="dark" /></Reveal>
          </div>
          <div className="mt-14"><ServiceCards /></div>
        </div>
      </section>

      <ProcessScroll />

      {/* GALERIA */}
      <section className="container-x section-y">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionTitle eyebrow="Galeria" title="A beleza dos ambientes aquáticos" text="Imagens ilustrativas que inspiram o universo do aquarismo." />
          <Reveal><SlideButton label="Ver galeria completa" to="/galeria" variant="outline" /></Reveal>
        </div>
        <div className="mt-14"><Gallery limit={4} /></div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="relative overflow-hidden bg-abyss section-y text-abyss-foreground">
        <div className="absolute inset-0 bg-light-rays" aria-hidden="true" />
        <div className="container-x relative">
          <SectionTitle dark eyebrow="Nosso olhar" title="O cuidado que sustenta a beleza" />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-abyss-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {DIFFS.map((d, i) => (
              <Reveal key={d.title} delay={i * 100} className="bg-abyss p-8 transition-colors hover:bg-primary/40">
                <d.icon className="size-7 text-glow" aria-hidden="true" />
                <h3 className="mt-8 text-2xl">{d.title}</h3>
                <p className="mt-3 text-sm text-abyss-muted">{d.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CUIDADOS TEASER */}
      <section className="container-x section-y">
        <SectionTitle eyebrow="Informações e cuidados" title="Conhecimento para um aquário equilibrado" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {CARE.slice(0, 3).map((c, i) => (
            <Reveal key={c.title} delay={i * 100} className="rounded-3xl border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-card">
              <p className="font-mono text-xs text-primary/60">0{i + 1}</p>
              <h3 className="mt-6 text-2xl text-primary">{c.title}</h3>
              <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link to="/cuidados" className="inline-flex items-center gap-2 font-medium text-primary transition-all hover:gap-3">
            Ver todos os cuidados <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      <CtaSection />
    </>
  );
}
