import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const styles = cva(
  "btn-slide inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-medium tracking-tight",
  {
    variants: {
      variant: {
        glow: "bg-glow text-accent-foreground shadow-glow hover:bg-accent",
        dark: "bg-primary text-primary-foreground hover:bg-abyss",
        ghost: "border border-abyss-foreground/30 text-abyss-foreground backdrop-blur-md bg-abyss-foreground/5 hover:bg-abyss-foreground/15",
        outline: "border border-primary/25 text-primary hover:bg-primary/5",
      },
    },
    defaultVariants: { variant: "glow" },
  },
);

type Props = VariantProps<typeof styles> & {
  label: string;
  href?: string;
  to?: string;
  className?: string;
  icon?: boolean;
};

function Label({ label }: { label: string }) {
  return (
    <span className="btn-mask" aria-hidden="true">
      {label.split("").map((c, i) => (
        <span key={i} className="btn-char" style={{ transitionDelay: `${i * 12}ms` }}>
          {c}
        </span>
      ))}
    </span>
  );
}

export function SlideButton({ label, href, to, variant, className, icon = true }: Props) {
  const inner = (
    <>
      <span className="sr-only">{label}</span>
      <Label label={label} />
      {icon && <ArrowUpRight className="size-4" aria-hidden="true" />}
    </>
  );
  if (to)
    return (
      <Link to={to} className={cn(styles({ variant }), className)}>
        {inner}
      </Link>
    );
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn(styles({ variant }), className)}>
      {inner}
    </a>
  );
}
