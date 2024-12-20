/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["."], // Reference .eslintrc.json
    ignoreDuringBuilds: false // Enable ESLint errors during production builds
  },
  images: {
    remotePatterns: [
      {
        hostname: 'lh3.googleusercontent.com',
      },
      {
        hostname: 'images.pexels.com',
      },
      {
        hostname: 'avatars.githubusercontent.com',
      },
      {
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  env: {
    NEXTAUTH_URL: 'https://hubpost-app.vercel.app',
    
    //http://localhost:3000
    CLOUDINARY_UPLOAD_PRESET: 'bgtdnw0r',
  },
};

export default nextConfig;
