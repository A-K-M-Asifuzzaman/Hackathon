type IconProps = { className?: string; size?: number };

function Svg({
  className = "",
  size = 20,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {children}
    </svg>
  );
}

export function IconConsult(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 5.5h18v11H8.5L4 20.5v-4H3z" />
      <path d="M8 10h8M8 13h5" />
    </Svg>
  );
}

export function IconDelivery(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M2 6.5h11v10H2zM13 9.5h4.6l3.4 3.4v3.6H13z" />
      <circle cx="6.5" cy="18.5" r="1.8" />
      <circle cx="17" cy="18.5" r="1.8" />
    </Svg>
  );
}

export function IconPayment(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" />
      <path d="M2.5 9.5h19M6 14.5h4" />
    </Svg>
  );
}

export function IconShowroom(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 9.5 4.8 4.5h14.4L21 9.5" />
      <path d="M4 9.5v10h16v-10" />
      <path d="M9.5 19.5v-6h5v6" />
    </Svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2.9a9.1 9.1 0 0 0-7.8 13.8L3 21l4.5-1.2A9.1 9.1 0 1 0 12 2.9Z" />
      <path d="M8.9 8.2c.3-.7.6-.7.9-.7h.6c.2 0 .5 0 .7.6l.7 1.7c.1.3 0 .5-.1.7l-.4.5c-.2.2-.3.4-.1.7a7 7 0 0 0 3.1 2.7c.3.1.5.1.7-.1l.6-.7c.2-.2.4-.2.6-.1l1.7.8c.3.2.4.3.4.6 0 .8-.5 1.6-1.2 1.8-.6.2-1.4.3-3.8-.8a10 10 0 0 1-4.5-4.5c-.5-1-.6-1.9-.6-2.4a2 2 0 0 1 .7-1.5Z" />
    </Svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6.2 3.5h3l1.5 4-2 1.4a12 12 0 0 0 6.4 6.4l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
    </Svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="5" width="19" height="14" />
      <path d="m2.5 6.5 9.5 7 9.5-7" />
    </Svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </Svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 12h15M13.5 6.5 20 12l-6.5 5.5" />
    </Svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3 8h18M3 16h18" />
    </Svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
    </Svg>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14.8 8.4h2.4V5.2h-2.6c-2.2 0-3.6 1.5-3.6 3.7v1.9H8.5v3.1H11v8h3.2v-8h2.5l.5-3.1h-3v-1.5c0-.6.3-.9.6-.9Z" />
    </Svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" />
    </Svg>
  );
}

export function IconYouTube(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2.5" y="6" width="19" height="12" />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5z" />
    </Svg>
  );
}

export const trustIcons = {
  consult: IconConsult,
  delivery: IconDelivery,
  payment: IconPayment,
  showroom: IconShowroom,
} as const;

export const socialIcons = {
  Facebook: IconFacebook,
  Instagram: IconInstagram,
  YouTube: IconYouTube,
} as const;
