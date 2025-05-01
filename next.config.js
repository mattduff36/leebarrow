/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
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
  distDir: 'out'
}

module.exports = nextConfig 