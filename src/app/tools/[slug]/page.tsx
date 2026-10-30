import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPill } from "@/components/tools/category-pill";
import { ToolGrid } from "@/components/tools/tool-card";
import { ToolLogo } from "@/components/tools/tool-logo";
import { Container } from "@/components/ui/container";
import { Breadcrumbs, ExternalLink } from "@/components/ui/external-link";
import { CheckIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCategory } from "@/data/categories";
import { site } from "@/data/site";
import { getRelatedTools, getToolBySlug, tools } from "@/data/tools";
import { badgeStyles, pricingLabels } from "@/lib/styles";

export const instant = false;

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
    description: tool.tagline,
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
  const relatedTools = getRelatedTools(tool);
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
            <div className="lg:col-span-8">
              <div className="flex items-start gap-5">
                <ToolLogo tool={tool} size={76} />
                <div className="min-w-0">
                  <div className="flex flex-wrap gap-2">
                    {tool.categories.map((categoryId) => (
                      <CategoryPill key={categoryId} categoryId={categoryId} />
                    ))}
                  </div>
                  <h1 className="mt-3 text-balance font-display text-[clamp(2.6rem,6vw,5rem)] font-light leading-[0.95] tracking-[-0.04em] text-ink">
                    {tool.name}
                  </h1>
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-pretty text-xl leading-relaxed text-ink-soft">
                {tool.tagline}
              </p>
            </div>

            <div className="lg:col-span-4 lg:pt-2">
              <div className="rounded-xl border border-line bg-surface p-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-muted">
                    Pricing
                  </span>
                  <span
                    className={`inline-flex items-center rounded-md border px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] ${badgeStyles}`}
                  >
                    {pricingLabels[tool.pricing.model]}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {tool.pricing.note}
                </p>
                <p className="mt-3 text-[0.62rem] uppercase tracking-[0.14em] text-muted">
                  Verified {tool.pricing.verifiedAt}
                </p>

                <div className="mt-5 border-t border-line pt-4">
                  <ExternalLink
                    href={tool.officialUrl}
                    className="text-sm"
                  >
                    Official website
                  </ExternalLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <section className="py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <h2 className="text-[0.64rem] font-medium uppercase tracking-[0.22em] text-muted">
              The short version
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-soft">
              {tool.description}
            </p>

            <div className="mt-10 rounded-xl border border-line bg-surface p-6 md:p-8">
              <h2 className="font-display text-2xl tracking-[-0.02em] text-ink">
                What it does
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {tool.mainFunction}
              </p>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">
                Why students use it
              </h2>
              <ul className="mt-6 space-y-4">
                {tool.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-ink" />
                    <span className="text-base leading-relaxed text-ink-soft">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="font-display text-3xl tracking-[-0.03em] text-ink">
                In practice
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {tool.academicUseCases.map((useCase, index) => (
                  <div
                    key={useCase}
                    className="rounded-xl border border-line bg-surface p-5"
                  >
                    <span
                      aria-hidden="true"
                      className="font-display text-sm text-muted"
                    >
                      0{index + 1}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {useCase}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="space-y-4 lg:sticky lg:top-32">
              <div className="rounded-xl border border-line bg-surface p-6">
                <h2 className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-muted">
                  At a glance
                </h2>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted">
                      Categories
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {tool.categories.map((categoryId) => (
                        <CategoryPill
                          key={categoryId}
                          categoryId={categoryId}
                        />
                      ))}
                    </dd>
                  </div>
                  <div className="border-t border-line pt-4">
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted">
                      Price model
                    </dt>
                    <dd className="mt-1 text-ink-soft">
                      {pricingLabels[tool.pricing.model]}
                    </dd>
                  </div>
                  <div className="border-t border-line pt-4">
                    <dt className="text-xs uppercase tracking-[0.14em] text-muted">
                      Official site
                    </dt>
                    <dd className="mt-2 break-all">
                      <ExternalLink
                        href={tool.officialUrl}
                        className="text-sm"
                      >
                        {new URL(tool.officialUrl).hostname}
                      </ExternalLink>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-xl border border-line bg-paper p-6">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-muted">
                  How we review
                </p>
                <p className="mt-3 text-xs leading-relaxed text-muted">
                  Entries are written around academic use. Pricing and
                  availability are checked against official sources on the date
                  shown and can change.
                </p>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {relatedTools.length > 0 ? (
        <section className="border-t border-line py-14 md:py-20">
          <Container>
            <SectionHeading
              kicker="Keep going"
              title="More tools that fit this workflow"
              description={`Other options that share a category with ${tool.name}.`}
            />
            <ToolGrid tools={relatedTools} className="mt-10" />
          </Container>
        </section>
      ) : null}
    </>
  );
}
