"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TemplateCardProps {
  id: string;
  name: string;
  stage: string;
  type: "automated" | "manual";
  subject: string;
  body: string;
  onSave?: (id: string, subject: string, body: string) => void;
  isSaving?: boolean;
}

const stageColors: Record<string, { color: string; bg: string }> = {
  Engaged: { color: "#f59e0b", bg: "#fef3c7" },
  Discovery: { color: "#10b981", bg: "#d1fae5" },
  Proposal: { color: "#8b5cf6", bg: "#ede9fe" },
  Onboarding: { color: "#ec4899", bg: "#fce7f3" },
};

export function TemplateCard({
  id,
  name,
  stage,
  type,
  subject,
  body,
  onSave,
  isSaving,
}: TemplateCardProps) {
  const [editSubject, setEditSubject] = useState(subject);
  const [editBody, setEditBody] = useState(body);
  const [isOpen, setIsOpen] = useState(false);
  const stageStyle = stageColors[stage] || { color: "#64748b", bg: "#f1f5f9" };

  // Update local state when props change
  useEffect(() => {
    setEditSubject(subject);
    setEditBody(body);
  }, [subject, body]);

  const handleSave = async () => {
    onSave?.(id, editSubject, editBody);
  };

  // Close dialog when saving completes
  useEffect(() => {
    if (!isSaving && isOpen) {
      // Small delay to show success state
      const timer = setTimeout(() => setIsOpen(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isSaving, isOpen]);

  const handleCancel = () => {
    setEditSubject(subject);
    setEditBody(body);
    setIsOpen(false);
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-base">{name}</CardTitle>
            <CardDescription className="text-sm">{subject}</CardDescription>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge
              variant="secondary"
              style={{ backgroundColor: stageStyle.bg, color: stageStyle.color }}
            >
              {stage}
            </Badge>
            <Badge variant={type === "automated" ? "outline" : "default"}>
              {type === "automated" ? "Automated" : "Manual"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <div className="flex-1 rounded-lg bg-muted/50 p-3">
          <pre className="whitespace-pre-wrap text-xs text-muted-foreground line-clamp-6">
            {body}
          </pre>
        </div>
        <div className="mt-4 flex justify-end">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                View & Edit
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{name}</DialogTitle>
                <DialogDescription>
                  Edit the email template below. Use {"{{variableName}}"} for dynamic content.
                  Changes are saved to the database.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject Line</Label>
                  <Input
                    id="subject"
                    value={editSubject}
                    onChange={(e) => setEditSubject(e.target.value)}
                    disabled={isSaving}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="body">Email Body</Label>
                  <Textarea
                    id="body"
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    className="min-h-[300px] font-mono text-sm"
                    disabled={isSaving}
                  />
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <p className="mb-2 text-xs font-semibold text-muted-foreground">
                    Available Variables
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["clientName", "companyName", "portalUrl", "bookingLink", "assessmentLink", "clientSlug", "accessPin"].map((v) => (
                      <code
                        key={v}
                        className="rounded bg-background px-2 py-1 text-xs"
                      >
                        {`{{${v}}}`}
                      </code>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={handleCancel} disabled={isSaving}>
                  Cancel
                </Button>
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
}
