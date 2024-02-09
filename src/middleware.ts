import { withAuth } from "next-auth/middleware"

import { authMiddleware, authMiddlewareOptions } from "./lib/next-auth"

// Reference: https://next-auth.js.org/configuration/nextjs#advanced-usage
export default withAuth(authMiddleware, authMiddlewareOptions)

export const config = {
  matcher: ["/login", "/protect"],
}
