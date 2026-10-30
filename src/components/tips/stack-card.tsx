import { ToolChip } from "@/components/tools/tool-chip";
import { getToolsBySlugs } from "@/data/tools";
import type { ToolStack } from "@/types/content";

export function StackCard({ stack }: { stack: ToolStack }) {
  const stackTools = getToolsBySlugs(stack.toolSlugs);

  return (
    <article className="flex h-full flex-col rounded-xl bg-ink p-6 text-paper sm:p-7">
      <span className="self-start rounded-md border border-paper/25 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.16em] text-paper/70">
        {stack.audience}
      </span>

      <h3 className="mt-5 font-display text-2xl leading-tight tracking-[-0.02em]">
        {stack.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-paper/60">
        {stack.description}
      </p>

      <ol className="mt-6 space-y-3 border-t border-paper/20 pt-5">
        {stack.workflow.map((step, index) => (
          <li key={step} className="flex gap-3 text-sm text-paper/80">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-paper/25 text-[0.6rem] tabular-nums text-paper/60">
              {index + 1}
            </span>
            <span className="leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>

      <div className="mt-6 flex flex-wrap gap-2 border-t border-paper/20 pt-5">
        {stackTools.map((tool) => (
          <ToolChip key={tool.slug} tool={tool} />
        ))}
      </div>
    </article>
  );
}
