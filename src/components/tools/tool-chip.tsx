import Link from "next/link";
import { ToolLogo } from "@/components/tools/tool-logo";
import type { Tool } from "@/types/content";

export function ToolChip({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="inline-flex min-h-8 items-center gap-2 rounded-md border border-line bg-surface py-1 pl-1 pr-3 text-xs font-medium text-ink transition-colors hover:border-ink/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <ToolLogo tool={tool} size={24} className="rounded-md" />
      {tool.name}
    </Link>
  );
}
