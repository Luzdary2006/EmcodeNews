import { ToolGrid } from "@/components/tools/tool-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedTools } from "@/data/tools";

export function FeaturedTools() {
  const featured = getFeaturedTools();

  return (
    <section aria-labelledby="featured-heading" className="py-16 md:py-24">
      <Container>
        <div id="featured-heading">
          <SectionHeading
            kicker="Editor’s picks"
            title="Start with these"
            description="Six tools we would install before the first week of classes. Each one solves a problem students actually have, not a problem a marketing team invented."
            action={
              <ButtonLink href="/tools" variant="outline">
                See the full toolkit
              </ButtonLink>
            }
          />
        </div>
        <ToolGrid tools={featured} className="mt-10" />
      </Container>
    </section>
  );
}
