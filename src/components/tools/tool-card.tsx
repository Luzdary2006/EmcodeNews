import Link from "next/link";
import { ToolLogo } from "@/components/tools/tool-logo";
import { getCategory } from "@/data/categories";
import { cn } from "@/lib/cn";
import { badgeStyles, pricingLabels } from "@/lib/styles";
import type { Tool } from "@/types/content";

interface ToolCardProps {
  tool: Tool;
  className?: string;
  link?: boolean;
}

export function ToolCard({ tool, className, link = true }: ToolCardProps) {
  const primaryCategory = getCategory(tool.categories[0]);
  const cardClassName = cn(
    "group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-ink/30",
    link &&
      "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
    className,
  );

  const cardContent = (
    <>
      <div className="flex items-start justify-between gap-4">
        <ToolLogo tool={tool} />
        <span
          className={cn(
            "rounded-md border px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em]",
            badgeStyles,
          )}
        >
          {pricingLabels[tool.pricing.model]}
        </span>
      </div>

      <h3 className="mt-6 font-display text-2xl leading-tight tracking-[-0.02em] text-ink">
        {tool.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {tool.tagline}
      </p>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4">
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ink-soft">
          {primaryCategory.shortName}
        </span>
        {link ? (
          <span className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
            Read profile
          </span>
        ) : null}
      </div>
    </>
  );

  return link ? (
    <Link href={`/tools/${tool.slug}`} className={cardClassName}>
      {cardContent}
    </Link>
  ) : (
    <article className={cardClassName}>{cardContent}</article>
  );
}

export function ToolGrid({
  tools,
  className,
  link = true,
}: {
  tools: Tool[];
  className?: string;
  link?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {tools.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} link={link} />
      ))}
    </div>
  );
}
