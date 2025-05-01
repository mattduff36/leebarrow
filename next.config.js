/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure all pages are static
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig 