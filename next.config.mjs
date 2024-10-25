// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "*.behance.net", // Allows all subdomains of behance.net
        },
        {
          protocol: "https",
          hostname: "benhace.net",
        },
        {
          protocol: "http",
          hostname: "benhace.net",
        },
      ],
    },
  };
  
  export default nextConfig;
  