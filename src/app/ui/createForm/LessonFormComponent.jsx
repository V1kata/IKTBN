import GradeSelect from "@/app/ui/createForm/GradeSelect";
import LessonTitleInput from "@/app/ui/createForm/LessonTitleInput";
import LessonContentTextarea from "@/app/ui/createForm/LessonContentTextarea";
import FileUploader from "@/app/ui/createForm/FileUploader";

export default function LessonFormComponent({ lessonData, setLessonData, handleSubmit }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLessonData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl space-y-4"
        >
            <h2 className="text-2xl font-semibold text-center">Създай нов урок</h2>

            <GradeSelect lessonData={lessonData} handleChange={handleChange} />

            <LessonTitleInput lessonData={lessonData} handleChange={handleChange} />

            <LessonContentTextarea lessonData={lessonData} handleChange={handleChange} />

            <FileUploader lessonData={lessonData} setLessonData={setLessonData} />

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Създай урок
            </button>
        </form>
    )
}