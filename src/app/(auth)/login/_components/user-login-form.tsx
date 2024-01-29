'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
type FormData = z.infer<typeof userLoginSchema>;

export function UserLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userLoginSchema),
    // mode: 'onSubmit',
  });

  const router = useRouter();

  // TODO: Handle validation on input
  console.log(errors);

  const onSubmit = async (data: FormData) => {
    try {
      const response = await signIn('credentials', {
        ...data,
        redirect: false,
      });
      if (response?.ok) {
        router.replace('/protect');
      } else {
        alert('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <Input placeholder="Email" danger={!!errors.email} {...register('email')} />
      <Input type="password" placeholder="Password" danger={!!errors.password} {...register('password')} />
      <Button type="submit">Log in with email</Button>
    </form>
  );
}
