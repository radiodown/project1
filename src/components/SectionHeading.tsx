interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 ${alignmentClass}`}>
      <span className="pill-chip">{eyebrow}</span>
      <div className="space-y-2">
        <h2 className="font-display text-4xl leading-none text-ink sm:text-[2.75rem]">
          {title}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-rosewood/85 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default SectionHeading;

