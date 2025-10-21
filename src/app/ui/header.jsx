"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useUser } from "@/app/context/UserContext";
import DesktopNavLink from "@/app/ui/desktop/DesktopNavLink";
import MobileNavLink from "@/app/ui/mobile/MobileNavLink";
import { canAccess } from "@/utils/access";
import { navLinks } from "@/utils/navLinks";

export default function Header() {
  const { userData } = useUser();
  const role = userData?.role || "unloged";

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const visibleLinks = navLinks.filter(link => canAccess(role, link.access));

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
            <DesktopNavLink key={href} href={href} label={label} icon={icon} />
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
                <MobileNavLink href={href} label={label} icon={icon} setMenuOpen={setMenuOpen} />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
