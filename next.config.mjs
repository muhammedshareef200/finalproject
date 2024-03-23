/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['utfs.io'],
    remotePatterns: [/^https:\/\/utfs\.io/],
  },
};

export default nextConfig;
