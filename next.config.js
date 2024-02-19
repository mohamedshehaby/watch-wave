/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "image.tmdb.org",
    //     port: "",
    //     pathname: "/t/p/**",
    //   },
    // ],
  },

  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = nextConfig;
