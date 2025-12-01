"use client";

import { acceptOrDeclineTeacher } from "@/lib/clientRequests";
import { useRouter } from "next/navigation";

export default function RequestItem({ teacher }) {
  const router = useRouter();

  async function handleClick(action) {
    await acceptOrDeclineTeacher(teacher.id, action);
    router.refresh();
  }

  return (
    <div className="flex items-center justify-between w-full max-w-xl bg-white shadow-md rounded-xl p-4 mb-4">
      <p className="text-lg font-semibold text-gray-800">{teacher.email}</p>

      <div className="flex gap-3">
        <button
          onClick={() => handleClick("accepted")}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
        >
          Приеми
        </button>

        <button
          onClick={() => handleClick("declined")}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
        >
          Откажи
        </button>
      </div>
    </div>
  );
}
