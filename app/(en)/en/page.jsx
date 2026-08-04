import LocalizedHome from "../../components/LocalizedHome";
import { getLocalizedContent } from "../../content/siteContent";
import { metadataForLocale, structuredDataForLocale } from "../../lib/seo";

export const metadata = metadataForLocale("en");

export default function EnglishHomePage() {
  const pageContent = getLocalizedContent("en");
  const jsonLd = structuredDataForLocale("en");

  return (
    <>
      <LocalizedHome content={pageContent} />
      {jsonLd.map((schema) => (
        <script
          key={schema["@id"] || schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
