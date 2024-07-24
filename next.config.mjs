// next.config.mjs
import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
});

export default nextConfig;
