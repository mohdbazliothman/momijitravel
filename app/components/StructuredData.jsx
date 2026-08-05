export default function StructuredData({ data }) {
  const items = Array.isArray(data) ? data : [data];

  return items
    .filter(Boolean)
    .map((schema) => (
      <script
        key={schema["@id"] || schema["@type"]}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    ));
}
