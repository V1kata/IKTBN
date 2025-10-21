import { Upload, X } from "lucide-react";

export default function FileUploader({ lessonData, setLessonData }) {
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
    return (
        <div>
            <label className="flex items-center justify-center w-50 h-12 px-5 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition space-x-2">
                <Upload size={20} className="hidden md:block" />
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
    )
}