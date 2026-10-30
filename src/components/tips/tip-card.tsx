import type { Tip } from "@/types/content";

export function TipCard({ tip }: { tip: Tip }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-6">
      <div className="flex items-center justify-between gap-4">
        <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-muted">
          {tip.topic}
        </span>
        <span
          aria-hidden="true"
          className="font-display text-xl leading-none text-muted"
        >
          {tip.number}
        </span>
      </div>
      <h3 className="mt-5 font-display text-2xl leading-tight tracking-[-0.02em] text-ink">
        {tip.title}
      </h3>
      <p className="mt-2 text-sm font-medium leading-snug text-ink-soft">
        {tip.summary}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{tip.body}</p>
    </article>
  );
}
