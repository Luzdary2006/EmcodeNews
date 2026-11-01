import type { NextConfig } from "next";

const repo = "EmcodeNews"; // cámbialo por el nombre real

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;