import Link from "next/link"

import { Button } from "@/components/ui/button"

import { Icons } from "@/components/icons"

import { UserLoginForm } from "./_components/user-login-form"

function LoginPage() {
  return (
    <div className="grid h-full items-center pb-16">
      <div className="container max-w-[420px]">
        <div className="flex flex-col">
          <h1 className="mb-2 text-2xl font-semibold tracking-tight">
            Hey again
          </h1>
          <p className="mb-4 text-sm text-muted-foreground">
            Unlock the doors to your account with a secure login
          </p>
          <div className="space-y-4">
            <UserLoginForm />
            <div className="flex items-center">
              <div className="grow-1 h-[1px] w-full bg-border" />
              <span className="shrink-0 px-3 text-sm text-muted-foreground">
                Or continue with
              </span>
              <div className="grow-1 h-[1px] w-full bg-border" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="w-full">
                <Icons.Github className="mr-2 size-4" />
                <span>Github</span>
              </Button>
              <Button variant="outline" className="w-full">
                <Icons.Google className="mr-2 size-4" />
                <span>Google</span>
              </Button>
            </div>
          </div>
          <Link
            href="/register"
            className="animated-underline mt-4 self-center text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Don&apos;t have account yet? Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
