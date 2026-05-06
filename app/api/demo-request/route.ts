import { NextRequest, NextResponse } from "next/server";

// TODO: Replace stub with Resend / Loops / Formspree integration before launch.
// Submissions should email the team at jyangccbb13@gmail.com (or team inbox).
export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("[demo-request stub]", body);
  return NextResponse.json({ ok: true });
}
