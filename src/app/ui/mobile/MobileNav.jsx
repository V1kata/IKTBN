"use client";
import MobileNavLink from "@/app/ui/mobile/MobileNavLink";

export default function MobileNav({ visibleLinks, setMenuOpen }) {
  return (
    <nav className="md:hidden bg-white border-t border-gray-200 shadow-inner">
      <ul className="flex flex-col items-center py-4 space-y-3">
        {visibleLinks.map(({ href, label, icon }) => (
          <li key={href}>
            <MobileNavLink href={href} label={label} icon={icon} setMenuOpen={setMenuOpen} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
