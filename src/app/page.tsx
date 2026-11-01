import type { Metadata } from "next";
import { EditorialNote } from "@/components/home/editorial-note";
import { FeaturedTools } from "@/components/home/featured-tools";
import { Hero } from "@/components/home/hero";
import { Manifesto } from "@/components/home/manifesto";
import { SectionDirectory } from "@/components/home/section-directory";
import { site } from "@/data/site";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: `${site.name} — The digital toolkit for university life`,
  description: site.description,
  alternates: {
    canonical: "/",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "en",
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <EditorialNote />
      <FeaturedTools />
      <SectionDirectory />
      <Manifesto />
    </>
  );
}
