import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import content from "@/data/content.json";

export default function HomePage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          {content.company.name} {content.company.tagline}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {content.company.description}
        </p>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Link href="/process">
          <Card className="h-full cursor-pointer transition-shadow hover:shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-white">
                  1
                </span>
                Sales Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Interactive visualization of the 5-stage sales journey from inquiry to onboarding
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/templates">
          <Card className="h-full cursor-pointer transition-shadow hover:shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500 text-white">
                  2
                </span>
                Email Templates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                View and edit email templates for automated and manual communications
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Link href="/team">
          <Card className="h-full cursor-pointer transition-shadow hover:shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500 text-white">
                  3
                </span>
                Team Roles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Understand who does what at each stage of the sales process
              </CardDescription>
            </CardContent>
          </Card>
        </Link>

        <Card className="h-full border-dashed">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg text-muted-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                ?
              </span>
              Docker Ready
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Content stored in JSON files for easy updates via Docker volume mounts
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Sales Stages Overview</h2>
        <div className="flex flex-wrap gap-2">
          {content.stages.map((stage) => (
            <Link key={stage.id} href={`/process?stage=${stage.id}`}>
              <Badge
                variant="secondary"
                className="cursor-pointer px-4 py-2 text-sm transition-transform hover:scale-105"
                style={{
                  backgroundColor: stage.lightColor,
                  color: stage.color,
                  borderColor: stage.color,
                  borderWidth: "1px",
                }}
              >
                <span
                  className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs text-white"
                  style={{ backgroundColor: stage.color }}
                >
                  {stage.id}
                </span>
                {stage.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Automated Nurturing</CardTitle>
            <CardDescription>
              Automatic email sequences that keep prospects engaged
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {content.automatedContent.nurturing.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-pink-100 text-xs text-pink-600">
                    ⚡
                  </span>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <Badge variant="outline" className="mt-1 text-xs">
                      Trigger: {item.trigger}
                    </Badge>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Notifications</CardTitle>
            <CardDescription>
              Automated alerts to keep the team in sync
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {content.automatedContent.notifications.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-600">
                    📧
                  </span>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <div className="mt-1 flex gap-1">
                      {item.recipients.map((r) => (
                        <Badge key={r} variant="secondary" className="text-xs">
                          {r}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 rounded-lg border bg-muted/50 p-6">
        <h2 className="mb-2 text-lg font-semibold">Quick Start</h2>
        <p className="mb-4 text-muted-foreground">
          New to the sales process? Start with the interactive process diagram to understand the complete journey.
        </p>
        <Link href="/process">
          <Button>View Sales Process</Button>
        </Link>
      </div>
    </div>
  );
}
