import InboundHome from "../../components/InboundHome";
import StructuredData from "../../components/StructuredData";
import {
  breadcrumbSchema,
  inboundContent,
  inboundMetadata,
  inboundOrganizationSchema,
  inboundRoutes,
} from "../../content/inboundContent";

const page = inboundContent.home;

export const metadata = inboundMetadata(page);

export default function InternationalHomePage() {
  const schemas = [
    inboundOrganizationSchema(page.description),
    breadcrumbSchema([
      { name: "International Tours", url: inboundRoutes.home },
    ]),
  ];

  return (
    <>
      <InboundHome />
      <StructuredData data={schemas} />
    </>
  );
}
