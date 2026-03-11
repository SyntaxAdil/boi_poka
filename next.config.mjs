/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // to remove dev indicators from the ui bottom-- optional
  devIndicators:false ,
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'i.ibb.co.com',
    },
    {
      protocol: 'https',
      hostname: 'i.ibb.co', 
    },
    {
      protocol: 'https',
      hostname: 'covers.openlibrary.org', 
    },
  ],
},
};

export default nextConfig;
