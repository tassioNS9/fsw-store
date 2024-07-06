/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io"],
  },
  // serve para ativar a serveractions para o stripe
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;