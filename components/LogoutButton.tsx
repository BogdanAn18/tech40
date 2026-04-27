"use client"

import { signOut } from "next-auth/react"

export function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/auth/signin" })}
      className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
    >
      Log Out
    </button>
  )
}