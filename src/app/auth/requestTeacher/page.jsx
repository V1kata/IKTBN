import { getAllRequestedTeachers } from "@/lib/clientRequests";
import { RequestPageSkeleton } from "@/app/ui/requestPage/RequestPageSkeleton"

export default async function RequestTeacherAdminPage() {
    const teachers = await getAllRequestedTeachers();
    console.log(teachers)

    return (
        <>
            {teachers?.length > 0 && teachers.map((t, i) => <RequestPageSkeleton key={i} teacher={t} />)}
        </>
    )
}