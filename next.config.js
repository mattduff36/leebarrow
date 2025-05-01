/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  // Disable image optimization since we're using static export
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 