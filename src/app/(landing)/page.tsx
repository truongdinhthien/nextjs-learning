import Link from "next/link"

import { cn } from "@/lib/utils"

import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <section id="hero" className="min-h-[600px] pb-16 pt-20">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <span className="mb-6 rounded-full bg-muted px-3 py-1.5 text-xs font-semibold">
            Welcome to NextForm 👋
          </span>
          <h1 className="mb-4 max-w-[60rem] text-6xl font-extrabold leading-tight tracking-tight text-primary">
            An demo app built using latest Next.js framework version
          </h1>
          <p className="mb-8 text-lg text-primary/60">
            I&apos;m excited to spread the good vibes of using Next.js server
            components
            <br />
            Stay updated by following the GitHub repository
          </p>
          <div className="flex flex-col items-center gap-4">
            <Link href="/login" className={cn(buttonVariants(), "w-40")}>
              Discover now
            </Link>
            <Link
              href="https://github.com/truongdinhthien/nextjs-learning"
              target="_blank"
              className="animated-underline inline text-sm"
            >
              Follow on GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
