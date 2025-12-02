import { supabase } from "@/lib/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  const { data, error } = await supabase
    .from("requests")
    .select("*")
    .eq("status", "pending");

  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json(data);
}