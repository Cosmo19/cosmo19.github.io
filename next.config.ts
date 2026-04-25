import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cosmo19', // must be exactly as it appears in GitHub
  assetPrefix: '/cosmo19', // add this too
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

export default nextConfig;
