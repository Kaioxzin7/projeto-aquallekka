import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { SlideButton } from "./SlideButton";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
        <path d="M16 3c5 6 9 10.5 9 16a9 9 0 0 1-18 0c0-5.5 4-10 9-16Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 20c2.5 2.5 7.5 2.5 10 0" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="text-glow" />
      </svg>
      <span className="font-display text-2xl tracking-tight">Aquallekka</span>
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-abyss-foreground transition-all duration-500",
        scrolled || open ? "bg-abyss/85 py-3 backdrop-blur-xl shadow-card" : "py-6",
      )}
    >
      <div className="container-x flex items-center justify-between gap-6">
        <Link to="/" aria-label="Aquallekka, início">
          <Logo />
        </Link>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV.slice(1).map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="eyebrow text-abyss-foreground/75 transition-colors hover:text-glow"
                  activeProps={{ className: "!text-glow" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <SlideButton label="Explorar catálogo" href={SITE.catalog} className="hidden sm:inline-flex py-2.5" />
          <button
            className="grid size-11 place-items-center rounded-full border border-abyss-foreground/25 lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={cn(
          "grid transition-all duration-500 lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ul className="container-x flex flex-col gap-1 pb-8 pt-6">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="block py-2 font-display text-3xl" activeProps={{ className: "text-glow" }}>
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <SlideButton label="Explorar catálogo" href={SITE.catalog} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
