/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: '/2022'
  images: {
    domains: ['camo.qiitausercontent.com'],
  },
  swcMinify: true,
}

module.exports = nextConfig
