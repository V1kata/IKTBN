import { supabase } from "@/lib/supabaseClient";
import { TABLES, BUCKETS } from "@/utils/constants";

export async function createLesson({ grade, title, content, files, userId }) {
    try {
        const fileUrls = [];

        for (const file of files) {
            const fileExt = file.name.split(".").pop();
            const fileName = `${Date.now()}_${file.name}`;
            const { data, error: uploadError } = await supabase.storage.from(BUCKETS.LESSON_FILES)
                .upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: publicURL } = supabase.storage.from(BUCKETS.LESSON_FILES).getPublicUrl(fileName);
            fileUrls.push(publicURL);
        }

        debugger
        const { data, error } = await supabase
            .from(TABLES.LESSONS)
            .insert([
                {
                    grade,
                    title,
                    content,
                    files: fileUrls,
                    teacherId: userId,
                },
            ]);

        if (error) throw error;

        return data;
    } catch (err) {
        console.error("Error creating lesson:", err);
        throw err;
    }
}