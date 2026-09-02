import type { ReactNode } from "react";

type Variant = "solid" | "outline-ink" | "outline-ivory";

const base =
  "inline-flex items-center justify-center gap-3 min-h-[48px] px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] border transition-colors duration-300 ease-out";

const variants: Record<Variant, string> = {
  solid:
    "bg-brass border-brass text-ink hover:bg-brass-lift hover:border-brass-lift",
  "outline-ivory":
    "border-brass text-ivory bg-transparent hover:bg-brass hover:text-ink hover:border-brass",
  "outline-ink":
    "border-brass text-cocoa bg-transparent hover:bg-brass hover:text-ivory hover:border-brass",
};

export function Button({
  href,
  variant = "outline-ivory",
  className = "",
  external,
  type,
  children,
}: {
  href?: string;
  variant?: Variant;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  children: ReactNode;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
