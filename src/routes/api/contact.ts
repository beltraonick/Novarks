import { createAPIFileRoute } from "@tanstack/react-start/api";
import { Resend } from "resend";

export const APIRoute = createAPIFileRoute("/api/contact")({
  POST: async ({ request }) => {
    try {
      const data = (await request.json()) as Record<string, string>;
      const { name, email, company, subject, message } = data;

      if (!name || !email || !message) {
        return Response.json({ error: "Missing required fields" }, { status: 400 });
      }

      const apiKey = process.env.RESEND_API_KEY;
      if (!apiKey) {
        console.error("RESEND_API_KEY not configured");
        return Response.json({ error: "Email service not configured" }, { status: 500 });
      }

      const resend = new Resend(apiKey);
      const { error } = await resend.emails.send({
        from: "Novarks <we@novarks.com>",
        to: ["beltraonico@gmail.com"],
        replyTo: email,
        subject: subject ? `[Novarks] ${subject}` : `[Novarks] New message from ${name}`,
        html: buildHtml({ name, email, company, subject, message }),
      });

      if (error) {
        console.error("Resend error:", error);
        return Response.json({ error: "Failed to send message" }, { status: 500 });
      }

      return Response.json({ ok: true });
    } catch (err) {
      console.error("Contact API error:", err);
      return Response.json({ error: "Internal error" }, { status: 500 });
    }
  },
});

function buildHtml(fields: Record<string, string>) {
  const { name, email, company, subject, message } = fields;
  const rows = [
    ["Name", name],
    ["Email", `<a href="mailto:${email}" style="color:#b8962e">${email}</a>`],
    ...(company ? [["Company", company]] : []),
    ...(subject ? [["Subject", subject]] : []),
  ];

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:sans-serif;max-width:600px;margin:auto;padding:32px 24px;color:#111;background:#fff">
  <p style="font-size:12px;font-weight:600;letter-spacing:.15em;color:#b8962e;text-transform:uppercase;margin:0 0 16px">novarks.com</p>
  <h2 style="margin:0 0 24px;font-size:20px">New contact form message</h2>
  <table style="width:100%;border-collapse:collapse;margin-bottom:24px">
    ${rows.map(([label, value]) => `<tr>
      <td style="padding:8px 12px 8px 0;color:#666;white-space:nowrap;vertical-align:top;font-size:14px">${label}</td>
      <td style="padding:8px 0;font-size:14px">${value}</td>
    </tr>`).join("")}
  </table>
  <hr style="border:none;border-top:1px solid #eee;margin:0 0 24px">
  <p style="font-size:14px;line-height:1.6;white-space:pre-wrap;color:#333">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
  <hr style="border:none;border-top:1px solid #eee;margin:24px 0 16px">
  <p style="font-size:11px;color:#999">Reply directly to this email to respond to ${name}.</p>
</body>
</html>`;
}
