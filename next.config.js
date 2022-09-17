/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    i18n: {
        locales: ['tr', 'en'],
        defaultLocale: 'en',
        localeDetection: true,
    },
    images: {
        domains: ['cdn.hipicon.com'],
    },
}

module.exports = nextConfig
