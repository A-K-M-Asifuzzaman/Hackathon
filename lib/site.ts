export const site = {
  name: "Heaven Furniture Mart",
  legalName: "Heaven Furniture Mart",
  tagline: "Designed. Crafted. Customized.",
  description:
    "Bespoke furniture and interior styling from our Agrabad studio in Chattogram. Designed with you, built by hand, delivered and installed.",
  url: "https://heaven-furniture-mart.vercel.app",
  foundingDate: "2020",
  founder: "Abul Kalam Bhuiyan",
  founderRole: "Managing Director",
  city: "Chattogram",
  address: {
    street: "Agrabad Access Road",
    locality: "Agrabad",
    region: "Chattogram",
    country: "Bangladesh",
    countryCode: "BD",
    full: "Agrabad Access Road, Chattogram, Bangladesh",
  },
  phone: {
    display: "+880 1960-481983",
    tel: "+8801960481983",
    whatsapp: "8801960481983",
  },
  email: "heavenfurnituremart@gmail.com",
  socials: {
    facebook: "https://facebook.com/HeavenFurnitureMart",
    instagram: "https://instagram.com/heaven_furniture_ltd",
    youtube: "https://youtube.com/@HeavenFurnitureMart",
  },
} as const;

export const socialLinks = [
  { label: "Facebook", href: site.socials.facebook },
  { label: "Instagram", href: site.socials.instagram },
  { label: "YouTube", href: site.socials.youtube },
] as const;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${site.phone.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function quoteMessage(fields: {
  name: string;
  phone: string;
  category: string;
  message: string;
}) {
  return `Hello Heaven Furniture Mart,
Name: ${fields.name}
Phone: ${fields.phone}
Interested in: ${fields.category}
Message: ${fields.message}`;
}

export const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Design consultation enquiry"
)}`;

export const telHref = `tel:${site.phone.tel}`;
