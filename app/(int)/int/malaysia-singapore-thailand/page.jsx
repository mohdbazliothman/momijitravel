import InboundSignatureTour from "../../../components/InboundSignatureTour";
import StructuredData from "../../../components/StructuredData";
import {
  breadcrumbSchema,
  faqSchema,
  inboundContent,
  inboundMetadata,
  inboundOrganizationSchema,
  inboundRoutes,
  touristTripSchema,
} from "../../../content/inboundContent";

const page = inboundContent.signatureTour;

export const metadata = inboundMetadata(page);

export default function MalaysiaSingaporeThailandPage() {
  const schemas = [
    inboundOrganizationSchema(page.description),
    touristTripSchema(page),
    faqSchema(page),
    breadcrumbSchema([
      { name: "International Tours", url: inboundRoutes.home },
      { name: "Malaysia, Singapore and Thailand Tour", url: inboundRoutes.malaysiaSingaporeThailand },
    ]),
  ];

  return (
    <>
      <InboundSignatureTour />
      <StructuredData data={schemas} />
    </>
  );
}
