/** @type {import('next').NextConfig} */

const repo = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig = {
  output: "export",
  basePath: repo,
  assetPrefix: repo,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
};

export default nextConfig;
