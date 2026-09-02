import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 430, 640, 768, 828, 1024, 1280, 1440, 1920],
  },
};

export default nextConfig;
