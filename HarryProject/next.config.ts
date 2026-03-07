import type { NextConfig } from "next";

const nextConfig: NextConfig = {


  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sweethome-backend-70n7.onrender.com",
        pathname: "/**",
      },
       {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      }
    ],
  },
};

export default nextConfig;