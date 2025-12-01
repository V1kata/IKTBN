export function ModalFilesShow({ files }) {
    return (
        <>
            {files.length === 0 ? (
                <p className="text-gray-500 text-sm">Няма качени материали.</p>
            ) : (
                <ul className="space-y-2 w-60">
                    {files.map((f, i) => (
                        <li
                            key={i}
                            className="cursor-pointer text-blue-600 hover:text-blue-800 underline truncate"
                            onClick={() => downloadOrOpen(f.url, f.name)}
                        >
                            {f.name}
                        </li>
                    ))}
                </ul>
            )
            }
        </>
    )
}