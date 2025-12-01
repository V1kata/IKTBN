import { User, LogOut } from "lucide-react";

export const navLinks = [
    { href: "/", label: "Начало", access: "all" },
    { href: "/auth/invite", label: "Заяви учител", access: "unloged" },
    { href: "/mylessons", label: "Моите уроци", access: "teacher" },
    { href: "/content/create-lesson", label: "Създай урок", access: "teacher" },
    { href: "/auth/requestTeacher", label: "Заявки за учител", access: "admin" },
    { href: "/auth/login", label: "Вход", access: "unloged" },
    { href: "/auth/logout", label: "Изход", access: "loged", icon: <LogOut size={18} /> },
  ];