/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'leebarrow.vercel.app',
      },
    ],
  },
  trailingSlash: true,
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: [],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  }
}

module.exports = nextConfig 