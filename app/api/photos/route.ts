import { createClient } from "@/app/utils/supabase/server";
import { NextResponse } from "next/server";


export async function GET() {
    const supabase = createClient();
    const { data, error } = await supabase.from("Images").select();
    if (error) {
        return NextResponse.json(error)
    }
    return NextResponse.json(data)

}