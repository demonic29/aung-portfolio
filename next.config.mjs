/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      dangerouslyAllowSVG: true,
      domains: ['res.cloudinary.com', 'cdn2.thecatapi.com', 'firebasestorage.googleapis.com', 'i.pinimg.com', 'via.placeholder.com'],
    },
  };
  
  export default nextConfig;
  
  