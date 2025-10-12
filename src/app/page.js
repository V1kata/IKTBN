// app/page.jsx
import Link from "next/link";

export default function Home() {
  const classes = [
    { grade: 6, color: "bg-blue-600" },
    { grade: 7, color: "bg-green-600" },
    { grade: 8, color: "bg-yellow-600" },
    { grade: 9, color: "bg-red-600" },
  ];

  return (
    <section className="text-center py-12">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        История, култура и традиции
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Избери клас, за да разгледаш уроците и материалите.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {classes.map(({ grade, color }) => (
          <Link
            key={grade}
            href={`/class/${grade}`}
            className={`${color} text-white py-8 rounded-2xl text-2xl font-semibold hover:opacity-90 transition`}
          >
            {grade} клас
          </Link>
        ))}
      </div>
    </section>
  );
}
