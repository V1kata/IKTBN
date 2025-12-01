"use client";
import Link from "next/link";
import { useState } from "react";
import { ModalFilesShow } from "./customLesson/ModalFilesShow";

export function LessonSkeleton({ lesson }) {
    const [open, setOpen] = useState(false);
    const presentation = lesson.files.filter(x => x.endsWith(".pptx"));
    const extra = lesson.files.filter(x => !x.endsWith(".pptx"));

    const files = extra.map(f => {
        const obj = JSON.parse(f);
        const url = obj.publicUrl;

        // Взимаме само името: 1764493924336_1.png
        const name = url.split("/").pop();

        return { name, url };
    });

    const downloadOrOpen = (url, name) => {
        const isImage = /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(name);

        if (isImage) {
            // Отваря се в нов таб
            window.open(url, "_blank", "noopener,noreferrer");
            return;
        }

        // За всички други файлове – изтегляне
        const a = document.createElement("a");
        a.href = url;
        a.download = name;
        a.click();
    };

    return (
        <article className="max-w-4xl mx-auto py-10">
            <Link href={`/content/class/${lesson.grade}`} className="text-red-600 hover:underline">
                ← Назад към {lesson.grade} клас
            </Link>

            <h1 className="text-3xl font-bold mt-4 mb-6">{lesson.title}</h1>
            <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line mb-8">
                {lesson.content}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* {lesson.images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`Снимка ${i + 1}`}
                        className="rounded-xl shadow-md"
                    />
                ))} */}
            </div>

            <div className="flex gap-4">
                {presentation.length > 0 && (
                    <a
                        href={presentation}
                        download
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        📘 Презентация
                    </a>
                )}
                <a
                    onClick={() => setOpen(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                    📎 Допълнителни материали
                </a>

                {open && (
                    <div
                        className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
                        onClick={() => setOpen(false)}
                    >
                        <div
                            className="bg-white p-5 rounded-xl w-80 shadow-lg relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Заглавие + X */}
                            <div className="flex justify-between items-center mb-3">
                                <h2 className="text-lg font-bold">Файлове</h2>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-gray-500 hover:text-black text-xl"
                                >
                                    ✖
                                </button>
                            </div>

                            {/* Списък файлове */}
                            <ModalFilesShow files={files} downloadOrOpen={downloadOrOpen} />
                        </div>
                    </div>
                )}
            </div>
        </article>
    )
}