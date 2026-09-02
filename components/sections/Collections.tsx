import { collections } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FigureImage } from "@/components/ui/FigureImage";
import { IconArrow } from "@/components/ui/Icons";

type Item = (typeof collections.items)[number];

const placement: Record<string, string> = {
  living: "lg:col-span-7 lg:col-start-1",
  bedroom: "lg:col-span-4 lg:col-start-9 lg:mt-28",
  dining: "lg:col-span-4 lg:col-start-1 lg:mt-24",
  office: "lg:col-span-3 lg:col-start-6 lg:mt-44",
  bespoke: "lg:col-span-4 lg:col-start-9 lg:mt-16",
};

function Tile({ item, index }: { item: Item; index: number }) {
  const isBespoke = item.slug === "bespoke";

  return (
    <Reveal
      as="li"
      delay={(index % 2) * 80}
      className={`${placement[item.slug]} ${isBespoke ? "bg-ink p-6 md:p-8" : ""}`}
      style={isBespoke ? { border: "1px solid var(--hairline-strong)" } : undefined}
    >
      <a href="#contact" className="figure-link block" aria-label={`${item.name} — enquire`}>
        <FigureImage
          src={item.image.src}
          alt={item.image.alt}
          ratio={item.ratio}
          sizes="(max-width: 1024px) 92vw, (max-width: 1440px) 45vw, 560px"
          overlay={isBespoke ? "ink" : null}
        />

        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h3
              className={`h3 ${isBespoke ? "text-ivory" : "text-cocoa"}`}
              style={
                item.slug === "living"
                  ? { fontSize: "clamp(1.6rem,2.6vw,2.35rem)" }
                  : undefined
              }
            >
              {item.name}
            </h3>
            <p
              className={`mt-2.5 text-[15px] leading-[1.6] ${
                isBespoke ? "text-ivory/62" : "text-cocoa/70"
              }`}
            >
              {item.description}
            </p>
          </div>
          <IconArrow size={17} className="mt-2 shrink-0 text-brass" />
        </div>

        <div className="figure-rule mt-5" />
        <span className="sr-only">{collections.cta}</span>
      </a>
    </Reveal>
  );
}

export function Collections() {
  return (
    <section id="collections" className="section-pad bg-ivory">
      <Container>
        <div className="grid grid-cols-1 items-end gap-y-8 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-7">
            <SectionHeading
              index={collections.index}
              eyebrow={collections.eyebrow}
              heading={collections.heading}
            />
          </div>
          <Reveal delay={80} className="lg:col-span-4 lg:col-start-9">
            <p className="measure text-cocoa/72">{collections.intro}</p>
          </Reveal>
        </div>

        <ul className="mt-16 grid grid-cols-1 gap-16 md:mt-20 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          {collections.items.map((item, i) => (
            <Tile key={item.slug} item={item} index={i} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
