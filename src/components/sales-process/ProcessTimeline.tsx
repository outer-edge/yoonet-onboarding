"use client";

import { cn } from "@/lib/utils";

interface Stage {
  id: number;
  name: string;
  color: string;
  lightColor: string;
  description: string;
  goal: string;
}

interface ProcessTimelineProps {
  stages: Stage[];
  activeStage?: number;
  onStageClick?: (stageId: number) => void;
}

export function ProcessTimeline({
  stages,
  activeStage,
  onStageClick,
}: ProcessTimelineProps) {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex min-w-max items-center">
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex items-center">
            <button
              onClick={() => onStageClick?.(stage.id)}
              className={cn(
                "relative flex items-center gap-3 px-6 py-4 transition-all",
                "clip-chevron",
                activeStage === stage.id
                  ? "text-white"
                  : "hover:brightness-95"
              )}
              style={{
                backgroundColor:
                  activeStage === stage.id ? stage.color : stage.lightColor,
                marginLeft: index === 0 ? 0 : "-12px",
              }}
            >
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold",
                  activeStage === stage.id
                    ? "bg-white/20 text-white"
                    : "text-white"
                )}
                style={{
                  backgroundColor:
                    activeStage === stage.id ? "rgba(255,255,255,0.2)" : stage.color,
                }}
              >
                {stage.id}
              </span>
              <span
                className={cn(
                  "font-semibold",
                  activeStage === stage.id ? "text-white" : ""
                )}
                style={{
                  color: activeStage === stage.id ? "white" : stage.color,
                }}
              >
                {stage.name}
              </span>
            </button>
          </div>
        ))}
      </div>
      <style jsx>{`
        .clip-chevron {
          clip-path: polygon(
            0% 0%,
            calc(100% - 20px) 0%,
            100% 50%,
            calc(100% - 20px) 100%,
            0% 100%,
            20px 50%
          );
        }
        .clip-chevron:first-child {
          clip-path: polygon(
            0% 0%,
            calc(100% - 20px) 0%,
            100% 50%,
            calc(100% - 20px) 100%,
            0% 100%
          );
        }
        .clip-chevron:last-child {
          clip-path: polygon(
            0% 0%,
            100% 0%,
            100% 100%,
            0% 100%,
            20px 50%
          );
        }
      `}</style>
    </div>
  );
}
