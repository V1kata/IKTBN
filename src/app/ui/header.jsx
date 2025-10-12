// app/components/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { href: "/", label: "Начало" },
    { href: "/about", label: "За предмета" },
    { href: "/contact", label: "Контакти" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Лого и име */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Лого"
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold text-red-700 tracking-tight">
            България
          </span>
        </Link>

        {/* Навигация (desktop) */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-700 hover:text-red-700 transition font-medium"
            >
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

      {/* Изскачащо меню на мобилна версия */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-inner">
          <ul className="flex flex-col items-center py-4 space-y-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-gray-700 text-lg hover:text-red-700 transition"
                  onClick={() => setMenuOpen(false)}
                >
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
