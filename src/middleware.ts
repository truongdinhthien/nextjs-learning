import { authMiddleware, authMiddlewareOptions } from "./lib/next-auth"
import { withAuth } from "next-auth/middleware"

// Reference: https://next-auth.js.org/configuration/nextjs#advanced-usage
export default withAuth(authMiddleware, authMiddlewareOptions)

export const config = {
  matcher: ["/login", "/protect"],
}
