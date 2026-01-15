/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Ensure Turbopack uses the project folder as the workspace root
    root: './',
  },
};

export default nextConfig;
