/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/int/multi-country-tours/malaysia-singapore-thailand/",
        destination: "/int/malaysia-singapore-thailand/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
