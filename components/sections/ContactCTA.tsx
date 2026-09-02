import { contact } from "@/lib/content";
import { site, telHref, mailtoHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { IconMail, IconPhone, IconPin } from "@/components/ui/Icons";

export function ContactCTA() {
  return (
    <section id="contact" className="section-pad bg-ivory">
      <Container>
        <SectionHeading
          index={contact.index}
          eyebrow={contact.eyebrow}
          heading={contact.heading}
        />

        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-16 md:mt-20 lg:grid-cols-2">
          <Reveal>
            <p className="measure text-cocoa/80">{contact.body}</p>

            <div className="mt-10 border-t" style={{ borderColor: "var(--hairline-strong)" }}>
              <div
                className="flex items-start gap-4 border-b py-6"
                style={{ borderColor: "var(--hairline)" }}
              >
                <IconPin size={18} className="brass-ctx mt-0.5 shrink-0" />
                <div>
                  <p className="caption text-cocoa/72">{contact.visitLabel}</p>
                  <p className="mt-2 text-cocoa">{site.address.full}</p>
                  <p className="mt-1 text-[14px] text-cocoa/72">{contact.landmark}</p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 border-b py-6"
                style={{ borderColor: "var(--hairline)" }}
              >
                <IconPhone size={18} className="brass-ctx mt-0.5 shrink-0" />
                <div>
                  <p className="caption text-cocoa/72">Phone &amp; WhatsApp</p>
                  <p className="tnum mt-2">
                    <a href={telHref} className="text-cocoa transition-colors hover:text-brass-deep">
                      {site.phone.display}
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 border-b py-6"
                style={{ borderColor: "var(--hairline)" }}
              >
                <IconMail size={18} className="brass-ctx mt-0.5 shrink-0" />
                <div>
                  <p className="caption text-cocoa/72">Email</p>
                  <p className="mt-2">
                    <a
                      href={mailtoHref}
                      className="break-all text-cocoa transition-colors hover:text-brass-deep"
                    >
                      {site.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div
                className="border"
                style={{ borderColor: "var(--hairline-strong)", aspectRatio: "16 / 9" }}
              >
                <iframe
                  src={contact.map.embed}
                  title={contact.map.title}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                  style={{ border: 0, filter: "saturate(0.72) contrast(1.02)" }}
                />
              </div>
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
                <p className="caption text-cocoa/72">{contact.map.caption}</p>
                <a
                  href={contact.map.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brass-link"
                >
                  {contact.map.linkLabel}
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <QuoteForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
