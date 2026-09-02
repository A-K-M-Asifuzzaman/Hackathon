import { site } from "./site";

export const nav = [
  { label: "Collections", href: "#collections" },
  { label: "Bespoke", href: "#bespoke" },
  { label: "Showroom", href: "#showroom" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  eyebrow: "Chattogram · Est. 2020",
  heading: "Furniture, Crafted Around You",
  sub: "Bespoke furniture and interior styling from our Agrabad studio. Designed with you, built by hand, delivered and installed.",
  primaryCta: "Book a Free Design Consultation",
  secondaryCta: "WhatsApp Us",
  image: {
    src: "/images/hero-showroom.jpg",
    alt: "Hand-carved sofa in navy velvet with a gilded frame, built by Heaven Furniture Mart",
  },
  stats: [
    { value: "500+", label: "Homes Furnished" },
    { value: "6 Years", label: "Of Craft" },
    { value: "100%", label: "Made to Order" },
  ],
} as const;

export const trustStrip = [
  { label: "Free Design Consultation", icon: "consult" },
  { label: "Delivery & Installation Included", icon: "delivery" },
  { label: "Easy Payment Options", icon: "payment" },
  { label: "Agrabad Showroom", icon: "showroom" },
] as const;

export const intro = {
  index: "02",
  eyebrow: "The Studio",
  statement: "We don't sell furniture off a shelf. We build it around your room.",
  body: [
    "Heaven Furniture Mart is a bespoke furniture house in Chattogram. Every piece begins as a conversation about the room it will live in — its dimensions, its light, the way you actually use it.",
    "From that conversation we draw, agree materials and finishes with you, and build in-house from premium wood. Living room, bedroom, dining, office — or something that exists nowhere else yet.",
  ],
  link: { label: "See our collections", href: "#collections" },
  image: {
    src: "/images/showroom-wide.jpg",
    alt: "A hand-carved sofa set with a glass-topped coffee table and marble side table on the Heaven Furniture Mart showroom floor",
    caption: "Agrabad Access Road, Chattogram",
  },
} as const;

export const whyHeaven = {
  index: "03",
  eyebrow: "Why Heaven",
  heading: "Six reasons homeowners in Chattogram build with us",
  points: [
    {
      index: "01",
      title: "Free design consultation",
      body: "Sit with our designers at the showroom or at your home. No fee, no obligation.",
    },
    {
      index: "02",
      title: "Fully bespoke, never mass-produced",
      body: "Each piece is drawn and built for one specific room — yours.",
    },
    {
      index: "03",
      title: "Premium wood, in-house craftsmen",
      body: "Selected timber worked by our own team, not outsourced to a factory floor.",
    },
    {
      index: "04",
      title: "A large showroom in Agrabad",
      body: "See the joinery, the finishes and the weight of the material before you commit.",
    },
    {
      index: "05",
      title: "Delivery and installation included",
      body: "We carry it in, assemble it and set it in place. That is part of the price.",
    },
    {
      index: "06",
      title: "Easy payment options",
      body: "Flexible plans so a made-to-order home doesn't have to arrive all at once.",
    },
  ],
} as const;

export const collections = {
  index: "04",
  eyebrow: "Collections",
  heading: "Built for every room you live in",
  intro:
    "Five collections, each made to order in the size, wood and finish your space asks for.",
  items: [
    {
      slug: "living",
      name: "Living Room",
      description: "Sofa sets, coffee tables, TV units and consoles.",
      image: {
        src: "/images/living-sofa-01.jpg",
        alt: "Carved sofa upholstered in navy velvet with a hand-gilded frame and embroidered back panel",
      },
      ratio: "4/5",
    },
    {
      slug: "bedroom",
      name: "Bedroom",
      description: "Beds, wardrobes, dressing tables and bedside tables.",
      image: {
        src: "/images/bedroom-wardrobe.jpg",
        alt: "Emerald velvet upholstered bed with a channelled headboard, made to order",
      },
      ratio: "3/2",
    },
    {
      slug: "dining",
      name: "Dining",
      description: "Dining tables, chairs and display cabinets.",
      image: {
        src: "/images/dining-set.jpg",
        alt: "Marble-topped dining table with carved timber legs and studded leather chairs",
      },
      ratio: "3/2",
    },
    {
      slug: "office",
      name: "Office & Study",
      description: "Executive tables, bookshelves and workstations.",
      image: {
        src: "/images/office-desk.jpg",
        alt: "Glass-fronted timber display cabinet with hand-carved cresting and gilded detail",
      },
      ratio: "4/5",
    },
    {
      slug: "bespoke",
      name: "Bespoke",
      description: "Anything else — built to your own space, size and taste.",
      image: {
        src: "/images/bespoke-workshop.jpg",
        alt: "A craftsman's hands setting nailhead trim into a gilded frame at the Heaven workshop",
      },
      ratio: "4/5",
    },
  ],
  cta: "Explore",
} as const;

export const bespoke = {
  index: "05",
  eyebrow: "Made to Order",
  heading: "Not chosen from a showroom floor. Built for your floor.",
  body: "Any piece, any dimension, any finish — designed around the space you actually live in, then crafted in-house by our own team. Bring us a corner that nothing fits, and we will draw something that does.",
  cta: "Start Your Bespoke Piece",
  image: {
    src: "/images/bespoke-texture.jpg",
    alt: "Hand-embroidered floral upholstery on a gilded chair back, stitched in the Heaven workshop",
  },
} as const;

export const process = {
  index: "06",
  eyebrow: "How It Works",
  heading: "Four steps, and we handle the heavy part",
  steps: [
    {
      index: "01",
      title: "Consult",
      body: "A free design consultation, at the showroom or in your home.",
    },
    {
      index: "02",
      title: "Design",
      body: "Drawings, materials and finishes agreed with you before anything is cut.",
    },
    {
      index: "03",
      title: "Craft",
      body: "Built in-house from premium wood by our own craftsmen.",
    },
    {
      index: "04",
      title: "Deliver & Install",
      body: "Delivered, assembled and set in place. Included.",
    },
  ],
} as const;

export const milestones = {
  eyebrow: "Milestones",
  heading: "Six years, one workshop",
  items: [
    { year: "2020", label: "Founded in Chattogram" },
    { year: "2021", label: "Agrabad showroom opened" },
    { year: "2024–25", label: "International Furniture Fair, Chattogram" },
    { year: "2025", label: "Chamber of Commerce member" },
    { year: "2026", label: "BFIOA national recognition" },
  ],
} as const;

export const proof = {
  index: "07",
  eyebrow: "Our Clients",
  quote:
    "At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.",
  attribution: {
    name: site.founder,
    role: `${site.founderRole}, ${site.name}`,
  },
  closing: "Trusted by hundreds of happy homeowners across Chattogram.",
  image: {
    src: "/images/proof-portrait.jpg",
    alt: "Carved settee with silver-grey upholstery and embroidered cushions on the Agrabad showroom floor",
    caption: "The showroom, Agrabad Access Road",
  },
} as const;

export const contact = {
  index: "08",
  eyebrow: "Visit Us",
  heading: "Come and see the joinery",
  body: "Walk the showroom on Agrabad Access Road and see the joinery and finishes in person, or send us the room you need furnished and we will take it from there.",
  visitLabel: "Showroom",
  landmark: "Opposite RAK Ceramics",
  form: {
    heading: "Request a free quote",
    note: "Tell us what you need. The form hands off to WhatsApp so you keep the conversation.",
    submit: "Request a Free Quote",
    emailFallback: "Prefer email?",
    success: "Opening WhatsApp with your details. If nothing happened, message us directly.",
    categories: [
      "Living Room",
      "Bedroom",
      "Dining",
      "Office & Study",
      "Bespoke / Custom",
      "Full home interior",
    ],
    fields: {
      name: { label: "Your name", placeholder: "e.g. Rahim Uddin", error: "Please enter your name." },
      phone: {
        label: "Phone number",
        placeholder: "e.g. 01960-481983",
        error: "Please enter a phone number we can reach you on.",
      },
      category: { label: "Interested in", error: "Please choose a category." },
      message: {
        label: "Your room, your idea",
        placeholder: "Tell us the room, the size, and what you have in mind.",
        error: "Please add a short message.",
      },
    },
  },
  map: {
    title: "Map of the Heaven Furniture Mart showroom on Agrabad Access Road, Chattogram",
    caption: "Opposite RAK Ceramics, Agrabad Access Road",
    embed:
      "https://www.google.com/maps?q=Heaven+Furniture+Mart,+Agrabad+Access+Road,+Chittagong&output=embed",
    href: "https://www.google.com/maps/search/?api=1&query=Heaven+Furniture+Mart+Agrabad+Access+Road+Chattogram",
    linkLabel: "Open in Google Maps",
  },
} as const;

export const footer = {
  positioning: "Bespoke furniture and interior styling, made to order in Chattogram.",
  columns: {
    collections: collections.items.map((item) => ({
      label: item.name,
      href: "#collections",
    })),
  },
  copyright: `© ${new Date().getFullYear()} ${site.name}. ${site.tagline}`,
} as const;

export const ctaLabels = {
  book: "Book a Free Design Consultation",
  bookShort: "Book Consultation",
  whatsapp: "WhatsApp Us",
  call: "Call",
} as const;

export const whatsappMessages = {
  general: `Hello Heaven Furniture Mart, I'd like to book a free design consultation.`,
  bespoke: `Hello Heaven Furniture Mart, I'd like to start a bespoke piece.`,
} as const;
