import { TeamMemberCard } from "@/components/team/TeamMemberCard";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import content from "@/data/content.json";

const stageInvolvement = [
  {
    stage: "Inquiry",
    color: "#3b82f6",
    lightColor: "#dbeafe",
    members: {
      Ben: "Visible in dashboard",
      Nicole: "Dashboard management, initial response",
      Em: "Visible in dashboard",
    },
  },
  {
    stage: "Engaged",
    color: "#f59e0b",
    lightColor: "#fef3c7",
    members: {
      Ben: "-",
      Nicole: "Send booking link, refine forms, approve & send",
      Em: "Create bespoke assessment form with Claude",
    },
  },
  {
    stage: "Discovery",
    color: "#10b981",
    lightColor: "#d1fae5",
    members: {
      Ben: "Lead discovery meeting, assess client fit",
      Nicole: "Receive notification",
      Em: "Receive notification",
    },
  },
  {
    stage: "Proposal",
    color: "#8b5cf6",
    lightColor: "#ede9fe",
    members: {
      Ben: "Capture meeting insights",
      Nicole: "Define timing, create proposal page",
      Em: "Document needs, develop solutions",
    },
  },
  {
    stage: "Onboarding",
    color: "#ec4899",
    lightColor: "#fce7f3",
    members: {
      Ben: "-",
      Nicole: "Handoff coordination",
      Em: "Technical setup",
    },
  },
];

export default function TeamPage() {
  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Team Roles</h1>
        <p className="mt-2 text-muted-foreground">
          Understanding who does what at each stage of the sales process.
        </p>
      </div>

      <div className="mb-8 grid gap-6 md:grid-cols-3">
        {content.team.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Automated Systems</CardTitle>
          <CardDescription>
            In addition to the team, automated systems handle nurturing and notifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg bg-pink-50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500 text-white">
                  ⚡
                </span>
                <span className="font-semibold text-pink-900">Nurturing Sequences</span>
              </div>
              <ul className="space-y-1 text-sm text-pink-800">
                <li>• Welcome + Portal access email</li>
                <li>• How We Work educational content</li>
                <li>• Investment Guide with pricing</li>
              </ul>
            </div>
            <div className="rounded-lg bg-blue-50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                  📧
                </span>
                <span className="font-semibold text-blue-900">Team Notifications</span>
              </div>
              <ul className="space-y-1 text-sm text-blue-800">
                <li>• Assessment completion alerts</li>
                <li>• Sent to Ben, Em, and Nicole</li>
                <li>• Ensures timely follow-up</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stage-by-Stage Involvement</CardTitle>
          <CardDescription>
            What each team member does at every stage of the process
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="pb-3 text-left font-semibold">Stage</th>
                  {content.team.map((member) => (
                    <th key={member.id} className="pb-3 text-left font-semibold">
                      <span
                        className="inline-flex items-center gap-2"
                        style={{ color: member.color }}
                      >
                        <span
                          className="flex h-6 w-6 items-center justify-center rounded-full text-xs text-white"
                          style={{ backgroundColor: member.color }}
                        >
                          {member.name.charAt(0)}
                        </span>
                        {member.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {stageInvolvement.map((stage) => (
                  <tr key={stage.stage} className="border-b last:border-0">
                    <td className="py-3">
                      <Badge
                        variant="secondary"
                        style={{
                          backgroundColor: stage.lightColor,
                          color: stage.color,
                        }}
                      >
                        {stage.stage}
                      </Badge>
                    </td>
                    {content.team.map((member) => (
                      <td key={member.id} className="py-3 text-sm">
                        {stage.members[member.name as keyof typeof stage.members] || "-"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
