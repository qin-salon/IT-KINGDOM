/* eslint-disable @typescript-eslint/no-var-requires */
const withOptimizedImages = require("next-optimized-images");
const { resolve } = require("path");

module.exports = withOptimizedImages({
  // next-optimized-images
  webpack: (config) => {
    config.resolve.alias["@img"] = resolve(__dirname, "public/img");
    return config;
  },

  // Next.js
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
});
