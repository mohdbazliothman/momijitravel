import {
  absoluteUrl,
  companyName,
  content,
  email,
  localeRoutes,
  locales,
  motacLicense,
  phoneDisplay,
  siteUrl,
} from "../content/siteContent";

export function metadataForLocale(locale) {
  const page = content[locale];
  const canonical = absoluteUrl(localeRoutes.home[locale]);
  const title = page.metadata.title;
  const description = page.metadata.description;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "en-MY": absoluteUrl(localeRoutes.home.en),
        "ms-MY": absoluteUrl(localeRoutes.home.ms),
        "x-default": absoluteUrl("/"),
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: companyName,
      locale: page.metadata.ogLocale,
      alternateLocale: locale === "en" ? ["ms_MY"] : ["en_MY"],
      images: [
        {
          url: absoluteUrl("/images/hero-lyg.jpg"),
          width: 1920,
          height: 1080,
          alt: locale === "en" ? "Scenic travel destination arranged by Momiji Travel" : "Destinasi percutian indah yang disusun oleh Momiji Travel",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/images/hero-lyg.jpg")],
    },
  };
}

export function structuredDataForLocale(locale) {
  const page = content[locale];
  const url = absoluteUrl(localeRoutes.home[locale]);
  const lang = locales[locale].htmlLang;
  const faqEntities = page.faq.items.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  }));

  return [
    {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      "@id": `${siteUrl}/#organization`,
      name: companyName,
      url: siteUrl,
      logo: absoluteUrl("/images/momiji-logo.jpg"),
      image: absoluteUrl("/images/momiji-team-desktop.jpg"),
      description: page.metadata.description,
      telephone: phoneDisplay,
      email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "No 52-1, Jalan Niaga Enggang 1, Taman Enggang",
        addressLocality: "Kampong Gangsa",
        postalCode: "76100",
        addressCountry: "MY",
      },
      identifier: motacLicense,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: companyName,
      inLanguage: lang,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.metadata.title,
      description: page.metadata.description,
      inLanguage: lang,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      url,
      inLanguage: lang,
      mainEntity: faqEntities,
    },
  ];
}
