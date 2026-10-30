import Link from "next/link";
import { ToolLogo } from "@/components/tools/tool-logo";
import { getCategory } from "@/data/categories";
import { cn } from "@/lib/cn";
import { badgeStyles, pricingLabels } from "@/lib/styles";
import type { Tool } from "@/types/content";

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

export function ToolCard({ tool, className }: ToolCardProps) {
  const primaryCategory = getCategory(tool.categories[0]);

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className={cn(
        "group flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-ink/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent",
        className,
      )}
    >
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
        <span className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
          Read profile
        </span>
      </div>
    </Link>
  );
}

export function ToolGrid({
  tools,
  className,
}: {
  tools: Tool[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {tools.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  );
}
