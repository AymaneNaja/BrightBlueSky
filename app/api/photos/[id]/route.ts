import { createClient } from "@/app/utils/supabase/server";
import { NextResponse, NextRequest } from "next/server";




export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const supabase = createClient();
    const { data, error } = await supabase.from("Images").select().eq('id', params.id);
    if (error) {
        return NextResponse.json(error)
    }
    return NextResponse.json(data)
}