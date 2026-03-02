import { connectDB } from "@/lib/mongoDb";
import lead from "@/models/lead";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connectDB();

    const newLead = await lead.create({
      name,
      email,
      phone,
      message,
    });

    return NextResponse.json(
      { success: true, data: newLead },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
