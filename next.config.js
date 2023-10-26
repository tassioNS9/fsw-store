/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fsw-store.s3.sa-east-1.amazonaws.com"],
  },
  // serve para ativar a serveractions para o stripe
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;