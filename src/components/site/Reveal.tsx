import { useEffect, useRef, type ReactNode, type ElementType } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  text,
  dark,
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <p className={cn("eyebrow", dark ? "text-glow" : "text-primary/70")}>{eyebrow}</p>
      <h2 className={cn("mt-5 text-4xl leading-[1.05] md:text-6xl", dark ? "text-abyss-foreground" : "text-primary")}>
        {title}
      </h2>
      {text && (
        <p className={cn("mt-6 text-base leading-relaxed md:text-lg", dark ? "text-abyss-muted" : "text-muted-foreground")}>
          {text}
        </p>
      )}
    </Reveal>
  );
}

export function Bubbles({ count = 14 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const size = 4 + ((i * 7) % 14);
        return (
          <span
            key={i}
            className="bubble"
            style={{
              left: `${(i * 37) % 100}%`,
              width: size,
              height: size,
              animationDuration: `${10 + ((i * 3) % 12)}s`,
              animationDelay: `${(i * 1.3) % 9}s`,
            }}
          />
        );
      })}
    </div>
  );
}
