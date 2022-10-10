/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['camo.qiitausercontent.com'],
  },
  assetPrefix: '/2022',
}

module.exports = nextConfig
