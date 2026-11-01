"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Wordmark } from "@/components/layout/wordmark";
import { Container } from "@/components/ui/container";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close the overlay when navigation happens outside the menu (back/forward,
  // or a link elsewhere on the page). Adjusting state during render is the
  // React-recommended alternative to a cascading effect.
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="border-b border-line/70">
        <Container className="flex h-9 items-center justify-between gap-4">
          <p className="flex items-center gap-3 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-muted">
            <span>{site.issue}</span>
            <span>{site.issueDate}</span>
          </p>
          <p className="hidden text-[0.62rem] uppercase tracking-[0.2em] text-muted sm:block">
            A digital magazine for university students
          </p>
        </Container>
      </div>

      <Container className="flex h-16 items-center justify-between gap-6">
        <Wordmark />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {site.nav.map((item) => {
              const active = isActive(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative py-2 text-[0.78rem] font-medium tracking-[0.01em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cobalt",
                      active
                        ? "text-ink"
                        : "text-muted hover:text-ink",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-0.5 w-full bg-accent transition-opacity",
                        active ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/tools"
            className="hidden min-h-10 items-center rounded-lg border border-ink/20 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:inline-flex"
          >
            All tools
          </Link>

          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink/20 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
          >
            <span className="sr-only">
              {open ? "Close navigation menu" : "Open navigation menu"}
            </span>
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-0 z-50 flex flex-col bg-paper lg:hidden"
        >
          <div className="flex h-[6.25rem] shrink-0 items-center justify-between border-b border-line px-5 sm:px-8">
            <Wordmark />
            <button
              ref={closeRef}
              type="button"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink/20 text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span className="sr-only">Close navigation menu</span>
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <nav
            aria-label="Mobile primary"
            className="flex-1 overflow-y-auto px-5 py-8 sm:px-8"
          >
            <ul className="divide-y divide-line">
              {site.nav.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "block border-l-2 py-5 pl-4 font-display text-3xl tracking-[-0.02em] text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
                        active ? "border-ink" : "border-transparent",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/tools"
                  className="block border-l-2 border-transparent py-5 pl-4 font-display text-3xl tracking-[-0.02em] text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  All tools
                </Link>
              </li>
            </ul>
          </nav>

          <div className="shrink-0 border-t border-line px-5 py-5 sm:px-8">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
              <span>{site.issue}</span>
              <span>{site.issueDate}</span>
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
