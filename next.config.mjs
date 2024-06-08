/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.radio-canada.ca',
              port: '',
            },
            {
              protocol: 'https',
              hostname: 'images.radio-canada.ca/',
              port: '',
            },
        ],
    },
};



export default nextConfig;
