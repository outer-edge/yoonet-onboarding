import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamMemberCardProps {
  name: string;
  role: string;
  color: string;
  bgColor: string;
  responsibilities: string[];
}

export function TeamMemberCard({
  name,
  role,
  color,
  bgColor,
  responsibilities,
}: TeamMemberCardProps) {
  return (
    <Card
      className="overflow-hidden"
      style={{ borderTopWidth: "4px", borderTopColor: color }}
    >
      <div style={{ backgroundColor: bgColor }} className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold text-white"
            style={{ backgroundColor: color }}
          >
            {name.charAt(0)}
          </div>
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <Badge
              variant="secondary"
              className="mt-1"
              style={{ backgroundColor: color, color: "white" }}
            >
              {role}
            </Badge>
          </div>
        </div>
      </div>
      <CardContent className="pt-4">
        <CardDescription className="mb-3 text-xs font-semibold uppercase">
          Responsibilities
        </CardDescription>
        <ul className="space-y-2">
          {responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span style={{ color }} className="mt-0.5">
                &bull;
              </span>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
