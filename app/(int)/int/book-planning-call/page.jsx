import InboundFormPage from "../../../components/InboundFormPage";
import {
  breadcrumbSchema,
  inboundContent,
  inboundMetadata,
  inboundRoutes,
} from "../../../content/inboundContent";

const page = inboundContent.planningCall;

export const metadata = inboundMetadata(page);

export default function BookPlanningCallPage() {
  const schema = breadcrumbSchema([
    { name: "International Tours", url: inboundRoutes.home },
    { name: "Book a Free Trip Planning Call", url: inboundRoutes.bookPlanningCall },
  ]);

  return (
    <>
      <InboundFormPage page={page} type="planning-call" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
