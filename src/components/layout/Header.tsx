"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const stages = [
  { id: 1, name: "Inquiry", href: "/stage/inquiry", color: "#3b82f6" },
  { id: 2, name: "Engaged", href: "/stage/engaged", color: "#8b5cf6" },
  { id: 3, name: "Discovery", href: "/stage/discovery", color: "#10b981" },
  { id: 4, name: "Proposal", href: "/stage/proposal", color: "#f59e0b" },
  { id: 5, name: "Onboarding", href: "/stage/onboarding", color: "#ec4899" },
];

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Playbook", href: "/playbook" },
  { name: "Templates", href: "/templates" },
];

export function Header() {
  const pathname = usePathname();
  const isOnStagePage = pathname.startsWith("/stage/");
  const currentStageSlug = isOnStagePage ? pathname.split("/stage/")[1] : null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-6">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-bold text-primary-foreground">Y</span>
            </div>
            <span className="text-xl font-bold hidden sm:inline">Yoonet</span>
          </Link>
        </div>

        {/* Stage Journey Indicator */}
        <div className="hidden md:flex items-center mr-6">
          {stages.map((stage, i) => (
            <div key={stage.id} className="flex items-center">
              <Link
                href={stage.href}
                className="group relative flex items-center"
              >
                <div
                  className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                    currentStageSlug === stage.href.split("/stage/")[1]
                      ? "text-white shadow-md scale-110"
                      : "text-muted-foreground bg-muted hover:scale-105"
                  )}
                  style={
                    currentStageSlug === stage.href.split("/stage/")[1]
                      ? { backgroundColor: stage.color }
                      : {}
                  }
                >
                  {stage.id}
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span
                    className="text-[10px] font-medium whitespace-nowrap px-2 py-1 rounded"
                    style={{
                      backgroundColor: stage.color,
                      color: "white",
                    }}
                  >
                    {stage.name}
                  </span>
                </div>
              </Link>
              {i < stages.length - 1 && (
                <div className="w-4 h-px bg-muted-foreground/30 mx-0.5" />
              )}
            </div>
          ))}
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded-md",
                pathname === item.href
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <span className="text-xs text-muted-foreground hidden lg:inline">
            Sales Onboarding Portal
          </span>
        </div>
      </div>
    </header>
  );
}
