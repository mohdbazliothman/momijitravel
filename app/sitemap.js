import { absoluteUrl, localeRoutes } from "./content/siteContent";

export const dynamic = "force-static";

export default function sitemap() {
  const alternates = {
    languages: {
      "en-MY": absoluteUrl(localeRoutes.home.en),
      "ms-MY": absoluteUrl(localeRoutes.home.ms),
      "x-default": absoluteUrl("/"),
    },
  };

  return [
    {
      url: absoluteUrl(localeRoutes.home.en),
      lastModified: new Date("2026-08-05"),
      changeFrequency: "weekly",
      priority: 1,
      alternates,
    },
    {
      url: absoluteUrl(localeRoutes.home.ms),
      lastModified: new Date("2026-08-05"),
      changeFrequency: "weekly",
      priority: 1,
      alternates,
    },
  ];
}
