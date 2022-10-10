/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: '/2022'
  images: {
    domains: ['camo.qiitausercontent.com'],
  },
}

module.exports = nextConfig
