import LocalizedHome from "../../components/LocalizedHome";
import { getLocalizedContent } from "../../content/siteContent";
import { metadataForLocale, structuredDataForLocale } from "../../lib/seo";

export const metadata = metadataForLocale("ms");

export default function MalayHomePage() {
  const pageContent = getLocalizedContent("ms");
  const jsonLd = structuredDataForLocale("ms");

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
