// Self-serve unsubscribe. Marks the contact as unsubscribed in Resend Audience.
// Called by the /unsubscribe page with { email } in the body.

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  console.log(`[unsubscribe] ${email} at ${new Date().toISOString()}`);

  if (!resend || !AUDIENCE_ID) {
    console.warn("[unsubscribe] Resend not configured");
    return NextResponse.json({ ok: true });
  }

  try {
    // Find the contact by email in the audience
    const { data: contacts, error: listError } = await resend.contacts.list({ audienceId: AUDIENCE_ID });
    if (listError) {
      console.error("[unsubscribe] list error:", listError);
      return NextResponse.json({ ok: true }); // Still show success to user
    }

    const contact = contacts?.data?.find((c: { email: string }) => c.email.toLowerCase() === email.toLowerCase());
    if (!contact) {
      // Not found — treat as success (idempotent)
      return NextResponse.json({ ok: true });
    }

    const { error: updateError } = await resend.contacts.update({
      audienceId: AUDIENCE_ID,
      id: contact.id,
      unsubscribed: true,
    });

    if (updateError) {
      console.error("[unsubscribe] update error:", updateError);
    } else {
      console.log(`[unsubscribe] marked unsubscribed: ${email}`);
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[unsubscribe] unexpected error:", e);
    return NextResponse.json({ ok: true });
  }
}
