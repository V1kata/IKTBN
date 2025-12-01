"use server";

import { AllLessonsSkeleton } from "@/app/ui/lessons/AllLessonsSkeleton";
import { getLessonsByGrade } from "@/lib/lessonRequests";

export default async function ClassPage({ params }) {
  const { grade } = await params;
  const lessons = await getLessonsByGrade(grade);

  return (
    <AllLessonsSkeleton lessons={lessons} grade={grade} />
  );
}
