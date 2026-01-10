import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const content = {
  company: {
    name: "Yoonet",
    tagline: "Sales Onboarding Portal",
    description: "Your complete guide to the Yoonet sales process, from initial inquiry to successful onboarding."
  },
  stages: [
    {
      id: 1,
      name: "Inquiry",
      color: "#3b82f6",
      lightColor: "#dbeafe",
      description: "Lead enters the system. Client record created in Bubble. Visible to Ben, Em, and Nicole.",
      goal: "Capture and register the opportunity",
      exitCriteria: "Client exists in Bubble, inquiry acknowledged",
      entryPoints: [
        { name: "Organic Inquiry", description: "Inbound lead from website, SEO, content" },
        { name: "Referral", description: "Word of mouth, existing client referral" },
        { name: "Outreach", description: "Proactive contact from Yoonet" }
      ]
    },
    {
      id: 2,
      name: "Engaged",
      color: "#f59e0b",
      lightColor: "#fef3c7",
      description: "Prospect is actively engaged. Booking link sent, time scheduled. Form being prepared. Nurturing content flowing.",
      goal: "Schedule meeting and prepare bespoke assessment",
      exitCriteria: "Meeting booked, assessment form sent",
      activities: [
        "Send booking link with 'Form coming soon' message",
        "Client books available time slot",
        "Create bespoke Partner Assessment Form (with Claude)",
        "Refine and prepare form collaboratively",
        "Approve and send form to client",
        "Automated welcome sequence with portal access",
        "Send 'How We Work' educational content",
        "Deliver Investment Guide with pricing transparency"
      ]
    },
    {
      id: 3,
      name: "Discovery",
      color: "#10b981",
      lightColor: "#d1fae5",
      description: "Assessment completed, meeting held. Ben understands their needs, challenges, and fit.",
      goal: "Qualify opportunity and gather requirements",
      exitCriteria: "Meeting complete, clear understanding of needs",
      activities: [
        "Client completes Partner Assessment Form",
        "Automated email notification to Ben, Em, Nicole",
        "Discovery meeting with Ben"
      ]
    },
    {
      id: 4,
      name: "Proposal",
      color: "#8b5cf6",
      lightColor: "#ede9fe",
      description: "Em and Nicole create proposal based on Ben's insights. Solution designed, pricing prepared, proposal page built.",
      goal: "Present tailored solution with clear next steps",
      exitCriteria: "Proposal delivered via yoonet.io/[client]",
      activities: [
        "Ben captures meeting insights and requirements",
        "Document understanding of client needs",
        "Develop proposed solutions",
        "Define timing and implementation next steps",
        "Create proposal page (yoonet.io/[client] with PIN)"
      ]
    },
    {
      id: 5,
      name: "Onboarding",
      color: "#ec4899",
      lightColor: "#fce7f3",
      description: "Client accesses Bubble with PIN. Recruitment process begins. Transition from sales to delivery.",
      goal: "Successful handoff to recruitment",
      exitCriteria: "Client active in Bubble, recruitment initiated",
      activities: [
        "Client receives proposal with PIN and Bubble link",
        "Client accesses Bubble using PIN",
        "Recruitment process begins"
      ]
    }
  ],
  team: [
    {
      id: "ben",
      name: "Ben",
      role: "Sales",
      color: "#10b981",
      bgColor: "#ecfdf5",
      responsibilities: [
        "Lead discovery meetings with prospects",
        "Capture meeting insights and requirements",
        "Assess client fit and needs",
        "Communicate client requirements to team"
      ]
    },
    {
      id: "nicole",
      name: "Nicole",
      role: "Sales Admin",
      color: "#f59e0b",
      bgColor: "#fffbeb",
      responsibilities: [
        "Manage client dashboard in Bubble",
        "Send booking links to prospects",
        "Refine and approve assessment forms",
        "Create proposal pages",
        "Define timing and next steps"
      ]
    },
    {
      id: "em",
      name: "Em",
      role: "Technical",
      color: "#8b5cf6",
      bgColor: "#f5f3ff",
      responsibilities: [
        "Create bespoke Partner Assessment Forms",
        "Work with Claude for form generation",
        "Document understanding of client needs",
        "Develop proposed solutions"
      ]
    }
  ],
  automatedContent: {
    nurturing: [
      { id: "welcome", name: "Welcome + Portal", trigger: "After inquiry logged", description: "Introduces portal access to the prospect" },
      { id: "how-we-work", name: "How We Work", trigger: "Pre-meeting", description: "Education on partnership model" },
      { id: "investment-guide", name: "Investment Guide", trigger: "Before assessment", description: "Pricing transparency and ROI examples" }
    ],
    notifications: [
      { id: "assessment-complete", name: "Assessment Completion", recipients: ["Ben", "Em", "Nicole"], description: "Alerts team when client completes form" }
    ]
  }
};

const emailTemplates = [
  {
    id: "welcome-portal",
    name: "Welcome + Portal Access",
    stage: "Engaged",
    type: "automated",
    subject: "Welcome to Yoonet - Your Portal Access",
    body: `Hi {{clientName}},

Thank you for your interest in Yoonet! We're excited to start this journey with you.

Your personalized portal is now ready. You can access it anytime to:
- Track the progress of your engagement
- Access important documents
- Communicate with our team

**Portal Access:**
URL: {{portalUrl}}

Next, you'll receive our "How We Work" guide to help you understand our partnership model.

If you have any questions in the meantime, don't hesitate to reach out.

Best regards,
The Yoonet Team`
  },
  {
    id: "how-we-work",
    name: "How We Work Guide",
    stage: "Engaged",
    type: "automated",
    subject: "How Yoonet Works - Our Partnership Model",
    body: `Hi {{clientName}},

Before our upcoming meeting, we wanted to share how we approach partnerships at Yoonet.

**Our Approach:**

1. **Discovery** - We take the time to truly understand your business, challenges, and goals.

2. **Bespoke Solutions** - Every proposal is tailored specifically to your needs. No cookie-cutter approaches here.

3. **Transparent Process** - You'll have visibility into every step of our engagement through your portal.

4. **Ongoing Partnership** - We're not just a vendor; we become an extension of your team.

**What to Expect:**
- A personalized assessment form (coming soon)
- A discovery call with Ben to discuss your needs
- A tailored proposal with clear pricing and next steps

We look forward to learning more about your business!

Best regards,
The Yoonet Team`
  },
  {
    id: "investment-guide",
    name: "Investment Guide",
    stage: "Engaged",
    type: "automated",
    subject: "Yoonet Investment Guide - Transparent Pricing",
    body: `Hi {{clientName}},

At Yoonet, we believe in complete transparency when it comes to pricing. Here's what you need to know about investing in a partnership with us.

**Our Pricing Philosophy:**
- Clear, upfront pricing with no hidden fees
- Flexible engagement models to suit your needs
- ROI-focused approach - we measure our success by your results

**What Influences Your Investment:**
1. Scope of recruitment needs
2. Timeline and urgency
3. Specialization requirements
4. Ongoing support level

**ROI Examples:**
- Average time-to-hire reduction: 40%
- Quality of hire improvement: 35%
- Cost-per-hire optimization: 25%

Your personalized pricing will be included in your proposal after our discovery call.

Questions? We're happy to discuss.

Best regards,
The Yoonet Team`
  },
  {
    id: "booking-link",
    name: "Booking Link Email",
    stage: "Engaged",
    type: "manual",
    subject: "Let's Schedule Your Discovery Call - Yoonet",
    body: `Hi {{clientName}},

Thank you for reaching out to Yoonet! We're looking forward to learning more about your business and how we can help.

**Book Your Discovery Call:**
{{bookingLink}}

This 30-minute call will be with Ben, our Sales lead. He'll walk you through our process and discuss your specific needs.

**Before the call:**
- You'll receive a personalized assessment form (coming soon)
- Please complete it so Ben can prepare for a productive conversation

If you have any questions before our call, feel free to reply to this email.

Looking forward to speaking with you!

Best regards,
Nicole
Yoonet Sales Team`
  },
  {
    id: "assessment-form",
    name: "Assessment Form Email",
    stage: "Engaged",
    type: "manual",
    subject: "Your Personalized Assessment - Yoonet",
    body: `Hi {{clientName}},

As promised, here's your personalized Partner Assessment Form. This helps us understand your business better and prepare for a productive discovery call.

**Complete Your Assessment:**
{{assessmentLink}}

**What we're looking to understand:**
- Your current recruitment challenges
- Your ideal candidate profiles
- Your timeline and goals
- Your team structure and hiring needs

**Time to complete:** Approximately 10-15 minutes

Once submitted, Ben will review your responses and be fully prepared for your discovery call.

Thank you for taking the time!

Best regards,
Nicole
Yoonet Sales Team`
  },
  {
    id: "assessment-notification",
    name: "Assessment Completion Notification",
    stage: "Discovery",
    type: "automated",
    subject: "[Internal] Assessment Completed - {{clientName}}",
    body: `Team,

{{clientName}} has completed their Partner Assessment Form.

**Client:** {{clientName}}
**Company:** {{companyName}}
**Submitted:** {{submissionDate}}

**Quick Summary:**
{{assessmentSummary}}

**View Full Assessment:**
{{assessmentLink}}

**Next Steps:**
- Ben: Review before discovery call
- Em: Begin thinking about potential solutions
- Nicole: Confirm meeting is scheduled

Discovery call scheduled for: {{meetingDate}}

- Automated Notification`
  },
  {
    id: "proposal-delivery",
    name: "Proposal Delivery",
    stage: "Onboarding",
    type: "manual",
    subject: "Your Yoonet Proposal is Ready",
    body: `Hi {{clientName}},

Thank you for the excellent conversation with Ben. Based on our discovery call and your assessment, we've prepared a tailored proposal for {{companyName}}.

**Access Your Proposal:**
URL: yoonet.io/{{clientSlug}}
PIN: {{accessPin}}

**What's Included:**
1. Our understanding of your needs
2. Proposed solutions and approach
3. Timeline and implementation plan
4. Investment details
5. Next steps to get started

**Your Bubble Portal:**
Once you're ready to proceed, you'll use the same PIN to access your client portal in Bubble, where you can:
- Track recruitment progress
- Review candidates
- Communicate with your dedicated team

We're excited about the possibility of partnering with {{companyName}}. Please don't hesitate to reach out with any questions.

Best regards,
The Yoonet Team`
  }
];

const templateVariables = [
  { id: "clientName", name: "clientName", description: "The client's first name or full name" },
  { id: "companyName", name: "companyName", description: "The client's company name" },
  { id: "portalUrl", name: "portalUrl", description: "URL to the client's portal" },
  { id: "bookingLink", name: "bookingLink", description: "Calendar booking link for discovery call" },
  { id: "assessmentLink", name: "assessmentLink", description: "Link to the assessment form" },
  { id: "clientSlug", name: "clientSlug", description: "URL-friendly client identifier" },
  { id: "accessPin", name: "accessPin", description: "PIN for proposal/portal access" },
  { id: "meetingDate", name: "meetingDate", description: "Scheduled meeting date and time" },
  { id: "submissionDate", name: "submissionDate", description: "Date the assessment was submitted" },
  { id: "assessmentSummary", name: "assessmentSummary", description: "Brief summary of assessment responses" }
];

async function main() {
  console.log("Seeding database...");

  // Seed company
  await prisma.company.upsert({
    where: { id: "default" },
    update: content.company,
    create: { id: "default", ...content.company },
  });
  console.log("  - Company seeded");

  // Seed stages
  for (const stage of content.stages) {
    await prisma.stage.upsert({
      where: { id: stage.id },
      update: {
        name: stage.name,
        color: stage.color,
        lightColor: stage.lightColor,
        description: stage.description,
        goal: stage.goal,
        exitCriteria: stage.exitCriteria,
        activities: stage.activities ? JSON.stringify(stage.activities) : null,
        entryPoints: stage.entryPoints ? JSON.stringify(stage.entryPoints) : null,
      },
      create: {
        id: stage.id,
        name: stage.name,
        color: stage.color,
        lightColor: stage.lightColor,
        description: stage.description,
        goal: stage.goal,
        exitCriteria: stage.exitCriteria,
        activities: stage.activities ? JSON.stringify(stage.activities) : null,
        entryPoints: stage.entryPoints ? JSON.stringify(stage.entryPoints) : null,
      },
    });
  }
  console.log("  - Stages seeded");

  // Seed team members
  for (const member of content.team) {
    await prisma.teamMember.upsert({
      where: { id: member.id },
      update: {
        name: member.name,
        role: member.role,
        color: member.color,
        bgColor: member.bgColor,
        responsibilities: JSON.stringify(member.responsibilities),
      },
      create: {
        id: member.id,
        name: member.name,
        role: member.role,
        color: member.color,
        bgColor: member.bgColor,
        responsibilities: JSON.stringify(member.responsibilities),
      },
    });
  }
  console.log("  - Team members seeded");

  // Seed automated content
  for (const item of content.automatedContent.nurturing) {
    await prisma.automatedContent.upsert({
      where: { id: item.id },
      update: {
        category: "nurturing",
        name: item.name,
        trigger: item.trigger,
        description: item.description,
      },
      create: {
        id: item.id,
        category: "nurturing",
        name: item.name,
        trigger: item.trigger,
        description: item.description,
      },
    });
  }
  for (const item of content.automatedContent.notifications) {
    await prisma.automatedContent.upsert({
      where: { id: item.id },
      update: {
        category: "notification",
        name: item.name,
        recipients: JSON.stringify(item.recipients),
        description: item.description,
      },
      create: {
        id: item.id,
        category: "notification",
        name: item.name,
        recipients: JSON.stringify(item.recipients),
        description: item.description,
      },
    });
  }
  console.log("  - Automated content seeded");

  // Seed email templates
  for (const template of emailTemplates) {
    await prisma.emailTemplate.upsert({
      where: { id: template.id },
      update: {
        name: template.name,
        stage: template.stage,
        type: template.type,
        subject: template.subject,
        body: template.body,
      },
      create: template,
    });
  }
  console.log("  - Email templates seeded");

  // Seed template variables
  for (const variable of templateVariables) {
    await prisma.templateVariable.upsert({
      where: { id: variable.id },
      update: { description: variable.description },
      create: variable,
    });
  }
  console.log("  - Template variables seeded");

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
