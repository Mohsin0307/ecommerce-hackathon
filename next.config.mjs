/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '**'
            },
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
                pathname: '**'
            }
        ]
    }
};

export default nextConfig;
