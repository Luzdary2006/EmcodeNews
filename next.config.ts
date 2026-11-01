import type { NextConfig } from "next";

const repo = "EmcodeNews";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;