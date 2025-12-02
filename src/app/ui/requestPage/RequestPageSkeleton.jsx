"use client";

import { acceptOrDeclineRequest } from "@/lib/clientRequests";
import { useRouter } from "next/navigation";

export function RequestPageSkeleton({ teacher }) {
  const router = useRouter();

  console.log(teacher)

  async function handleClick(action) {
    if (action === "accepted") {
      // викаме server route, който прави invite чрез supabaseAdmin
      await fetch("/api/invite-teacher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: teacher.email, action })
      });
    }

    // след това актуализираме таблицата client-side
    try {
      await acceptOrDeclineRequest(teacher.email, action);
    } catch (err) {
      console.error(err);
    }
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
