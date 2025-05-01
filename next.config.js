/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['leebarrow.vercel.app'],
  },
  output: 'standalone',
}

module.exports = nextConfig 