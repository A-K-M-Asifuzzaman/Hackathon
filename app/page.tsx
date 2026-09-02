import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Intro } from "@/components/sections/Intro";
import { WhyHeaven } from "@/components/sections/WhyHeaven";
import { Collections } from "@/components/sections/Collections";
import { Bespoke } from "@/components/sections/Bespoke";
import { Process } from "@/components/sections/Process";
import { Milestones } from "@/components/sections/Milestones";
import { Proof } from "@/components/sections/Proof";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

export default function Page() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <TrustStrip />
        <Intro />
        <WhyHeaven />
        <Collections />
        <Bespoke />
        <Process />
        <Milestones />
        <Proof />
        <ContactCTA />
      </main>

      <Footer />

      <aside aria-label="Quick contact">
        <StickyMobileCTA />
        <WhatsAppFab />
      </aside>
    </>
  );
}
