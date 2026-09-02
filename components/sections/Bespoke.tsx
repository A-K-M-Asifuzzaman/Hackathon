import { bespoke, whatsappMessages } from "@/lib/content";
import { whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FigureImage } from "@/components/ui/FigureImage";

export function Bespoke() {
  return (
    <section
      id="bespoke"
      className="relative isolate flex min-h-[85vh] items-center overflow-hidden bg-ink py-24"
    >
      <div className="absolute inset-0 -z-10 opacity-35">
        <FigureImage
          src={bespoke.image.src}
          alt={bespoke.image.alt}
          ratio="fill"
          sizes="100vw"
          className="h-full w-full"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/55" />

      <Container className="text-center">
        <Reveal>
          <Eyebrow index={bespoke.index} className="block">
            {bespoke.eyebrow}
          </Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2
            className="mx-auto mt-9 max-w-[19ch] text-ivory"
            style={{ fontSize: "clamp(2.25rem, 5.4vw, 4.75rem)" }}
          >
            {bespoke.heading}
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-9 max-w-[58ch] text-ivory/72">{bespoke.body}</p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-12 flex justify-center">
            <Button
              href={whatsappHref(whatsappMessages.bespoke)}
              external
              variant="outline-ivory"
            >
              {bespoke.cta}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
