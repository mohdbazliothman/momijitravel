"use client";

import { useState } from "react";
import { inboundWhatsAppLink } from "../content/inboundContent";

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
};

export default function InboundEnquiryForm({ compact = false }) {
  const [form, setForm] = useState(initialForm);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submitForm(event) {
    event.preventDefault();
    const message = [
      "Hi Momiji, I would like to plan an inbound Malaysia tour.",
      `Full name: ${form.fullName || "-"}`,
      `Country of residence: ${form.country || "-"}`,
      `Email: ${form.email || "-"}`,
      `WhatsApp number: ${form.whatsapp || "-"}`,
      `Preferred travel dates: ${form.dates || "-"}`,
      `Adults: ${form.adults || "-"}`,
      `Children: ${form.children || "-"}`,
      `Preferred package: ${form.package || "-"}`,
      `Arrival airport: ${form.airport || "-"}`,
      `Expected trip duration: ${form.duration || "-"}`,
      `Accommodation preference: ${form.accommodation || "-"}`,
      `Tour type: ${form.tourType || "-"}`,
      `Estimated budget: ${form.budget || "-"}`,
      `Special requirements: ${form.requirements || "-"}`,
      `Additional information: ${form.notes || "-"}`,
    ].join("\n");

    window.open(inboundWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form className={`inbound-form ${compact ? "inbound-form-compact" : ""}`} onSubmit={submitForm}>
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
      <button className="btn btn-primary" type="submit">Start Planning My Journey</button>
      <p className="form-note">This form opens WhatsApp with your enquiry details. No package price or itinerary is final until confirmed by Momiji Travel.</p>
    </form>
  );
}
