module.exports = {
  swcMinify: true,
  images: {
    deviceSizes: [320, 500, 768, 1024, 1200, 1680, 2560],
    imageSizes: [60, 220],
    domains: [],
    path: "/_next/image",
    loader: "default",
  },
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
};
