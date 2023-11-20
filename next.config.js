const withMDX = require('@next/mdx')()
/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.w3schools.com',
          port: '',
        //   pathname: '/account123/**',
        },
      ],
    },
  }
  module.exports = withMDX(nextConfig)