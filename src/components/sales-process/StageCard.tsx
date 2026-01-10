"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StageCardProps {
  id: number;
  name: string;
  color: string;
  lightColor: string;
  description: string;
  goal: string;
  exitCriteria: string;
  activities?: string[];
  entryPoints?: { name: string; description: string }[];
  isActive?: boolean;
  onClick?: () => void;
}

export function StageCard({
  id,
  name,
  color,
  lightColor,
  description,
  goal,
  exitCriteria,
  activities,
  entryPoints,
  isActive,
  onClick,
}: StageCardProps) {
  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-lg ${
        isActive ? "ring-2 ring-offset-2" : ""
      }`}
      style={{
        borderLeftWidth: "4px",
        borderLeftColor: color,
        ...(isActive ? { ringColor: color } : {}),
      }}
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
            style={{ backgroundColor: color }}
          >
            {id}
          </span>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <Badge
              variant="secondary"
              className="mt-1 text-xs"
              style={{ backgroundColor: lightColor, color: color }}
            >
              Stage {id}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription>{description}</CardDescription>

        <div
          className="rounded-lg p-3"
          style={{ backgroundColor: lightColor }}
        >
          <p className="text-xs font-semibold uppercase" style={{ color }}>
            Goal
          </p>
          <p className="mt-1 text-sm">{goal}</p>
        </div>

        <div
          className="rounded-lg p-3"
          style={{ backgroundColor: lightColor }}
        >
          <p className="text-xs font-semibold uppercase" style={{ color }}>
            Exit Criteria
          </p>
          <p className="mt-1 text-sm">{exitCriteria}</p>
        </div>

        {entryPoints && entryPoints.length > 0 && (
          <div>
            <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
              Entry Points
            </p>
            <ul className="space-y-1">
              {entryPoints.map((ep, i) => (
                <li key={i} className="text-sm">
                  <span className="font-medium">{ep.name}</span>
                  <span className="text-muted-foreground"> - {ep.description}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activities && activities.length > 0 && (
          <div>
            <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
              Key Activities
            </p>
            <ul className="space-y-1">
              {activities.map((activity, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span style={{ color }} className="mt-1">
                    &bull;
                  </span>
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
