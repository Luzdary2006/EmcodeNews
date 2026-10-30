export type CategoryId =
  | "study-learning"
  | "communication-collaboration"
  | "productivity-organization";

export type SectionId =
  | "study-learning"
  | "communication-collaboration"
  | "tips-recommendations";

export type PricingModel = "free" | "freemium" | "paid";

export interface Category {
  id: CategoryId;
  name: string;
  shortName: string;
  description: string;
  href: string;
}

export interface Section {
  id: SectionId;
  number: string;
  name: string;
  shortName: string;
  href: string;
  kicker: string;
  tagline: string;
  description: string;
}

export interface ToolPricing {
  model: PricingModel;
  note: string;
  verifiedAt: string;
}

export interface Tool {
  slug: string;
  name: string;
  logo: string;
  categories: CategoryId[];
  section: SectionId;
  tagline: string;
  description: string;
  mainFunction: string;
  benefits: string[];
  academicUseCases: string[];
  pricing: ToolPricing;
  officialUrl: string;
  featured: boolean;
  keywords: string[];
}

export interface Tip {
  id: string;
  number: string;
  topic: string;
  title: string;
  summary: string;
  body: string;
}

export interface NeedRecommendation {
  need: string;
  why: string;
  toolSlugs: string[];
}

export interface ToolStack {
  name: string;
  audience: "Individual" | "Team" | "Either";
  description: string;
  toolSlugs: string[];
  workflow: string[];
}
