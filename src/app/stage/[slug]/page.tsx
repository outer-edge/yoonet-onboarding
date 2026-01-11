"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { stages, getStage, getNextStage, getPrevStage } from "@/data/stages";

const ownerColors: Record<string, { bg: string; text: string }> = {
  Em: { bg: "bg-amber-100", text: "text-amber-700" },
  Nicole: { bg: "bg-pink-100", text: "text-pink-700" },
  Ben: { bg: "bg-blue-100", text: "text-blue-700" },
  System: { bg: "bg-gray-100", text: "text-gray-700" },
};

export default function StagePage() {
  const params = useParams();
  const slug = params.slug as string;
  const stage = getStage(slug);

  if (!stage) {
    notFound();
  }

  const nextStage = getNextStage(stage.id);
  const prevStage = getPrevStage(stage.id);

  return (
    <div className="container py-8">
      {/* Stage Navigation */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {stages.map((s) => (
            <Link key={s.id} href={`/stage/${s.slug}`}>
              <Badge
                variant={s.id === stage.id ? "default" : "outline"}
                className="cursor-pointer px-3 py-1.5 text-sm transition-all hover:scale-105"
                style={
                  s.id === stage.id
                    ? { backgroundColor: s.color, color: "white" }
                    : { borderColor: s.color, color: s.color }
                }
              >
                <span
                  className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs"
                  style={
                    s.id === stage.id
                      ? { backgroundColor: "rgba(255,255,255,0.3)", color: "white" }
                      : { backgroundColor: s.lightColor, color: s.color }
                  }
                >
                  {s.id}
                </span>
                {s.name}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="mb-10">
        <div
          className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
          style={{ backgroundColor: stage.lightColor }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"
            style={{ backgroundColor: stage.color, opacity: 0.1 }}
          />
          <div className="relative">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                style={{ backgroundColor: stage.color }}
              >
                {stage.id}
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-wider" style={{ color: stage.color }}>
                  Stage {stage.id} of 5
                </p>
                <h1 className="text-3xl md:text-4xl font-bold" style={{ color: stage.color }}>
                  {stage.name}
                </h1>
              </div>
            </div>
            <p className="text-lg text-foreground/80 max-w-3xl">{stage.description}</p>
          </div>
        </div>
      </div>

      {/* Goal & Criteria */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 w-full">
        <Card className="overflow-hidden min-w-0">
          <CardHeader className="pb-2 -mx-6 -mt-6 px-6 pt-4" style={{ backgroundColor: stage.lightColor }}>
            <CardTitle className="text-base flex items-center gap-2">
              <svg className="w-5 h-5 shrink-0" style={{ color: stage.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Goal
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground">{stage.goal}</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden min-w-0">
          <CardHeader className="pb-2 -mx-6 -mt-6 px-6 pt-4" style={{ backgroundColor: stage.lightColor }}>
            <CardTitle className="text-base flex items-center gap-2">
              <svg className="w-5 h-5 shrink-0" style={{ color: stage.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Entry Trigger
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground">{stage.entryTrigger}</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden min-w-0">
          <CardHeader className="pb-2 -mx-6 -mt-6 px-6 pt-4" style={{ backgroundColor: stage.lightColor }}>
            <CardTitle className="text-base flex items-center gap-2">
              <svg className="w-5 h-5 shrink-0" style={{ color: stage.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Exit Criteria
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <p className="text-sm text-muted-foreground">{stage.exitCriteria}</p>
          </CardContent>
        </Card>
      </div>

      {/* Tasks */}
      <Card className="mb-10 overflow-hidden min-w-0">
        <CardHeader className="border-b -mx-6 -mt-6 px-6 py-4" style={{ backgroundColor: stage.lightColor }}>
          <CardTitle className="flex items-center gap-2">
            <svg className="w-5 h-5 shrink-0" style={{ color: stage.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Tasks
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3">
            {stage.tasks.map((task, i) => (
              <div key={i} className="flex items-start gap-4 p-3 rounded-lg border hover:bg-muted/30 transition-colors">
                <Badge className={`${ownerColors[task.owner].bg} ${ownerColors[task.owner].text} shrink-0`}>
                  {task.owner}
                </Badge>
                <div className="flex-1">
                  <p className="font-medium">{task.task}</p>
                  {task.details && <p className="text-sm text-muted-foreground mt-0.5">{task.details}</p>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Automations */}
      <Card className="mb-10 overflow-hidden min-w-0">
        <CardHeader className="border-b -mx-6 -mt-6 px-6 py-4" style={{ backgroundColor: stage.lightColor }}>
          <CardTitle className="flex items-center gap-2">
            <svg className="w-5 h-5 shrink-0" style={{ color: stage.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Automations
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 px-3 font-semibold">Automation</th>
                  <th className="text-left py-2 px-3 font-semibold">Trigger</th>
                  <th className="text-left py-2 px-3 font-semibold">Timing</th>
                  <th className="text-left py-2 px-3 font-semibold">Platform</th>
                </tr>
              </thead>
              <tbody>
                {stage.automations.map((auto, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/30">
                    <td className="py-3 px-3 font-medium">{auto.name}</td>
                    <td className="py-3 px-3 text-muted-foreground">{auto.trigger}</td>
                    <td className="py-3 px-3">
                      <Badge variant="outline">{auto.timing}</Badge>
                    </td>
                    <td className="py-3 px-3 text-muted-foreground">{auto.platform}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Email Templates */}
      <Card className="mb-10 overflow-hidden min-w-0">
        <CardHeader className="border-b -mx-6 -mt-6 px-6 py-4" style={{ backgroundColor: stage.lightColor }}>
          <CardTitle className="flex items-center gap-2">
            <svg className="w-5 h-5 shrink-0" style={{ color: stage.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Templates
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            {stage.emails.map((email, i) => (
              <AccordionItem key={i} value={`email-${i}`} className="border rounded-lg mb-3 px-4">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <Badge variant={email.type === "automated" ? "secondary" : "outline"}>
                      {email.type}
                    </Badge>
                    <span>{email.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Subject</p>
                      <p className="font-medium">{email.subject}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Trigger</p>
                      <p className="text-sm text-muted-foreground">{email.trigger}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Body</p>
                      <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap font-sans">
                        {email.body}
                      </pre>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>

      {/* Checklist & Tips Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Card className="overflow-hidden min-w-0">
          <CardHeader className="border-b -mx-6 -mt-6 px-6 py-4" style={{ backgroundColor: stage.lightColor }}>
            <CardTitle className="flex items-center gap-2">
              <svg className="w-5 h-5 shrink-0" style={{ color: stage.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Checklist
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {stage.checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded border-2 border-muted-foreground/30 shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="overflow-hidden min-w-0">
          <CardHeader className="border-b -mx-6 -mt-6 px-6 py-4" style={{ backgroundColor: stage.lightColor }}>
            <CardTitle className="flex items-center gap-2">
              <svg className="w-5 h-5 shrink-0" style={{ color: stage.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {stage.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-lg">💡</span>
                  <span className="text-sm text-muted-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6 border-t">
        {prevStage ? (
          <Link href={`/stage/${prevStage.slug}`}>
            <Button variant="outline" className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Stage {prevStage.id}:</span> {prevStage.name}
            </Button>
          </Link>
        ) : (
          <div />
        )}

        <Link href="/playbook">
          <Button variant="ghost">View Full Playbook</Button>
        </Link>

        {nextStage ? (
          <Link href={`/stage/${nextStage.slug}`}>
            <Button className="flex items-center gap-2" style={{ backgroundColor: nextStage.color }}>
              <span className="hidden sm:inline">Stage {nextStage.id}:</span> {nextStage.name}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </Link>
        ) : (
          <Link href="/playbook">
            <Button className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
              Complete Journey
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
