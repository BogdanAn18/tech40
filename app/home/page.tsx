import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { LogoutButton } from "@/components/LogoutButton"

export default async function HomePage() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user || !session.user.email) {
    redirect("/auth/signin")
  }

  // Get user data from database
  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  })

  if (!user) {
    redirect("/auth/signin")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome to your Home Page</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <p className="mt-1 text-sm text-gray-900">{user.name}</p>
          </div>
          {user.secondName && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Second Name</label>
              <p className="mt-1 text-sm text-gray-900">{user.secondName}</p>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <p className="mt-1 text-sm text-gray-900">{user.email}</p>
          </div>
          {user.birthDate && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Birth Date</label>
              <p className="mt-1 text-sm text-gray-900">{user.birthDate.toDateString()}</p>
            </div>
          )}
          {user.currentClass && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Class</label>
              <p className="mt-1 text-sm text-gray-900">{user.currentClass}</p>
            </div>
          )}
          {user.country && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <p className="mt-1 text-sm text-gray-900">{user.country}</p>
            </div>
          )}
          {user.region && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Region</label>
              <p className="mt-1 text-sm text-gray-900">{user.region}</p>
            </div>
          )}
        </div>
        <div className="mt-6">
          <LogoutButton />
        </div>
      </div>
    </div>
  )
}