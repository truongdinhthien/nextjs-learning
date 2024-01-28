import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

type LayoutProps = Readonly<{ children: React.ReactNode }>;

export default function Layout({ children }:LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-16 py-4 relative z-10">
        <div className="container">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className={buttonVariants({ variant: 'outline' })}
            >
              Back
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 basis-0">{children}</main>
    </div>
  );
}
