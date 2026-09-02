export function Eyebrow({
  index,
  children,
  className = "",
}: {
  index?: string;
  children: string;
  className?: string;
}) {
  return (
    <p className={`eyebrow ${className}`}>
      {index ? <span className="tnum">{index} — </span> : null}
      {children}
    </p>
  );
}
