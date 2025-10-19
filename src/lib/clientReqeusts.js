import { supabase } from "@/lib/supabaseClient";

export async function login(email, password) {
try {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });
    if (error) throw error;

    const userId = data.user.id;
    const res = await supabase.from("profiles").select().eq("id", userId);

    if (res.error) throw res.error;

    await setSession(data.session.access_token, data.session.refresh_token);

    return { ...res.data[0], accessToken: data.session.access_token };
} catch (err) {
    console.error("Грешка при вход:", err);
}
}

async function setSession(access_token, refresh_token) {
    try {
        const { data, error } = await supabase.auth.setSession({
            access_token,
            refresh_token
        });
        
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: err };
    }
}

export async function getSession() {
    try {
        const { data, error } = await supabase.auth.getSession();

        const user = await getCurrentUser(data.session.user.id);

        return user;
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: err };
    }
}

export async function getCurrentUser(user_id) {
    try {
        const { data, error } = await supabase
            .from('user_profiles')
            .eq('id', user_id)
            .select('*');

        return data
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: err };
    }
}

export async function logoutUser(userId) {
    try {
        await makeUserOffline(userId);

        const { error } = await supabase.auth.signOut();

        if (error) {
            throw error;
        }

        localStorage.removeItem('sb-mbzfehmethzunbrrpxls-auth-token');
        sessionStorage.removeItem('sb-mbzfehmethzunbrrpxls-auth-token');
        return;
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: err };
    }
}

async function ensureSession() {
  const { data, error } = await supabase.auth.getSession();

  if (error || !data.session) {
    const { data: refreshed } = await supabase.auth.refreshSession();
    return refreshed.session;
  }

  return data.session;
}