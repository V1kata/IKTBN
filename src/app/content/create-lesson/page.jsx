"use client";

import { useState } from "react";
import LessonFormComponent from "@/app/ui/createForm/LessonFormComponent";
import { createLesson } from "@/lib/createFormAction";
import { useUser } from "@/app/context/UserContext";

export default function LessonForm() {
    const { userData } = useUser();
    const [lessonData, setLessonData] = useState({
        grade: "",
        title: "",
        content: "",
        files: [],
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!lessonData.title || !lessonData.grade) {
            alert("Моля, попълнете задължителните полета!");
            return;
        }

        await createLesson({ ...lessonData, userId: userData.id });
        console.log("Lesson data:", lessonData);
    };

    return (
        <>
            <LessonFormComponent lessonData={lessonData} setLessonData={setLessonData} handleSubmit={handleSubmit} />
        </>
    );
}
