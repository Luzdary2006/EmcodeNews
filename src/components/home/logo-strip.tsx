import Link from "next/link";
import { ToolLogo } from "@/components/tools/tool-logo";
import { Container } from "@/components/ui/container";
import { tools } from "@/data/tools";

export function LogoStrip() {
  return (
    <section
      aria-labelledby="logo-strip-heading"
      className="border-b border-line bg-surface/60"
    >
      <Container className="py-8">
        <h2
          id="logo-strip-heading"
          className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-muted"
        >
          Tools in this issue
        </h2>
        <ul className="mt-5 grid grid-cols-4 gap-x-4 gap-y-5 sm:grid-cols-6 lg:grid-cols-12">
          {tools.map((tool) => (
            <li key={tool.slug} className="min-w-0">
              <Link
                href={`/tools/${tool.slug}`}
                className="group flex flex-col items-center gap-2 rounded-lg px-1 py-1 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <ToolLogo
                  tool={tool}
                  size={36}
                  className="transition-colors group-hover:border-ink/30"
                />
                <span className="w-full truncate text-[0.65rem] text-muted transition-colors group-hover:text-ink">
                  {tool.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
