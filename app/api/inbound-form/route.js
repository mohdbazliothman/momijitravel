const CONTACT_EMAIL_TO = process.env.CONTACT_EMAIL_TO || "mymomijimedia@gmail.com";
const EMAIL_FROM = process.env.EMAIL_FROM;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

const labels = {
  fullName: "Full name",
  country: "Country of residence",
  email: "Email address",
  whatsapp: "WhatsApp number",
  contactMethod: "Preferred contact method",
  destination: "Destination or package",
  dates: "Preferred travel dates",
  flexibleDates: "Flexible dates",
  adults: "Number of adults",
  children: "Number of children",
  childrenAges: "Children's ages",
  duration: "Expected trip duration",
  journeyType: "Private or group journey",
  tourType: "Private tour or group tour",
  accommodation: "Accommodation preference",
  budget: "Estimated budget per person",
  interests: "Main travel interests",
  requirements: "Special requirements",
  firstCallDate: "First preferred consultation date",
  firstCallTime: "First preferred consultation time",
  secondCallDate: "Second preferred consultation date",
  secondCallTime: "Second preferred consultation time",
  timeZone: "Visitor time zone",
  videoPlatform: "Preferred video-call platform",
  discussion: "Discussion focus",
  arrivalAirport: "Arrival airport",
  departureAirport: "Departure airport",
  additionalInfo: "Additional information",
};

function clean(value) {
  if (typeof value !== "string") return value;
  return value.replace(/\s+/g, " ").trim().slice(0, 1200);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildText(type, form) {
  const title = type === "planning-call" ? "Free trip-planning call request" : "Travel enquiry";
  const rows = Object.entries(labels)
    .filter(([key]) => form[key])
    .map(([key, label]) => `${label}: ${clean(form[key])}`);

  return [
    title,
    "",
    ...rows,
    "",
    `Consent given: ${form.consent ? "Yes" : "No"}`,
    `Submitted at: ${new Date().toISOString()}`,
  ].join("\n");
}

function buildHtml(text) {
  return `<pre style="font-family:Arial,sans-serif;font-size:14px;line-height:1.55;white-space:pre-wrap">${text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")}</pre>`;
}

export async function POST(request) {
  let payload;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const { type, form = {} } = payload;

  if (form.website) {
    return Response.json({ ok: true });
  }

  if (!["planning-call", "travel-enquiry"].includes(type)) {
    return Response.json({ error: "Invalid form type." }, { status: 400 });
  }

  if (!form.consent) {
    return Response.json({ error: "Please confirm your consent before submitting." }, { status: 400 });
  }

  if (!form.fullName || !form.country || !form.email || !form.whatsapp || !isEmail(form.email)) {
    return Response.json({ error: "Please complete your contact details with a valid email address." }, { status: 400 });
  }

  if (!RESEND_API_KEY || !EMAIL_FROM) {
    return Response.json(
      { error: "Email delivery is not configured yet. Please contact Momiji Travel by WhatsApp while we finish setup." },
      { status: 503 }
    );
  }

  const subject = type === "planning-call"
    ? `Free planning call request from ${clean(form.fullName)}`
    : `Travel enquiry from ${clean(form.fullName)}`;
  const text = buildText(type, form);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: EMAIL_FROM,
      to: CONTACT_EMAIL_TO,
      reply_to: form.email,
      subject,
      text,
      html: buildHtml(text),
    }),
  });

  if (!response.ok) {
    return Response.json({ error: "The form could not be sent. Please try again later." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
