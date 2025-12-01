"use client";
import { AllLessons } from "@/app/ui/lessons/allLessonsComponents/AllLesson";
export function AllLessonsSkeleton({ lessons, grade }) {
    return (
        <section className="max-w-5xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                {grade} клас — Уроци
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {lessons.map((lesson) => (
                    <AllLessons lesson={lesson} key={lesson.id} />
                ))}
            </div>
        </section>
    )
}