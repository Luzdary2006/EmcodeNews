import { getCategory } from "@/data/categories";
import { cn } from "@/lib/cn";
import { badgeStyles } from "@/lib/styles";
import type { CategoryId } from "@/types/content";

export function CategoryPill({
  categoryId,
  className,
}: {
  categoryId: CategoryId;
  className?: string;
}) {
  const category = getCategory(categoryId);

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.12em]",
        badgeStyles,
        className,
      )}
    >
      {category.name}
    </span>
  );
}
