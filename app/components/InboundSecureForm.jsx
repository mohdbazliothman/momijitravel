"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { inboundRoutes } from "../content/inboundContent";

const baseInitial = {
  fullName: "",
  country: "",
  email: "",
  whatsapp: "",
  contactMethod: "Email",
  destination: "",
  dates: "",
  flexibleDates: "Yes",
  adults: "",
  children: "",
  childrenAges: "",
  duration: "",
  accommodation: "",
  budget: "",
  interests: "",
  requirements: "",
  consent: false,
  website: "",
};

const bookingInitial = {
  ...baseInitial,
  journeyType: "Private journey",
  firstCallDate: "",
  firstCallTime: "",
  secondCallDate: "",
  secondCallTime: "",
  timeZone: "",
  videoPlatform: "No preference",
  discussion: "",
};

const enquiryInitial = {
  ...baseInitial,
  arrivalAirport: "",
  departureAirport: "",
  tourType: "Private tour",
  additionalInfo: "",
};

function Field({ label, children, wide = false }) {
  return (
    <label className={wide ? "form-wide" : undefined}>
      <span>{label}</span>
      {children}
    </label>
  );
}

function FormMessage({ state, children }) {
  if (!children) return null;
  return <p className={`form-message ${state === "error" ? "form-message-error" : "form-message-success"}`}>{children}</p>;
}

export default function InboundSecureForm({ type, page }) {
  const router = useRouter();
  const initial = useMemo(() => (type === "planning-call" ? bookingInitial : enquiryInitial), [type]);
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ state: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(event) {
    const { name, type: inputType, checked, value } = event.target;
    setForm((current) => ({ ...current, [name]: inputType === "checkbox" ? checked : value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ state: "idle", message: "" });

    try {
      const response = await fetch("/api/inbound-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, form }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "The form could not be sent. Please try again.");
      }

      router.push(inboundRoutes.thankYou);
    } catch (error) {
      setStatus({ state: "error", message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  }

  const hasChildren = Number(form.children) > 0;

  return (
    <form className="inbound-form secure-inbound-form" onSubmit={submitForm}>
      <input type="text" name="website" value={form.website} onChange={updateField} tabIndex="-1" autoComplete="off" className="form-honeypot" aria-hidden="true" />

      <fieldset>
        <legend>Contact details</legend>
        <div className="form-grid">
          <Field label="Full name"><input name="fullName" value={form.fullName} onChange={updateField} autoComplete="name" required /></Field>
          <Field label="Country of residence"><input name="country" value={form.country} onChange={updateField} autoComplete="country-name" required /></Field>
          <Field label="Email address"><input name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required /></Field>
          <Field label="WhatsApp number"><input name="whatsapp" value={form.whatsapp} onChange={updateField} autoComplete="tel" required /></Field>
          <Field label="Preferred contact method">
            <select name="contactMethod" value={form.contactMethod} onChange={updateField}>
              <option>Email</option>
              <option>WhatsApp</option>
              <option>Either email or WhatsApp</option>
            </select>
          </Field>
        </div>
      </fieldset>

      <fieldset>
        <legend>{type === "planning-call" ? "Trip details" : "Journey information"}</legend>
        <div className="form-grid">
          <Field label={type === "planning-call" ? "Preferred destination or package" : "Destination or package of interest"}>
            <input name="destination" value={form.destination} onChange={updateField} required />
          </Field>
          <Field label="Preferred travel dates"><input name="dates" value={form.dates} onChange={updateField} placeholder="Month, date range or flexible" /></Field>
          <Field label="Flexible dates">
            <select name="flexibleDates" value={form.flexibleDates} onChange={updateField}>
              <option>Yes</option>
              <option>No</option>
            </select>
          </Field>
          <Field label="Number of adults"><input name="adults" type="number" min="0" value={form.adults} onChange={updateField} required /></Field>
          <Field label="Number of children"><input name="children" type="number" min="0" value={form.children} onChange={updateField} /></Field>
          {hasChildren && <Field label="Children's ages"><input name="childrenAges" value={form.childrenAges} onChange={updateField} placeholder="Example: 5, 8 and 12" /></Field>}
          <Field label="Expected trip duration"><input name="duration" value={form.duration} onChange={updateField} placeholder="Example: 7-10 days" /></Field>
          {type === "travel-enquiry" && <Field label="Arrival airport, if known"><input name="arrivalAirport" value={form.arrivalAirport} onChange={updateField} placeholder="Example: KLIA" /></Field>}
          {type === "travel-enquiry" && <Field label="Departure airport, if known"><input name="departureAirport" value={form.departureAirport} onChange={updateField} /></Field>}
          <Field label="Accommodation preference"><input name="accommodation" value={form.accommodation} onChange={updateField} placeholder="Comfort, premium, family-friendly or to be advised" /></Field>
          <Field label={type === "planning-call" ? "Private or group journey" : "Private tour or group tour"}>
            <select name={type === "planning-call" ? "journeyType" : "tourType"} value={type === "planning-call" ? form.journeyType : form.tourType} onChange={updateField}>
              <option>Private journey</option>
              <option>Group tour</option>
              <option>Family trip</option>
              <option>School or educational group</option>
              <option>Corporate incentive group</option>
              <option>Travel agency group</option>
            </select>
          </Field>
          <Field label="Estimated budget per person"><input name="budget" value={form.budget} onChange={updateField} /></Field>
          <Field label={type === "planning-call" ? "Main travel interests" : "Main interests"} wide>
            <textarea name="interests" value={form.interests} onChange={updateField} rows="3" />
          </Field>
          <Field label={type === "planning-call" ? "Special requirements" : "Mobility, dietary or accessibility requirements"} wide>
            <textarea name="requirements" value={form.requirements} onChange={updateField} rows="3" />
          </Field>
          {type === "travel-enquiry" && <Field label="Additional information" wide><textarea name="additionalInfo" value={form.additionalInfo} onChange={updateField} rows="4" /></Field>}
        </div>
      </fieldset>

      {type === "planning-call" && (
        <fieldset>
          <legend>Call scheduling</legend>
          <div className="form-grid">
            <Field label="First preferred consultation date"><input name="firstCallDate" type="date" value={form.firstCallDate} onChange={updateField} required /></Field>
            <Field label="First preferred consultation time"><input name="firstCallTime" type="time" value={form.firstCallTime} onChange={updateField} required /></Field>
            <Field label="Second preferred consultation date"><input name="secondCallDate" type="date" value={form.secondCallDate} onChange={updateField} /></Field>
            <Field label="Second preferred consultation time"><input name="secondCallTime" type="time" value={form.secondCallTime} onChange={updateField} /></Field>
            <Field label="Visitor time zone"><input name="timeZone" value={form.timeZone} onChange={updateField} placeholder="Example: GMT+8 / Singapore time" required /></Field>
            <Field label="Preferred video-call platform">
              <select name="videoPlatform" value={form.videoPlatform} onChange={updateField}>
                <option>Google Meet</option>
                <option>Zoom</option>
                <option>WhatsApp video</option>
                <option>No preference</option>
              </select>
            </Field>
            <Field label="What would you most like to discuss during the call?" wide>
              <textarea name="discussion" value={form.discussion} onChange={updateField} rows="4" required />
            </Field>
          </div>
        </fieldset>
      )}

      <label className="consent-row">
        <input name="consent" type="checkbox" checked={form.consent} onChange={updateField} required />
        <span>{page.consent}</span>
      </label>

      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : page.submitLabel}
      </button>
      <FormMessage state={status.state}>{status.message}</FormMessage>
    </form>
  );
}
