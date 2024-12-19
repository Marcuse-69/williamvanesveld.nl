/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Enable client-side features
  experimental: {
    serverActions: true
  }
}