import { footer, nav } from "@/lib/content";
import { site, socialLinks, telHref, mailtoHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { socialIcons } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-20 md:pb-16 md:pt-24">
      <Container>
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p
              className="font-[family-name:var(--font-display)] text-[22px] tracking-[0.16em] text-ivory"
              style={{ fontWeight: 400 }}
            >
              HEAVEN
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.34em] text-brass">
              Furniture Mart
            </p>
            <p className="mt-6 max-w-[28ch] text-[14px] leading-[1.7] text-ivory/62">
              {footer.positioning}
            </p>
          </div>

          <nav aria-label="Collections">
            <p className="caption text-ivory/45">Collections</p>
            <ul className="mt-6 flex flex-col gap-3">
              {footer.columns.collections.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[14px] text-ivory/72 transition-colors duration-300 hover:text-brass-lift"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="caption text-ivory/45">Visit</p>
            <address className="mt-6 flex flex-col gap-3 not-italic text-[14px] text-ivory/72">
              <span>{site.address.full}</span>
              <a
                href={telHref}
                className="tnum transition-colors duration-300 hover:text-brass-lift"
              >
                {site.phone.display}
              </a>
              <a
                href={mailtoHref}
                className="break-all transition-colors duration-300 hover:text-brass-lift"
              >
                {site.email}
              </a>
            </address>
          </div>

          <div>
            <p className="caption text-ivory/45">Follow</p>
            <ul className="mt-6 flex items-center gap-5">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.name} on ${social.label}`}
                      className="flex h-11 w-11 items-center justify-center text-ivory/62 transition-colors duration-300 hover:text-brass"
                    >
                      <Icon size={20} />
                    </a>
                  </li>
                );
              })}
            </ul>

            <nav aria-label="Footer" className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[12px] uppercase tracking-[0.16em] text-ivory/50 transition-colors duration-300 hover:text-brass-lift"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div
          className="mt-16 border-t pt-8 md:mt-20"
          style={{ borderColor: "var(--hairline)" }}
        >
          <p className="text-[12px] tracking-[0.08em] text-ivory/45">{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
