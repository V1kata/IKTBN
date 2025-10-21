// app/class/[grade]/lesson/[id]/page.jsx
import Link from "next/link";

export default async function LessonPage({ params }) {
  const { grade, id } = params;

  // Примерни данни
  const lesson = {
    title: "Създаване на Българската държава",
    content: `
      Първата българска държава е основана през 681 година след победата на хан Аспарух над Византия.
      Тя обединява прабългари и славяни в една силна държава.
    `,
    images: ["/images/asp.png", "/images/old-map.jpg"],
    presentation: "/materials/lesson1-presentation.pdf",
    extra: "/materials/lesson1-extra.docx",
  };

  return (
    <article className="max-w-4xl mx-auto py-10">
      <Link href={`/content/class/${grade}`} className="text-red-600 hover:underline">
        ← Назад към {grade} клас
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-6">{lesson.title}</h1>
      <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line mb-8">
        {lesson.content}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {lesson.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Снимка ${i + 1}`}
            className="rounded-xl shadow-md"
          />
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={lesson.presentation}
          target="_blank"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          📘 Презентация
        </a>
        <a
          href={lesson.extra}
          target="_blank"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          📎 Допълнителни материали
        </a>
      </div>
    </article>
  );
}
