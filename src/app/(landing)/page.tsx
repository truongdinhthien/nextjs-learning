import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <section id="hero" className="pt-20 pb-16 min-h-[600px]">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full bg-muted font-semibold text-xs px-3 py-1.5 mb-6">
            Welcome to NextForm 👋
          </span>
          <h1 className="text-6xl leading-tight tracking-tight font-extrabold text-primary max-w-[60rem] mb-4">
            An demo app built using latest Next.js framework version
          </h1>
          <p className="text-primary/60 mb-8 text-lg">
            I&apos;m excited to spread the good vibes of using Next.js server components
            <br />
            Stay updated by following the GitHub repository
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button className="w-40">Discover now</Button>
            <Link
              href="https://github.com/truongdinhthien/nextjs-learning"
              target="_blank"
              className="inline text-sm animated-underline"
            >
              Follow on GitHub
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
