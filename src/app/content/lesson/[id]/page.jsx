// app/class/[grade]/lesson/[id]/page.jsx
"use server";
import { getLessonById } from "@/lib/lessonRequests";
import { LessonSkeleton } from "@/app/ui/lessons/LessonSkeleton";

export default async function LessonPage({ params }) {
  const { id } = await params;
  
  const lesson = await getLessonById(id);
  return (
    <LessonSkeleton lesson={lesson} />
  );
}
