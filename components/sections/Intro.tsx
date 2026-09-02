import { intro } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { FigureImage } from "@/components/ui/FigureImage";
import { IconArrow } from "@/components/ui/Icons";

export function Intro() {
  return (
    <section id="studio" className="section-pad bg-ivory">
      <Container>
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow index={intro.index}>{intro.eyebrow}</Eyebrow>
              <h2 className="h2 mt-7 text-cocoa">{intro.statement}</h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-8 lg:pt-4">
            <Reveal delay={80}>
              {intro.body.map((paragraph) => (
                <p key={paragraph} className="measure mb-6 text-cocoa/82 last:mb-0">
                  {paragraph}
                </p>
              ))}
              <a href={intro.link.href} className="brass-link mt-9">
                {intro.link.label}
                <IconArrow size={15} />
              </a>
            </Reveal>
          </div>
        </div>
      </Container>

      <Container as="div" className="mt-20 md:mt-28 lg:mt-32">
        <div id="showroom" className="grid grid-cols-1 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="lg:col-span-9 lg:col-start-4">
            <FigureImage
              src={intro.image.src}
              alt={intro.image.alt}
              ratio="16/9"
              sizes="(max-width: 1024px) 92vw, 940px"
            />
            <p className="caption mt-5 text-cocoa/72">{intro.image.caption}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
