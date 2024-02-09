"use client"

import { useRouter } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})
type FormData = z.infer<typeof userLoginSchema>

export function UserLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userLoginSchema),
  })

  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    try {
      const response = await signIn("credentials", {
        ...data,
        redirect: false,
      })
      if (response?.ok) {
        router.replace("/protect")
      } else {
        alert("error")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input
        danger={!!errors?.email}
        placeholder="Email"
        {...register("email")}
      />
      <Input
        danger={!!errors?.password}
        type="password"
        placeholder="Password"
        {...register("password")}
      />
      <Button type="submit">Log in with email</Button>
    </form>
  )
}
