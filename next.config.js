/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  compiler: {
    removeConsole: true,
  },
  redirects: async () => {
    return [
      // Add your redirects here
      {
        source:
          "/unlocking-growth-your-go-to-digital-marketing-freelancer-in-india",
        destination:
          "/blog/unlocking-growth-your-go-to-digital-marketing-freelancer-in-india",
        permanent: true,
      },
      {
        source: "/how-to-fix-public-storage-link-already-exists-in-laravel-10",
        destination:
          "/blog/how-to-fix-public-storage-link-already-exists-in-laravel-10",
        permanent: true,
      },
      {
        source: "/exploring-various-approaches-to-develop-laravel-applications",
        destination:
          "/blog/exploring-various-approaches-to-develop-laravel-applications",
        permanent: true,
      },
      {
        source: "/mastering-on-page-seo-your-ultimate-checklist",
        destination: "/blog/mastering-on-page-seo-your-ultimate-checklist",
        permanent: true,
      },
      // Add more redirects as needed
    ];
  },
};

module.exports = withContentlayer({ ...nextConfig });
