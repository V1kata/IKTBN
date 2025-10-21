export default function MobileNavLink({ href, label, icon, setMenuOpen }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-2 text-gray-700 text-lg hover:text-red-700 transition"
            onClick={() => setMenuOpen(false)}
        >
            {icon && <span className="text-red-600">{icon}</span>}
            {label}
        </Link>
    )
}