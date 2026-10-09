import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MessageCircle, ShoppingBag } from "lucide-react";
import { IMG } from "@/lib/content";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/CtaSection";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Aquallekka" },
      { name: "description", content: "Fale com a Aquallekka pelo WhatsApp, acesse o catálogo oficial ou acompanhe os trabalhos no Instagram." },
      { property: "og:title", content: "Contato — Aquallekka" },
      { property: "og:description", content: "Canais oficiais de atendimento da Aquallekka." },
    ],
  }),
  component: Contato,
});

const CHANNELS = [
  { icon: MessageCircle, title: "WhatsApp", text: "Atendimento comercial direto com a Aquallekka.", cta: "Falar com a Aquallekka", href: SITE.whatsapp },
  { icon: ShoppingBag, title: "Catálogo", text: "Modelos e opções disponíveis no catálogo do WhatsApp.", cta: "Explorar catálogo", href: SITE.catalog },
  { icon: Instagram, title: "Instagram", text: `Trabalhos, novidades e bastidores em ${SITE.instagramHandle}.`, cta: "Acompanhar no Instagram", href: SITE.instagram },
];

function Contato() {
  return (
    <>
      <PageHero eyebrow="Contato" title="Vamos conversar sobre aquarismo." text="Escolha o canal oficial que preferir. O atendimento é feito diretamente pela Aquallekka." image={IMG.ambiente} />
      <section className="container-x section-y">
        <div className="grid gap-6 md:grid-cols-3">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-3xl border bg-card p-9 transition-all duration-500 hover:-translate-y-1 hover:bg-abyss hover:text-abyss-foreground hover:shadow-glow">
                <c.icon className="size-8 text-primary transition-colors group-hover:text-glow" aria-hidden="true" />
                <h2 className="mt-10 text-4xl">{c.title}</h2>
                <p className="mt-3 flex-1 text-muted-foreground transition-colors group-hover:text-abyss-muted">{c.text}</p>
                <span className="eyebrow mt-8 text-primary transition-colors group-hover:text-glow">{c.cta} →</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
