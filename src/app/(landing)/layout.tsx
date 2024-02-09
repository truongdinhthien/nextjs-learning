import Link from "next/link"

import { MainNavbar } from "@/components/nav-bar"

type LayoutProps = Readonly<{ children: React.ReactNode }>

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="relative z-10 h-16 py-4">
        <div className="container">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              NextForm
            </Link>
            <MainNavbar />
          </div>
        </div>
      </header>
      <main className="flex-1 basis-0">{children}</main>
    </div>
  )
}
