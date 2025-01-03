import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const response = await NextResponse.next();

  if (response.status === 404) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return response;
}
