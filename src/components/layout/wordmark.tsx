import Link from "next/link";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-baseline gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className ?? ""}`}
    >
      <span className="font-display text-[1.7rem] leading-none tracking-[-0.04em] text-ink">
        Emcode
      </span>
      <span className="font-display text-[1.7rem] italic leading-none tracking-[-0.03em] text-ink">
        News
      </span>
    </Link>
  );
}
