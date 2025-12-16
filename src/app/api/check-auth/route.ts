import { NextResponse } from "next/server";

// This route is not compatible with static export
// For GitHub Pages, authentication is disabled
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ authenticated: true }, { status: 200 });
}
