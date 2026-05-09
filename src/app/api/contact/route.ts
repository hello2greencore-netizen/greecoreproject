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
  "Cotati",
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
    "New website estimate request - Green Core Heating & Air",
    "",
    "Reply directly to this email to respond to the customer.",
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
  const detailRows = [
    ["Name", fields.name],
    ["Phone", fields.phone],
    ["Email", fields.email],
    ["City", fields.city],
    ["Service interest", fields.service],
  ];
  const appointmentRows = [
    ["Preferred date", fields.preferredDate],
    ["Preferred time", fields.preferredTime],
  ];
  const replyHref = `mailto:${encodeURIComponent(
    fields.email,
  )}?subject=${encodeURIComponent(`Re: Estimate request for ${fields.city}`)}`;
  const tableRows = (rows: string[][]) =>
    rows
      .map(
        ([label, value]) => `
          <tr>
            <td style="padding: 12px 0; color: #5b6b62; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; border-bottom: 1px solid #e3e8e4;">${escapeHtml(label)}</td>
            <td style="padding: 12px 0 12px 18px; color: #0f1b14; font-size: 15px; font-weight: 700; text-align: right; border-bottom: 1px solid #e3e8e4;">${escapeHtml(value)}</td>
          </tr>
        `,
      )
      .join("");

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin: 0; padding: 0; background: #f4f7f4;">
      <tr>
        <td align="center" style="padding: 28px 12px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 680px; overflow: hidden; border-radius: 24px; background: #ffffff; border: 1px solid #e3e8e4; box-shadow: 0 12px 32px rgba(15, 27, 20, 0.08);">
            <tr>
              <td style="padding: 0; background: #123f25;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 28px; vertical-align: middle;">
                      <div style="color: #d7f2dd; font-family: Arial, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;">
                        Green Core Heating & Air
                      </div>
                      <h1 style="margin: 8px 0 0; color: #ffffff; font-family: Arial, sans-serif; font-size: 28px; line-height: 1.15;">
                        New estimate request
                      </h1>
                      <p style="margin: 10px 0 0; color: #d7f2dd; font-family: Arial, sans-serif; font-size: 15px; line-height: 1.5;">
                        ${escapeHtml(fields.name)} submitted the website contact form.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 24px 28px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 16px; background: #effaf1; border: 1px solid #d7f2dd; border-radius: 18px;">
                      <div style="font-family: Arial, sans-serif; color: #1a6335; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;">
                        Quick action
                      </div>
                      <p style="margin: 6px 0 14px; font-family: Arial, sans-serif; color: #0f1b14; font-size: 15px; line-height: 1.5;">
                        Reply directly to this email to respond to the customer.
                      </p>
                      <a href="${escapeHtml(replyHref)}" style="display: inline-block; padding: 11px 18px; border-radius: 999px; background: #1f7c40; color: #ffffff; font-family: Arial, sans-serif; font-size: 14px; font-weight: 700; text-decoration: none;">
                        Reply to customer
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 18px 28px 4px;">
                <h2 style="margin: 0 0 8px; color: #0f1b14; font-family: Arial, sans-serif; font-size: 18px;">
                  Customer details
                </h2>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif;">
                  <tbody>${tableRows(detailRows)}</tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 18px 28px 4px;">
                <h2 style="margin: 0 0 8px; color: #0f1b14; font-family: Arial, sans-serif; font-size: 18px;">
                  Preferred appointment
                </h2>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif;">
                  <tbody>${tableRows(appointmentRows)}</tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding: 18px 28px 28px;">
                <h2 style="margin: 0 0 10px; color: #0f1b14; font-family: Arial, sans-serif; font-size: 18px;">
                  Message
                </h2>
                <div style="padding: 16px; border-radius: 18px; background: #f4f7f4; border: 1px solid #e3e8e4; color: #0f1b14; font-family: Arial, sans-serif; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(fields.message)}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
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
