// GitHub Pages publishes this repository under /EmcodeNews.
// Deriving the prefix from NODE_ENV (instead of next.config `env`) keeps it
// working even when CI tools replace or ignore next.config.ts.
const basePath = process.env.NODE_ENV === "production" ? "/EmcodeNews" : "";

export function withBase(path: string) {
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
