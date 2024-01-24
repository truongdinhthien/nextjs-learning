import { MainNavbar } from '@/components/nav-bar';
import { Button } from '@/components/ui/button';
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
              className="text-foreground font-semibold text-2xl"
            >
              nextform.
            </Link>
            <MainNavbar />
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
