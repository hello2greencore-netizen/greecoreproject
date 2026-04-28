import { services } from "@/data/services";

const serviceAreaCities = [
  "Petaluma",
  "Rohnert Park",
  "Santa Rosa",
  "Novato",
  "San Rafael",
  "Mill Valley",
  "Tiburon",
  "Sebastopol",
];

type ContactPayload = {
  name?: unknown;
  phoneCountryCode?: unknown;
  phone?: unknown;
  email?: unknown;
  city?: unknown;
  service?: unknown;
  preferredDate?: unknown;
  preferredTime?: unknown;
  message?: unknown;
};

function clean(value: unknown, maxLength = 500) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function display(value: string) {
  return value || "Not provided";
}

function getServiceLabel(value: string) {
  if (!value) return "Not provided";
  if (value === "other") return "Something else";
  return services.find((service) => service.slug === value)?.name ?? value;
}

function makeTextEmail(fields: {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}) {
  return [
    "New website estimate request",
    "",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    `Email: ${fields.email}`,
    `City: ${fields.city}`,
    `Service interest: ${fields.service}`,
    `Preferred date: ${fields.preferredDate}`,
    `Preferred time: ${fields.preferredTime}`,
    "",
    "Message:",
    fields.message,
  ].join("\n");
}

function makeHtmlEmail(fields: {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}) {
  const rows = [
    ["Name", fields.name],
    ["Phone", fields.phone],
    ["Email", fields.email],
    ["City", fields.city],
    ["Service interest", fields.service],
    ["Preferred date", fields.preferredDate],
    ["Preferred time", fields.preferredTime],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #0f1b14; line-height: 1.5;">
      <h1 style="font-size: 22px; margin: 0 0 16px;">New website estimate request</h1>
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 8px 12px; border: 1px solid #e3e8e4; font-weight: 700; width: 170px;">${escapeHtml(label)}</td>
                  <td style="padding: 8px 12px; border: 1px solid #e3e8e4;">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="font-size: 16px; margin: 20px 0 8px;">Message</h2>
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(fields.message)}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = clean(payload.name, 120);
  const phoneCountryCode = clean(payload.phoneCountryCode, 10) || "+1";
  const phoneNumber = clean(payload.phone, 40);
  const email = clean(payload.email, 160).toLowerCase();
  const city = clean(payload.city, 80);
  const service = getServiceLabel(clean(payload.service, 80));
  const preferredDate = display(clean(payload.preferredDate, 40));
  const preferredTime = display(clean(payload.preferredTime, 40));
  const message = display(clean(payload.message, 2000));

  if (!name || !phoneNumber || !email || !city) {
    return Response.json(
      { error: "Name, phone, email, and city are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!serviceAreaCities.includes(city)) {
    return Response.json(
      { error: "Please select one of the available service areas." },
      { status: 400 },
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    return Response.json(
      { error: "Email delivery is not configured." },
      { status: 500 },
    );
  }

  const phone = `${phoneCountryCode} ${phoneNumber}`;
  const fields = {
    name,
    phone,
    email,
    city,
    service,
    preferredDate,
    preferredTime,
    message,
  };

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New estimate request from ${name}`,
      reply_to: email,
      text: makeTextEmail(fields),
      html: makeHtmlEmail(fields),
    }),
  });

  if (!resendResponse.ok) {
    const error = await resendResponse.text();
    console.error("Resend email send failed:", error);
    return Response.json(
      { error: "Unable to send message right now." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
