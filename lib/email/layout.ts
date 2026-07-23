import { LOGO_URL, SITE_URL } from "@/lib/email/resend";

const NAVY = "#0b2a3a";
const NAVY_DEEP = "#07293a";
const GOLD = "#d4af37";
const INK = "#1f2937";

export function renderEmailLayout({
  previewText,
  heading,
  bodyHtml,
}: {
  previewText: string;
  heading: string;
  bodyHtml: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${heading}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f5f7;font-family:Arial,Helvetica,sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${previewText}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f5f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(11,42,58,0.08);">
            <tr>
              <td align="center" style="background-color:${NAVY};padding:28px 24px;">
                <img src="${LOGO_URL}" alt="Chauffeur Australia" width="200" style="display:block;width:200px;height:auto;" />
              </td>
            </tr>
            <tr>
              <td style="padding:32px 32px 8px 32px;">
                <h1 style="margin:0 0 16px 0;font-size:20px;line-height:1.3;color:${NAVY};font-weight:700;">${heading}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 32px 32px;color:${INK};font-size:14px;line-height:1.6;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="background-color:#f8f9fb;padding:20px 32px;border-top:1px solid #e5e7eb;">
                <p style="margin:0;font-size:12px;color:#6b7280;line-height:1.6;">
                  Chauffeur Australia &middot; Reliable private transfers across Australia<br />
                  <a href="${SITE_URL}" style="color:${GOLD};text-decoration:none;">${SITE_URL.replace(/^https?:\/\//, "")}</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function detailRow(label: string, value: string) {
  return `<tr>
    <td style="padding:6px 0;font-size:13px;color:#6b7280;width:40%;vertical-align:top;">${label}</td>
    <td style="padding:6px 0;font-size:13px;color:${INK};font-weight:600;vertical-align:top;">${value}</td>
  </tr>`;
}

export function detailTable(rows: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f9fb;border-radius:8px;padding:16px 20px;margin:16px 0;">
    ${rows}
  </table>`;
}

export function ctaButton(label: string, href: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:20px 0;">
    <tr>
      <td style="border-radius:999px;background-color:${GOLD};">
        <a href="${href}" style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:700;color:${NAVY_DEEP};text-decoration:none;border-radius:999px;">${label}</a>
      </td>
    </tr>
  </table>`;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
