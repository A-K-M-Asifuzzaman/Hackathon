import { proof } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { FigureImage } from "@/components/ui/FigureImage";

export function Proof() {
  return (
    <section id="clients" className="section-pad bg-ink">
      <Container>
        <div className="grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <FigureImage
              src={proof.image.src}
              alt={proof.image.alt}
              ratio="4/5"
              sizes="(max-width: 1024px) 92vw, 400px"
            />
            <p className="caption mt-5 text-ivory/50">{proof.image.caption}</p>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <Eyebrow index={proof.index}>{proof.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal as="figure" delay={80}>
              <div
                aria-hidden="true"
                className="mt-9 h-px w-20"
                style={{ backgroundColor: "var(--color-brass)" }}
              />
              <blockquote
                className="mt-9 font-[family-name:var(--font-display)] font-light text-ivory"
                style={{
                  fontSize: "clamp(1.35rem, 2.4vw, 2.15rem)",
                  lineHeight: 1.35,
                  letterSpacing: "-0.015em",
                }}
              >
                <p>“{proof.quote}”</p>
              </blockquote>

              <figcaption className="caption mt-8 text-brass">
                {proof.attribution.name}
                <span className="text-ivory/45"> — {proof.attribution.role}</span>
              </figcaption>
            </Reveal>

            <Reveal delay={160}>
              <div
                className="mt-12 border-t pt-8"
                style={{ borderColor: "var(--hairline)" }}
              >
                <p className="measure text-ivory/72">{proof.closing}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
