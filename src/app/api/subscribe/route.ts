import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  // TODO: store subscriber emails (Google Sheets, database, etc.)
  console.log(`New subscriber: ${email}`);

  return NextResponse.json({ ok: true });
}
