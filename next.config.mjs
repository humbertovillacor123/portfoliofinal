import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

/** @type {import('next').NextConfig} */
const nextConfigProd = {
  output: 'export',
  basePath: '/portfoliofinal', // use your repository name here
  assetPrefix: '/portfoliofinal/', // for assets and images
  images: {
    loader: 'custom',
    loaderFile: './src/lib/image.loader.js',
  },
};

const nextConfigDev = {
  // No basePath or assetPrefix in development
};

const nextConfig = env === 'development' ? nextConfigDev : nextConfigProd;

export default nextConfig;
