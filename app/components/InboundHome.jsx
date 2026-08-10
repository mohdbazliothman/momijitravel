import InboundJourneyOptions from "./InboundJourneyOptions";
import InboundShell from "./InboundShell";
import LazyYouTubeEmbed from "./LazyYouTubeEmbed";
import MalaysiaDiscoveryGallery from "./MalaysiaDiscoveryGallery";
import { inboundContent, inboundRoutes } from "../content/inboundContent";

const page = inboundContent.home;

export default function InboundHome() {
  return (
    <InboundShell>
      <main id="int-home">
        <section className="inbound-hero">
          <div className="container inbound-hero-grid">
            <div className="inbound-hero-copy">
              <span className="eyebrow reveal">{page.hero.eyebrow}</span>
              <h1 className="reveal">{page.h1}</h1>
              <h2 className="reveal">{page.hero.title}</h2>
              <p className="reveal">{page.hero.copy}</p>
              <div className="hero-actions reveal">
                <a className="btn btn-primary" href={inboundRoutes.bookPlanningCall} data-analytics-event="consultation_click" data-analytics-location="hero">{page.hero.primaryCta}</a>
                <a className="btn btn-light" href="#malaysia-tours">{page.hero.secondaryCta}</a>
              </div>
            </div>
            <aside className="inbound-journey-card reveal">
              <span>Signature regional journey</span>
              <h3>{page.hero.featureTitle}</h3>
              <p>{page.hero.featureCopy}</p>
              <a href={inboundRoutes.malaysiaSingaporeThailand}>Explore the route</a>
            </aside>
          </div>
        </section>

        <section className="inbound-trust-strip" aria-label="Momiji Travel inbound trust points">
          <div className="container inbound-trust-grid">
            {page.trustStrip.map(([title, copy]) => (
              <article className="reveal" key={title}>
                <span aria-hidden="true">{title.slice(0, 2).toUpperCase()}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <MalaysiaDiscoveryGallery />

        <section className="section" id="why-malaysia">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">{page.whyVisit.eyebrow}</span>
              <h2>{page.whyVisit.title}</h2>
              <p>{page.whyVisit.copy}</p>
            </div>
            <div className="int-card-grid">
              {page.whyVisit.items.map((item) => {
                const Card = item.href ? "a" : "article";
                return (
                  <Card className="int-info-card int-photo-card why-link-card reveal" href={item.href} key={item.title}>
                    <img src={item.image} alt={item.alt} loading="lazy" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section destination-video-section">
          <div className="container destination-video-grid">
            <div className="section-head contact-head reveal">
              <span className="eyebrow">{page.destinationVideo.eyebrow}</span>
              <h2>{page.destinationVideo.title}</h2>
              <p>{page.destinationVideo.copy}</p>
              <a className="btn btn-primary" href={page.destinationVideo.href}>{page.destinationVideo.cta}</a>
            </div>
            <div className="destination-video-card reveal">
              <LazyYouTubeEmbed
                videoId={page.destinationVideo.videoId}
                title={page.destinationVideo.iframeTitle}
                thumbnailAlt={page.destinationVideo.thumbnailAlt}
              />
              {/* Business owner should verify final Tourism Malaysia / Visit Malaysia 2026 attribution before launch. */}
              <p>{page.destinationVideo.attribution}</p>
            </div>
          </div>
        </section>

        <section className="section section-red-tint" id="signature-tour">
          <div className="container signature-panel reveal">
            <figure className="signature-visual">
              <img src="/images/international/tour-grand-journey.png" alt="Malaysia Singapore and Thailand grand journey" loading="lazy" />
            </figure>
            <div>
              <span className="eyebrow">{page.signature.eyebrow}</span>
              <h2>{page.signature.title}</h2>
              <p>{page.signature.copy}</p>
              <strong>{page.signature.route}</strong>
            </div>
            <a className="btn btn-primary" href={inboundRoutes.malaysiaSingaporeThailand} data-analytics-location="package" data-analytics-package-name={page.signature.title}>{page.signature.cta}</a>
          </div>
        </section>

        <section className="section" id="malaysia-tours">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">{page.featuredPackages.eyebrow}</span>
              <h2>{page.featuredPackages.title}</h2>
              <p>{page.featuredPackages.copy}</p>
              <p>{page.featuredPackages.secondaryCopy}</p>
            </div>
            <div className="inbound-tour-grid">
              {page.featuredPackages.items.map((item) => (
                <article
                  className={`package-card inbound-tour-card reveal ${item.featured ? "inbound-tour-featured" : ""}`}
                  data-analytics-package-name={item.title}
                  key={item.title}
                >
                  <div className="package-image">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                    <span>{item.badge}</span>
                  </div>
                  <div className="package-body">
                    <h3>{item.title}</h3>
                    <div className="tour-meta">
                      <span>{item.duration}</span>
                      <strong>{item.route}</strong>
                    </div>
                    <p>{item.description}</p>
                    <ul>
                      {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                    <p className="ideal-line"><strong>Ideal for:</strong> {item.idealFor}</p>
                    <a
                      className="btn btn-primary btn-full"
                      href={item.slug}
                      data-analytics-location="package"
                      data-analytics-package-name={item.title}
                    >
                      {item.cta}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="destinations">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">{page.destinations.eyebrow}</span>
              <h2>{page.destinations.title}</h2>
              <p>{page.destinations.copy}</p>
            </div>
            <div className="destination-grid">
              {page.destinations.items.map((item) => (
                <article className="destination-card destination-photo-card reveal" key={item.title}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div>
                    <h3>{item.title}</h3>
                    <strong>{item.descriptor}</strong>
                    <p>{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="travel-styles">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">{page.experiences.eyebrow}</span>
              <h2>{page.experiences.title}</h2>
            </div>
            <div className="style-grid">
              {page.experiences.items.map(([title, copy]) => (
                <article className="reveal" key={title}><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-red-tint melaka-specialist-section" id="melaka-specialist">
          <div className="container melaka-specialist-grid">
            <figure className="melaka-specialist-visual reveal">
              <img src={page.melakaSpecialist.image} alt={page.melakaSpecialist.alt} loading="lazy" />
            </figure>
            <div className="section-head contact-head reveal">
              <span className="eyebrow">{page.melakaSpecialist.eyebrow}</span>
              <h2>{page.melakaSpecialist.title}</h2>
              <p>{page.melakaSpecialist.copy}</p>
              <ul className="plain-list">
                {page.melakaSpecialist.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <a className="btn btn-primary" href={page.melakaSpecialist.href}>{page.melakaSpecialist.cta}</a>
            </div>
          </div>
        </section>

        <section className="section" id="planning-process">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">{page.options.eyebrow}</span>
              <h2>{page.options.title}</h2>
            </div>
            <div className="feature-grid">
              {page.options.items.map(([step, copy]) => (
                <article className="feature-card reveal" key={step}><span>{step}</span><h3>Step {step}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="why-momiji">
          <div className="container contact-grid">
            <div className="section-head contact-head reveal">
              <span className="eyebrow">{page.whyMomiji.eyebrow}</span>
              <h2>{page.whyMomiji.title}</h2>
              <p>{page.whyMomiji.copy}</p>
            </div>
            <ul className="trust-list reveal">
              {page.whyMomiji.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="section section-soft" id="travel-guide">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">{page.guides.eyebrow}</span>
              <h2>{page.guides.title}</h2>
            </div>
            <div className="steps-grid">
              {page.guides.items.map((item) => (
                <article className="guide-card reveal" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <a href={item.href}>Read related planning note</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <InboundJourneyOptions />
      </main>
    </InboundShell>
  );
}
