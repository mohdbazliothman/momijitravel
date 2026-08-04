import { absoluteUrl, siteUrl } from "./content/siteContent";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/en/", "/ms/", "/images/"],
      disallow: ["/api/", "/admin/"],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteUrl,
  };
}
