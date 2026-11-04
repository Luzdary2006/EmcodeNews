import type { NextConfig } from "next";

const repo = "EmcodeNews"; // el nombre real
// En local el sitio se sirve en la raíz (http://localhost:3000).
// En el build de produccion se publica bajo /EmcodeNews (GitHub Pages).
const basePath = process.env.NODE_ENV === "production" ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;