import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        // Allow all image paths from the backend (e.g. /tmp/uploads/..., /uploads/...)
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
