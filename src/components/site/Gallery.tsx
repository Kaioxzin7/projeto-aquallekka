import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { GALLERY } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Gallery({ limit }: { limit?: number }) {
  const items = limit ? GALLERY.slice(0, limit) : GALLERY;
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((o) => ((o ?? 0) + 1) % items.length);
      if (e.key === "ArrowLeft") setOpen((o) => ((o ?? 0) - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", on);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", on);
      document.body.style.overflow = "";
    };
  }, [open, items.length]);

  return (
    <>
      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[240px] md:grid-cols-3">
        {items.map((g, i) => (
          <Reveal key={g.alt} delay={(i % 3) * 100} className={cn("group relative overflow-hidden rounded-2xl bg-abyss", g.span)}>
            <button onClick={() => setOpen(i)} className="block size-full" aria-label={`Ampliar imagem: ${g.alt}`}>
              <img src={g.src} alt={g.alt} loading="lazy" width={g.w} height={g.h} className="size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110" />
              <span className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-left text-sm text-abyss-foreground opacity-0 transition-all duration-500 group-hover:opacity-100">
                {g.alt}
                <Expand className="size-4 shrink-0" />
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      {open !== null && (
        <div role="dialog" aria-modal="true" aria-label="Visualização da imagem" className="fixed inset-0 z-[60] grid place-items-center bg-abyss/95 p-4 backdrop-blur animate-in fade-in" onClick={() => setOpen(null)}>
          <img src={items[open].src} alt={items[open].alt} className="max-h-[85vh] max-w-full rounded-xl object-contain" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-abyss-muted">{items[open].alt}</p>
          <button className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-abyss-foreground/10 text-abyss-foreground" onClick={() => setOpen(null)} aria-label="Fechar">
            <X className="size-5" />
          </button>
          <button className="absolute left-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-abyss-foreground/10 text-abyss-foreground" onClick={(e) => { e.stopPropagation(); setOpen((open - 1 + items.length) % items.length); }} aria-label="Imagem anterior">
            <ChevronLeft className="size-5" />
          </button>
          <button className="absolute right-4 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-abyss-foreground/10 text-abyss-foreground" onClick={(e) => { e.stopPropagation(); setOpen((open + 1) % items.length); }} aria-label="Próxima imagem">
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </>
  );
}
