import { inboundContent } from "../content/inboundContent";

const page = inboundContent.home.enquiry;

export default function InboundJourneyOptions() {
  return (
    <section className="section section-soft journey-options-section" id="enquiry">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{page.eyebrow}</span>
          <h2>{page.title}</h2>
          <p>{page.copy}</p>
        </div>
        <div className="journey-options-grid">
          <article className="journey-option-card journey-option-primary reveal">
            <figure className="consultation-visual">
              <img src="/images/international/planning-video-call.png" alt="Traveller discussing a trip planning call with a travel consultant by video" loading="lazy" />
            </figure>
            <div className="journey-option-body">
              <h3>{page.primary.title}</h3>
              <ul className="plain-list">
                {page.primary.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <a className="btn btn-primary btn-full" href={page.primary.href} data-analytics-event="consultation_click" data-analytics-location="enquiry">{page.primary.cta}</a>
              <p className="option-reassurance">{page.primary.reassurance}</p>
            </div>
          </article>
          <article className="journey-option-card journey-option-secondary reveal">
            <span className="option-icon" aria-hidden="true">Mail</span>
            <h3>{page.secondary.title}</h3>
            <p>{page.secondary.copy}</p>
            <a className="btn btn-light btn-full" href={page.secondary.href}>{page.secondary.cta}</a>
            <div className="option-chips" aria-label="Information requested in the travel enquiry form">
              {page.secondary.chips.map((chip) => <span key={chip}>{chip}</span>)}
            </div>
          </article>
        </div>
        <p className="journey-options-note reveal">{page.reassurance}</p>
      </div>
    </section>
  );
}
