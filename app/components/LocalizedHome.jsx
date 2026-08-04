"use client";

import { useEffect, useMemo, useState } from "react";
import {
  companyAddress,
  companyName,
  email,
  localeRoutes,
  locales,
  motacLicense,
  phoneDisplay,
  whatsappNumber,
} from "../content/siteContent";

function waLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function sectionHref(locale, sectionId) {
  return `${localeRoutes.home[locale]}#${sectionId}`;
}

function LanguageSwitcher({ locale, menuOpen, currentHash }) {
  const otherLocale = locale === "en" ? "ms" : "en";
  const active = locales[locale];
  const alternate = locales[otherLocale];
  const hash = currentHash || "";

  return (
    <div className={`language-switcher ${menuOpen ? "mobile" : ""}`} aria-label={active.code === "en" ? "Change language" : "Tukar bahasa"}>
      <a className={locale === "en" ? "active" : ""} href={`${localeRoutes.home.en}${hash}`} lang="en-MY" hrefLang="en-MY" aria-current={locale === "en" ? "page" : undefined}>
        {menuOpen ? locales.en.mobileLabel : locales.en.label}
      </a>
      <span aria-hidden="true">|</span>
      <a className={locale === "ms" ? "active" : ""} href={`${localeRoutes.home.ms}${hash}`} lang="ms-MY" hrefLang="ms-MY" aria-current={locale === "ms" ? "page" : undefined}>
        {menuOpen ? locales.ms.mobileLabel : locales.ms.label}
      </a>
      <span className="sr-only">{alternate.mobileLabel}</span>
    </div>
  );
}

function PackageCard({ item, content }) {
  const message = `${content.packageMessage.prefix}${item.title}${content.packageMessage.suffix}`;
  return (
    <article className="package-card reveal" data-category={item.category}>
      <div className="package-image">
        <img src={item.image} alt={item.alt} loading="lazy" />
        <span>{item.badge}</span>
      </div>
      <div className="package-body">
        <h3>{item.title}</h3>
        <div className="package-meta">
          <strong>{item.duration}</strong>
          <b>{item.price}</b>
        </div>
        <p>{item.description}</p>
        <ul>
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <a className="btn btn-primary btn-full" href={waLink(message)} target="_blank" rel="noopener noreferrer">
          {content.ui.packageButton}
        </a>
      </div>
    </article>
  );
}

export default function LocalizedHome({ content }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);
  const [currentHash, setCurrentHash] = useState("");
  const locale = content.locale;

  const groupedPackages = useMemo(() => {
    return ["japan", "china", "indonesia", "education"].map((regionKey) => ({
      regionKey,
      region: content.packagesSection.regions[regionKey],
      packages: content.packages.filter(
        (item) => item.regionKey === regionKey && (filter === "all" || item.category.split(" ").includes(filter))
      ),
    }));
  }, [content, filter]);

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".reveal"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    items.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 90, 360)}ms`);
    });

    if (reduced || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [filter, locale]);

  return (
    <>
      <header className="site-header">
        <a className="brand" href={sectionHref(locale, "home")} onClick={() => setMenuOpen(false)} aria-label="Momiji Travel home">
          <img className="brand-logo" src={content.images.logo} alt="Momiji Travel logo" />
          <span>
            <strong>Momiji Travel</strong>
            <small>{content.ui.brandSubtitle}</small>
          </span>
        </a>
        <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          {content.nav.map(([id, label]) => (
            <a key={id} href={sectionHref(locale, id)} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <LanguageSwitcher locale={locale} menuOpen={menuOpen} currentHash={currentHash} />
        </nav>
        <LanguageSwitcher locale={locale} menuOpen={false} currentHash={currentHash} />
        <a className="btn btn-primary header-cta" href={waLink(content.generalMessage)} target="_blank" rel="noopener noreferrer">
          {content.ui.whatsappUs}
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={content.ui.menuLabel} onClick={() => setMenuOpen((value) => !value)}>
          <span></span><span></span><span></span>
        </button>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="eyebrow reveal">{content.hero.eyebrow}</span>
              <h1 className="reveal">{content.hero.title}</h1>
              <p className="reveal">{content.hero.copy}</p>
              <div className="hero-actions reveal">
                <a className="btn btn-primary" href={waLink(content.generalMessage)} target="_blank" rel="noopener noreferrer">{content.hero.primaryCta}</a>
                <a className="btn btn-light" href={sectionHref(locale, "packages")}>{content.hero.secondaryCta}</a>
              </div>
              <ul className="trust-badges reveal">
                {content.hero.badges.map((badge) => <li key={badge}>{badge}</li>)}
              </ul>
            </div>
            <aside className="hero-card reveal" aria-label={content.hero.cardLabel}>
              <span className="card-icon">{content.hero.cardNumber}</span>
              <h2>{content.hero.cardTitle}</h2>
              <p>{content.hero.cardCopy}</p>
              <a className="btn btn-primary" href={waLink(content.generalMessage)} target="_blank" rel="noopener noreferrer">{content.hero.cardCta}</a>
            </aside>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container strip-grid">
            {content.trustItems.map(([title, copy, icon]) => (
              <div className="reveal" key={title}><span>{icon}</span><strong>{title}</strong><small>{copy}</small></div>
            ))}
          </div>
        </section>

        <section className="section team-section">
          <div className="container team-grid">
            <div className="team-copy reveal">
              <span className="eyebrow">{content.team.eyebrow}</span>
              <h2>{content.team.title}</h2>
              <p>{content.team.copy}</p>
              <div className="team-points">
                {content.team.points.map((point) => <span key={point}>{point}</span>)}
              </div>
              <a className="btn btn-primary" href={waLink(content.generalMessage)} target="_blank" rel="noopener noreferrer">{content.team.cta}</a>
            </div>
            <figure className="team-photo reveal">
              <picture>
                <source media="(min-width: 768px)" srcSet={content.images.teamDesktop} />
                <img src={content.images.teamMobile} alt={content.team.alt} loading="lazy" />
              </picture>
            </figure>
          </div>
        </section>

        <section className="section" id="packages">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">{content.packagesSection.eyebrow}</span>
              <h2>{content.packagesSection.title}</h2>
              <p>{content.packagesSection.copy}</p>
            </div>
            <div className="filter-tabs reveal" aria-label={content.packagesSection.filtersLabel}>
              {content.packagesSection.filters.map(([value, label]) => (
                <button className={filter === value ? "active" : ""} type="button" data-filter={value} onClick={() => setFilter(value)} key={value}>{label}</button>
              ))}
            </div>

            {groupedPackages.map(({ regionKey, region, packages: regionPackages }) => (
              regionPackages.length > 0 && (
                <div className="package-region" key={regionKey}>
                  <div className="region-head reveal">
                    <span>{region}</span>
                    <h3>{locale === "ms" ? `${content.packagesSection.regionSuffix} ${region}` : `${region} ${content.packagesSection.regionSuffix}`}</h3>
                  </div>
                  <div className="package-grid">
                    {regionPackages.map((item) => <PackageCard item={item} content={content} key={item.id} />)}
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        <section className="section section-soft" id="why">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">{content.why.eyebrow}</span>
              <h2>{content.why.title}</h2>
              <p>{content.why.copy}</p>
            </div>
            <div className="feature-grid">
              {content.why.features.map(([title, copy, icon]) => (
                <article className="feature-card reveal" key={title}><span>{icon}</span><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="booking">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">{content.booking.eyebrow}</span>
              <h2>{content.booking.title}</h2>
              <p>{content.booking.copy}</p>
            </div>
            <div className="steps-grid">
              {content.booking.steps.map(([num, title, copy]) => <article className="reveal" key={num}><b>{num}</b><h3>{title}</h3><p>{copy}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section section-red-tint">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">{content.styles.eyebrow}</span>
              <h2>{content.styles.title}</h2>
            </div>
            <div className="style-grid">
              {content.styles.items.map(([title, copy]) => (
                <article className="reveal" key={title}><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">{content.gallery.eyebrow}</span>
              <h2>{content.gallery.title}</h2>
              <p>{content.gallery.copy}</p>
            </div>
            <div className="gallery-grid">
              {content.gallery.images.map((item) => (
                <figure className={`gallery-item gallery-${item.layout} reveal`} key={item.src}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">{content.testimonials.eyebrow}</span>
              <h2>{content.testimonials.title}</h2>
            </div>
            <div className="testimonial-grid">
              {content.testimonials.items.map(([quote, name]) => <article className="reveal" key={name}><div className="stars">★★★★★</div><p>&ldquo;{quote}&rdquo;</p><strong>{name}</strong></article>)}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container faq-wrap">
            <div className="section-head reveal">
              <span className="eyebrow">{content.faq.eyebrow}</span>
              <h2>{content.faq.title}</h2>
            </div>
            <div className="faq-list">
              {content.faq.items.map(([question, answer], index) => (
                <article className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                  <button type="button" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{question}</button>
                  <div><p>{answer}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container cta-grid">
            <div className="reveal">
              <span className="eyebrow">{content.finalCta.eyebrow}</span>
              <h2>{content.finalCta.title}</h2>
              <p>{content.finalCta.copy}</p>
              <a className="btn btn-light" href={waLink(content.generalMessage)} target="_blank" rel="noopener noreferrer">{content.finalCta.cta}</a>
            </div>
            <ul className="reveal">
              {content.finalCta.checklist.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container contact-grid">
            <div className="section-head contact-head reveal">
              <span className="eyebrow">{content.contact.eyebrow}</span>
              <h2>{content.contact.title}</h2>
              <p>{content.contact.copy}</p>
              <a className="btn btn-primary" href={waLink(content.generalMessage)} target="_blank" rel="noopener noreferrer">{content.contact.cta}</a>
            </div>
            <address className="contact-card reveal">
              <strong>{companyName}</strong>
              <span>{motacLicense}</span>
              <span>{companyAddress}</span>
              <span>WhatsApp: {phoneDisplay}</span>
              <span>Email: {email}</span>
            </address>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={content.images.logo} alt="Momiji Travel logo" />
            <div><strong>{companyName}</strong><p>{content.ui.brandSubtitle}<br />{motacLicense}<br />{companyAddress}</p></div>
          </div>
          <nav aria-label={content.ui.footerLinksLabel}>
            {content.nav.filter(([id]) => ["home", "packages", "why", "faq", "contact"].includes(id)).map(([id, label]) => (
              <a key={id} href={sectionHref(locale, id)}>{label}</a>
            ))}
          </nav>
          <div className="socials"><a href="#" aria-label={content.ui.socials.facebook}>f</a><a href="#" aria-label={content.ui.socials.instagram}>ig</a><a href="#" aria-label={content.ui.socials.tiktok}>tt</a></div>
        </div>
        <div className="container footer-bottom">{content.ui.copyright}</div>
      </footer>

      <a className="floating-wa" href={waLink(content.generalMessage)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Momiji">{content.ui.floatingWhatsapp}</a>
    </>
  );
}
