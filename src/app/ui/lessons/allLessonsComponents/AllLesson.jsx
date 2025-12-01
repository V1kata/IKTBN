import Link from "next/link"

export function AllLessons({ lesson }) {
    return (
        <Link
            href={`/content/lesson/${lesson.id}`}
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
    )
}