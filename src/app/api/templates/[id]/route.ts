import { NextResponse } from "next/server";
import templatesData from "@/data/email-templates.json";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const template = templatesData.templates.find((t) => t.id === id);

  if (!template) {
    return NextResponse.json({ error: "Template not found" }, { status: 404 });
  }

  return NextResponse.json(template);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await request.json();

  // Demo mode: return updated data (changes not persisted)
  const template = templatesData.templates.find((t) => t.id === id);

  return NextResponse.json({
    ...template,
    subject: data.subject,
    body: data.body,
    updatedAt: new Date().toISOString(),
  });
}
