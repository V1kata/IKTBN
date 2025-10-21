import { User, LogOut } from "lucide-react";

export const navLinks = [
    { href: "/", label: "Начало", access: "all" },
    { href: "/content/classes", label: "Уроци", access: "all" },
    { href: "/contact", label: "Контакти", access: "all" },
    { href: "/requestForTeacher", label: "Заяви учител", access: "unloged" },
    { href: "/myLessons", label: "Моите уроци", access: "teacher" },
    { href: "/createLesson", label: "Създай урок", access: "teacher" },
    { href: "/teacherRequests", label: "Заявки за учител", access: "admin" },
    { href: "/auth/login", label: "Вход", access: "unloged" },
    { href: "/profile", label: "Профил", access: "loged", icon: <User size={18} /> },
    { href: "/auth/logout", label: "Изход", access: "loged", icon: <LogOut size={18} /> },
  ];