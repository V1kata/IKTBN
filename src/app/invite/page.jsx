import { setInviteToEmail } from "@/lib/serverRequests"

export default function InvitePage() {
  // Server Action
  async function inviteTeacher(formData) {
    "use server"
    const email = formData.get("email")
    await setInviteToEmail(email);
  }

  return (
    <form action={inviteTeacher}>
      <input type="email" name="email" placeholder="Email на учител" required />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Покани учител
      </button>
    </form>
  )
}