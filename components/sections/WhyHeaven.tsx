import { whyHeaven } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function WhyHeaven() {
  return (
    <section id="why" className="section-pad bg-ink">
      <Container>
        <SectionHeading
          index={whyHeaven.index}
          eyebrow={whyHeaven.eyebrow}
          heading={whyHeaven.heading}
          tone="ivory"
        />

        <ul className="mt-16 border-t md:mt-20" style={{ borderColor: "var(--hairline)" }}>
          {whyHeaven.points.map((point, i) => (
            <Reveal as="li" key={point.index} delay={i * 80}>
              <div
                className="group grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-3 border-b py-8 transition-colors duration-500 ease-out hover:bg-ink-soft md:grid-cols-[72px_minmax(0,7fr)_minmax(0,6fr)] md:gap-x-10 md:py-10"
                style={{ borderColor: "var(--hairline)" }}
              >
                <span className="tnum text-[12px] tracking-[0.18em] text-brass transition-colors duration-500 group-hover:text-brass-lift md:pt-2">
                  {point.index}
                </span>
                <h3 className="h3 text-ivory">{point.title}</h3>
                <p className="col-start-2 text-[15px] leading-[1.7] text-ivory/62 md:col-start-3 md:pt-1.5">
                  {point.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
