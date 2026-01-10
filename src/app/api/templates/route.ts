import { NextResponse } from "next/server";
import templatesData from "@/data/email-templates.json";

export async function GET() {
  return NextResponse.json(templatesData.templates);
}
