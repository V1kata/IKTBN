import { supabaseAdmin } from "@/lib/supabaseAdminClient";

export async function setInviteToEmail(email) {
    try {
        const { data, error } = await supabaseAdmin.auth.admin.inviteUserByEmail(email, {
            redirectTo: "http://localhost:3000/set-password"
        });
        if (error) throw error;
    } catch (err) {
        console.error("Грешка при покана:", err);
    }
}