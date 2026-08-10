"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { inboundRoutes } from "../content/inboundContent";
import { trackGenerateLead } from "../lib/analytics";

const initialForm = {
  fullName: "",
  country: "",
  email: "",
  whatsapp: "",
  dates: "",
  adults: "",
  children: "",
  package: "",
  airport: "",
  duration: "",
  accommodation: "",
  tourType: "Private tour",
  budget: "",
  requirements: "",
  notes: "",
  consent: false,
  website: "",
};

export default function InboundEnquiryForm({ compact = false, analyticsContext = {} }) {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, type, checked, value } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ state: "idle", message: "" });

    const emailForm = {
      fullName: form.fullName,
      country: form.country,
      email: form.email,
      whatsapp: form.whatsapp,
      contactMethod: "Either email or WhatsApp",
      destination: form.package || "Inbound Malaysia tour",
      dates: form.dates,
      adults: form.adults,
      children: form.children,
      arrivalAirport: form.airport,
      duration: form.duration,
      accommodation: form.accommodation,
      tourType: form.tourType,
      budget: form.budget,
      requirements: form.requirements,
      additionalInfo: form.notes,
      consent: form.consent,
      website: form.website,
    };

    try {
      const response = await fetch("/api/inbound-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "travel-enquiry", form: emailForm }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "The form could not be sent. Please try again.");
      }

      trackGenerateLead({
        packageName: analyticsContext.packageName || form.package || "Inbound Malaysia tour",
        packageDestination: analyticsContext.packageDestination || "Malaysia",
        leadSource: analyticsContext.leadSource || "inbound_enquiry_form",
      });
      router.push(inboundRoutes.thankYou);
    } catch (error) {
      setStatus({ state: "error", message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className={`inbound-form ${compact ? "inbound-form-compact" : ""}`}
      data-analytics-package-name={analyticsContext.packageName || form.package || undefined}
      onSubmit={submitForm}
    >
      <input type="text" name="website" value={form.website} onChange={updateField} tabIndex="-1" autoComplete="off" className="form-honeypot" aria-hidden="true" />
      <div className="form-grid">
        <label>
          <span>Full name</span>
          <input name="fullName" value={form.fullName} onChange={updateField} autoComplete="name" required />
        </label>
        <label>
          <span>Country of residence</span>
          <input name="country" value={form.country} onChange={updateField} autoComplete="country-name" required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required />
        </label>
        <label>
          <span>WhatsApp number</span>
          <input name="whatsapp" value={form.whatsapp} onChange={updateField} autoComplete="tel" required />
        </label>
        <label>
          <span>Preferred travel dates</span>
          <input name="dates" value={form.dates} onChange={updateField} placeholder="Month, date range or flexible" />
        </label>
        <label>
          <span>Preferred package</span>
          <select name="package" value={form.package} onChange={updateField}>
            <option value="">Select a package idea</option>
            <option>Essential Malaysia</option>
            <option>Malaysia Heritage Journey</option>
            <option>Malaysia Family Tour</option>
            <option>Malaysia, Singapore and Thailand Tour</option>
            <option>Custom Malaysia private tour</option>
          </select>
        </label>
        <label>
          <span>Number of adults</span>
          <input name="adults" type="number" min="0" value={form.adults} onChange={updateField} />
        </label>
        <label>
          <span>Number of children</span>
          <input name="children" type="number" min="0" value={form.children} onChange={updateField} />
        </label>
        <label>
          <span>Arrival airport</span>
          <input name="airport" value={form.airport} onChange={updateField} placeholder="Example: Kuala Lumpur / KLIA" />
        </label>
        <label>
          <span>Expected trip duration</span>
          <input name="duration" value={form.duration} onChange={updateField} placeholder="Example: 7-10 days" />
        </label>
        <label>
          <span>Accommodation preference</span>
          <select name="accommodation" value={form.accommodation} onChange={updateField}>
            <option value="">Select preference</option>
            <option>Comfort / mid-range</option>
            <option>Premium</option>
            <option>Family-friendly</option>
            <option>Muslim-friendly hotel preference</option>
            <option>To be advised</option>
          </select>
        </label>
        <label>
          <span>Private or group tour</span>
          <select name="tourType" value={form.tourType} onChange={updateField}>
            <option>Private tour</option>
            <option>Group tour</option>
            <option>Educational group</option>
            <option>Corporate incentive group</option>
            <option>Travel agency group</option>
          </select>
        </label>
        <label>
          <span>Estimated budget</span>
          <input name="budget" value={form.budget} onChange={updateField} placeholder="Per person or total group budget" />
        </label>
        <label>
          <span>Special requirements</span>
          <input name="requirements" value={form.requirements} onChange={updateField} placeholder="Halal meals, seniors, children, accessibility" />
        </label>
        <label className="form-wide">
          <span>Additional information</span>
          <textarea name="notes" value={form.notes} onChange={updateField} rows="4" placeholder="Tell us your travel style, must-see places or any important details." />
        </label>
      </div>
      <label className="consent-row">
        <input name="consent" type="checkbox" checked={form.consent} onChange={updateField} required />
        <span>I agree that Momiji Travel may use the information provided to respond to my enquiry.</span>
      </label>
      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Start Planning My Journey"}
      </button>
      <p className="form-note">Your enquiry will be sent securely to Momiji Travel. No package price or itinerary is final until confirmed after consultation.</p>
      {status.message && (
        <p className={`form-message ${status.state === "error" ? "form-message-error" : "form-message-success"}`}>
          {status.message}
        </p>
      )}
    </form>
  );
}
