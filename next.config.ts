import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',

  // 👇 Tell Next.js your app is served from /beta
  // basePath: '/beta',
  // assetPrefix: '/beta',

  // 👇 Needed for static hosting (disables server image optimization)
  images: { unoptimized: true },

  // 👇 Optional, helps static servers handle directories
  trailingSlash: true,
};

export default nextConfig;
