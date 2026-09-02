import { milestones } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Milestones() {
  return (
    <section
      aria-label="Milestones"
      className="section-pad-sm border-y bg-ivory-dim"
      style={{ borderColor: "var(--hairline)" }}
    >
      <Container>
        <Reveal className="flex flex-wrap items-baseline justify-between gap-4">
          <Eyebrow>{milestones.eyebrow}</Eyebrow>
          <p className="caption text-cocoa/72">{milestones.heading}</p>
        </Reveal>

        <ol className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 md:mt-16 md:grid-cols-5 md:gap-x-6">
          {milestones.items.map((item, i) => (
            <Reveal as="li" key={item.year} delay={i * 80}>
              <span
                aria-hidden="true"
                className="block h-3 w-px"
                style={{ backgroundColor: "var(--brass-contextual)" }}
              />
              <div
                className="mt-3 border-t pt-5"
                style={{ borderColor: "var(--hairline-strong)" }}
              >
                <p className="tnum font-[family-name:var(--font-display)] text-[1.5rem] font-light leading-none text-cocoa">
                  {item.year}
                </p>
                <p className="mt-3 max-w-[22ch] text-[13.5px] leading-[1.55] text-cocoa/72">
                  {item.label}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
