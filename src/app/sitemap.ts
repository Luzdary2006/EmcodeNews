import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { tools } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(site.updatedISO);
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    {
      path: "/study-learning",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/communication-collaboration",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/tips-recommendations",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/tools", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...tools.map((tool) => ({
      url: `${site.url}/tools/${tool.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
