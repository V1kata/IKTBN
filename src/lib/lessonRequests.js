import { supabase } from "@/lib/supabaseClient";

export async function getLessonsByGrade(grade) {
    try {
        const { data, error } = await supabase
            .from('lessons')
            .select('*')
            .eq('grade', grade);

        return data;
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: err };
    }
}

export async function getLessonById(id) {
    try {
        const { data, error } = await supabase
            .from('lessons')
            .select('*')
            .eq('id', id);

        return data[0];
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: err };
    }
}

export async function getPersonalLessons(userId) {
    try {
        const { data, error } = await supabase
            .from('lessons')
            .select('*')
            .eq('teacherId', userId);

        return data;
    } catch (err) {
        console.error('Unexpected error:', err);
        return { error: err };
    }
}