interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">{eyebrow}</p>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">{subtitle}</p>
      )}
      <div className={`mt-6 h-px w-24 bg-gradient-gold ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
