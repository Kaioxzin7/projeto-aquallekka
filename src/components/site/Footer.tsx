import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { Logo } from "./Navbar";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-abyss text-abyss-foreground">
      <div className="absolute inset-0 bg-light-rays opacity-40" aria-hidden="true" />
      <div className="container-x relative grid gap-14 py-20 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-6 text-sm leading-relaxed text-abyss-muted">
            Aquarismo com atenção aos detalhes: fabricação de aquários e sistemas de sump para ambientes aquáticos
            bonitos e bem estruturados.
          </p>
        </div>
        <div>
          <p className="eyebrow text-glow">Navegação</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-abyss-muted transition-colors hover:text-abyss-foreground">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-glow">Canais oficiais</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-abyss-muted hover:text-abyss-foreground">
                <Instagram className="size-4" /> {SITE.instagramHandle}
              </a>
            </li>
            <li>
              <a href={SITE.catalog} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-abyss-muted hover:text-abyss-foreground">
                <MessageCircle className="size-4" /> Catálogo no WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-x relative">
        <p className="select-none font-display text-[22vw] leading-[0.8] text-abyss-foreground/5 md:text-[17vw]" aria-hidden="true">
          Aquallekka
        </p>
      </div>
      <div className="container-x relative flex flex-col justify-between gap-2 border-t border-abyss-foreground/10 py-6 text-xs text-abyss-muted md:flex-row">
        <p>© {new Date().getFullYear()} Aquallekka. Todos os direitos reservados.</p>
        <p>Imagens ilustrativas do universo do aquarismo.</p>
      </div>
    </footer>
  );
}
