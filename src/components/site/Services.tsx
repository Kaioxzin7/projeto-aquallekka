import { SERVICES } from "@/lib/content";
import { Reveal } from "./Reveal";

export function ServiceCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {SERVICES.map((s, i) => (
        <Reveal key={s.title} delay={i * 120} className="group overflow-hidden rounded-3xl bg-card shadow-card">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img src={s.image} alt={s.alt} loading="lazy" className="size-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
            <span className="absolute left-5 top-5 rounded-full bg-abyss/70 px-3 py-1 font-mono text-xs text-glow backdrop-blur">{s.n}</span>
          </div>
          <div className="p-7">
            <h3 className="text-3xl text-primary">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
