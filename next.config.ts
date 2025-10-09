import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: '/docs/intro',
      },
      {
        source: '/docs/:path((?!.*\\.).*)',
        destination: '/docs/:path.html',
      },
    ];
  },
};

export default nextConfig;
