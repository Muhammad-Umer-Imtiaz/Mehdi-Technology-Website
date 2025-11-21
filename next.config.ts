/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"], // serve next-gen formats
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow any HTTPS images
      },
    ],
  },

  experimental: {
    legacyBrowsers: false,         // avoid legacy JS → faster
    optimizeCss: true,             // removes unused CSS
    optimizePackageImports: true,  // reduce JS bundle size
  },

  compress: true, // gzip + brotli compression
};

module.exports = nextConfig;
