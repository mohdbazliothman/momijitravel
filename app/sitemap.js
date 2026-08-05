import { absoluteUrl, localeRoutes } from "./content/siteContent";
import { inboundRoutes } from "./content/inboundContent";

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
    {
      url: absoluteUrl(inboundRoutes.home),
      lastModified: new Date("2026-08-05"),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: absoluteUrl(inboundRoutes.home),
        },
      },
    },
    {
      url: absoluteUrl(inboundRoutes.bookPlanningCall),
      lastModified: new Date("2026-08-05"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: absoluteUrl(inboundRoutes.bookPlanningCall),
        },
      },
    },
    {
      url: absoluteUrl(inboundRoutes.travelEnquiry),
      lastModified: new Date("2026-08-05"),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: absoluteUrl(inboundRoutes.travelEnquiry),
        },
      },
    },
    {
      url: absoluteUrl(inboundRoutes.malaysiaSingaporeThailand),
      lastModified: new Date("2026-08-05"),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: absoluteUrl(inboundRoutes.malaysiaSingaporeThailand),
        },
      },
    },
  ];
}
