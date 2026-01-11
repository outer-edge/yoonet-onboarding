import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const stages = [
  {
    id: 1,
    name: "Inquiry",
    slug: "inquiry",
    color: "#3b82f6",
    lightColor: "#dbeafe",
    description: "Lead enters system, welcome email sent, portal access granted",
    keyAction: "Acknowledge inquiry",
    owner: "System + Nicole",
  },
  {
    id: 2,
    name: "Engaged",
    slug: "engaged",
    color: "#8b5cf6",
    lightColor: "#ede9fe",
    description: "Booking link sent, assessment form created and delivered",
    keyAction: "Book meeting + send form",
    owner: "Nicole + Em",
  },
  {
    id: 3,
    name: "Discovery",
    slug: "discovery",
    color: "#10b981",
    lightColor: "#d1fae5",
    description: "Meeting with Ben, understand needs, capture insights",
    keyAction: "Conduct discovery call",
    owner: "Ben",
  },
  {
    id: 4,
    name: "Proposal",
    slug: "proposal",
    color: "#f59e0b",
    lightColor: "#fef3c7",
    description: "Create tailored proposal, get approval, deliver to client",
    keyAction: "Send proposal",
    owner: "Em + Nicole + Ben",
  },
  {
    id: 5,
    name: "Onboarding",
    slug: "onboarding",
    color: "#ec4899",
    lightColor: "#fce7f3",
    description: "Client accepts, completes setup, recruitment begins",
    keyAction: "Welcome to partnership",
    owner: "System + Nicole",
  },
];

const quickActions = [
  {
    title: "View Full Playbook",
    description: "Complete sales process specification",
    href: "/playbook",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Email Templates",
    description: "View and edit all email templates",
    href: "/templates",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function DashboardPage() {
  return (
    <div className="container py-8">
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Sales Onboarding Portal
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Your guide to the 5-stage journey from inquiry to onboarding.
          Click any stage to see tasks, emails, and checklists.
        </p>
      </div>

      {/* The Journey */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          The Journey
        </h2>

        <div className="grid gap-4 md:grid-cols-5">
          {stages.map((stage, i) => (
            <Link key={stage.id} href={`/stage/${stage.slug}`} className="group">
              <Card
                className="h-full transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden border-2"
                style={{ borderColor: "transparent" }}
              >
                <div
                  className="h-2 w-full"
                  style={{ backgroundColor: stage.color }}
                />
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow-md"
                      style={{ backgroundColor: stage.color }}
                    >
                      {stage.id}
                    </div>
                    {i < stages.length - 1 && (
                      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                        <svg className="w-4 h-4 text-muted-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg">{stage.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-xs">
                    {stage.description}
                  </CardDescription>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="text-[10px]"
                      style={{ backgroundColor: stage.lightColor, color: stage.color }}
                    >
                      {stage.owner}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Start by Role */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Quick Start by Role
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border-amber-200 bg-amber-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700">
                <div className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">E</div>
                Em
              </CardTitle>
              <CardDescription>Technical & Content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">Your key tasks:</p>
              <ul className="text-sm space-y-1.5">
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[10px]">Stage 2</Badge>
                  <span>Review business + create forms</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[10px]">Stage 4</Badge>
                  <span>Draft needs + solutions</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link href="/stage/engaged">
                  <Button size="sm" variant="outline" className="w-full text-amber-700 border-amber-300 hover:bg-amber-100">
                    Start at Stage 2
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-pink-200 bg-pink-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-700">
                <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold">N</div>
                Nicole
              </CardTitle>
              <CardDescription>Sales Admin</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">Your key tasks:</p>
              <ul className="text-sm space-y-1.5">
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[10px]">Stage 1-2</Badge>
                  <span>Send booking link + forms</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[10px]">Stage 4</Badge>
                  <span>Create + send proposals</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link href="/stage/inquiry">
                  <Button size="sm" variant="outline" className="w-full text-pink-700 border-pink-300 hover:bg-pink-100">
                    Start at Stage 1
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">B</div>
                Ben
              </CardTitle>
              <CardDescription>Sales & Relationships</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">Your key tasks:</p>
              <ul className="text-sm space-y-1.5">
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[10px]">Stage 3</Badge>
                  <span>Discovery meetings</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[10px]">Stage 4</Badge>
                  <span>Review + approve proposals</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link href="/stage/discovery">
                  <Button size="sm" variant="outline" className="w-full text-blue-700 border-blue-300 hover:bg-blue-100">
                    Start at Stage 3
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2">
        {quickActions.map((action) => (
          <Link key={action.href} href={action.href}>
            <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {action.icon}
                  </div>
                  {action.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{action.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-12 rounded-xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-8 text-center">
        <h2 className="text-xl font-semibold mb-2">New to the sales process?</h2>
        <p className="text-muted-foreground mb-4">
          Start with Stage 1 and work through each stage to understand the complete journey.
        </p>
        <Link href="/stage/inquiry">
          <Button size="lg">
            Begin the Journey
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
}
