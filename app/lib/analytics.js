"use client";

import { sendGAEvent } from "@next/third-parties/google";

const MAX_PARAM_LENGTH = 160;

function cleanValue(value) {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value === "number" || typeof value === "boolean") return value;
  if (Array.isArray(value)) return value.map(cleanValue).filter(Boolean).join(", ");

  return String(value).replace(/\s+/g, " ").trim().slice(0, MAX_PARAM_LENGTH);
}

function cleanParams(params = {}) {
  return Object.fromEntries(
    Object.entries(params)
      .map(([key, value]) => [key, cleanValue(value)])
      .filter(([, value]) => value !== undefined)
  );
}

export function getPageParams() {
  if (typeof window === "undefined") return {};

  return {
    page_location: window.location.href,
    page_title: document.title,
  };
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  sendGAEvent("event", eventName, cleanParams(params));
}

function resolveUrl(url) {
  if (!url || typeof window === "undefined") return url;

  return new URL(url, window.location.origin).href;
}

export function trackPackageView({ packageName, packageDestination, packageUrl } = {}) {
  trackEvent("view_package", {
    package_name: packageName,
    package_destination: packageDestination,
    package_url: resolveUrl(packageUrl) || (typeof window !== "undefined" ? window.location.href : undefined),
    ...getPageParams(),
  });
}

export function trackGenerateLead({ packageName, packageDestination, leadSource } = {}) {
  trackEvent("generate_lead", {
    currency: "MYR",
    package_name: packageName,
    package_destination: packageDestination,
    lead_source: leadSource,
    page_location: typeof window !== "undefined" ? window.location.href : undefined,
  });
}
