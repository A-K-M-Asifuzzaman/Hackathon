import { trustStrip } from "@/lib/content";
import { trustIcons } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";

function Item({ icon, label }: { icon: keyof typeof trustIcons; label: string }) {
  const Icon = trustIcons[icon];
  return (
    <div className="flex items-center gap-3 whitespace-nowrap px-6 py-4 md:px-0">
      <Icon size={19} className="shrink-0 text-brass" />
      <span className="text-[11.5px] uppercase tracking-[0.16em] text-ivory/72">
        {label}
      </span>
    </div>
  );
}

export function TrustStrip() {
  return (
    <section
      aria-label="What is included"
      className="border-y bg-ink-soft"
      style={{ borderColor: "var(--hairline)" }}
    >
      <Container className="hidden md:block">
        <ul className="grid grid-cols-4">
          {trustStrip.map((item, i) => (
            <li
              key={item.label}
              className={`flex items-center justify-center ${i > 0 ? "border-l" : ""}`}
              style={{ borderColor: "var(--hairline)" }}
            >
              <Item icon={item.icon} label={item.label} />
            </li>
          ))}
        </ul>
      </Container>

      <div className="marquee-viewport overflow-hidden md:hidden">
        <ul className="marquee-track flex w-max">
          {[...trustStrip, ...trustStrip].map((item, i) => (
            <li
              key={`${item.label}-${i}`}
              className="flex items-center"
              aria-hidden={i >= trustStrip.length ? "true" : undefined}
            >
              <Item icon={item.icon} label={item.label} />
              <span
                aria-hidden="true"
                className="h-4 w-px"
                style={{ backgroundColor: "var(--hairline-strong)" }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
