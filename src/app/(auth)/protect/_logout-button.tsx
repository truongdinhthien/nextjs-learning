'use client';

import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function LogoutButton() {
  const router = useRouter();
  return (
    <Button onClick={async (e) => {
      e.preventDefault();
      await signOut({ redirect: false });
      router.push('/login');
    }}
    >
      Sign out
    </Button>
  );
}

export default null;
