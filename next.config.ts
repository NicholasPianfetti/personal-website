import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['three'],
  eslint: {
    // Ignore ESLint errors during production builds
    ignoreDuringBuilds: true,
  },
  turbopack: {
    // Ensure Next selects this workspace as the root when multiple lockfiles exist
    root: __dirname,
  },
};

export default nextConfig;
