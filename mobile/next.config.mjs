/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [__dirname, 'styles'],
  },
};

export default nextConfig;
