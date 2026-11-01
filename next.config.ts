import type { NextConfig } from "next";

const repo = "EmcodeNews"; // el nombre real
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;