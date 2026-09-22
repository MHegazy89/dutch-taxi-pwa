/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === 'development',
  workboxOptions: {
    disableDevLogs: true,
  },
});

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Enable WebAssembly support for sql.js
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
      layers: true,
    };

    // Fix for sql.js fs module in client-side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }

    return config;
  },
};

module.exports = withPWA(nextConfig);
