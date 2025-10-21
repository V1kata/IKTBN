"use client";

import { useState } from "react";
import { Upload, X } from "lucide-react";

export default function LessonForm() {
    const [lessonData, setLessonData] = useState({
        grade: "",
        title: "",
        content: "",
        files: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLessonData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (!e.target.files) return;
        setLessonData((prev) => ({
            ...prev,
            files: [...prev.files, ...Array.from(e.target.files)],
        }));
    };

    const removeFile = (index) => {
        setLessonData((prev) => ({
            ...prev,
            files: prev.files.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!lessonData.title || !lessonData.grade) {
            alert("Моля, попълнете задължителните полета!");
            return;
        }

        // 🔹 Тук по-късно ще добавим:
        // 1. Качване на файловете в Supabase Storage
        // 2. Запис на данните в таблицата LESSONS
        console.log("Lesson data:", lessonData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-2xl space-y-4"
        >
            <h2 className="text-2xl font-semibold text-center">Създай нов урок</h2>

            {/* Клас */}
            <div>
                <label className="block font-medium mb-1">Клас *</label>
                <select
                    name="grade"
                    value={lessonData.grade}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2"
                >
                    <option disabled>Избери клас</option>
                    {[5, 6, 7, 8, 9].map((num) => (
                        <option key={num} value={num}>
                            {num} клас
                        </option>
                    ))}
                </select>
            </div>

            {/* Име на урок */}
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

            <div>
                <label className="flex items-center justify-center w-50 h-12 px-5 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition space-x-2">
                    <Upload size={20} className="hidden md:block"/>
                    <span>Качи файлове</span>
                    <input
                        type="file"
                        multiple
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </label>

                {lessonData.files.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {lessonData.files.map((file, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-1 bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm break-all"
                            >
                                <span>{file.name}</span>
                                <button
                                    type="button"
                                    onClick={() => removeFile(idx)}
                                    className="text-red-500 hover:text-red-700 font-bold"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                Създай урок
            </button>
        </form>
    );
}
