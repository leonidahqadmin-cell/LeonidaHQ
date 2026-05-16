// Email signup endpoint. Currently logs only — wire to Supabase + Resend by adding env vars and uncommenting.

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  try {
    // SUPABASE write — uncomment after creating `subscribers` table:
    // const { createClient } = await import("@supabase/supabase-js");
    // const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);
    // await supabase.from("subscribers").insert({ email, source: "leonidahq.gg" });

    // RESEND confirmation — uncomment after adding RESEND_API_KEY:
    // await fetch("https://api.resend.com/emails", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     from: "LeonidaHQ <hello@leonidahq.gg>",
    //     to: email,
    //     subject: "Bureau Confirmation — You are now on the civilian notification list",
    //     html: "<p>The Bureau will notify you the moment the Leonida map activates on 2026-11-19.</p>",
    //   }),
    // });

    console.log(`[subscribe] ${email} at ${new Date().toISOString()}`);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[subscribe error]", e);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
