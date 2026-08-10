"use client";

import { useEffect, useState } from "react";
import { inboundBusiness, inboundNav, inboundRoutes, inboundWhatsAppLink } from "../content/inboundContent";

function whatsappLink() {
  return inboundWhatsAppLink("Hi Momiji, I would like to plan an inbound Malaysia tour. Please advise the next steps.");
}

export default function InboundShell({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll(".reveal"));
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    items.forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 80, 320)}ms`);
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
  }, []);

  return (
    <>
      <header className="site-header inbound-header">
        <a className="brand" href={inboundRoutes.home} onClick={() => setMenuOpen(false)} aria-label="Momiji Travel international homepage">
          <img className="brand-logo" src="/images/momiji-logo.jpg" alt="Momiji Travel logo" />
          <span>
            <strong>Momiji Travel</strong>
            <small>Malaysia Inbound Tours</small>
          </span>
        </a>
        <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="International navigation">
          {inboundNav.map(([id, label, href]) => (
            <a key={id} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-mobile-cta" href={inboundRoutes.bookPlanningCall} onClick={() => setMenuOpen(false)} data-analytics-event="consultation_click" data-analytics-location="header">
            Plan Your Journey
          </a>
        </nav>
        <a className="btn btn-primary header-cta inbound-plan-cta" href={inboundRoutes.bookPlanningCall} data-analytics-event="consultation_click" data-analytics-location="header">
          Plan Your Journey
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle menu" onClick={() => setMenuOpen((value) => !value)}>
          <span></span><span></span><span></span>
        </button>
      </header>
      {children}
      <footer className="footer inbound-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/images/momiji-logo.jpg" alt="Momiji Travel logo" />
            <div>
              <strong>{inboundBusiness.companyName}</strong>
              <p>Malaysia inbound and Southeast Asia tour planning<br />{inboundBusiness.motacLicense}<br />{inboundBusiness.companyAddress}</p>
            </div>
          </div>
          <nav aria-label="International footer links">
            {inboundNav.slice(0, 6).map(([id, label, href]) => (
              <a href={href} key={id}>{label}</a>
            ))}
          </nav>
          <div>
            <p>WhatsApp: {inboundBusiness.phoneDisplay}<br />Email: {inboundBusiness.email}</p>
            <a className="btn btn-primary inbound-footer-cta" href={whatsappLink()} target="_blank" rel="noopener noreferrer" data-analytics-location="footer">WhatsApp Us</a>
          </div>
        </div>
        <div className="container footer-bottom">© 2026 Momiji Travel & Tours Sdn Bhd. All rights reserved.</div>
      </footer>
    </>
  );
}
