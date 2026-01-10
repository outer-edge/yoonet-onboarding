"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Overview", href: "/" },
  { name: "Sales Process", href: "/process" },
  { name: "Email Templates", href: "/templates" },
  { name: "Team", href: "/team" },
  { name: "Manifesto", href: "/manifesto" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">Y</span>
            </div>
            <span className="text-xl font-bold">Yoonet</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <span className="text-xs text-muted-foreground">
            Sales Onboarding Portal
          </span>
        </div>
      </div>
    </header>
  );
}
