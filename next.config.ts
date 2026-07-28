import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    unoptimized: true,
  },
  devIndicators: false,
  experimental: {
    viewTransition: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
