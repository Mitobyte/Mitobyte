/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  env: {
    SMTP_EMAIL: "allan@mitobyte.com",
    SMTP_PASS: "twnr lgni uawk towm",
  },
};

export default nextConfig;
