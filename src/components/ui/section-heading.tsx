import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  description,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 border-t border-ink/15 pt-6 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-muted">
          {kicker}
        </p>
        <h2 className="mt-3 font-display text-4xl leading-[1.02] tracking-[-0.025em] text-ink sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
