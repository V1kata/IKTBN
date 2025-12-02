"use server";

import { supabaseAdmin } from "@/lib/supabaseAdminClient";

export async function POST(req) {
    const { email, action } = await req.json();

    debugger
    if (action === "accepted") {
        const { data, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
            redirectTo: "https://iktbn.vercel.app/auth/set-password"
        });

        if (error) {
            return new Response(JSON.stringify({ error: error.message }), { status: 400 });
        }
    }

    return new Response(JSON.stringify({ success: true }));
}
