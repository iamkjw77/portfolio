import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Next.js를 정적 사이트로 변환
  trailingSlash: true, // 모든 페이지 URL이 슬래시(/)로 끝나도록 강제(GitHub Pages 디렉터리 기반 라우팅에 필요)
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
