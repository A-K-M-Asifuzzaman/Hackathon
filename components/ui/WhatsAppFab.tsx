import { whatsappHref } from "@/lib/site";
import { whatsappMessages } from "@/lib/content";
import { IconWhatsApp } from "./Icons";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message Heaven Furniture Mart on WhatsApp"
      className="fixed bottom-10 right-10 z-40 hidden h-14 w-14 items-center justify-center rounded-full border border-brass/45 bg-ink/85 text-brass transition-colors duration-300 hover:border-brass hover:bg-brass hover:text-ink md:flex"
    >
      <IconWhatsApp size={22} />
    </a>
  );
}
