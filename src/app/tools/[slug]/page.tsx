import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolLogo } from "@/components/tools/tool-logo";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/external-link";
import { getCategory } from "@/data/categories";
import { site } from "@/data/site";
import { getToolBySlug, tools } from "@/data/tools";

export const dynamic = "force-static";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata(
  props: PageProps<"/tools/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {};
  }

  return {
    title: tool.name,
    description: tool.description,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${tool.name} — ${site.name}`,
      description: tool.tagline,
      url: `/tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage(props: PageProps<"/tools/[slug]">) {
  const { slug } = await props.params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const primaryCategory = getCategory(tool.categories[0]);
  const toolUrl = `${site.url}/tools/${tool.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: primaryCategory.name,
    operatingSystem: "Web",
    url: site.url + `/tools/${tool.slug}`,
    sameAs: tool.officialUrl,
    isAccessibleForFree: tool.pricing.model !== "paid",
    mainEntityOfPage: toolUrl,
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-line">
        <Container className="py-10 md:py-14">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: primaryCategory.name, href: primaryCategory.href },
              { label: tool.name },
            ]}
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-12">
              <div className="flex items-start gap-5">
                <ToolLogo tool={tool} size={76} />
                <h1 className="mt-3 text-balance font-display text-[clamp(2.6rem,6vw,5rem)] font-light leading-[0.95] tracking-[-0.04em] text-ink">
                  {tool.name}
                </h1>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <section className="py-14 md:py-20">
        <Container>
          <p className="max-w-3xl text-pretty text-lg leading-relaxed text-ink-soft">
            {tool.description}
          </p>
        </Container>
      </section>
    </>
  );
}
