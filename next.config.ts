// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/volta-pra-casa",
  trailingSlash: true,
  output: "export", // gera ./out com HTML estático
  images: { unoptimized: true }, // next/image vira <img> no export
};

export default nextConfig;
