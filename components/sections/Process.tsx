import { process } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="process" className="section-pad bg-ivory">
      <Container>
        <SectionHeading
          index={process.index}
          eyebrow={process.eyebrow}
          heading={process.heading}
        />

        <div className="mt-16 md:mt-24">
          <div
            aria-hidden="true"
            className="hidden h-px w-full md:block"
            style={{ backgroundColor: "var(--hairline-strong)" }}
          />

          <ol className="grid grid-cols-1 md:grid-cols-4 md:gap-x-10">
            {process.steps.map((step, i) => (
              <Reveal as="li" key={step.index} delay={i * 80}>
                <div
                  className="relative flex gap-6 border-l py-7 pl-6 md:block md:border-l-0 md:py-0 md:pl-0 md:pt-10"
                  style={{ borderColor: "var(--hairline-strong)" }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 hidden h-2.5 w-px bg-brass md:block"
                  />
                  <span className="tnum shrink-0 font-[family-name:var(--font-display)] text-[2rem] font-light leading-none text-brass md:text-[2.75rem]">
                    {step.index}
                  </span>
                  <div className="md:mt-7">
                    <h3 className="h3 text-cocoa">{step.title}</h3>
                    <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.7] text-cocoa/70">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
