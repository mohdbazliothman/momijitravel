import Breadcrumbs from "./Breadcrumbs";
import InboundSecureForm from "./InboundSecureForm";
import InboundShell from "./InboundShell";
import { inboundRoutes } from "../content/inboundContent";

export default function InboundFormPage({ page, type }) {
  const crumbs = [
    { name: "International Tours", url: inboundRoutes.home },
    { name: page.h1, url: page.route },
  ];

  return (
    <InboundShell>
      <main>
        <Breadcrumbs items={crumbs} />
        <section className="section section-soft planning-page-hero">
          <div className="container planning-page-grid">
            <div className="section-head contact-head reveal">
              <span className="eyebrow">{page.eyebrow}</span>
              <h1>{page.h1}</h1>
              <p>{page.intro}</p>
              {page.copy && <p>{page.copy}</p>}
              {page.note && <p className="planning-note">{page.note}</p>}
            </div>
            <div className="planning-summary-card reveal">
              <strong>What happens next?</strong>
              <ul className="plain-list">
                <li>Momiji Travel reviews your request.</li>
                <li>Our team follows up by email or WhatsApp.</li>
                <li>Final itinerary and pricing are confirmed after consultation.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container form-page-wrap reveal">
            <InboundSecureForm type={type} page={page} />
          </div>
        </section>
      </main>
    </InboundShell>
  );
}
