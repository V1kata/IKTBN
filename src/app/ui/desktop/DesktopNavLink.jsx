import Link from "next/link";

export default function DesktopNavLink({ href, label, icon }) {
    return (
        <Link
            key={href}
            href={href}
            className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition font-medium"
        >
            {icon && <span className="text-red-600">{icon}</span>}
            {label}
        </Link>
    )
}