/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverComponentsExternalPackages: ["mongoose"],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      domains: ['utfs.io'],
      remotePatterns: [
        { protocol: "https", hostname: "img.clerk.com" },
        { protocol: "https", hostname: "images.clerk.dev" },
        { protocol: "https", hostname: "uploadthing.com" },
        { protocol: "https", hostname: "placehold.co" },
      ],
    },
  };
  
  export default nextConfig;