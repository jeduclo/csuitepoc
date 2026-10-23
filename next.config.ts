// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Trailing slash makes routing cleaner on Vercel
  trailingSlash: false,

  // Images: allow external sources if you add any later
  images: {
    unoptimized: false,
  },

  // Home and About pages were removed — send visitors straight to the dashboard
  async redirects() {
    return [
      { source: "/",      destination: "/cfo", permanent: false },
      { source: "/about", destination: "/cfo", permanent: true  },
    ];
  },
};

export default nextConfig;