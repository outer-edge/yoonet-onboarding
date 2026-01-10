"use client";

import { useState, useEffect } from "react";
import { TemplateCard } from "@/components/email-templates/TemplateCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Template {
  id: string;
  name: string;
  stage: string;
  type: string;
  subject: string;
  body: string;
}

const variables = [
  { name: "clientName", description: "The client's first name or full name" },
  { name: "companyName", description: "The client's company name" },
  { name: "portalUrl", description: "URL to the client's portal" },
  { name: "bookingLink", description: "Calendar booking link for discovery call" },
  { name: "assessmentLink", description: "Link to the assessment form" },
  { name: "clientSlug", description: "URL-friendly client identifier" },
  { name: "accessPin", description: "PIN for proposal/portal access" },
  { name: "meetingDate", description: "Scheduled meeting date and time" },
  { name: "submissionDate", description: "Date the assessment was submitted" },
  { name: "assessmentSummary", description: "Brief summary of assessment responses" },
];

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      const res = await fetch("/api/templates");
      if (res.ok) {
        const data = await res.json();
        setTemplates(data);
      }
    } catch (error) {
      console.error("Failed to fetch templates:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (id: string, subject: string, body: string) => {
    setSaving(id);
    try {
      const res = await fetch(`/api/templates/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, body }),
      });

      if (res.ok) {
        const updated = await res.json();
        setTemplates((prev) =>
          prev.map((t) => (t.id === id ? { ...t, subject: updated.subject, body: updated.body } : t))
        );
      } else {
        console.error("Failed to save template");
      }
    } catch (error) {
      console.error("Error saving template:", error);
    } finally {
      setSaving(null);
    }
  };

  const automatedTemplates = templates.filter((t) => t.type === "automated");
  const manualTemplates = templates.filter((t) => t.type === "manual");

  if (loading) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center py-12">
          <div className="text-muted-foreground">Loading templates...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Email Templates</h1>
        <p className="mt-2 text-muted-foreground">
          View and edit email templates used throughout the sales process.
          Templates support dynamic variables like {"{{clientName}}"}. Changes are saved to the database.
        </p>
      </div>

      <div className="mb-6 rounded-lg border bg-muted/50 p-4">
        <h2 className="mb-2 font-semibold">Available Variables</h2>
        <div className="flex flex-wrap gap-2">
          {variables.map((v) => (
            <div key={v.name} className="group relative">
              <Badge variant="outline" className="cursor-help font-mono">
                {`{{${v.name}}}`}
              </Badge>
              <div className="invisible absolute bottom-full left-1/2 z-10 mb-2 w-48 -translate-x-1/2 rounded-lg bg-popover p-2 text-xs shadow-lg group-hover:visible">
                {v.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Templates ({templates.length})</TabsTrigger>
          <TabsTrigger value="automated">
            Automated ({automatedTemplates.length})
          </TabsTrigger>
          <TabsTrigger value="manual">Manual ({manualTemplates.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                {...template}
                type={template.type as "automated" | "manual"}
                onSave={handleSave}
                isSaving={saving === template.id}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="automated" className="mt-4">
          <div className="mb-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">About Automated Emails</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  These emails are sent automatically based on triggers in the sales process.
                  They help nurture prospects and keep them engaged without manual intervention.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {automatedTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                {...template}
                type="automated"
                onSave={handleSave}
                isSaving={saving === template.id}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="manual" className="mt-4">
          <div className="mb-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">About Manual Emails</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  These templates are used by team members when sending personalized communications.
                  They serve as starting points that can be customized for each client.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {manualTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                {...template}
                type="manual"
                onSave={handleSave}
                isSaving={saving === template.id}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
