import React from "react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignCls}`}>
      <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.32em] text-amber-glow">
        <span className="h-px w-6 bg-amber-glow/60" />
        {eyebrow}
        {align === "center" && <span className="h-px w-6 bg-amber-glow/60" />}
      </span>
      <h2 className="max-w-3xl text-3xl font-semibold leading-[1.12] tracking-tight text-night-50 sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="max-w-3xl text-base leading-relaxed text-night-300 md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
