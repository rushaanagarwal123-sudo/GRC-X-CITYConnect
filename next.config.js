/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Required for GitHub Pages deployment
    // Replace with your repository name if it changes
    basePath: isProd ? '/GRC-X-CITYConnect' : '',
    assetPrefix: isProd ? '/GRC-X-CITYConnect' : '',
};

export default nextConfig;
