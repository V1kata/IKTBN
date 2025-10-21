export default function LessonTitleInput({ lessonData, handleChange }) {
    return (
        <div>
            <label className="block font-medium mb-1">Име на урока *</label>
            <input
                type="text"
                name="title"
                value={lessonData.title}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
                placeholder="Пример: Съгласни звуци"
            />
        </div>
    )
}