import { NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export async function proxy(request) {
  const sessionCookie = getSessionCookie(request);
  const { pathname } = request.nextUrl;

  const isPrivateRoute = pathname.startsWith("/dashboard");

  // logged in না থাকলে dashboard-এ ঢুকতে দেবে না
  if (isPrivateRoute && !sessionCookie) {
    const signInUrl = new URL("/signin", request.url);
    signInUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(signInUrl);
  }

  // logged in অবস্থায় signin/signup-এ গেলে home-এ পাঠিয়ে দেবে
  const isAuthRoute = pathname === "/signin" || pathname === "/signup";
  if (isAuthRoute && sessionCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/signin", "/signup"],
};