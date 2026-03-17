/** @type {import('next').NextConfig} */

const repo = "cardio-next";

const nextConfig = {
  output: "export",
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
