import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Next.js를 정적 사이트로 변환
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
