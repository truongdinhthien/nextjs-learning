'use client';

import Link from 'next/link';

const mainNavItems = [
  {
    label: 'Product',
    href: '/',
  },
  {
    label: 'Features',
    href: '/',
  },
  {
    label: 'Blog',
    href: '/',
  },
];

export function MainNavbar() {
  return (
    <nav className="flex items-center gap-10">
      {mainNavItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-sm font-medium text-foreground/60 hover:text-foreground/80 transition-colors animated-underline"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default null;
