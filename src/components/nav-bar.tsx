"use client"

import Link from "next/link"

const mainNavItems = [
  {
    label: "Product",
    href: "/",
  },
  {
    label: "Features",
    href: "/",
  },
  {
    label: "Blog",
    href: "/",
  },
]

export function MainNavbar() {
  return (
    <nav className="flex items-center gap-10">
      {mainNavItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="animated-underline text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
