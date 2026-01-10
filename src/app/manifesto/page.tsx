"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ManifestoPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-xs font-medium tracking-wider uppercase">
          Technical Specification
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
          Claude API Integration
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Automating proposal HTML generation through intelligent AI integration with Bubble.
          Streamlined workflows, consistent quality, reduced manual effort.
        </p>
      </div>

      {/* Objective Card */}
      <div className="mb-16 max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Objective</h2>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              When Em and Nicole input meeting insights and client requirements into Bubble,
              Claude API generates professionally formatted HTML that can be published as a
              proposal page on yoonet.io.
            </p>
          </div>
        </div>
      </div>

      {/* The Flow - Visual Timeline */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">How It Works</h2>
          <p className="text-muted-foreground">The complete proposal generation workflow</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10" />

            {[
              { step: 1, title: "Ben completes meeting", desc: "Captures insights and client requirements" },
              { step: 2, title: "Em enters Understanding of Needs", desc: "Documents client situation in Bubble form" },
              { step: 3, title: "Em enters Proposed Solutions", desc: "Outlines recommended approach" },
              { step: 4, title: "Nicole enters Timing & Next Steps", desc: "Defines timeline and actions" },
              { step: 5, title: "Generate Proposal triggered", desc: "Nicole initiates API call" },
              { step: 6, title: "Bubble sends data to Claude", desc: "API request with all inputs" },
              { step: 7, title: "Claude returns formatted HTML", desc: "Professional proposal content generated" },
              { step: 8, title: "HTML stored and published", desc: "Pushed to yoonet.io" },
              { step: 9, title: "Ben reviews proposal", desc: "Quality check before sending" },
              { step: 10, title: "Client receives proposal", desc: "Link + PIN sent by Nicole" },
            ].map((item, i) => (
              <div key={i} className="relative pl-16 pb-8 last:pb-0">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{item.step}</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bubble Setup */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <CardTitle>Bubble Setup</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-8 space-y-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
              Data Structure — Proposal Type
            </h3>
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left py-3 px-4 font-semibold">Field</th>
                    <th className="text-left py-3 px-4 font-semibold">Type</th>
                    <th className="text-left py-3 px-4 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    ["client", "Client", "Link to client record"],
                    ["status", "Text", "Draft / Pending Review / Approved / Sent"],
                    ["created_by", "User", "Who initiated the proposal"],
                    ["created_date", "Date", "When proposal was created"],
                    ["understanding_of_needs", "Text", "Em's input - client needs summary"],
                    ["proposed_solutions", "Text", "Em's input - recommended solutions"],
                    ["timing_next_steps", "Text", "Nicole's input - timeline and actions"],
                    ["generated_html", "Text", "Claude-generated HTML output"],
                    ["proposal_url", "Text", "yoonet.io/[client-slug]"],
                    ["pin", "Text", "Access PIN for client"],
                    ["reviewed_by", "User", "Ben's review record"],
                    ["reviewed_date", "Date", "When Ben approved"],
                    ["sent_date", "Date", "When sent to client"],
                  ].map(([field, type, desc], i) => (
                    <tr key={i} className="hover:bg-muted/30 transition-colors">
                      <td className="py-2.5 px-4 font-mono text-xs text-primary">{field}</td>
                      <td className="py-2.5 px-4 text-muted-foreground">{type}</td>
                      <td className="py-2.5 px-4 text-muted-foreground">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
              Workflow Configuration
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted/30 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Trigger</p>
                <p className="font-medium">Button click &quot;Generate Proposal&quot;</p>
              </div>
              <div className="rounded-lg bg-muted/30 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Conditions</p>
                <p className="font-medium">All three input fields are not empty</p>
              </div>
            </div>
            <div className="mt-4 rounded-lg border p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Actions Sequence</p>
              <ol className="space-y-2">
                {[
                  "Set proposal status → \"Generating...\"",
                  "API Connector call → Claude API",
                  "Update proposal record → Store generated_html",
                  "Set proposal status → \"Pending Review\"",
                  "Send notification → Ben (Slack/email)",
                ].map((action, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center flex-shrink-0">{i + 1}</span>
                    <span className="text-muted-foreground">{action}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Claude API Setup */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <CardTitle>Claude API Configuration</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-8 space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "API Name", value: "Claude_Proposal_Generator" },
              { label: "Method", value: "POST" },
              { label: "Model", value: "claude-sonnet-4-20250514" },
            ].map((item, i) => (
              <div key={i} className="rounded-lg bg-muted/30 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                <p className="font-mono text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-3">Base URL</h3>
            <code className="block bg-muted rounded-lg p-4 text-sm font-mono">
              https://api.anthropic.com/v1/messages
            </code>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Required Headers</h3>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm space-y-1">
              <p><span className="text-muted-foreground">Content-Type:</span> application/json</p>
              <p><span className="text-muted-foreground">x-api-key:</span> [Your API Key]</p>
              <p><span className="text-muted-foreground">anthropic-version:</span> 2023-06-01</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Dynamic Values to Pass</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { key: "<client_name_value>", desc: "Client's business name" },
                { key: "<understanding_value>", desc: "understanding_of_needs field" },
                { key: "<solutions_value>", desc: "proposed_solutions field" },
                { key: "<timing_value>", desc: "timing_next_steps field" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 rounded-lg border p-3">
                  <code className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{item.key}</code>
                  <span className="text-sm text-muted-foreground">→ {item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* The Prompt */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <CardTitle>The Prompt</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-8 space-y-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">System Context</h3>
            <p className="text-muted-foreground mb-6">The prompt instructs Claude to understand three key areas:</p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="rounded-xl border p-5 hover:border-primary/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold mb-2">Who Yoonet Is</h4>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>• 15 years in operation</li>
                  <li>• Based in Bataan, Philippines</li>
                  <li>• Serves AU/NZ/UK SMEs</li>
                  <li>• Virtual assistant specialists</li>
                  <li>• Incorporated employment model</li>
                </ul>
              </div>

              <div className="rounded-xl border p-5 hover:border-primary/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-primary">2</span>
                </div>
                <h4 className="font-semibold mb-2">What to Convey</h4>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>• Professional partnership</li>
                  <li>• Clear understanding of needs</li>
                  <li>• Tailored solutions</li>
                  <li>• Transparent next steps</li>
                  <li>• Confidence and trust</li>
                </ul>
              </div>

              <div className="rounded-xl border p-5 hover:border-primary/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-sm font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold mb-2">Tone & Style</h4>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>• Warm but professional</li>
                  <li>• Clear and direct</li>
                  <li>• No corporate jargon</li>
                  <li>• UK English spelling</li>
                  <li>• Confident, not arrogant</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Full Prompt Template</h3>
            <div className="relative">
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="text-xs">Copy to Bubble</Badge>
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
                    Write in second person. Be specific — avoid generic statements.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">Character guidance: 200-500 words</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Example Input</p>
                  <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
{`Your podiatry practice in Brisbane has grown to four practitioners seeing approximately 180 patients per week. You're currently spending 15+ hours weekly on administrative tasks including appointment confirmations, Medicare claims processing, and patient follow-ups.

You mentioned that your current part-time receptionist is struggling to keep up with the patient communication load, resulting in missed appointment reminders and delayed billing.

Your priority is reducing the administrative burden on your clinical team so they can focus on patient care.`}
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
                    Outline what we&apos;re recommending. Be specific about role, hours, and responsibilities.
                    Connect the solution directly to the needs identified above.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">Character guidance: 200-400 words</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Example Input</p>
                  <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
{`We recommend a dedicated Virtual Assistant working 30 hours per week, specialising in allied health administration with Cliniko expertise.

Your VA will handle:
- Daily appointment confirmations and reminders
- Medicare claims processing and reconciliation
- Patient follow-up coordination
- Inbox management and enquiry responses
- End-of-day billing reconciliation

Your VA will work during practice hours (8am-5pm AEST) with real-time Slack availability.`}
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
                    Include recruitment, onboarding, and go-live expectations.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">Character guidance: 150-300 words</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Example Input</p>
                  <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
{`Once you're ready to proceed:

Week 1-2: Recruitment
We'll shortlist candidates with allied health and Cliniko experience. You'll receive 2-3 profiles with video introductions.

Week 3: Selection & Onboarding
Structured onboarding with Cliniko-specific training for your workflows.

Week 4: Go Live
Your VA begins with daily check-ins for the first two weeks.

To get started, click the button below to access your onboarding portal.`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Quality Control */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <CardTitle>Quality Control</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="text-amber-600">●</span> Before Generation
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Checklist for Em/Nicole:</p>
              <ul className="space-y-3">
                {[
                  "Client name is correct and spelled properly",
                  "Understanding of Needs is specific (not generic)",
                  "Proposed Solutions connects to stated needs",
                  "Hours/role details are accurate",
                  "Timing is realistic and specific",
                  "No placeholder text remaining",
                  "UK English spelling throughout",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded border-2 border-muted-foreground/30 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="text-emerald-600">●</span> After Generation
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Ben&apos;s review checklist:</p>
              <ul className="space-y-3">
                {[
                  "Client name appears correctly throughout",
                  "Tone is warm and professional",
                  "No generic or templated language",
                  "Solutions address stated needs",
                  "Timeline is accurate and achievable",
                  "Call to action is clear",
                  "No spelling or grammatical errors",
                  "Mobile view looks good",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <div className="w-5 h-5 rounded border-2 border-muted-foreground/30 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-muted/30 p-6">
            <h3 className="font-semibold mb-3">Revision Process</h3>
            <p className="text-sm text-muted-foreground mb-4">If Ben requests changes:</p>
            <div className="flex flex-wrap gap-2 items-center text-sm">
              <span className="px-3 py-1.5 rounded-full bg-background border">Update inputs</span>
              <span className="text-muted-foreground">→</span>
              <span className="px-3 py-1.5 rounded-full bg-background border">Regenerate</span>
              <span className="text-muted-foreground">→</span>
              <span className="px-3 py-1.5 rounded-full bg-background border">Review again</span>
              <span className="text-muted-foreground">→</span>
              <span className="px-3 py-1.5 rounded-full bg-background border">Repeat until approved</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Publishing & URL */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <CardTitle>Publishing to yoonet.io</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border p-6">
              <Badge variant="outline" className="mb-3">Current</Badge>
              <h3 className="font-semibold text-lg mb-3">Option A: Manual Copy</h3>
              <ol className="text-sm text-muted-foreground space-y-2">
                <li>1. Ben approves proposal in Bubble</li>
                <li>2. Nicole copies generated HTML</li>
                <li>3. Creates page at yoonet.io/proposals/[slug]</li>
                <li>4. Generates PIN and adds access control</li>
                <li>5. Updates Bubble record with URL and PIN</li>
              </ol>
            </div>
            <div className="rounded-xl border p-6 opacity-60">
              <Badge variant="outline" className="mb-3">Future</Badge>
              <h3 className="font-semibold text-lg mb-3">Option B: Automated via Webflow</h3>
              <ol className="text-sm text-muted-foreground space-y-2">
                <li>1. Ben approves in Bubble</li>
                <li>2. Bubble triggers Webflow API</li>
                <li>3. Page created automatically</li>
                <li>4. PIN generated and stored</li>
                <li>5. Nicole notified when live</li>
              </ol>
            </div>
          </div>

          <div className="rounded-xl bg-muted/30 p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">URL Structure</p>
                <code className="text-sm font-mono">yoonet.io/proposals/[client-slug]</code>
                <p className="text-xs text-muted-foreground mt-2">Example: yoonet.io/proposals/brisbane-podiatry-clinic</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">PIN System</p>
                <p className="text-sm text-muted-foreground">6-digit PIN generated in Bubble, stored on Proposal record, client enters to view.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cost & Security */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <Card className="overflow-hidden">
          <CardHeader className="bg-muted/30 border-b">
            <CardTitle className="text-lg">Cost Estimate</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-muted-foreground">Input tokens</span>
                <span className="font-mono">~1,500</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-muted-foreground">Output tokens</span>
                <span className="font-mono">~2,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b">
                <span className="text-muted-foreground">Per proposal</span>
                <span className="font-mono">$0.02 - $0.05</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-semibold">100 proposals/month</span>
                <span className="font-mono font-semibold">$2 - $5</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden">
          <CardHeader className="bg-muted/30 border-b">
            <CardTitle className="text-lg">Security</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">API Key Management</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Store as private key in Bubble</li>
                  <li>• Never expose client-side</li>
                  <li>• Rotate if compromised</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">Client Data</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• No data stored by Anthropic</li>
                  <li>• PIN protection for proposals</li>
                  <li>• HTTPS for all communications</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testing Phases */}
      <Card className="mb-10 overflow-hidden">
        <CardHeader className="bg-muted/30 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <CardTitle>Testing Phases</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { phase: 1, title: "API Connection", items: ["Connector configured", "Test call works", "Response parsing OK"] },
              { phase: 2, title: "Basic Generation", items: ["Valid HTML output", "Displays correctly", "Dynamic values work"] },
              { phase: 3, title: "Quality Testing", items: ["5 scenario tests", "Ben review", "Prompt refinement"] },
              { phase: 4, title: "Full Workflow", items: ["End-to-end test", "Real client data", "Email delivery"] },
              { phase: 5, title: "Team Training", items: ["Em trained", "Nicole trained", "Ben trained"] },
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

      {/* Summary */}
      <div className="mb-16 max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 p-8 md:p-12">
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Success Factors</h2>
            <p className="text-muted-foreground mb-6">
              The key to quality output is quality input. The more specific and clear the inputs from Em and Nicole, the better Claude&apos;s proposals will be.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Clear, specific inputs (not generic)",
                "Ben's review catches issues before sending",
                "Consistent use of input guidelines",
                "Prompt refinement over time",
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
          <span>Ben Carter / Em</span>
        </div>
      </div>
    </div>
  );
}
