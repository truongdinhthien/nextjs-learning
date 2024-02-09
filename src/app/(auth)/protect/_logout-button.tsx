"use client"

import { useRouter } from "next/navigation"

import { signOut } from "next-auth/react"

import { Button } from "@/components/ui/button"

export function LogoutButton() {
  const router = useRouter()
  return (
    <Button
      onClick={async (e) => {
        e.preventDefault()
        await signOut({ redirect: false })
        router.push("/login")
      }}
    >
      Sign out
    </Button>
  )
}

export default null
