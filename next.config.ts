import type { NextConfig } from "next";

const config: NextConfig = {
  images: {
    deviceSizes: [320, 500, 768, 1024, 1200, 1680, 2560],
    imageSizes: [60, 220],
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default config;

