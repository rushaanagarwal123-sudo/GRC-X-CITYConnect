/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Required for GitHub Pages deployment
    // Replace with your repository name if it changes
    basePath: '/GRC-X-CITYConnect',
    assetPrefix: '/GRC-X-CITYConnect',
};

export default nextConfig;
