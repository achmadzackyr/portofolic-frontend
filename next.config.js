/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_BACKEND: process.env.NEXT_PUBLIC_API_BACKEND,
    NEXT_PUBLIC_AWS_S3: process.env.NEXT_PUBLIC_AWS_S3
  }
};

module.exports = nextConfig;
