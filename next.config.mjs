/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384, 420, 500],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    dangerouslyAllowSVG: false,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
