import { useEffect, useRef, useState } from "react";
import { PROCESS } from "@/lib/content";
import { cn } from "@/lib/utils";

/** Pinned scroll sequence (adapted from the model's "how we work" section). */
export function ProcessScroll() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(-r.top / total, 0), 0.999);
      setActive(Math.floor(p * PROCESS.length));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <section ref={ref} className="relative bg-abyss text-abyss-foreground" style={{ height: `${PROCESS.length * 80 + 20}vh` }}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute inset-0 bg-light-rays opacity-50" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-10 md:grid-cols-2 md:gap-20">
          <div>
            <p className="eyebrow text-glow">Do vidro à vida</p>
            <div className="relative mt-8 min-h-[15rem] md:min-h-[20rem]">
              {PROCESS.map((s, i) => (
                <div
                  key={s.title}
                  className={cn("absolute inset-0 transition-all duration-700", i === active ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-6")}
                  aria-hidden={i !== active}
                >
                  <h2 className="text-5xl text-glow md:text-8xl">{s.title}</h2>
                  <p className="mt-6 max-w-md text-abyss-muted md:text-lg">{s.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2" aria-hidden="true">
              {PROCESS.map((_, i) => (
                <span key={i} className={cn("h-0.5 rounded-full transition-all duration-500", i === active ? "w-12 bg-glow" : "w-6 bg-abyss-foreground/20")} />
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] max-h-[70vh] w-full overflow-hidden rounded-3xl max-md:hidden">
            {PROCESS.map((s, i) => (
              <img
                key={s.title}
                src={s.image}
                alt={s.alt}
                loading="lazy"
                className={cn("absolute inset-0 size-full object-cover transition-all duration-1000", i === active ? "scale-100 opacity-100" : "scale-110 opacity-0")}
              />
            ))}
            <div className="absolute bottom-5 right-5 rounded-full bg-abyss/70 px-4 py-2 font-mono text-sm backdrop-blur">
              <span className="text-glow">{active + 1}</span> / {PROCESS.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
