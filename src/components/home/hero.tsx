import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";
import { categories } from "@/data/categories";
import { sections } from "@/data/sections";
import { site } from "@/data/site";
import { tips } from "@/data/tips";
import { tools } from "@/data/tools";
import { withBase } from "@/lib/with-base";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      <Image
        src={withBase("/logos/portada%20(2).png")}
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="-z-20 object-cover opacity-45"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-paper/55" />
      <Container className="relative grid gap-12 py-14 md:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-7">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-muted">
            A digital magazine for university students
          </p>

          <h1 className="mt-6 text-balance font-display text-[clamp(3rem,8.5vw,6.3rem)] font-light leading-[0.92] tracking-[-0.04em] text-ink">
            The digital <span className="italic">toolkit</span> for university
            life.
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            Emcode News reviews the apps and platforms that help students read
            better, work together, and keep the semester under control. No
            rankings for sale — just tools that earn their place.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href="/tools">
              Browse all {tools.length} tools
            </ButtonLink>
            <ButtonLink href="/study-learning" variant="outline">
              Start with Study &amp; Learning
            </ButtonLink>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6">
            <div>
              <dt className="text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                Tools reviewed
              </dt>
              <dd className="mt-1 font-display text-3xl tracking-[-0.02em] text-ink">
                {tools.length}
              </dd>
            </div>
            <div>
              <dt className="text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                Categories
              </dt>
              <dd className="mt-1 font-display text-3xl tracking-[-0.02em] text-ink">
                {categories.length}
              </dd>
            </div>
            <div>
              <dt className="text-[0.62rem] uppercase tracking-[0.18em] text-muted">
                Study habits
              </dt>
              <dd className="mt-1 font-display text-3xl tracking-[-0.02em] text-ink">
                {tips.length}
              </dd>
            </div>
          </dl>

        </div>

        <div className="lg:col-span-5">
          <aside className="self-start rounded-xl bg-ink p-7 text-paper sm:p-9">
            <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.2em] text-paper/70">
              <span>{site.issue}</span>
              <span>{site.issueDate}</span>
            </div>

            <p className="mt-10 font-display text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl">
              Twelve tools.
              <br />
              Three ways in.
            </p>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              A short, opinionated guide to the software worth keeping this
              semester — and the routines that make it work.
            </p>

            <ol className="mt-8 divide-y divide-paper/20 border-y border-paper/20">
              {sections.map((section) => (
                <li key={section.id}>
                  <Link
                    href={section.href}
                    className="group flex items-center gap-4 py-4 transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper"
                  >
                    <span className="text-[0.6rem] uppercase tracking-[0.16em] text-paper/70">
                      {section.number}
                    </span>
                    <span className="text-sm font-medium underline decoration-paper/25 underline-offset-4 transition-colors group-hover:decoration-paper">
                      {section.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-[0.62rem] uppercase tracking-[0.16em] text-paper/70">
              Updated {site.updated}
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
