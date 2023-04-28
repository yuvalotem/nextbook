/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent.ftlv5-1.fna.fbcdn.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'static.xx.fbcdn.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
