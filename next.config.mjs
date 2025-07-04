/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddecor-rugs.s3.ap-south-1.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "navneet-studyperk.s3.ap-south-1.amazonaws.com",
        pathname: "**",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },


};

export default nextConfig;
