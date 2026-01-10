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
    <div className="container py-8">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Technical Specification</Badge>
        <h1 className="text-3xl font-bold tracking-tight">
          Claude API Integration for Proposal HTML Generation
        </h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Complete specification for integrating Claude API into Bubble to automate
          the generation of proposal HTML. This integration streamlines the proposal
          creation process, reducing manual effort while maintaining quality and consistency.
        </p>
      </div>

      {/* Objective Card */}
      <Card className="mb-8 border-l-4 border-l-blue-500">
        <CardContent className="pt-6">
          <p className="text-lg">
            <strong>Objective:</strong> When Em and Nicole input meeting insights and client
            requirements into Bubble, Claude API generates professionally formatted HTML that
            can be published as a proposal page on yoonet.io.
          </p>
        </CardContent>
      </Card>

      {/* The Flow */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted rounded-lg p-6 font-mono text-sm overflow-x-auto">
            <div className="space-y-2">
              <p>1. Ben completes meeting → captures insights</p>
              <p className="text-muted-foreground pl-4">↓</p>
              <p>2. Em enters &quot;Understanding of Needs&quot; into Bubble form</p>
              <p className="text-muted-foreground pl-4">↓</p>
              <p>3. Em enters &quot;Proposed Solutions&quot; into Bubble form</p>
              <p className="text-muted-foreground pl-4">↓</p>
              <p>4. Nicole enters &quot;Timing & Next Steps&quot; into Bubble form</p>
              <p className="text-muted-foreground pl-4">↓</p>
              <p>5. Nicole triggers &quot;Generate Proposal&quot; button</p>
              <p className="text-muted-foreground pl-4">↓</p>
              <p>6. Bubble sends data to Claude API</p>
              <p className="text-muted-foreground pl-4">↓</p>
              <p>7. Claude returns formatted HTML</p>
              <p className="text-muted-foreground pl-4">↓</p>
              <p>8. HTML is stored in Bubble / pushed to yoonet.io</p>
              <p className="text-muted-foreground pl-4">↓</p>
              <p>9. Ben reviews proposal page</p>
              <p className="text-muted-foreground pl-4">↓</p>
              <p>10. Nicole sends proposal link + PIN to client</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bubble Setup */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Bubble Setup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Data Structure - Proposal (Data Type)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4 font-semibold">Field</th>
                    <th className="text-left py-2 pr-4 font-semibold">Type</th>
                    <th className="text-left py-2 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b"><td className="py-2 pr-4">client</td><td className="pr-4">Client</td><td>Link to client record</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">status</td><td className="pr-4">Text</td><td>Draft / Pending Review / Approved / Sent</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">created_by</td><td className="pr-4">User</td><td>Who initiated the proposal</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">created_date</td><td className="pr-4">Date</td><td>When proposal was created</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">understanding_of_needs</td><td className="pr-4">Text</td><td>Em&apos;s input - client needs summary</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">proposed_solutions</td><td className="pr-4">Text</td><td>Em&apos;s input - recommended solutions</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">timing_next_steps</td><td className="pr-4">Text</td><td>Nicole&apos;s input - timeline and actions</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">generated_html</td><td className="pr-4">Text</td><td>Claude-generated HTML output</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">proposal_url</td><td className="pr-4">Text</td><td>yoonet.io/[client-slug]</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">pin</td><td className="pr-4">Text</td><td>Access PIN for client</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">reviewed_by</td><td className="pr-4">User</td><td>Ben&apos;s review record</td></tr>
                  <tr className="border-b"><td className="py-2 pr-4">reviewed_date</td><td className="pr-4">Date</td><td>When Ben approved</td></tr>
                  <tr><td className="py-2 pr-4">sent_date</td><td className="pr-4">Date</td><td>When sent to client</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Bubble Workflow</h3>
            <p className="text-muted-foreground mb-2"><strong>Trigger:</strong> Button click &quot;Generate Proposal&quot;</p>
            <p className="text-muted-foreground mb-3"><strong>Conditions:</strong> understanding_of_needs, proposed_solutions, and timing_next_steps are not empty</p>
            <p className="font-medium mb-2">Actions:</p>
            <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
              <li>Set proposal status → &quot;Generating...&quot;</li>
              <li>API Connector call → Claude API</li>
              <li>Update proposal record → Store generated_html</li>
              <li>Set proposal status → &quot;Pending Review&quot;</li>
              <li>Send notification → Ben (Slack/email) &quot;Proposal ready for review&quot;</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Claude API Setup */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Claude API Setup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">API Connector Configuration</h3>
            <div className="grid gap-2 text-sm">
              <p><strong>API Name:</strong> Claude_Proposal_Generator</p>
              <p><strong>Base URL:</strong> <code className="bg-muted px-2 py-1 rounded">https://api.anthropic.com/v1/messages</code></p>
              <p><strong>Method:</strong> POST</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Headers</h3>
            <div className="bg-muted rounded-lg p-4 font-mono text-sm">
              <p>Content-Type: application/json</p>
              <p>x-api-key: [API Key]</p>
              <p>anthropic-version: 2023-06-01</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Request Body</h3>
            <pre className="bg-muted rounded-lg p-4 font-mono text-xs overflow-x-auto">
{`{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 4096,
  "messages": [
    {
      "role": "user",
      "content": "<system_context>...</system_context>..."
    }
  ]
}`}
            </pre>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Dynamic Values to Pass</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li><code className="bg-muted px-1 rounded">&lt;client_name_value&gt;</code> → Client&apos;s business name from Bubble</li>
              <li><code className="bg-muted px-1 rounded">&lt;understanding_value&gt;</code> → understanding_of_needs field</li>
              <li><code className="bg-muted px-1 rounded">&lt;solutions_value&gt;</code> → proposed_solutions field</li>
              <li><code className="bg-muted px-1 rounded">&lt;timing_value&gt;</code> → timing_next_steps field</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* The Prompt */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>The Prompt</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">System Context</h3>
            <p className="text-muted-foreground mb-4">The prompt instructs Claude to understand:</p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="who-yoonet">
                <AccordionTrigger>1. Who Yoonet is</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Business Process Outsourcing company</li>
                    <li>15 years in operation</li>
                    <li>Based in Bataan, Philippines</li>
                    <li>Serves AU/NZ/UK small-medium enterprises</li>
                    <li>Specialises in virtual assistant services</li>
                    <li>Focus on compliance and incorporated employment model</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="proposal-convey">
                <AccordionTrigger>2. What the proposal should convey</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Professional partnership approach</li>
                    <li>Clear understanding of client&apos;s specific needs</li>
                    <li>Tailored solutions (not generic)</li>
                    <li>Transparent next steps</li>
                    <li>Confidence and trust</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="tone-style">
                <AccordionTrigger>3. Tone and style</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Warm but professional</li>
                    <li>Clear and direct</li>
                    <li>No corporate jargon</li>
                    <li>UK English spelling and conventions</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Full Prompt Template</h3>
            <pre className="bg-muted rounded-lg p-4 font-mono text-xs overflow-x-auto whitespace-pre-wrap">
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
Generate a complete HTML proposal section with the following requirements:

1. STRUCTURE:
   - Opening paragraph addressing the client by business name
   - Section: "Understanding Your Needs"
   - Section: "Our Proposed Solution"
   - Section: "Timing & Next Steps"
   - Section: "Ready to Begin?" (call to action)

2. DESIGN:
   - Use inline CSS only
   - Primary colour: #1e3a5f (dark blue)
   - Accent colour: #f59e0b (amber)
   - Clean, modern typography
   - Generous white space
   - Mobile-responsive (use max-width and percentage-based widths)

3. TONE:
   - Warm and professional
   - Direct, not salesy
   - UK English spelling
   - Confident but not arrogant

4. FORMAT:
   - Output ONLY the HTML content
   - Do not include <!DOCTYPE>, <html>, <head>, or <body> tags
   - Start with a container <div>
   - Do not include any markdown formatting or code blocks`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Input Forms */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Input Forms in Bubble</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="understanding">
              <AccordionTrigger>Understanding of Needs Form (Em)</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <p className="text-sm italic">
                    Summarise what we&apos;ve learned about this client&apos;s situation and challenges.
                    Write in second person (&quot;You mentioned...&quot;, &quot;Your practice is experiencing...&quot;).
                    Be specific to their business — avoid generic statements.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">Character guidance: 200-500 words</p>
                <div>
                  <p className="font-medium mb-2">Example input:</p>
                  <pre className="bg-muted rounded-lg p-4 text-xs overflow-x-auto whitespace-pre-wrap">
{`Your podiatry practice in Brisbane has grown to four practitioners seeing approximately 180 patients per week. You're currently spending 15+ hours weekly on administrative tasks including appointment confirmations, Medicare claims processing, and patient follow-ups.

You mentioned that your current part-time receptionist is struggling to keep up with the patient communication load, resulting in missed appointment reminders and delayed billing. You're looking for reliable administrative support that understands the allied health space and can integrate with your Cliniko system.

Your priority is reducing the administrative burden on your clinical team so they can focus on patient care, while ensuring nothing falls through the cracks with Medicare compliance and patient communication.`}
                  </pre>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="solutions">
              <AccordionTrigger>Proposed Solutions Form (Em)</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <p className="text-sm italic">
                    Outline what we&apos;re recommending for this client. Be specific about the role,
                    hours, and what they&apos;ll handle. Connect the solution directly to the needs identified above.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">Character guidance: 200-400 words</p>
                <div>
                  <p className="font-medium mb-2">Example input:</p>
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

            <AccordionItem value="timing">
              <AccordionTrigger>Timing & Next Steps Form (Nicole)</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
                  <p className="text-sm italic">
                    Outline the timeline and what happens next. Be specific about dates where possible.
                    Include the recruitment process, onboarding, and when they can expect to be operational.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">Character guidance: 150-300 words</p>
                <div>
                  <p className="font-medium mb-2">Example input:</p>
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

      {/* Quality Control */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Quality Control</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Before Generation - Checklist for Em/Nicole</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> Client name is correct and spelled properly</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> Understanding of Needs is specific to this client (not generic)</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> Proposed Solutions connects to the stated needs</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> Hours/role details are accurate</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> Timing is realistic and specific</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> No placeholder text remaining</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> UK English spelling used throughout</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">After Generation - Ben&apos;s Review Checklist</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> Client name appears correctly throughout</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> Tone is warm and professional</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> No generic or templated-sounding language</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> Solutions clearly address the stated needs</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> Timeline is accurate and achievable</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> Call to action is clear</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> No spelling or grammatical errors</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> Formatting displays correctly</li>
              <li className="flex items-center gap-2"><span className="w-4 h-4 border rounded flex-shrink-0"></span> Mobile view looks good</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Revision Process</h3>
            <p className="text-muted-foreground mb-2">If Ben requests changes:</p>
            <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
              <li>Em/Nicole update the relevant input field(s)</li>
              <li>Re-trigger &quot;Generate Proposal&quot;</li>
              <li>New HTML overwrites previous version</li>
              <li>Ben reviews again</li>
              <li>Repeat until approved</li>
            </ol>
            <p className="text-sm text-muted-foreground mt-3 italic">
              Note: Keep the original inputs concise and clear. If Claude&apos;s output needs adjustment,
              it&apos;s usually faster to refine the input and regenerate than to manually edit the HTML.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Publishing */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Publishing to yoonet.io</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-3">Option A: Manual Copy</h3>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground text-sm">
                <li>Ben approves proposal in Bubble</li>
                <li>Nicole copies generated HTML</li>
                <li>Nicole creates new page at yoonet.io/proposals/[client-slug]</li>
                <li>Nicole pastes HTML into page</li>
                <li>Nicole generates PIN and adds access control</li>
                <li>Nicole updates Bubble record with URL and PIN</li>
              </ol>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">Option B: Automated via Webflow API (Future)</h3>
              <ol className="list-decimal list-inside space-y-1 text-muted-foreground text-sm">
                <li>Ben approves proposal in Bubble</li>
                <li>Bubble triggers Webflow API</li>
                <li>New page created automatically</li>
                <li>PIN generated and stored</li>
                <li>Nicole notified that proposal is live</li>
              </ol>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">URL Structure & PIN System</h3>
            <p className="text-muted-foreground mb-2">
              <strong>URL:</strong> <code className="bg-muted px-2 py-1 rounded">yoonet.io/proposals/[client-slug]</code>
            </p>
            <p className="text-muted-foreground mb-2">
              <strong>Example:</strong> <code className="bg-muted px-2 py-1 rounded">yoonet.io/proposals/brisbane-podiatry-clinic</code>
            </p>
            <p className="text-muted-foreground">
              <strong>PIN:</strong> Generate 6-digit PIN in Bubble, store on Proposal record, client enters PIN to view proposal.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Cost & Security */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Cost Considerations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Estimated per proposal:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Input: ~1,500 tokens (prompt + content)</li>
                <li>Output: ~2,000 tokens (HTML)</li>
                <li>Total: ~3,500 tokens per proposal</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cost estimate:</h3>
              <p className="text-sm text-muted-foreground">~$0.02 - $0.05 per proposal</p>
              <p className="text-sm text-muted-foreground">100 proposals/month = $2 - $5/month</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">API Key Management:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Store API key as private key in Bubble</li>
                <li>Never expose in client-side code</li>
                <li>Rotate key if compromised</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Client Data:</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>No client data stored by Anthropic</li>
                <li>PIN protection for proposal access</li>
                <li>HTTPS for all communications</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testing Plan */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Testing Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Phase 1: API Connection</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>☐ API Connector configured correctly</li>
                <li>☐ Test call returns valid response</li>
                <li>☐ Response parsing works in Bubble</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phase 2: Basic Generation</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>☐ Simple inputs generate valid HTML</li>
                <li>☐ HTML displays correctly in browser</li>
                <li>☐ All dynamic values populated</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phase 3: Quality Testing</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>☐ Test with 5 different scenarios</li>
                <li>☐ Review output quality with Ben</li>
                <li>☐ Refine prompt based on feedback</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phase 4: Full Workflow</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>☐ End-to-end test complete</li>
                <li>☐ Test with real client data</li>
                <li>☐ Confirm email delivery works</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phase 5: Team Training</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>☐ Em comfortable with input forms</li>
                <li>☐ Nicole comfortable with publishing</li>
                <li>☐ Ben comfortable with review process</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="mb-8 border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            This integration brings Claude&apos;s writing capability directly into your Bubble workflow,
            allowing Em and Nicole to generate professional proposal HTML without manual formatting.
            The key to quality output is quality input — the more specific and clear the inputs from
            Em and Nicole, the better Claude&apos;s proposals will be.
          </p>
          <div>
            <h3 className="font-semibold mb-2">Key success factors:</h3>
            <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
              <li>Clear, specific inputs (not generic descriptions)</li>
              <li>Ben&apos;s review catches any issues before sending</li>
              <li>Consistent use of the input guidelines</li>
              <li>Refinement of the prompt over time based on feedback</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-sm text-muted-foreground text-center">
        <p>Document version: 1.0</p>
        <p>Last updated: January 2026</p>
        <p>Owner: Ben Carter / Em</p>
      </div>
    </div>
  );
}
