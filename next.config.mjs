/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 'images.pexels.com', 'avatars.githubusercontent.com'],
      },
      env: {
        NEXTAUTH_URL: 'http://localhost:3000', // Replace with your actual URL
      },
};

export default nextConfig;
