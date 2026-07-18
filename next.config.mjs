/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // The Workers runtime has no sharp-based optimizer. Revisit if we adopt
    // Cloudflare Images; see docs/sessions/2026-07-17-dependency-migration-plan.md.
    unoptimized: true,
  },
};

export default nextConfig;
