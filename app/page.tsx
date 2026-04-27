import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import RoleSelector from "@/components/RoleSelector"
import Logo from "@/components/Logo"

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    switch (session.user.role) {
      case "EMPLOYEE":
        redirect("/employee")
      case "ENTREPRENEUR":
        redirect("/entrepreneur")
      default:
        redirect("/novice")
    }
  }

  // Для выбора роли
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <Logo />
      <RoleSelector />
    </div>
  ) 
}