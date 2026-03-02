import { NextResponse } from "next/server";
import Lead from "@/models/lead";
import { connectDB } from "@/lib/mongoDb";

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const lead = await Lead.create(body);

  return NextResponse.json({ success: true, lead });
}

export async function GET() {
  await connectDB();
  const leads = await Lead.find().sort({ createdAt: -1 });

  return NextResponse.json(leads);
}
