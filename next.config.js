/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
};

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx']
});

module.exports = withNextra(nextConfig);
