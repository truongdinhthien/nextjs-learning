import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

function LoginPage() {
  return (
    <div className="h-full grid items-center pb-16">
      <div className="container max-w-[420px]">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-2">Hey again</h1>
          <p className="text-sm text-muted-foreground mb-4">Unlock the doors to your account with a secure login</p>
          <div className="space-y-4">
            <form className="flex flex-col gap-2">
              <Input placeholder="Email" />
              <Button>Log in with email</Button>
            </form>
            <div className="flex items-center">
              <div className="bg-border flex-grow-1 h-[1px] w-full" />
              <span className="px-3 text-muted-foreground text-sm flex-shrink-0">Or continue with</span>
              <div className="bg-border flex-grow-1 h-[1px] w-full" />
            </div>
            <div>
              <Button variant="outline" className="w-full">
                <Icons.Google className="w-4 h-4 mr-2" />
                <span>Google</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
