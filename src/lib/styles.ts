import type { PricingModel } from "@/types/content";

export const pricingLabels: Record<PricingModel, string> = {
  free: "Free",
  freemium: "Freemium",
  paid: "Paid",
};

// Badges are intentionally monochrome: the label carries the meaning, not a
// second accent colour.
export const badgeStyles =
  "border-line bg-paper text-ink-soft";
