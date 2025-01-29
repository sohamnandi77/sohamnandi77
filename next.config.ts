import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dz7vrcmfw/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "demo.magic-portfolio.com",
      },
      {
        protocol: "https",
        hostname: "*.sohamnandi.com",
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/:all*(css|js|svg|jpg|png|webp|gif|jpeg|avif)",
  //       locale: false,
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=84600, must-revalidate",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
