import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  heading,
  tone = "ink",
  className = "",
}: {
  index?: string;
  eyebrow: string;
  heading: string;
  tone?: "ink" | "ivory";
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2
        className={`h2 mt-6 measure-tight ${
          tone === "ivory" ? "text-ivory" : "text-cocoa"
        }`}
      >
        {heading}
      </h2>
    </Reveal>
  );
}
