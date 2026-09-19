import Script from "next/script";

// Public site token from the Cloudflare Web Analytics dashboard. It only
// identifies which site the beacon reports to, so it is safe in client HTML.
const CF_BEACON_TOKEN = "09bfeef01bcd4108929d89d76dbe4f24";

/**
 * Loads the Cloudflare Web Analytics beacon after the page is interactive.
 * Skipped outside production builds so local dev traffic never reaches the
 * dashboard.
 */
export const CloudflareWebAnalytics = () => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      type="module"
      data-cf-beacon={JSON.stringify({ token: CF_BEACON_TOKEN })}
    />
  );
};
