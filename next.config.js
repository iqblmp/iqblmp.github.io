/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["placehold.co"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
