import { NextResponse } from "next/server";

// This route is not compatible with static export
// For GitHub Pages, authentication is disabled
export const dynamic = "force-static";

export async function POST() {
  // Always return success for static export
  return NextResponse.json({ success: true }, { status: 200 });
}
