import { NextResponse, type NextRequest } from "next/server";

export async function GET(_request: NextRequest) {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/London",
    { next: { revalidate: 30 } }
  );
  const json = await response.json();

  const headers = Object.fromEntries(response.headers.entries());

  return NextResponse.json({
    response: json,
    headers,
  });
}
