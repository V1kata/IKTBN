export default function LessonContentTextarea({ lessonData, handleChange }) {
    return (
        <div>
            <label className="block font-medium mb-1">Съдържание</label>
            <textarea
                name="content"
                value={lessonData.content}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 min-h-[150px]"
                placeholder="Въведи текста на урока тук..."
            ></textarea>
        </div>
    )
}