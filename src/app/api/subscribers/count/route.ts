// Live subscriber count from the Resend Audience (the real email list).
// This is the revenue-gate scoreboard: how many real emails we've captured.
// Protected — requires ?key=<SUBSCRIBER_STATS_KEY>; fail-closed if that env isn't set,
// so the count is never public.
// Env vars: RESEND_API_KEY, RESEND_AUDIENCE_ID, SUBSCRIBER_STATS_KEY
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID ?? "";

export async function GET(req: NextRequest) {
  const key = req.nextUrl.searchParams.get("key") ?? "";
  const expected = process.env.SUBSCRIBER_STATS_KEY ?? "";
  // Fail closed: no configured key => never expose the count.
  if (!expected || key !== expected) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  if (!resend || !AUDIENCE_ID) {
    return NextResponse.json({ error: "resend not configured" }, { status: 503 });
  }

  try {
    const { data, error } = await resend.contacts.list({ audienceId: AUDIENCE_ID });
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 502 });
    }
    const contacts = data?.data ?? [];
    const total = contacts.length;
    const unsubscribed = contacts.filter((c) => c.unsubscribed).length;
    const active = total - unsubscribed;
    return NextResponse.json({
      ok: true,
      total,
      active,
      unsubscribed,
      // Resend returns a single page; for a list this large, add pagination.
      truncated: total >= 1000,
      at: new Date().toISOString(),
    });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
