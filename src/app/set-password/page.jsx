"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"
import { Eye, EyeOff, Lock } from "lucide-react"
import { useUser } from "@/app/context/UserContext";

export default function SetPasswordPage() {
  const { userData, setUserData } = useUser();
  const router = useRouter();
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState("")
  const [sessionReady, setSessionReady] = useState(false)
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const hash = window.location.hash
    const params = new URLSearchParams(hash.substring(1))
    const access_token = params.get("access_token")
    const refresh_token = params.get("refresh_token")

    if (access_token && refresh_token) {
      supabase.auth.setSession({ access_token, refresh_token }).then(({ data, error }) => {
        if (error) {
          console.error(error)
          setMessage("⚠️ Грешка при настройка на сесията.")
        } else {
          setSessionReady(true)
          setUserId(data.session?.user?.id)
        }
      })
    } else {
      setMessage("⚠️ Липсва токен в URL адреса.")
    }
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!sessionReady) return setMessage("⚠️ Сесията не е активна.")
    if (password !== confirmPassword) return setMessage("⚠️ Паролите не съвпадат.")

    const { error: updateError } = await supabase.auth.updateUser({ password })
    if (updateError) return setMessage("⚠️ " + updateError.message);
    else {
      setMessage("Паролата е сменена успешно!");
      
      const { data: { user } } = await supabase.auth.getUser();
      setUserData({ email: user.email, id: user.id, role: "teacher", lessons: [] });
    }

    const { error: insertError } = await supabase.from("profiles").insert({
      id: userId,
      email: userData?.email || "",
      role: "teacher",
      lessons: []
    });

    if (insertError) {
      setMessage("⚠️ Грешка при запис в профила: " + insertError.message)
      return
    }

    setMessage("✅ Паролата е успешно зададена и профилът е създаден!")
    setTimeout(() => {
      router.push("/login");
    }, 2000)
  }

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white mb-3">
            <Lock size={28} />
          </div>
          <h1 className="text-2xl font-semibold text-gray-800">Задай своята парола</h1>
          <p className="text-gray-500 text-sm mt-1">
            Въведи нова парола, за да активираш профила си.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-black mb-1">Нова парола</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Въведи парола"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2.5 pr-10 focus:ring-2 focus:ring-blue-500 outline-none text-black"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-800"
                aria-label={showPassword ? "Скрий паролата" : "Покажи паролата"}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Повтори паролата</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Повтори паролата"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2.5 pr-10 focus:ring-2 focus:ring-blue-500 outline-none text-black"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-800"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={!sessionReady}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg transition disabled:bg-gray-400"
          >
            {sessionReady ? "Запази паролата" : "Зареждане..."}
          </button>
        </form>

        {message && (
          <p className="mt-6 text-center text-sm text-gray-700 bg-gray-100 py-2 rounded">
            {message}
          </p>
        )}
      </div>
    </div>
  )
}