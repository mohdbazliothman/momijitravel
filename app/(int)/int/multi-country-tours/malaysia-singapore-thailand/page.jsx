import InboundSignatureTour from "../../../../components/InboundSignatureTour";
import {
  breadcrumbSchema,
  faqSchema,
  inboundContent,
  inboundMetadata,
  inboundOrganizationSchema,
  inboundRoutes,
  touristTripSchema,
} from "../../../../content/inboundContent";

const page = inboundContent.signatureTour;

export const metadata = inboundMetadata(page);

export default function MalaysiaSingaporeThailandTourPage() {
  const schemas = [
    inboundOrganizationSchema(page.description),
    breadcrumbSchema([
      { name: "International Tours", url: inboundRoutes.home },
      { name: "Multi-Country Tours", url: `${inboundRoutes.home}#signature-tour` },
      { name: page.h1, url: inboundRoutes.malaysiaSingaporeThailand },
    ]),
    touristTripSchema(page),
    faqSchema(page),
  ];

  return (
    <>
      <InboundSignatureTour />
      {schemas.map((schema) => (
        <script
          key={schema["@id"] || schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
