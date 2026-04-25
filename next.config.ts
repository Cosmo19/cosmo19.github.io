import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/', // must match your GitHub repo name
  images: {
    unoptimized: true, // required for static export
  },
};

module.exports = nextConfig;

export default nextConfig;
