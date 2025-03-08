import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Next.js를 정적 사이트로 변환
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
};

export default nextConfig;
