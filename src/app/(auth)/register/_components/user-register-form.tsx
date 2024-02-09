"use client"

import { useRouter } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const userLoginSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
})
type FormData = z.infer<typeof userLoginSchema>

export function UserRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userLoginSchema),
  })

  const router = useRouter()

  const onSubmit = async (data: FormData) => {
    // try {
    //   const response = await signIn("credentials", {
    //     ...data,
    //     redirect: false,
    //   })
    //   if (response?.ok) {
    //     router.replace("/protect")
    //   } else {
    //     alert("error")
    //   }
    // } catch (error) {
    //   console.log(error)
    // }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input danger={!!errors?.name} placeholder="Name" {...register("name")} />
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
      <Button type="submit">Create an account</Button>
    </form>
  )
}
