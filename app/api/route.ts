import { NextResponse, type NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(_request: NextRequest) {
  const response = await fetch(
    "https://app.incident.io/api/status_page_content/game-days/incidents/01H0JR44W6VQ1R4PTA97R21WTX",
    { next: { revalidate: 30 } }
  );
  const headers = Object.fromEntries(response.headers.entries());

  return NextResponse.json({
    status: response.status,
    headers,
  });
}
