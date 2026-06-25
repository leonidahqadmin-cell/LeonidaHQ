// Email signup endpoint. Wired to Resend.
// Sends a welcome email, saves to Resend Audience, and notifies owner.
// Env vars needed:
//   RESEND_API_KEY        — Resend API key (required)
//   RESEND_AUDIENCE_ID    — Resend Audience ID to save contacts to (required for list)
//   SUBSCRIBE_NOTIFY_TO   — owner email to notify on each signup (optional)

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";

const FROM = "LeonidaHQ <hello@leonidahq.gg>";
const REPLY_TO = "hello@leonidahq.gg";

function welcomeHtml() {
  return `
  <!doctype html>
  <html lang="en">
    <body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;">
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#0a0a0a;padding:32px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="560" style="max-width:560px;background:#13131f;border-radius:12px;border:1px solid rgba(255,255,255,0.08);overflow:hidden;">
              <tr>
                <td style="padding:32px 32px 8px;text-align:center;">
                  <div style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#00E5CC;font-weight:700;">◆ Welcome to LeonidaHQ</div>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 32px 16px;text-align:center;">
                  <h1 style="margin:0;font-size:28px;line-height:1.1;color:#FF2D78;font-weight:900;text-transform:uppercase;letter-spacing:-0.5px;">You're on the list.</h1>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 32px 24px;color:#cfcfd6;font-size:15px;line-height:1.6;">
                  <p style="margin:0 0 12px;">GTA 6 pre-orders went live today. We just published the full breakdown — editions, pricing analysis, what the bonuses actually are, and whether to lock in now or wait for the Holiday 2027 discount.</p>
                  <p style="margin:0 0 12px;">After that, expect weekly intel: leaks, trailer frame breakdowns, lore deep-dives, and the analysis you won't find on the corporate gaming sites. You'll be the first to know when the Leonida map activates on launch day — <strong style="color:#FF2D78;">November 19, 2026</strong>.</p>
                  <p style="margin:0 0 0;">No spam. Just signal.</p>
                </td>
              </tr>
              <tr>
                <td style="padding:8px 32px 32px;text-align:center;">
                  <a href="https://leonidahq.gg/articles/gta-6-preorder-breakdown" style="display:inline-block;background:#FF2D78;color:#0a0a0a;text-decoration:none;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;font-size:12px;padding:14px 24px;border-radius:6px;">Read the pre-order breakdown →</a>
                </td>
              </tr>
              <tr>
                <td style="padding:24px 32px;border-top:1px solid rgba(255,255,255,0.06);color:#7d7d8a;font-size:12px;text-align:center;">
                  <p style="margin:0 0 4px;">LeonidaHQ · GTA 6 News · All Day · Every Day</p>
                  <p style="margin:0 0 12px;">Follow on X: <a href="https://x.com/viraltbf" style="color:#00E5CC;text-decoration:none;">@viraltbf</a></p>
                  <p style="margin:0 0 4px;color:#5d5d6a;">LeonidaHQ · hello@leonidahq.gg</p>
                  <p style="margin:0;color:#5d5d6a;">
                    Don't want these? <a href="https://leonidahq.gg/unsubscribe" style="color:#7d7d8a;">Unsubscribe</a>
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

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  console.log(`[subscribe] ${email} at ${new Date().toISOString()}`);

  if (!resend) {
    // Resend not configured — accept signup but skip the email
    console.warn("[subscribe] RESEND_API_KEY not set; skipping confirmation email");
    return NextResponse.json({ ok: true, sent: false });
  }

  try {
    // 1. Save to Resend Audience (the list) — this is the durable record
    if (AUDIENCE_ID) {
      const { error: contactError } = await resend.contacts.create({
        audienceId: AUDIENCE_ID,
        email,
        unsubscribed: false,
      });
      if (contactError) {
        // Log but don't block — still send the welcome email
        console.error("[subscribe] contacts.create error:", contactError);
      } else {
        console.log(`[subscribe] saved to audience: ${email}`);
      }
    } else {
      console.warn("[subscribe] RESEND_AUDIENCE_ID not set — subscriber not saved to list");
    }

    // 2. Send welcome email
    const { error } = await resend.emails.send({
      from: FROM,
      to: email,
      replyTo: REPLY_TO,
      subject: "You're on the list — LeonidaHQ",
      html: welcomeHtml(),
    });

    if (error) {
      console.error("[subscribe] resend send error:", error);
      // Don't fail the signup if email fails — contact is already saved
      return NextResponse.json({ ok: true, sent: false, error: error.message });
    }

    // 3. Notify owner per signup
    const notifyTo = process.env.SUBSCRIBE_NOTIFY_TO;
    if (notifyTo) {
      await resend.emails.send({
        from: FROM,
        to: notifyTo,
        subject: `New LeonidaHQ subscriber: ${email}`,
        html: `<p>New signup: <strong>${email}</strong> at ${new Date().toISOString()}</p>`,
      });
    }

    return NextResponse.json({ ok: true, sent: true });
  } catch (e) {
    console.error("[subscribe] unexpected error:", e);
    return NextResponse.json({ ok: true, sent: false });
  }
}
