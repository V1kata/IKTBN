"use client";

import "./globals.css";
import { UserProvider } from "@/app/context/UserContext";
import KeepProfile from "./ui/middlewares/keepProfile";
import { Header } from "@/app/ui/Header";
import { Footer } from "@/app/ui/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <UserProvider>
        <body className="min-h-screen flex flex-col bg-gradient-to-br from-[#faf8f6] via-[#f5f0eb] to-[#f0ebe7] text-[#2e2e2e] relative overflow-x-hidden">
          <KeepProfile>
            {/* Декоративен елемент */}
            <div className="absolute inset-0 -z-10 opacity-40 bg-[url('/ornament-bg.svg')] bg-repeat" />

            <Header />

            <main className="flex-1 w-full relative z-10 px-6 py-10 flex justify-center items-center">
              {/* Декоративен фон */}
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-b from-[#f8f5f2]/70 to-[#e9dfd5]/70
              before:absolute before:content-[''] before:inset-0
              before:bg-[url('/ornament-bg.svg')] before:opacity-25 before:bg-repeat before:bg-center
              blur-sm"
              />

              {/* Съдържанието на страниците */}
              <div className="w-full max-w-6xl backdrop-blur-sm bg-white/70 p-8 rounded-2xl shadow-lg">
                {children}
              </div>
            </main>

            <Footer />
          </KeepProfile>
        </body>
      </UserProvider>
    </html >
  );
}