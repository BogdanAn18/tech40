import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // 1. Ищем пользователя только по email
    const user = await prisma.user.findUnique({
      where: { email }
    })

    // 2. Если пользователь не найден - ошибка
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 400 })
    } else {
        // 3. Проверяем пароль через bcrypt.compare
        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 400 })
        } else {
            // 4. Успешный вход
            return NextResponse.json({ 
                message: "User identified successfully", 
                userId: user.id,
                userName: user.name
            })
        }

        
    }

    

    
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}