"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ManifestoPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wider uppercase">
          Complete Sales Process Specification
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
          Yoonet Sales Process
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          From initial inquiry through to client onboarding — a systematic, repeatable sales engine
          that delivers a premium client experience while reducing founder dependency.
        </p>
      </div>

      {/* Executive Summary */}
      <div className="mb-16 max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Executive Summary</h2>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              This document provides the full specification for Yoonet&apos;s sales process, covering
              the five stages of the pipeline, roles involved, automations, content requirements,
              technical integrations, and team workflows.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg bg-background/50 p-4">
                <p className="font-semibold mb-1">Scope</p>
                <p className="text-muted-foreground">Yoonet brand only (Allied Flow separate)</p>
              </div>
              <div className="rounded-lg bg-background/50 p-4">
                <p className="font-semibold mb-1">Tech Stack</p>
                <p className="text-muted-foreground">Bubble, SendGrid, Claude API, Calendly, yoonet.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Five Stages */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">The Five Stages</h2>
          <p className="text-muted-foreground">Complete sales pipeline from inquiry to onboarding</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Visual Pipeline */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {[
              { num: 1, name: "Inquiry", color: "bg-blue-500" },
              { num: 2, name: "Engaged", color: "bg-indigo-500" },
              { num: 3, name: "Discovery", color: "bg-violet-500" },
              { num: 4, name: "Proposal", color: "bg-purple-500" },
              { num: 5, name: "Onboarding", color: "bg-pink-500" },
            ].map((stage, i) => (
              <div key={i} className="flex items-center">
                <div className={`${stage.color} text-white rounded-lg px-4 py-3 text-center min-w-[100px]`}>
                  <div className="text-xs opacity-80">Stage {stage.num}</div>
                  <div className="font-semibold">{stage.name}</div>
                </div>
                {i < 4 && <div className="hidden md:block text-muted-foreground mx-2">→</div>}
              </div>
            ))}
          </div>

          {/* Stage Details Table */}
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left py-3 px-4 font-semibold">Stage</th>
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Trigger</th>
                  <th className="text-left py-3 px-4 font-semibold">Exit Criteria</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["1", "Inquiry", "Lead enters system", "Client exists in Bubble, inquiry acknowledged"],
                  ["2", "Engaged", "Dashboard notification", "Meeting booked, assessment form sent"],
                  ["3", "Discovery", "Assessment submitted", "Meeting complete, needs understood"],
                  ["4", "Proposal", "Meeting complete", "Proposal delivered via yoonet.io/[client]"],
                  ["5", "Onboarding", "Proposal accepted", "Client active, recruitment initiated"],
                ].map(([stage, name, trigger, exit], i) => (
                  <tr key={i} className="hover:bg-muted/30 transition-colors">
                    <td className="py-2.5 px-4 font-mono text-primary font-bold">{stage}</td>
                    <td className="py-2.5 px-4 font-semibold">{name}</td>
                    <td className="py-2.5 px-4 text-muted-foreground">{trigger}</td>
                    <td className="py-2.5 px-4 text-muted-foreground">{exit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* The Participants */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <CardTitle>The Participants</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="overflow-x-auto rounded-lg border mb-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left py-3 px-4 font-semibold">Lane</th>
                  <th className="text-left py-3 px-4 font-semibold">Role</th>
                  <th className="text-left py-3 px-4 font-semibold">Responsibilities</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-2.5 px-4 font-semibold">Client</td>
                  <td className="py-2.5 px-4 text-muted-foreground">Prospect/Customer</td>
                  <td className="py-2.5 px-4 text-muted-foreground">Books meetings, completes forms, receives content, makes decisions</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-2.5 px-4 font-semibold">Automated</td>
                  <td className="py-2.5 px-4 text-muted-foreground">System (Bubble + SendGrid)</td>
                  <td className="py-2.5 px-4 text-muted-foreground">Nurturing content, notifications, reminders, portal access</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-2.5 px-4">
                    <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Em</Badge>
                  </td>
                  <td className="py-2.5 px-4 text-muted-foreground">Technical</td>
                  <td className="py-2.5 px-4 text-muted-foreground">Business review, form HTML creation (with Claude), proposal content</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-2.5 px-4">
                    <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">Nicole</Badge>
                  </td>
                  <td className="py-2.5 px-4 text-muted-foreground">Sales Admin</td>
                  <td className="py-2.5 px-4 text-muted-foreground">Client communication, booking links, form refinement + sending, proposal delivery</td>
                </tr>
                <tr className="hover:bg-muted/30 transition-colors">
                  <td className="py-2.5 px-4">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Ben</Badge>
                  </td>
                  <td className="py-2.5 px-4 text-muted-foreground">Sales</td>
                  <td className="py-2.5 px-4 text-muted-foreground">Initial meetings, proposal review + approval, relationship ownership</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Handoff Flow */}
          <div className="rounded-xl bg-muted/30 p-6">
            <h3 className="font-semibold mb-4">Handoff Points</h3>
            <pre className="text-xs font-mono overflow-x-auto whitespace-pre">
{`Client inquiry → Dashboard (all see)
                     ↓
         ┌──────────┴──────────┐
         ↓                     ↓
    Nicole: Booking        Em: Form creation
         ↓                     ↓
         └──────────┬──────────┘
                    ↓
              Nicole: Send form
                    ↓
              Client: Complete
                    ↓
              Ben: Meeting
                    ↓
         ┌──────────┴──────────┐
         ↓                     ↓
    Em: Understanding     Nicole: Timing
    Em: Solutions              ↓
         ↓                     ↓
         └──────────┬──────────┘
                    ↓
              Nicole: Create proposal
                    ↓
              Ben: Review + approve
                    ↓
              Nicole: Send to client`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Stage Details Tabs */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <CardTitle>Stage Details</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="stage1" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-6">
              <TabsTrigger value="stage1">1. Inquiry</TabsTrigger>
              <TabsTrigger value="stage2">2. Engaged</TabsTrigger>
              <TabsTrigger value="stage3">3. Discovery</TabsTrigger>
              <TabsTrigger value="stage4">4. Proposal</TabsTrigger>
              <TabsTrigger value="stage5">5. Onboarding</TabsTrigger>
            </TabsList>

            {/* Stage 1: Inquiry */}
            <TabsContent value="stage1" className="space-y-6">
              <div className="rounded-xl bg-blue-50 dark:bg-blue-950/30 p-6 border border-blue-200 dark:border-blue-900">
                <h3 className="font-semibold text-lg mb-2">Stage 1: Inquiry</h3>
                <p className="text-muted-foreground">
                  The moment a lead enters the system. Could be organic (website, SEO), referral, or outreach.
                  The goal is to capture the opportunity, create the client record, and trigger parallel workstreams.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Entry Points</h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { source: "Organic", desc: "Website enquiry, contact form, SEO", method: "Bubble form → client record" },
                    { source: "Referral", desc: "Existing client recommendation", method: "Manual entry or forwarded email" },
                    { source: "Outreach", desc: "Proactive contact by Yoonet", method: "Manual entry after response" },
                  ].map((entry, i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <p className="font-semibold mb-1">{entry.source}</p>
                      <p className="text-sm text-muted-foreground mb-2">{entry.desc}</p>
                      <p className="text-xs text-primary">{entry.method}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">What Happens</h4>
                <div className="relative pl-8">
                  <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-300 to-blue-100" />
                  {[
                    { step: "Inquiry received", auto: false },
                    { step: "Client created in Bubble", auto: true },
                    { step: "Dashboard notification to Ben, Em, Nicole", auto: true },
                    { step: "Welcome email sent to client", auto: true },
                    { step: "Portal access granted", auto: true },
                    { step: "Move to Stage 2: Engaged", auto: false },
                  ].map((item, i) => (
                    <div key={i} className="relative pb-4 last:pb-0">
                      <div className="absolute left-[-22px] w-4 h-4 rounded-full bg-background border-2 border-blue-500" />
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{item.step}</span>
                        {item.auto && <Badge variant="outline" className="text-xs">AUTO</Badge>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Automations</h4>
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left py-2 px-3 font-semibold">Automation</th>
                        <th className="text-left py-2 px-3 font-semibold">Trigger</th>
                        <th className="text-left py-2 px-3 font-semibold">Timing</th>
                        <th className="text-left py-2 px-3 font-semibold">Platform</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Client record creation", "Inquiry form submitted", "Immediate", "Bubble"],
                        ["Dashboard notification", "Client created", "Immediate", "Bubble → Slack/Email"],
                        ["Welcome email", "Client created", "Immediate", "Bubble → SendGrid"],
                        ["Portal access email", "Client created", "5 min after welcome", "Bubble → SendGrid"],
                      ].map(([auto, trigger, timing, platform], i) => (
                        <tr key={i} className="hover:bg-muted/30">
                          <td className="py-2 px-3">{auto}</td>
                          <td className="py-2 px-3 text-muted-foreground">{trigger}</td>
                          <td className="py-2 px-3 text-muted-foreground">{timing}</td>
                          <td className="py-2 px-3 text-muted-foreground">{platform}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="welcome-email" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span>Email Template: Welcome</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-2 text-sm">
                      <p><strong>Subject:</strong> Welcome to Yoonet — Let&apos;s get started</p>
                      <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
{`Hi [Contact First Name],

Thank you for reaching out to Yoonet. We're excited to learn more about [Business Name] and explore how we can support your growth.

Here's what happens next:

1. You'll receive a link to book a time to chat with Ben, our founder
2. Before your meeting, we'll send you a short Partner Assessment Form
3. We'll use your responses to make sure our conversation is focused and valuable

In the meantime, you'll have access to our Client Portal where you can learn more about how we work and what makes Yoonet different.

If you have any questions before we speak, simply reply to this email.

Looking forward to connecting.

Warmest regards,
The Yoonet Team`}
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Stage 2: Engaged */}
            <TabsContent value="stage2" className="space-y-6">
              <div className="rounded-xl bg-indigo-50 dark:bg-indigo-950/30 p-6 border border-indigo-200 dark:border-indigo-900">
                <h3 className="font-semibold text-lg mb-2">Stage 2: Engaged</h3>
                <p className="text-muted-foreground">
                  The prospect is now actively engaged. Two parallel tracks begin: (1) booking a meeting with Ben,
                  and (2) preparing a bespoke Partner Assessment Form. Automated nurturing runs alongside.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl border p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-indigo-100 text-indigo-700 text-xs flex items-center justify-center font-bold">1</span>
                    Track 1: Booking
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">Nicole&apos;s Actions:</p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                      Send booking link email within 1 hour of inquiry
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                      Include message that assessment form is coming
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                      Monitor for booking confirmation
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-indigo-100 text-indigo-700 text-xs flex items-center justify-center font-bold">2</span>
                    Track 2: Form Creation
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">Target turnaround: &lt; 1 business day</p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                      Em reviews business (legitimacy + red flags)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                      Em creates form HTML (with Claude)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2" />
                      Nicole reviews, refines, and sends
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl bg-amber-50 dark:bg-amber-950/30 p-6 border border-amber-200 dark:border-amber-900">
                <h4 className="font-semibold mb-3">What Em Looks For (Business Review)</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Legitimacy check:</p>
                    <p className="text-sm text-muted-foreground">Is this a real, established business?</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Red flags to watch for:</p>
                    <ul className="text-sm text-muted-foreground">
                      <li>• Corporates</li>
                      <li>• Financial advisers</li>
                      <li>• Lawyers / Accountants</li>
                      <li>• Any business on compliance &quot;no-touch&quot; list</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm mt-4 text-amber-700 dark:text-amber-400">
                  If red flags present, flag to Ben before proceeding.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="booking-email" className="border rounded-lg mb-3 px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span>Email Template: Booking Link</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-2 text-sm">
                      <p><strong>Subject:</strong> Let&apos;s find a time to talk — [Business Name] + Yoonet</p>
                      <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
{`Hi [Contact First Name],

Thanks for your interest in Yoonet. I'd love to learn more about [Business Name] and explore how we might be able to help.

Book a time that suits you here: [Calendly Link]

Before we meet, we'll send you a short Partner Assessment Form. This helps us understand your specific situation so our conversation is as useful as possible for you.

In the meantime, feel free to explore your Client Portal: [Portal Link]

Looking forward to speaking with you.

Warmest regards,
Nicole
Yoonet`}
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="form-email" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span>Email Template: Form Delivery</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-2 text-sm">
                      <p><strong>Subject:</strong> Your Partner Assessment Form — [Business Name]</p>
                      <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
{`Hi [Contact First Name],

As promised, here's your Partner Assessment Form. This should take about 10 minutes to complete.

Complete your form here: [Form Link]

Your responses help us understand your specific situation so Ben can make your upcoming conversation as valuable as possible.

Please complete this before your meeting on [Meeting Date/Time].

If you have any questions, just reply to this email.

Warmest regards,
Nicole
Yoonet`}
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Stage 3: Discovery */}
            <TabsContent value="stage3" className="space-y-6">
              <div className="rounded-xl bg-violet-50 dark:bg-violet-950/30 p-6 border border-violet-200 dark:border-violet-900">
                <h3 className="font-semibold text-lg mb-2">Stage 3: Discovery</h3>
                <p className="text-muted-foreground">
                  The client has completed their assessment and the meeting with Ben occurs. This is where we truly
                  understand their needs and assess mutual fit. The completed assessment informs the conversation,
                  and Ben&apos;s insights drive the proposal.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Meeting Structure (30-35 min)</h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { title: "Opening", time: "5 min", items: ["Thank for assessment", "Confirm situation", "Set agenda"] },
                    { title: "Understanding", time: "15 min", items: ["Current challenges", "What they've tried", "Success criteria"] },
                    { title: "Exploration", time: "10 min", items: ["How Yoonet helps", "Answer questions", "Address concerns"] },
                    { title: "Next Steps", time: "5 min", items: ["Proposal process", "Timeline", "Immediate questions"] },
                  ].map((section, i) => (
                    <div key={i} className="rounded-lg border p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold">{section.title}</p>
                        <Badge variant="outline" className="text-xs">{section.time}</Badge>
                      </div>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {section.items.map((item, j) => (
                          <li key={j}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Meeting Insights Capture</h4>
                <p className="text-sm text-muted-foreground mb-4">What Ben needs to capture after each meeting:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { field: "Current situation", desc: "What's happening in their business now" },
                    { field: "Pain points", desc: "Specific challenges and frustrations" },
                    { field: "Success criteria", desc: "Their goals and desired outcomes" },
                    { field: "Budget indication", desc: "Any budget discussed or implied" },
                    { field: "Timeline", desc: "When they want to start" },
                    { field: "Specific requirements", desc: "Particular needs or constraints" },
                    { field: "Fit assessment", desc: "Good fit / Needs work / Not right" },
                    { field: "Recommended approach", desc: "What we should propose" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg border p-3">
                      <span className="font-mono text-xs bg-primary/10 text-primary px-2 py-1 rounded">{item.field}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  <strong>Capture method:</strong> Voice note to Em/Nicole or structured form in Bubble
                </p>
              </div>
            </TabsContent>

            {/* Stage 4: Proposal */}
            <TabsContent value="stage4" className="space-y-6">
              <div className="rounded-xl bg-purple-50 dark:bg-purple-950/30 p-6 border border-purple-200 dark:border-purple-900">
                <h3 className="font-semibold text-lg mb-2">Stage 4: Proposal</h3>
                <p className="text-muted-foreground">
                  Based on Ben&apos;s meeting insights, Em and Nicole create a tailored proposal. Claude API generates
                  the HTML, Ben reviews and approves, then Nicole delivers to the client via a personalised yoonet.io
                  page with PIN access.
                </p>
                <p className="text-sm mt-2 text-purple-700 dark:text-purple-400">
                  <strong>Target turnaround:</strong> 48 hours from meeting to proposal delivered
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">The Proposal Creation Loop</h4>
                <div className="relative pl-8">
                  <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-purple-300 to-purple-100" />
                  {[
                    { step: "Ben's meeting insights received", who: "" },
                    { step: "Em drafts Understanding of Needs", who: "Em" },
                    { step: "Em drafts Proposed Solutions", who: "Em" },
                    { step: "Nicole adds Timing & Next Steps", who: "Nicole" },
                    { step: "Nicole triggers \"Generate Proposal\"", who: "Nicole" },
                    { step: "Claude API generates HTML", who: "AUTO" },
                    { step: "Nicole publishes to yoonet.io/proposals/[client]", who: "Nicole" },
                    { step: "Ben reviews proposal page", who: "Ben" },
                    { step: "Nicole sends proposal with PIN", who: "Nicole" },
                  ].map((item, i) => (
                    <div key={i} className="relative pb-4 last:pb-0">
                      <div className="absolute left-[-22px] w-4 h-4 rounded-full bg-background border-2 border-purple-500" />
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{item.step}</span>
                        {item.who && (
                          <Badge
                            className={
                              item.who === "Em" ? "bg-amber-100 text-amber-700 hover:bg-amber-100" :
                              item.who === "Nicole" ? "bg-pink-100 text-pink-700 hover:bg-pink-100" :
                              item.who === "Ben" ? "bg-blue-100 text-blue-700 hover:bg-blue-100" :
                              "bg-muted"
                            }
                          >
                            {item.who}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="proposal-email" className="border rounded-lg mb-3 px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span>Email Template: Proposal Delivery</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-2 text-sm">
                      <p><strong>Subject:</strong> Your Partnership Proposal — [Business Name] + Yoonet</p>
                      <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
{`Hi [Contact First Name],

Thank you for taking the time to meet with us. Based on our conversation, we've put together a proposal for how Yoonet can support [Business Name].

View your proposal here: [Proposal URL]

Your access PIN: [PIN]

This proposal outlines our understanding of your needs, our recommended solution, and the next steps to get started.

If you have any questions or would like to discuss anything in the proposal, simply reply to this email or book a follow-up call: [Calendly Link]

We're excited about the possibility of working together.

Warmest regards,
Ben Carter
Founder, Yoonet`}
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="followup-email" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span>Email Template: Follow-up (48 hours)</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-2 text-sm">
                      <p><strong>Subject:</strong> Following up on your proposal — [Business Name]</p>
                      <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
{`Hi [Contact First Name],

I wanted to check in and see if you've had a chance to review your proposal.

View your proposal: [Proposal URL]
PIN: [PIN]

If you have any questions or would like to talk through anything, I'm happy to jump on a quick call: [Calendly Link]

No pressure at all — just want to make sure you have everything you need to make the right decision for [Business Name].

Warmest regards,
Ben`}
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>

            {/* Stage 5: Onboarding */}
            <TabsContent value="stage5" className="space-y-6">
              <div className="rounded-xl bg-pink-50 dark:bg-pink-950/30 p-6 border border-pink-200 dark:border-pink-900">
                <h3 className="font-semibold text-lg mb-2">Stage 5: Onboarding</h3>
                <p className="text-muted-foreground">
                  The client has accepted the proposal and is ready to begin. They access the Bubble onboarding
                  portal using their PIN, complete the setup requirements, and the recruitment process begins.
                  This stage transitions the relationship from sales to delivery.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Bubble Onboarding Portal — What Client Completes</h4>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Confirm business details",
                    "Primary contact information",
                    "Communication preferences",
                    "Billing setup",
                    "Specific role requirements",
                    "Start date preferences",
                    "Agreement acceptance",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg border p-3">
                      <div className="w-5 h-5 rounded bg-pink-100 text-pink-700 text-xs flex items-center justify-center font-bold">{i + 1}</div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="welcome-partnership" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <span>Email Template: Welcome to Partnership</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="space-y-2 text-sm">
                      <p><strong>Subject:</strong> Welcome to Yoonet — Let&apos;s build something great together</p>
                      <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
{`Hi [Contact First Name],

Welcome to the Yoonet family. We're thrilled to officially begin our partnership with [Business Name].

Here's what happens next:

1. This week: Our recruitment team will begin sourcing candidates based on your requirements
2. Within 5-7 business days: You'll receive 2-3 candidate profiles to review
3. Once you select: We'll begin onboarding your new team member

Your dedicated contacts:
- Ben Carter — Founder, strategic partnership
- [Recruitment contact] — Your recruitment process
- [Support contact] — Ongoing support

If you have any questions at any time, simply reply to this email or reach out via Slack.

We're excited to see what we can achieve together.

Warmest regards,
The Yoonet Team`}
                      </pre>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Claude API Integration */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <CardTitle>Claude API Integration</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-8 space-y-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Form HTML Generation</h3>
            <p className="text-muted-foreground mb-4">
              Claude generates bespoke Partner Assessment Form HTML based on business details.
            </p>
            <pre className="bg-muted rounded-xl p-6 font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`You are generating a Partner Assessment Form for Yoonet. This form will be sent to a prospective client to gather information before their meeting with Ben.

BUSINESS DETAILS:
Name: [business_name]
Industry: [industry]
Website: [website]
Initial notes: [notes from Em]

INSTRUCTIONS:
Generate HTML for a Partner Assessment Form that:
1. Asks relevant questions for their specific industry
2. Gathers information about their current admin challenges
3. Understands their team structure and capacity
4. Identifies their priorities and timeline
5. Uses warm, professional language
6. Is mobile-responsive with clean formatting

Do not ask about:
- Sensitive financial details
- Information not relevant to VA services
- Generic questions that don't relate to their business

Output clean HTML only, no markdown or explanation.`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Proposal HTML Generation</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Endpoint", value: "api.anthropic.com/v1/messages" },
                { label: "Model", value: "claude-sonnet-4-20250514" },
                { label: "Max tokens", value: "4096" },
              ].map((item, i) => (
                <div key={i} className="rounded-lg bg-muted/30 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-mono text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <pre className="bg-muted rounded-xl p-6 font-mono text-xs overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`You are generating a proposal page for Yoonet, a Business Process Outsourcing company that provides virtual assistant services to small and medium enterprises in Australia, New Zealand, and the United Kingdom.

ABOUT YOONET:
- 15 years in operation
- Team based in Bataan, Philippines
- Incorporated employment model (not freelancers)
- Focus on compliance, reliability, and long-term partnerships
- Mission: "Overcoming scarcity, providing opportunity"

CLIENT DETAILS:
Business Name: [client_name]

UNDERSTANDING OF THEIR NEEDS:
[understanding_of_needs]

PROPOSED SOLUTIONS:
[proposed_solutions]

TIMING AND NEXT STEPS:
[timing_next_steps]

INSTRUCTIONS:
Generate a complete HTML proposal section with:

1. STRUCTURE:
   - Opening paragraph addressing the client
   - Section: "Understanding Your Needs"
   - Section: "Our Proposed Solution"
   - Section: "Timing & Next Steps"
   - Section: "Ready to Begin?" (CTA)

2. DESIGN:
   - Inline CSS only
   - Primary: #1e3a5f | Accent: #f59e0b
   - Mobile-responsive layout

3. FORMAT:
   - Output ONLY the HTML content
   - No <!DOCTYPE>, <html>, <head>, or <body>
   - Start with a container <div>`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Input Forms */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <CardTitle>Input Forms in Bubble</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="understanding" className="border rounded-lg mb-3 px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Em</Badge>
                  <span>Understanding of Needs Form</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-4">
                <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 p-4 border border-amber-200 dark:border-amber-900">
                  <p className="text-sm">
                    Summarise what we&apos;ve learned about this client&apos;s situation and challenges.
                    Write in second person (&quot;You mentioned...&quot;, &quot;Your practice is experiencing...&quot;).
                    Be specific to their business — avoid generic statements.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">Character guidance: 200-500 words</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Example Input</p>
                  <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
{`Your podiatry practice in Brisbane has grown to four practitioners seeing approximately 180 patients per week. You're currently spending 15+ hours weekly on administrative tasks including appointment confirmations, Medicare claims processing, and patient follow-ups.

You mentioned that your current part-time receptionist is struggling to keep up with the patient communication load, resulting in missed appointment reminders and delayed billing. You're looking for reliable administrative support that understands the allied health space and can integrate with your Cliniko system.

Your priority is reducing the administrative burden on your clinical team so they can focus on patient care, while ensuring nothing falls through the cracks with Medicare compliance and patient communication.`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="solutions" className="border rounded-lg mb-3 px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Em</Badge>
                  <span>Proposed Solutions Form</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-4">
                <div className="rounded-lg bg-amber-50 dark:bg-amber-950/30 p-4 border border-amber-200 dark:border-amber-900">
                  <p className="text-sm">
                    Outline what we&apos;re recommending for this client. Be specific about the role, hours, and what they&apos;ll handle.
                    Connect the solution directly to the needs identified above.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">Character guidance: 200-400 words</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Example Input</p>
                  <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
{`We recommend a dedicated Virtual Assistant working 30 hours per week, specialising in allied health administration with Cliniko expertise.

Your VA will handle:
- Daily appointment confirmations and reminders via SMS and email
- Medicare claims processing and reconciliation
- Patient follow-up coordination and recall management
- Inbox management and patient enquiry responses
- End-of-day billing reconciliation

This setup directly addresses your capacity constraints by removing the administrative load from your clinical team and reception. With dedicated focus on your practice, your VA will ensure consistent patient communication and timely Medicare processing.

Your VA will work during your practice hours (8am-5pm AEST) with real-time availability via Slack for urgent matters. They'll be fully trained on Cliniko workflows specific to podiatry practices before their first day with you.`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="timing" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100">Nicole</Badge>
                  <span>Timing & Next Steps Form</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 space-y-4">
                <div className="rounded-lg bg-pink-50 dark:bg-pink-950/30 p-4 border border-pink-200 dark:border-pink-900">
                  <p className="text-sm">
                    Outline the timeline and what happens next. Be specific about dates where possible.
                    Include the recruitment process, onboarding, and when they can expect to be operational.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">Character guidance: 150-300 words</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Example Input</p>
                  <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
{`Once you're ready to proceed, here's what happens next:

Week 1-2: Recruitment
We'll shortlist candidates from our existing talent pool who have allied health and Cliniko experience. You'll receive 2-3 candidate profiles to review, with video introductions.

Week 3: Selection & Onboarding
After you select your preferred candidate, we begin our structured onboarding process. This includes Cliniko-specific training tailored to podiatry workflows and your practice's particular processes.

Week 4: Go Live
Your VA begins working with your practice. The first two weeks include daily check-ins to ensure everything is running smoothly.

Ongoing: Your dedicated VA works as an extension of your team, with Yoonet handling all employment compliance, payroll, and HR matters.

To get started, simply click the button below to access your onboarding portal. From there, you'll complete a brief setup form and we'll begin the recruitment process within 48 hours.`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Portal Content */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <CardTitle>Portal Content Structure</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Portal Structure</h3>
              <pre className="text-xs font-mono bg-muted rounded-lg p-4 overflow-x-auto">
{`Client Portal (Bubble)
│
├── Welcome
│   └── Getting Started
│
├── About Yoonet
│   ├── How We Work
│   ├── Our Team
│   └── Our Story
│
├── What to Expect
│   ├── The Process
│   ├── Timeline
│   └── Your Investment
│
├── Resources
│   ├── Case Studies
│   ├── FAQs
│   └── Testimonials
│
└── Your Journey
    └── Progress tracker`}
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Content Release Schedule</h3>
              <div className="space-y-3">
                {[
                  { stage: "1 - Inquiry", content: "Welcome + Getting Started", trigger: "Client created" },
                  { stage: "2 - Engaged", content: "How We Work, Investment Guide", trigger: "Meeting booked / Form sent" },
                  { stage: "3 - Discovery", content: "Case Studies, Testimonials", trigger: "Assessment submitted" },
                  { stage: "4 - Proposal", content: "FAQ", trigger: "Proposal sent" },
                  { stage: "5 - Onboarding", content: "Full portal access", trigger: "Onboarding started" },
                ].map((item, i) => (
                  <div key={i} className="rounded-lg border p-3 text-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">{item.stage}</span>
                      <Badge variant="outline" className="text-xs">{item.trigger}</Badge>
                    </div>
                    <p className="text-muted-foreground text-xs">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold mb-4">Portal Content: How We Work</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: "Partnership, Not Outsourcing", desc: "We're an extension of your team, not a faceless service" },
                { title: "The Yoonet Difference", desc: "Regional Philippines, incorporated employment, 15 years experience" },
                { title: "What Your VA Handles", desc: "Admin tasks, communication, scheduling, industry-specific work" },
                { title: "How We Stay Connected", desc: "Real-time Slack, regular check-ins, dedicated support" },
                { title: "Compliance & Security", desc: "AU/NZ/UK law compliance, data security, employment standards" },
              ].map((item, i) => (
                <div key={i} className="rounded-lg border p-4">
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <CardTitle>Metrics & Targets</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-4">Process Metrics</h3>
              <div className="space-y-3">
                {[
                  { metric: "Inquiry → First response", target: "< 1 hour" },
                  { metric: "Inquiry → Meeting booked", target: "< 24 hours" },
                  { metric: "Form creation turnaround", target: "< 1 business day" },
                  { metric: "Meeting → Proposal delivered", target: "< 48 hours" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                    <span className="text-sm text-muted-foreground">{item.metric}</span>
                    <Badge variant="outline">{item.target}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Conversion Metrics</h3>
              <div className="space-y-3">
                {[
                  { metric: "Inquiry → Engaged", target: "> 90%" },
                  { metric: "Engaged → Discovery", target: "> 80%" },
                  { metric: "Discovery → Proposal", target: "> 90%" },
                  { metric: "Proposal → Onboarding", target: "> 60%" },
                  { metric: "Overall Inquiry → Onboarding", target: "> 40%" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                    <span className="text-sm text-muted-foreground">{item.metric}</span>
                    <Badge variant="outline">{item.target}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quality Metrics</h3>
              <div className="space-y-3">
                {[
                  { metric: "Assessment completion rate", target: "> 90%" },
                  { metric: "Meeting no-show rate", target: "< 10%" },
                  { metric: "Proposal acceptance rate", target: "> 60%" },
                  { metric: "Client satisfaction (NPS)", target: "> 8" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                    <span className="text-sm text-muted-foreground">{item.metric}</span>
                    <Badge variant="outline">{item.target}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Phases */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <CardTitle>Implementation Phases</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                phase: 1,
                title: "Foundation",
                items: ["Document current process", "Set up Bubble data structures", "Create Priority 1 email templates", "Configure SendGrid", "Set up dashboard notifications", "Train Nicole on inquiry response"]
              },
              {
                phase: 2,
                title: "Form Loop",
                items: ["Develop Claude prompts for forms", "Build form generator in Bubble", "Create form template library", "Document Em/Nicole collaboration", "Train team on workflow"]
              },
              {
                phase: 3,
                title: "Proposal System",
                items: ["Integrate Claude API into Bubble", "Build proposal generator workflow", "Create proposal page template", "Set up PIN system", "Establish Ben review workflow"]
              },
              {
                phase: 4,
                title: "Automation",
                items: ["Implement email nurturing", "Build portal with staged content", "Set up automated notifications", "Create progress tracking", "Test end-to-end flow"]
              },
              {
                phase: 5,
                title: "Optimisation",
                items: ["Gather metrics", "Collect team feedback", "Iterate on content and timing", "Refine prompts", "Document edge cases"]
              },
            ].map((phase) => (
              <div key={phase.phase} className="rounded-xl border p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">{phase.phase}</span>
                  <span className="font-semibold text-sm">{phase.title}</span>
                </div>
                <ul className="text-xs text-muted-foreground space-y-1.5">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded border border-muted-foreground/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Team Responsibilities */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <CardTitle>Team Responsibilities</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border p-6">
              <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 mb-4">Em</Badge>
              <ul className="text-sm space-y-3">
                {[
                  { stage: "2", task: "Review business for legitimacy and red flags" },
                  { stage: "2", task: "Create Partner Assessment Form HTML (with Claude)" },
                  { stage: "2", task: "Feedback loop with Nicole on form refinement" },
                  { stage: "4", task: "Draft Understanding of Needs" },
                  { stage: "4", task: "Draft Proposed Solutions" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs shrink-0">Stage {item.stage}</Badge>
                    <span className="text-muted-foreground">{item.task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border p-6">
              <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-100 mb-4">Nicole</Badge>
              <ul className="text-sm space-y-3">
                {[
                  { stage: "1", task: "Monitor dashboard for new inquiries" },
                  { stage: "2", task: "Send booking link email" },
                  { stage: "2", task: "Refine and approve assessment forms" },
                  { stage: "2", task: "Send assessment form to client" },
                  { stage: "4", task: "Add Timing & Next Steps" },
                  { stage: "4", task: "Generate and publish proposal" },
                  { stage: "4", task: "Send proposal (after Ben approval)" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs shrink-0">Stage {item.stage}</Badge>
                    <span className="text-muted-foreground">{item.task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border p-6">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 mb-4">Ben</Badge>
              <ul className="text-sm space-y-3">
                {[
                  { stage: "3", task: "Review assessment before meeting" },
                  { stage: "3", task: "Conduct discovery meeting" },
                  { stage: "3", task: "Capture meeting insights for Em/Nicole" },
                  { stage: "4", task: "Review and approve all proposals" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Badge variant="outline" className="text-xs shrink-0">Stage {item.stage}</Badge>
                    <span className="text-muted-foreground">{item.task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appendices */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <CardTitle>Appendices</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="red-flags" className="border rounded-lg mb-3 px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <span>Appendix A: Red Flag Businesses (Do Not Proceed)</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="rounded-lg bg-red-50 dark:bg-red-950/30 p-4 border border-red-200 dark:border-red-900">
                  <ul className="text-sm space-y-2">
                    <li>• Corporates</li>
                    <li>• Financial advisers</li>
                    <li>• Lawyers</li>
                    <li>• Accountants</li>
                    <li>• Any business on compliance &quot;no-touch&quot; list</li>
                  </ul>
                  <p className="text-sm mt-4 text-red-700 dark:text-red-400">
                    If identified during Em&apos;s review, flag to Ben before proceeding.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="email-index" className="border rounded-lg mb-3 px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <span>Appendix B: Email Template Index</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left py-2 px-3 font-semibold">Email</th>
                        <th className="text-left py-2 px-3 font-semibold">Stage</th>
                        <th className="text-left py-2 px-3 font-semibold">Trigger</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Welcome", "1", "Client created"],
                        ["Portal Access", "1", "Client created"],
                        ["Booking Link", "2", "Manual (Nicole)"],
                        ["Form Delivery", "2", "Form ready"],
                        ["Form Reminder", "2", "24hr no completion"],
                        ["Pre-meeting Content", "2", "Meeting booked"],
                        ["Assessment Confirmation", "3", "Form submitted"],
                        ["Proposal Delivery", "4", "Ben approved"],
                        ["Follow-up (48hr)", "4", "No response"],
                        ["Follow-up (5 day)", "4", "No response"],
                        ["Welcome to Partnership", "5", "Onboarding complete"],
                      ].map(([email, stage, trigger], i) => (
                        <tr key={i} className="hover:bg-muted/30">
                          <td className="py-2 px-3">{email}</td>
                          <td className="py-2 px-3 text-muted-foreground">{stage}</td>
                          <td className="py-2 px-3 text-muted-foreground">{trigger}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="portal-index" className="border rounded-lg mb-3 px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <span>Appendix C: Portal Content Index</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left py-2 px-3 font-semibold">Content</th>
                        <th className="text-left py-2 px-3 font-semibold">Stage Available</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Getting Started", "1"],
                        ["How We Work", "2"],
                        ["Investment Guide", "2"],
                        ["The Process", "2"],
                        ["Case Studies", "3"],
                        ["Our Team", "3"],
                        ["Testimonials", "3"],
                        ["FAQs", "4"],
                        ["Full Access", "5"],
                      ].map(([content, stage], i) => (
                        <tr key={i} className="hover:bg-muted/30">
                          <td className="py-2 px-3">{content}</td>
                          <td className="py-2 px-3 text-muted-foreground">{stage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="decisions" className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline py-4">
                <span>Appendix D: Confirmed Decisions</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="overflow-x-auto rounded-lg border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="text-left py-2 px-3 font-semibold">Decision</th>
                        <th className="text-left py-2 px-3 font-semibold">Answer</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {[
                        ["Email platform", "Bubble + SendGrid"],
                        ["Portal hosting", "Bubble"],
                        ["Proposal HTML generation", "Claude API integrated into Bubble"],
                        ["Proposal approval", "Ben reviews all proposals"],
                        ["Content format", "Written only (no video)"],
                        ["Scope", "Yoonet only (Allied Flow separate)"],
                        ["Form creation target", "< 1 business day"],
                        ["Proposal delivery target", "< 48 hours from meeting"],
                      ].map(([decision, answer], i) => (
                        <tr key={i} className="hover:bg-muted/30">
                          <td className="py-2 px-3">{decision}</td>
                          <td className="py-2 px-3 text-muted-foreground">{answer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Summary */}
      <div className="mb-16 max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 p-8 md:p-12">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Success Factors</h2>
            <p className="text-muted-foreground mb-6">
              The key to quality output is quality input. The more specific and clear the inputs from Em and Nicole,
              the better the proposals will be.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Clear, specific inputs (not generic descriptions)",
                "Ben's review catches any issues before sending",
                "Consistent use of input guidelines",
                "Refinement of prompts over time based on feedback",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">{i + 1}</span>
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center">
        <div className="inline-flex items-center gap-4 text-sm text-muted-foreground">
          <span>v1.0</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>January 2026</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
          <span>Ben Carter</span>
        </div>
      </div>
    </div>
  );
}
