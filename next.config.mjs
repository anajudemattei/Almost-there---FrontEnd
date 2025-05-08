/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "flagcdn.com", 
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org", 
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "restcountries.com",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;