import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

export const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCI+PGZpbHRlciBpZD0iYiI+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMiIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzNhMmEyMCIvPjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSI2IiBmaWxsPSIjYzhhODgyIiBmaWx0ZXI9InVybCgjYikiIG9wYWNpdHk9Ii42Ii8+PC9zdmc+";

const RATIOS = {
  "4/5": "4 / 5",
  "3/2": "3 / 2",
  "16/9": "16 / 9",
  "1/1": "1 / 1",
  fill: undefined,
} as const;

export type FigureRatio = keyof typeof RATIOS;

function fileExists(src: string) {
  if (!src.startsWith("/")) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

export function FigureImage({
  src,
  alt,
  ratio = "4/5",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  overlay,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  ratio?: FigureRatio;
  sizes?: string;
  priority?: boolean;
  overlay?: "ink" | "ink-strong" | null;
  className?: string;
  imageClassName?: string;
}) {
  const present = fileExists(src);
  const aspect = RATIOS[ratio];

  return (
    <div
      className={`figure-media ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      {present ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className={`graded object-cover ${imageClassName}`}
        />
      ) : (
        <Placeholder alt={alt} />
      )}

      {overlay ? (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundColor:
              overlay === "ink-strong"
                ? "rgba(16,31,29,0.62)"
                : "rgba(16,31,29,0.12)",
          }}
        />
      ) : null}
    </div>
  );
}

function Placeholder({ alt }: { alt: string }) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="absolute inset-0 flex items-end"
      style={{
        backgroundColor: "#2a2018",
        backgroundImage:
          "repeating-linear-gradient(96deg, rgba(200,168,130,0.10) 0px, rgba(200,168,130,0.10) 1px, transparent 1px, transparent 7px), repeating-linear-gradient(88deg, rgba(16,31,29,0.30) 0px, rgba(16,31,29,0.30) 2px, transparent 2px, transparent 23px), linear-gradient(168deg, #4a382a 0%, #2a2018 52%, #161f1d 100%)",
      }}
    >
      <span
        className="caption block w-full px-5 pb-5 pt-16"
        style={{ color: "rgba(246,241,232,0.5)" }}
      >
        {alt}
      </span>
    </div>
  );
}
