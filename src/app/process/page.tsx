"use client";

import { useState } from "react";
import { SalesProcessDiagram } from "@/components/sales-process/SalesProcessDiagram";
import { StageCard } from "@/components/sales-process/StageCard";
import { ProcessTimeline } from "@/components/sales-process/ProcessTimeline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import content from "@/data/content.json";

export default function ProcessPage() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const handleStageClick = (stageId: number) => {
    setActiveStage(activeStage === stageId ? null : stageId);
  };

  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Sales Process</h1>
        <p className="mt-2 text-muted-foreground">
          5 stages from Inquiry to Onboarding. Click stages or steps for details.
        </p>
      </div>

      <ProcessTimeline
        stages={content.stages}
        activeStage={activeStage ?? undefined}
        onStageClick={handleStageClick}
      />

      <Tabs defaultValue="diagram" className="mt-6">
        <TabsList>
          <TabsTrigger value="diagram">Process Diagram</TabsTrigger>
          <TabsTrigger value="stages">Stage Details</TabsTrigger>
        </TabsList>

        <TabsContent value="diagram" className="mt-4">
          <SalesProcessDiagram
            stages={content.stages}
            onStageClick={handleStageClick}
          />
        </TabsContent>

        <TabsContent value="stages" className="mt-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.stages.map((stage) => (
              <StageCard
                key={stage.id}
                {...stage}
                isActive={activeStage === stage.id}
                onClick={() => handleStageClick(stage.id)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
