import agua from "@/assets/agua.jpg";
import { SITE } from "@/lib/site";
import { Bubbles, Reveal } from "./Reveal";
import { SlideButton } from "./SlideButton";

export function CtaSection() {
  return (
    <section className="container-x section-y">
      <div className="relative overflow-hidden rounded-3xl bg-abyss px-6 py-20 text-center text-abyss-foreground md:px-16 md:py-28">
        <img src={agua} alt="" loading="lazy" width={1504} height={1008} className="absolute inset-0 size-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-abyss/50" aria-hidden="true" />
        <Bubbles count={10} />
        <Reveal className="relative mx-auto max-w-3xl">
          <p className="eyebrow text-glow">Vamos conversar</p>
          <h2 className="mt-5 text-4xl leading-[1.05] md:text-7xl">Seu próximo projeto aquático começa aqui.</h2>
          <p className="mx-auto mt-6 max-w-xl text-abyss-muted md:text-lg">
            Conheça o trabalho da Aquallekka e entre em contato para saber mais sobre o universo do aquarismo.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <SlideButton label="Consultar pelo WhatsApp" href={SITE.catalog} />
            <SlideButton label="Acompanhar no Instagram" href={SITE.instagram} variant="ghost" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return (
    <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-abyss pb-16 pt-40 text-abyss-foreground md:pb-24">
      <img src={image} alt="" width={1500} height={1000} className="absolute inset-0 size-full scale-105 object-cover opacity-60" />
      <div className="absolute inset-0 bg-hero-veil" aria-hidden="true" />
      <Bubbles count={8} />
      <div className="container-x relative">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-glow">{eyebrow}</p>
          <h1 className="mt-5 text-5xl leading-[1] md:text-8xl">{title}</h1>
          <p className="mt-6 max-w-xl text-abyss-muted md:text-lg">{text}</p>
        </Reveal>
      </div>
    </section>
  );
}
