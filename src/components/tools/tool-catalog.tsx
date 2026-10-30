"use client";

import { useDeferredValue, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ToolGrid } from "@/components/tools/tool-card";
import { CloseIcon, SearchIcon } from "@/components/ui/icons";
import { categories, isCategoryId } from "@/data/categories";
import { cn } from "@/lib/cn";
import { filterToolsByCategory, searchTools } from "@/lib/search";
import type { CategoryId, Tool } from "@/types/content";

type CategoryFilter = CategoryId | "all";

export function ToolCatalog({ tools }: { tools: Tool[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const inputRef = useRef<HTMLInputElement>(null);
  const interactedRef = useRef(false);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [initialized, setInitialized] = useState(false);
  const deferredQuery = useDeferredValue(query);

  // The catalog page is statically prerendered with the full grid, so the URL
  // can only be read after hydration. This is a one-time seed from an external
  // system (the address bar), not a render-driven state sync.
  useEffect(() => {
    // If someone started typing before hydration finished, their input wins
    // over whatever the address bar says.
    if (interactedRef.current) {
      setInitialized(true);
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const queryParam = params.get("q") ?? "";
    const categoryParam = params.get("category");
    // Text typed before hydration never reached React, so fall back to whatever
    // is already in the field instead of clobbering it with the URL value.
    const domValue = inputRef.current?.value ?? "";

    setQuery(domValue || queryParam);

    if (isCategoryId(categoryParam)) {
      setCategory(categoryParam);
    }

    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) {
      return;
    }

    const params = new URLSearchParams();
    const trimmedQuery = query.trim();

    if (trimmedQuery) {
      params.set("q", trimmedQuery);
    }

    if (category !== "all") {
      params.set("category", category);
    }

    const search = params.toString();
    router.replace(search ? `${pathname}?${search}` : pathname, {
      scroll: false,
    });
  }, [category, initialized, pathname, query, router]);

  const results = filterToolsByCategory(
    searchTools(tools, deferredQuery),
    category,
  );

  const filtersActive = query.trim().length > 0 || category !== "all";

  function reset() {
    interactedRef.current = true;
    setQuery("");
    setCategory("all");
    inputRef.current?.focus();
  }

  function selectCategory(next: CategoryFilter) {
    interactedRef.current = true;
    setCategory(next);
  }

  return (
    <div>
      <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6">
        <div className="flex flex-col gap-5">
          <div>
            <label
              htmlFor="tool-search"
              className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted"
            >
              Search the toolkit
            </label>
            <div className="relative mt-2">
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
              <input
                ref={inputRef}
                id="tool-search"
                type="search"
                value={query}
                onChange={(event) => {
                  interactedRef.current = true;
                  setQuery(event.target.value);
                }}
                placeholder="Search by name, task, or keyword…"
                autoComplete="off"
                aria-describedby="tool-search-hint"
                className="h-14 w-full rounded-lg border border-line bg-paper pl-12 pr-12 text-base text-ink placeholder:text-muted/80 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => {
                    interactedRef.current = true;
                    setQuery("");
                    inputRef.current?.focus();
                  }}
                  className="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg text-muted transition-colors hover:bg-paper hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span className="sr-only">Clear search</span>
                  <CloseIcon className="h-4 w-4" />
                </button>
              ) : null}
            </div>
            <p id="tool-search-hint" className="mt-2 text-xs text-muted">
              Try “notes”, “code”, “meetings”, or a tool name such as “Figma”.
            </p>
          </div>

          <fieldset>
            <legend className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted">
              Filter by category
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              <FilterButton
                active={category === "all"}
                onClick={() => selectCategory("all")}
                count={tools.length}
              >
                All tools
              </FilterButton>
              {categories.map((item) => (
                <FilterButton
                  key={item.id}
                  active={category === item.id}
                  onClick={() => selectCategory(item.id)}
                  count={
                    tools.filter((tool) => tool.categories.includes(item.id))
                      .length
                  }
                >
                  {item.name}
                </FilterButton>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p aria-live="polite" className="text-sm text-muted">
          Showing <span className="font-medium text-ink">{results.length}</span>{" "}
          of {tools.length} tools
          {query.trim() ? (
            <>
              {" "}
              for <span className="font-medium text-ink">“{query.trim()}”</span>
            </>
          ) : null}
          {category !== "all" ? (
            <>
              {" "}
              in{" "}
              <span className="font-medium text-ink">
                {categories.find((item) => item.id === category)?.name}
              </span>
            </>
          ) : null}
        </p>
        {filtersActive ? (
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-9 items-center text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Reset filters
          </button>
        ) : null}
      </div>

      {results.length > 0 ? (
        <ToolGrid tools={results} className="mt-6" />
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-ink/25 bg-surface px-6 py-16 text-center">
          <p className="font-display text-3xl tracking-[-0.02em] text-ink">
            No tools match that search.
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Try a broader keyword, a different category, or reset the filters to
            see the full toolkit.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Clear search and filters
          </button>
        </div>
      )}
    </div>
  );
}

function FilterButton({
  active,
  onClick,
  count,
  children,
}: {
  active: boolean;
  onClick: () => void;
  count: number;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-9 items-center gap-2 rounded-lg border px-3.5 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        active
          ? "border-ink bg-ink text-paper"
          : "border-line bg-paper text-ink-soft hover:border-ink/40 hover:text-ink",
      )}
    >
      {children}
      <span
        className={cn(
          "rounded px-1.5 py-0.5 text-[0.6rem] tabular-nums",
          active ? "bg-paper/20 text-paper" : "bg-ink/5 text-muted",
        )}
      >
        {count}
      </span>
    </button>
  );
}
