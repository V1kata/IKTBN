"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, LogOut, User } from "lucide-react"; // <-- добавяме иконите
import { useUser } from "@/app/context/UserContext";

export default function Header() {
  const { userData } = useUser();
  const role = userData?.role || "unloged";

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "/", label: "Начало", access: "all" },
    { href: "/classes", label: "Уроци", access: "all" },
    { href: "/contact", label: "Контакти", access: "all" },
    { href: "/auth/login", label: "Вход", access: "unloged" },
    { href: "/requestForTeacher", label: "Заяви учител", access: "unloged" },
    { href: "/myLessons", label: "Моите уроци", access: "teacher" },
    { href: "/createLesson", label: "Създай урок", access: "teacher" },
    { href: "/teacherRequests", label: "Заявки за учител", access: "admin" },
    { href: "/profile", label: "Профил", access: "loged", icon: <User size={18} /> },
    { href: "/auth/logout", label: "Изход", access: "loged", icon: <LogOut size={18} /> },
  ];

  const visibleLinks = navLinks.filter(link => {
    if (link.access === "all") return true;
    if (link.access === "unloged" && role === "unloged") return true;
    if (link.access === "loged" && role !== "unloged") return true;
    if (link.access === "teacher" && role === "teacher") return true;
    if (link.access === "admin" && role === "admin") return true;
    return false;
  });

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Лого */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Лого" className="w-10 h-10 object-contain" />
          <span className="text-2xl font-bold text-red-700 tracking-tight">България</span>
        </Link>

        {/* Навигация (desktop) */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {visibleLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-2 text-gray-700 hover:text-red-700 transition font-medium"
            >
              {icon && <span className="text-red-600">{icon}</span>}
              {label}
            </Link>
          ))}
        </nav>

        {/* Мобилно меню (бутон) */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Навигация"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Изскачащо меню (мобилно) */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-inner">
          <ul className="flex flex-col items-center py-4 space-y-3">
            {visibleLinks.map(({ href, label, icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-2 text-gray-700 text-lg hover:text-red-700 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {icon && <span className="text-red-600">{icon}</span>}
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
