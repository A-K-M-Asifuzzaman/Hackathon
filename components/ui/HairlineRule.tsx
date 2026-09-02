export function HairlineRule({
  strong = false,
  className = "",
}: {
  strong?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`${strong ? "hairline-strong" : "hairline"} ${className}`}
    />
  );
}
