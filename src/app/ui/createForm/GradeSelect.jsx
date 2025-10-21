export default function GradeSelect({ lessonData, handleChange }) {
    return (
        <div>
            <label className="block font-medium mb-1">Клас *</label>
            <select
                name="grade"
                value={lessonData.grade}
                onChange={handleChange}
                className="w-full border rounded-lg p-2"
            >
                <option defaultValue>Избери клас</option>
                {[5, 6, 7, 8, 9].map((num) => (
                    <option key={num} value={num}>
                        {num} клас
                    </option>
                ))}
            </select>
        </div>
    )
}