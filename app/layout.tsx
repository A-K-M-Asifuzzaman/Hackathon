import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["300", "400"],
  preload: true,
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — Bespoke Furniture & Interior Styling in Chattogram`,
  description:
    "Bespoke furniture and interior styling from our Agrabad showroom in Chattogram. Living room, bedroom, dining, office and fully custom pieces — designed with you, built by hand, delivered and installed.",
  keywords: [
    "bespoke furniture Chattogram",
    "custom furniture Bangladesh",
    "furniture shop Agrabad",
    "interior styling Chattogram",
    "made to order furniture",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Bespoke Furniture & Interior Styling in Chattogram`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Bespoke Furniture in Chattogram`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#101f1d",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone.tel,
  email: site.email,
  foundingDate: site.foundingDate,
  founder: { "@type": "Person", name: site.founder },
  slogan: site.tagline,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.region,
    addressCountry: site.address.countryCode,
  },
  areaServed: { "@type": "City", name: site.address.region },
  sameAs: [site.socials.facebook, site.socials.instagram, site.socials.youtube],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
