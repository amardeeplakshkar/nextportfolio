/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const withTM = require('next-transpile-modules')(['gsap']);module.exports = withTM();
module.exports = {
  reactStrictMode: true, 
  images: {
    hostname: ['res.cloudinary.com'],
  },
}

module.exports = nextConfig
