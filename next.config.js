/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    MONGO_URI : "mongodb+srv://ajay:g3p8thFmL8FYNWdN@cluster0.scyujjl.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
