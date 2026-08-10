"use client";

import { useEffect } from "react";
import { getPageParams, trackEvent } from "../lib/analytics";

function isInternationalPath() {
  return window.location.pathname === "/int" || window.location.pathname.startsWith("/int/");
}

function closestAnchor(target) {
  return target instanceof Element ? target.closest("a[href]") : null;
}

function closestForm(target) {
  return target instanceof Element ? target.closest("form.inbound-form") : null;
}

function isWhatsAppHref(href) {
  return href.includes("wa.me/") || href.includes("api.whatsapp.com/") || href.startsWith("whatsapp:");
}

function getButtonLocation(anchor) {
  if (anchor.dataset.analyticsLocation) return anchor.dataset.analyticsLocation;
  if (anchor.classList.contains("floating-wa")) return "floating";
  if (anchor.closest("header")) return "header";
  if (anchor.closest("footer")) return "footer";
  if (anchor.closest(".package-card, .inbound-tour-card")) return "package";
  if (anchor.closest(".inbound-hero, .tour-hero")) return "hero";
  if (anchor.closest("#enquiry, #tour-enquiry, .enquiry-grid, .journey-options-section")) return "enquiry";
  return "link";
}

function getPackageName(anchor) {
  return anchor.dataset.analyticsPackageName || anchor.closest("[data-analytics-package-name]")?.dataset.analyticsPackageName;
}

function isConsultationLink(anchor) {
  if (anchor.dataset.analyticsEvent === "consultation_click") return true;
  if (anchor.getAttribute("href")?.includes("/int/book-planning-call")) return true;

  const label = anchor.textContent?.toLowerCase() || "";
  return /book.*consultation|book.*video call|book.*free call|plan my|plan your|start planning/.test(label);
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const startedForms = new WeakSet();

    function trackLinkClick(event) {
      if (!isInternationalPath()) return;

      const anchor = closestAnchor(event.target);
      if (!anchor) return;

      const href = anchor.href;
      const button_location = getButtonLocation(anchor);
      const package_name = getPackageName(anchor);

      if (isWhatsAppHref(href)) {
        trackEvent("whatsapp_click", {
          button_location,
          package_name,
          ...getPageParams(),
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEvent("email_click", {
          button_location,
          ...getPageParams(),
        });
        return;
      }

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", {
          button_location,
          ...getPageParams(),
        });
        return;
      }

      if (isConsultationLink(anchor)) {
        trackEvent("consultation_click", {
          button_location,
          package_name,
          ...getPageParams(),
        });
      }
    }

    function trackFormStart(event) {
      if (!isInternationalPath()) return;

      const form = closestForm(event.target);
      if (!form || startedForms.has(form)) return;

      startedForms.add(form);
      trackEvent("enquiry_start", {
        page_location: window.location.href,
        package_name: form.dataset.analyticsPackageName,
      });
    }

    document.addEventListener("click", trackLinkClick);
    document.addEventListener("focusin", trackFormStart);
    document.addEventListener("input", trackFormStart);

    return () => {
      document.removeEventListener("click", trackLinkClick);
      document.removeEventListener("focusin", trackFormStart);
      document.removeEventListener("input", trackFormStart);
    };
  }, []);

  return null;
}
