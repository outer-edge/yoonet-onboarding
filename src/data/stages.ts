export interface StageEmail {
  name: string;
  subject: string;
  trigger: string;
  type: "automated" | "manual";
  body: string;
}

export interface StageTask {
  owner: "Em" | "Nicole" | "Ben" | "System";
  task: string;
  details?: string;
}

export interface StageAutomation {
  name: string;
  trigger: string;
  timing: string;
  platform: string;
}

export interface Stage {
  id: number;
  name: string;
  slug: string;
  color: string;
  lightColor: string;
  description: string;
  goal: string;
  entryTrigger: string;
  exitCriteria: string;
  tasks: StageTask[];
  automations: StageAutomation[];
  emails: StageEmail[];
  checklist: string[];
  tips: string[];
}

export const stages: Stage[] = [
  {
    id: 1,
    name: "Inquiry",
    slug: "inquiry",
    color: "#3b82f6",
    lightColor: "#dbeafe",
    description: "The moment a lead enters the system. Could be organic (website, SEO), referral, or outreach.",
    goal: "Capture the opportunity, create the client record, and trigger parallel workstreams.",
    entryTrigger: "Lead enters system (form submission, referral, or outreach response)",
    exitCriteria: "Client exists in Bubble, inquiry acknowledged, welcome email sent",
    tasks: [
      { owner: "System", task: "Create client record in Bubble", details: "Automatic on form submission" },
      { owner: "System", task: "Send dashboard notification", details: "To Ben, Em, and Nicole" },
      { owner: "System", task: "Send welcome email", details: "Immediate" },
      { owner: "System", task: "Send portal access email", details: "5 minutes after welcome" },
      { owner: "Nicole", task: "Monitor dashboard for new inquiries", details: "Check regularly throughout the day" },
    ],
    automations: [
      { name: "Client record creation", trigger: "Inquiry form submitted", timing: "Immediate", platform: "Bubble" },
      { name: "Dashboard notification", trigger: "Client created", timing: "Immediate", platform: "Bubble → Slack/Email" },
      { name: "Welcome email", trigger: "Client created", timing: "Immediate", platform: "Bubble → SendGrid" },
      { name: "Portal access email", trigger: "Client created", timing: "5 min after welcome", platform: "Bubble → SendGrid" },
    ],
    emails: [
      {
        name: "Welcome Email",
        subject: "Welcome to Yoonet — Let's get started",
        trigger: "Client created",
        type: "automated",
        body: `Hi [Contact First Name],

Thank you for reaching out to Yoonet. We're excited to learn more about [Business Name] and explore how we can support your growth.

Here's what happens next:

1. You'll receive a link to book a time to chat with Ben, our founder
2. Before your meeting, we'll send you a short Partner Assessment Form
3. We'll use your responses to make sure our conversation is focused and valuable

In the meantime, you'll have access to our Client Portal where you can learn more about how we work and what makes Yoonet different.

If you have any questions before we speak, simply reply to this email.

Looking forward to connecting.

Warmest regards,
The Yoonet Team`,
      },
      {
        name: "Portal Access Email",
        subject: "Your Yoonet Portal Access",
        trigger: "Client created (5 min delay)",
        type: "automated",
        body: `Hi [Contact First Name],

Your client portal is ready. Here's where you can learn more about Yoonet and track your journey with us.

Access your portal: [Portal Link]

Inside you'll find:
- How we work
- What to expect from our partnership
- Answers to common questions

We'll be in touch shortly with a link to book your initial conversation.

Warmest regards,
The Yoonet Team`,
      },
    ],
    checklist: [
      "Client record created in Bubble",
      "Source captured (Organic / Referral / Outreach)",
      "Welcome email sent",
      "Portal access granted",
      "Dashboard notification received by team",
    ],
    tips: [
      "Respond to inquiries within 1 hour for best conversion",
      "Check referrer field if this is a referral - consider thanking the referrer",
      "Review the client's website before moving to Stage 2",
    ],
  },
  {
    id: 2,
    name: "Engaged",
    slug: "engaged",
    color: "#8b5cf6",
    lightColor: "#ede9fe",
    description: "The prospect is now actively engaged. Two parallel tracks begin: booking a meeting and preparing a bespoke assessment form.",
    goal: "Get meeting booked and assessment form completed before the discovery call.",
    entryTrigger: "Dashboard notification received",
    exitCriteria: "Meeting booked with Ben, assessment form sent and completed",
    tasks: [
      { owner: "Nicole", task: "Send booking link email", details: "Within 1 hour of inquiry" },
      { owner: "Nicole", task: "Monitor for booking confirmation", details: "Follow up if not booked within 24h" },
      { owner: "Em", task: "Review business for legitimacy", details: "Check website, look for red flags" },
      { owner: "Em", task: "Create assessment form HTML with Claude", details: "Bespoke to their industry" },
      { owner: "Nicole", task: "Review and refine form", details: "Check wording, relevance" },
      { owner: "Nicole", task: "Send assessment form to client", details: "Before their meeting" },
      { owner: "System", task: "Send form reminder if not completed", details: "24 hours after form sent" },
    ],
    automations: [
      { name: "Booking reminder", trigger: "24 hours before meeting", timing: "Automated", platform: "Calendly/Bubble" },
      { name: "Pre-meeting content", trigger: "Meeting booked", timing: "2 hours after booking", platform: "Bubble → SendGrid" },
      { name: "How We Work content", trigger: "Meeting booked", timing: "2 hours after", platform: "Bubble → SendGrid" },
      { name: "Form reminder", trigger: "Form not completed", timing: "24 hours after sent", platform: "Bubble → SendGrid" },
    ],
    emails: [
      {
        name: "Booking Link Email",
        subject: "Let's find a time to talk — [Business Name] + Yoonet",
        trigger: "Manual - Nicole sends",
        type: "manual",
        body: `Hi [Contact First Name],

Thanks for your interest in Yoonet. I'd love to learn more about [Business Name] and explore how we might be able to help.

Book a time that suits you here: [Calendly Link]

Before we meet, we'll send you a short Partner Assessment Form. This helps us understand your specific situation so our conversation is as useful as possible for you.

In the meantime, feel free to explore your Client Portal: [Portal Link]

Looking forward to speaking with you.

Warmest regards,
Nicole
Yoonet`,
      },
      {
        name: "Assessment Form Delivery",
        subject: "Your Partner Assessment Form — [Business Name]",
        trigger: "Manual - Nicole sends when form ready",
        type: "manual",
        body: `Hi [Contact First Name],

As promised, here's your Partner Assessment Form. This should take about 10 minutes to complete.

Complete your form here: [Form Link]

Your responses help us understand your specific situation so Ben can make your upcoming conversation as valuable as possible.

Please complete this before your meeting on [Meeting Date/Time].

If you have any questions, just reply to this email.

Warmest regards,
Nicole
Yoonet`,
      },
      {
        name: "Form Reminder",
        subject: "Quick reminder — Your Partner Assessment Form",
        trigger: "24 hours after form sent, if not completed",
        type: "automated",
        body: `Hi [Contact First Name],

Just a friendly reminder to complete your Partner Assessment Form before your upcoming meeting with Ben.

Complete your form here: [Form Link]

It only takes about 10 minutes and helps us make your meeting as valuable as possible.

If you have any questions, just reply to this email.

Warmest regards,
Nicole
Yoonet`,
      },
    ],
    checklist: [
      "Booking link sent within 1 hour",
      "Meeting confirmed in Calendly",
      "Business reviewed by Em (legitimacy check)",
      "No red flags identified (or flagged to Ben)",
      "Assessment form created with Claude",
      "Form reviewed by Nicole",
      "Form sent to client",
      "Form completed by client",
    ],
    tips: [
      "Red flags to watch: Corporates, Financial advisers, Lawyers, Accountants",
      "If red flags present, flag to Ben before proceeding",
      "Keep form questions specific to their industry - avoid generic questions",
      "Target form creation turnaround: < 1 business day",
    ],
  },
  {
    id: 3,
    name: "Discovery",
    slug: "discovery",
    color: "#10b981",
    lightColor: "#d1fae5",
    description: "The client has completed their assessment and the meeting with Ben occurs. This is where we truly understand their needs and assess mutual fit.",
    goal: "Understand client needs deeply, assess fit, and gather insights for the proposal.",
    entryTrigger: "Assessment form submitted",
    exitCriteria: "Meeting complete, needs understood, insights captured for proposal",
    tasks: [
      { owner: "System", task: "Send assessment confirmation email", details: "Immediate on submission" },
      { owner: "System", task: "Notify team of submission", details: "To Ben, Em, Nicole" },
      { owner: "Ben", task: "Review assessment before meeting", details: "Prepare talking points" },
      { owner: "Ben", task: "Conduct discovery meeting", details: "30-35 minutes" },
      { owner: "Ben", task: "Capture meeting insights", details: "Voice note or Bubble form" },
      { owner: "System", task: "Send post-meeting prompt", details: "1 hour after meeting ends" },
    ],
    automations: [
      { name: "Assessment confirmation", trigger: "Form submitted", timing: "Immediate", platform: "Bubble → SendGrid" },
      { name: "Internal notification", trigger: "Form submitted", timing: "Immediate", platform: "Bubble → Email/Slack" },
      { name: "Meeting reminder", trigger: "24 hours before", timing: "Automated", platform: "Calendly" },
      { name: "Post-meeting prompt", trigger: "Meeting ended", timing: "1 hour after", platform: "Bubble → Slack" },
    ],
    emails: [
      {
        name: "Assessment Confirmation",
        subject: "We've received your assessment — [Business Name]",
        trigger: "Form submitted",
        type: "automated",
        body: `Hi [Contact First Name],

Thanks for completing your Partner Assessment Form. Ben has received your responses and will review them before your meeting.

Your meeting details:
Date: [Meeting Date]
Time: [Meeting Time]
Link: [Meeting Link]

If anything has changed or you have questions before we speak, just reply to this email.

Looking forward to our conversation.

Warmest regards,
Nicole
Yoonet`,
      },
    ],
    checklist: [
      "Assessment submitted notification received",
      "Assessment reviewed by Ben",
      "Meeting conducted",
      "Current situation understood",
      "Pain points identified",
      "Success criteria captured",
      "Timeline and budget discussed",
      "Fit assessment made (Good fit / Needs work / Not right)",
      "Meeting insights captured and sent to Em/Nicole",
    ],
    tips: [
      "Meeting structure: Opening (5 min) → Understanding (15 min) → Exploration (10 min) → Next Steps (5 min)",
      "Focus on their specific situation - avoid generic questions",
      "Capture insights via voice note immediately after the meeting",
      "Key question: 'What does success look like for you?'",
    ],
  },
  {
    id: 4,
    name: "Proposal",
    slug: "proposal",
    color: "#f59e0b",
    lightColor: "#fef3c7",
    description: "Based on Ben's meeting insights, Em and Nicole create a tailored proposal. Claude API generates the HTML, Ben reviews and approves, then Nicole delivers.",
    goal: "Create and deliver a compelling, personalised proposal within 48 hours of the meeting.",
    entryTrigger: "Meeting complete, insights captured",
    exitCriteria: "Proposal delivered via yoonet.io/[client] with PIN",
    tasks: [
      { owner: "Em", task: "Draft Understanding of Needs", details: "200-500 words, specific to client" },
      { owner: "Em", task: "Draft Proposed Solutions", details: "200-400 words, connect to needs" },
      { owner: "Nicole", task: "Add Timing & Next Steps", details: "150-300 words, realistic timeline" },
      { owner: "Nicole", task: "Trigger proposal generation", details: "Claude API via Bubble" },
      { owner: "Nicole", task: "Publish to yoonet.io/proposals/[client]", details: "Manual or via Webflow" },
      { owner: "Ben", task: "Review proposal page", details: "Check tone, accuracy, mobile view" },
      { owner: "Nicole", task: "Generate 6-digit PIN", details: "Store in Bubble" },
      { owner: "Nicole", task: "Send proposal email with PIN", details: "After Ben approval" },
      { owner: "System", task: "Send follow-up if no response", details: "48 hours, then 5 days" },
    ],
    automations: [
      { name: "Proposal ready notification", trigger: "Status = Pending Review", timing: "Immediate", platform: "Bubble → Slack" },
      { name: "Proposal sent confirmation", trigger: "Status = Sent", timing: "Immediate", platform: "Bubble → Email" },
      { name: "Follow-up reminder", trigger: "No response", timing: "48 hours after sent", platform: "Bubble → SendGrid" },
      { name: "Second follow-up", trigger: "No response", timing: "5 days after sent", platform: "Bubble → SendGrid" },
    ],
    emails: [
      {
        name: "Proposal Delivery",
        subject: "Your Partnership Proposal — [Business Name] + Yoonet",
        trigger: "Manual - After Ben approval",
        type: "manual",
        body: `Hi [Contact First Name],

Thank you for taking the time to meet with us. Based on our conversation, we've put together a proposal for how Yoonet can support [Business Name].

View your proposal here: [Proposal URL]

Your access PIN: [PIN]

This proposal outlines our understanding of your needs, our recommended solution, and the next steps to get started.

If you have any questions or would like to discuss anything in the proposal, simply reply to this email or book a follow-up call: [Calendly Link]

We're excited about the possibility of working together.

Warmest regards,
Ben Carter
Founder, Yoonet`,
      },
      {
        name: "Follow-up (48 hours)",
        subject: "Following up on your proposal — [Business Name]",
        trigger: "48 hours after sent, no response",
        type: "automated",
        body: `Hi [Contact First Name],

I wanted to check in and see if you've had a chance to review your proposal.

View your proposal: [Proposal URL]
PIN: [PIN]

If you have any questions or would like to talk through anything, I'm happy to jump on a quick call: [Calendly Link]

No pressure at all — just want to make sure you have everything you need to make the right decision for [Business Name].

Warmest regards,
Ben`,
      },
      {
        name: "Follow-up (5 days)",
        subject: "Checking in — [Business Name]",
        trigger: "5 days after sent, no response",
        type: "automated",
        body: `Hi [Contact First Name],

I wanted to reach out one more time regarding your proposal from Yoonet.

View your proposal: [Proposal URL]
PIN: [PIN]

If now isn't the right time, that's completely fine. If there's anything we can clarify or if your situation has changed, just let us know.

We're here when you're ready.

Warmest regards,
Ben`,
      },
    ],
    checklist: [
      "Meeting insights received from Ben",
      "Understanding of Needs drafted (Em)",
      "Proposed Solutions drafted (Em)",
      "Timing & Next Steps added (Nicole)",
      "All inputs reviewed for UK English spelling",
      "Proposal generated via Claude API",
      "Proposal published to yoonet.io",
      "Proposal reviewed by Ben",
      "Proposal approved",
      "PIN generated",
      "Proposal email sent to client",
    ],
    tips: [
      "Target turnaround: 48 hours from meeting to proposal delivered",
      "Be specific - avoid generic language",
      "If Ben requests changes, update inputs and regenerate",
      "Always check mobile view before sending",
    ],
  },
  {
    id: 5,
    name: "Onboarding",
    slug: "onboarding",
    color: "#ec4899",
    lightColor: "#fce7f3",
    description: "The client has accepted the proposal and is ready to begin. They complete onboarding and the recruitment process begins.",
    goal: "Transition from sales to delivery, complete setup, and initiate recruitment.",
    entryTrigger: "Proposal accepted (client clicks 'Ready to Begin')",
    exitCriteria: "Client active in Bubble, recruitment process initiated",
    tasks: [
      { owner: "System", task: "Grant onboarding portal access", details: "Client uses proposal PIN" },
      { owner: "System", task: "Send welcome to partnership email", details: "On form submission" },
      { owner: "System", task: "Notify recruitment team", details: "Internal kickoff" },
      { owner: "Nicole", task: "Monitor onboarding completion", details: "Follow up if stuck" },
      { owner: "Em", task: "Technical setup if required", details: "Systems access, integrations" },
      { owner: "System", task: "Send First 30 Days guide", details: "1 day after onboarding" },
    ],
    automations: [
      { name: "Welcome to partnership", trigger: "Onboarding form submitted", timing: "Immediate", platform: "Bubble → SendGrid" },
      { name: "Internal notification", trigger: "Onboarding form submitted", timing: "Immediate", platform: "Bubble → Slack/Email" },
      { name: "Recruitment kickoff", trigger: "Onboarding form submitted", timing: "Immediate", platform: "Bubble → Internal" },
      { name: "First 30 days guide", trigger: "Onboarding complete", timing: "1 day after", platform: "Bubble → SendGrid" },
    ],
    emails: [
      {
        name: "Welcome to Partnership",
        subject: "Welcome to Yoonet — Let's build something great together",
        trigger: "Onboarding form submitted",
        type: "automated",
        body: `Hi [Contact First Name],

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
The Yoonet Team`,
      },
    ],
    checklist: [
      "Client clicked 'Ready to Begin' on proposal",
      "Client accessed onboarding portal with PIN",
      "Business details confirmed",
      "Primary contact information captured",
      "Communication preferences set",
      "Billing setup complete",
      "Role requirements specified",
      "Start date preferences captured",
      "Agreement accepted",
      "Welcome email sent",
      "Recruitment team notified",
    ],
    tips: [
      "This is the handoff point from sales to delivery",
      "Celebrate the win internally!",
      "Ensure recruitment team has all the context they need",
      "First 30 days are critical - ensure regular check-ins are scheduled",
    ],
  },
];

export function getStage(slug: string): Stage | undefined {
  return stages.find((s) => s.slug === slug);
}

export function getNextStage(currentId: number): Stage | undefined {
  return stages.find((s) => s.id === currentId + 1);
}

export function getPrevStage(currentId: number): Stage | undefined {
  return stages.find((s) => s.id === currentId - 1);
}
