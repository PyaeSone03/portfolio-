import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder project images are served from github.com.
    remotePatterns: [{ protocol: "https", hostname: "github.com" }],
  },
};

export default nextConfig;
