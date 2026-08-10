import Breadcrumbs from "../../../components/Breadcrumbs";
import InboundShell from "../../../components/InboundShell";
import StructuredData from "../../../components/StructuredData";
import { breadcrumbSchema, inboundRoutes, inboundWhatsAppLink } from "../../../content/inboundContent";
import { absoluteUrl, companyName, siteUrl } from "../../../content/siteContent";

const pageTitle = "Thank You | Momiji Travel & Tours";
const pageDescription =
  "Thank you for contacting Momiji Travel & Tours. Our travel consultants will review your enquiry and contact you within 24-48 hours.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: absoluteUrl(inboundRoutes.thankYou),
  },
};

const nextSteps = [
  {
    title: "We review your enquiry",
    copy: "Our team will review your travel dates, group size, interests and requirements.",
  },
  {
    title: "We contact you",
    copy: "A travel consultant will get in touch within 24-48 hours.",
  },
  {
    title: "We plan your journey",
    copy: "We'll help customise your itinerary, transportation, accommodation and experiences around your needs.",
  },
];

export default function InboundThankYouPage() {
  const crumbs = [
    { name: "International Tours", url: inboundRoutes.home },
    { name: "Thank You", url: inboundRoutes.thankYou },
  ];

  const urgentWhatsAppLink = inboundWhatsAppLink(
    "Hi Momiji, I have submitted an international enquiry and need urgent assistance."
  );

  return (
    <InboundShell>
      <main>
        <Breadcrumbs items={crumbs} />
        <section className="section section-soft thank-you-section">
          <div className="container thank-you-wrap">
            <div className="thank-you-card reveal">
              <span className="eyebrow">ENQUIRY RECEIVED</span>
              <h1>Thank you. Your Malaysia journey starts here.</h1>
              <p>
                We have received your travel enquiry. One of our Momiji Travel consultants will review your request and contact you within
                24-48 hours to help you plan your journey.
              </p>
              <p className="thank-you-soft-copy">
                You do not need to submit another form. If anything is urgent, you may WhatsApp our team directly.
              </p>

              <div className="thank-you-actions" aria-label="Next actions">
                <a className="btn btn-primary" href="/int/#malaysia-tours">
                  Explore Malaysia Tours
                </a>
                <a className="btn btn-light" href={inboundRoutes.home}>
                  Return to Homepage
                </a>
              </div>

              <p className="thank-you-urgent">
                Need urgent assistance?{" "}
                <a href={urgentWhatsAppLink} target="_blank" rel="noopener noreferrer" data-analytics-location="enquiry">
                  WhatsApp Momiji Travel
                </a>
              </p>
            </div>

            <aside className="thank-you-confidence reveal" aria-labelledby="confidence-title">
              <h2 id="confidence-title">Plan with confidence.</h2>
              <p>
                {companyName} is a MOTAC licensed Malaysia travel agency. Our team will help you plan with clear communication,
                practical pacing and Muslim-friendly arrangements where suitable.
              </p>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">NEXT STEPS</span>
              <h2>What happens next?</h2>
            </div>
            <div className="thank-you-steps">
              {nextSteps.map((step, index) => (
                <article className="thank-you-step reveal" key={step.title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <StructuredData data={breadcrumbSchema(crumbs)} />
    </InboundShell>
  );
}
