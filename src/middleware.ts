import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Create a matcher for protected routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/request(.*)",
  "/documents(.*)"
]);

// Create a matcher for auth routes that should not be protected
const isAuthRoute = createRouteMatcher([
  "/admin/sign-in(.*)",
  "/admin/sign-up(.*)"
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)"
  ]
}; 