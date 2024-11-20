/** @type {import('next').NextConfig} */
const UPLOADTHING_APP_ID = process.env.UPLOADTHING_APP_ID;
const nextConfig = {
    output:'export',
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "utfs.io",
            pathname: `/a/<${UPLOADTHING_APP_ID}>/*`,
          },
        ],
      },
};

export default nextConfig;
