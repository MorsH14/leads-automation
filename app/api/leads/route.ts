import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Use Service Role Key if available to bypass RLS on the server
const supabase = createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey);

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

    const { data, error } = await supabase
      .from("leads")
      .insert([{ name, email, phone, message }])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error (POST):", error);
    const message = error && typeof error === 'object' && 'message' in error 
        ? (error as any).message 
        : "Something went wrong";
    
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json({ success: true, leads: data });
  } catch (error) {
    console.error("API Error (GET):", error);
    const message = error && typeof error === 'object' && 'message' in error 
        ? (error as any).message 
        : "Failed to fetch leads";

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
