import InboundFormPage from "../../../components/InboundFormPage";
import StructuredData from "../../../components/StructuredData";
import {
  breadcrumbSchema,
  inboundContent,
  inboundMetadata,
  inboundRoutes,
} from "../../../content/inboundContent";

const page = inboundContent.travelEnquiry;

export const metadata = inboundMetadata(page);

export default function TravelEnquiryPage() {
  const schema = breadcrumbSchema([
    { name: "International Tours", url: inboundRoutes.home },
    { name: "Tell Us About Your Journey", url: inboundRoutes.travelEnquiry },
  ]);

  return (
    <>
      <InboundFormPage page={page} type="travel-enquiry" />
      <StructuredData data={schema} />
    </>
  );
}
