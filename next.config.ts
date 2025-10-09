import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "img.freepik.com",
        // hostname: "miro.medium.com",
        // hostname: "cdn.wallpapersafari.com",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
      },
    ],
  },
};

export default nextConfig;
