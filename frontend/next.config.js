/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],   // to allow CDN urls working with Image component
  },
}

module.exports = nextConfig
