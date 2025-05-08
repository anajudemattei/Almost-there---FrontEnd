/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "flagcdn.com", // Domínio para bandeiras
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "upload.wikimedia.org", // Domínio para imagens da Wikipedia
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "restcountries.com", // Domínio para outras imagens de países
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
