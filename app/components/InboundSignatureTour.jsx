import Breadcrumbs from "./Breadcrumbs";
import InboundEnquiryForm from "./InboundEnquiryForm";
import InboundShell from "./InboundShell";
import { inboundContent, inboundRoutes } from "../content/inboundContent";

const page = inboundContent.signatureTour;

function ListBlock({ title, items }) {
  return (
    <article className="feature-card reveal">
      <span>{title.slice(0, 2).toUpperCase()}</span>
      <h3>{title}</h3>
      <ul className="plain-list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}

export default function InboundSignatureTour() {
  return (
    <InboundShell>
      <main>
        <Breadcrumbs
          items={[
            { name: "International Tours", url: inboundRoutes.home },
            { name: page.h1, url: page.route },
          ]}
        />
        <section className="tour-hero">
          <div className="container inbound-hero-grid">
            <div className="inbound-hero-copy">
              <span className="eyebrow reveal">{page.eyebrow}</span>
              <h1 className="reveal">{page.h1}</h1>
              <p className="reveal">{page.heroCopy}</p>
              <div className="hero-actions reveal">
                <a className="btn btn-primary" href="#tour-enquiry">Start Planning My Journey</a>
                <a className="btn btn-light" href={inboundRoutes.home}>Back to Malaysia Tours</a>
              </div>
            </div>
            <aside className="inbound-journey-card reveal">
              <span>Route emphasis</span>
              <h3>Malaysia first</h3>
              <p>Malaysia is the main destination, largest travel component and principal entry point.</p>
            </aside>
          </div>
        </section>

        <section className="section">
          <div className="container tour-overview-grid">
            <article className="tour-overview reveal">
              <span className="eyebrow">Tour overview</span>
              <h2>A Three-Country Journey Built Around Malaysia</h2>
              <p>{page.overview}</p>
            </article>
            <aside className="tour-facts reveal">
              <div><strong>Number of days</strong><span>{page.duration}</span></div>
              <div><strong>Countries</strong><span>{page.route.join(" / ")}</span></div>
              <div><strong>City route</strong><span>{page.cityRoute}</span></div>
            </aside>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Day-by-day structure</span>
              <h2>Itinerary Framework</h2>
              <p>Exact day count and city sequence are not published yet. This structure shows how the journey should be planned without inventing final package details.</p>
            </div>
            <div className="timeline-grid">
              <article className="reveal"><b>01</b><h3>Arrival in Malaysia</h3><p>Begin the journey in Malaysia, with arrival airport and first city to be confirmed.</p></article>
              <article className="reveal"><b>02</b><h3>Malaysia Main Journey</h3><p>Allocate the largest itinerary share to Malaysia, including city, heritage, culture, food and nature options.</p></article>
              <article className="reveal"><b>03</b><h3>Singapore Extension</h3><p>Add a compact Singapore component after the Malaysia core, subject to route and transport confirmation.</p></article>
              <article className="reveal"><b>04</b><h3>Thailand Extension</h3><p>Complete the regional journey with a selected Thailand extension based on traveller interest and flight access.</p></article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Destination highlights</span>
              <h2>Malaysia Leads the Experience</h2>
            </div>
            <div className="feature-grid">
              <ListBlock title="Malaysia Highlights" items={page.malaysiaHighlights} />
              <ListBlock title="Singapore Highlights" items={page.singaporeHighlights} />
              <ListBlock title="Thailand Highlights" items={page.thailandHighlights} />
            </div>
          </div>
        </section>

        <section className="section section-red-tint">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Package planning notes</span>
              <h2>Inclusions, Exclusions and Travel Logistics</h2>
            </div>
            <div className="feature-grid">
              <ListBlock title="Package Inclusions" items={page.inclusions} />
              <ListBlock title="Package Exclusions" items={page.exclusions} />
              <article className="feature-card reveal"><span>AC</span><h3>Accommodation</h3><p>{page.accommodation}</p></article>
              <article className="feature-card reveal"><span>TR</span><h3>Transport</h3><p>{page.transport}</p></article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container tour-two-col">
            <div className="reveal">
              <span className="eyebrow">Traveller fit</span>
              <h2>Suitable Traveller Profiles</h2>
              <ul className="trust-list">
                {page.suitableFor.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="reveal">
              <span className="eyebrow">Customisation</span>
              <h2>What Can Be Adjusted</h2>
              <ul className="trust-list">
                {page.customisation.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container faq-wrap">
            <div className="section-head reveal">
              <span className="eyebrow">FAQ</span>
              <h2>Questions About This Route</h2>
            </div>
            <div className="faq-list">
              {page.faqs.map(([question, answer]) => (
                <article className="faq-item open reveal" key={question}>
                  <button type="button" aria-expanded="true">{question}</button>
                  <div><p>{answer}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Related Malaysia packages</span>
              <h2>Build the Regional Trip From a Malaysia Base</h2>
            </div>
            <div className="style-grid">
              {page.related.map((item) => (
                <article className="reveal" key={item}><h3>{item}</h3><p>Content placeholder. Final page and package details should be confirmed before publication as a standalone package.</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="tour-enquiry">
          <div className="container enquiry-grid">
            <div className="section-head contact-head reveal">
              <span className="eyebrow">Plan this journey</span>
              <h2>Start Planning My Journey</h2>
              <p>Tell us your arrival country, preferred route and group profile. We will confirm the practical next steps without publishing unconfirmed prices or dates.</p>
            </div>
            <div className="reveal">
              <InboundEnquiryForm compact />
            </div>
          </div>
        </section>
      </main>
    </InboundShell>
  );
}
