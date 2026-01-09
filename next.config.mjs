/** @type {import('next').NextConfig} */
const nextConfig = {

     images: {
          domains: ["fra.cloud.appwrite.io"], // 👈 whitelist Appwrite CDN
     },

};

export default nextConfig;
