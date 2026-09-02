import { hero, whatsappMessages } from "@/lib/content";
import { whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FigureImage } from "@/components/ui/FigureImage";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section id="top" className="on-dark relative isolate min-h-[100svh] overflow-hidden bg-ink">
      <div className="hero-media absolute inset-0 -z-10">
        <FigureImage
          src={hero.image.src}
          alt={hero.image.alt}
          ratio="fill"
          priority
          sizes="100vw"
          className="h-full w-full"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(16,31,29,0.88) 0%, rgba(16,31,29,0.52) 26%, rgba(16,31,29,0.68) 58%, rgba(16,31,29,0.95) 100%)",
        }}
      />

      <Container className="flex min-h-[100svh] flex-col justify-end pb-12 pt-32 md:pb-16 lg:pb-20">
        <div className="max-w-[880px]">
          <Eyebrow>{hero.eyebrow}</Eyebrow>

          <h1 className="h1 mt-7 text-ivory">{hero.heading}</h1>

          <p className="measure mt-8 text-[16px] leading-[1.7] text-ivory/72 md:text-[17px] md:leading-[1.65]">
            {hero.sub}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5">
            <Button href="#contact" variant="outline-ivory">
              {hero.primaryCta}
            </Button>
            <a
              href={whatsappHref(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="brass-link"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:mt-20 md:flex-row md:items-stretch">
          {hero.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-baseline gap-3 border-t py-4 md:block md:border-t-0 md:py-0 ${
                i > 0 ? "md:ml-12 md:border-l md:pl-12" : ""
              }`}
              style={{ borderColor: "var(--hairline-strong)" }}
            >
              <span className="tnum font-[family-name:var(--font-display)] text-[26px] font-light leading-none text-ivory md:text-[30px]">
                {stat.value}
              </span>
              <span className="caption text-ivory/58 md:mt-3 md:block">{stat.label}</span>
            </div>
          ))}
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden h-12 w-px -translate-x-1/2 bg-brass/50 md:block"
      >
        <span className="scroll-tick block h-full w-full bg-brass" />
      </div>
    </section>
  );
}
