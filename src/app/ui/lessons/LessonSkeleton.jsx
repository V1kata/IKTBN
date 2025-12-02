"use client";
import Link from "next/link";
import { MaterialBtns } from "./customLesson/MaterialBtns";

export function LessonSkeleton({ lesson }) {

    return (
        <article className="max-w-4xl mx-auto py-10">
            <Link href={`/content/class/${lesson.grade}`} className="text-red-600 hover:underline">
                ← Назад към {lesson.grade} клас
            </Link>

            <h1 className="text-3xl font-bold mt-4 mb-6">{lesson.title}</h1>
            <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line mb-8">
                {lesson.content}
            </p>

            <div className="flex gap-4">
                <MaterialBtns lesson={lesson} />
            </div>
        </article>
    )
}