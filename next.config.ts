import type { NextConfig } from "next";
import { contentRedirects } from "./lib/seo/redirects";

const nextConfig: NextConfig = {
  // Enable static optimization
  output: 'standalone',

  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression
  compress: true,

  async redirects() {
    return [
      // Canonicalize the *.vercel.app production alias to the primary domain
      // (www + http are already 308-redirected at the Vercel domain level).
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'devicecheck.vercel.app' }],
        destination: 'https://devicecheck.io/:path*',
        permanent: true,
      },
      // Deleted content pages -> relevant tool / kept page (lean-pivot prune).
      ...contentRedirects,
    ];
  },

  // Headers for SEO, security and performance
  async headers() {
    return [
      // Embed routes: allow iframe embedding
      {
        source: '/embed/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Content-Security-Policy', value: "frame-ancestors *" },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'no-referrer' },
        ],
      },
      // All other routes: default security
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'geolocation=(), interest-cohort=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
