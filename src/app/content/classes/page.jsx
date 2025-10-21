// app/class/[grade]/page.jsx
import Link from "next/link";

export default async function ClassPage({ params }) {
  const { grade } = params;

  // Временно статични данни (по-късно ще идват от Supabase)
  const lessons = [
    { id: 1, title: "Създаване на Българската държава", image: "/images/lesson1.jpg" },
    { id: 2, title: "Културата през Второто българско царство", image: "/images/lesson2.jpg" },
    { id: 3, title: "България под османска власт", image: "/images/lesson3.jpg" },
  ];

  return (
    <section className="max-w-5xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        {grade} клас — Уроци
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {lessons.map((lesson) => (
          <Link
            key={lesson.id}
            href={`/class/${grade}/lesson/${lesson.id}`}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={lesson.image}
              alt={lesson.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {lesson.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
