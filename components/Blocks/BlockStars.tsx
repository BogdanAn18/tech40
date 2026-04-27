"use client"

import Image from "next/image"
import StarsBackground from "@/components/StarsBackground"

export default function BlockStars(){
    return (
        <div className="h-screen relative flex items-center justify-center">
            <StarsBackground />

            {/* Мобильная версия */}
            <Image
                src="/center-mobile.png"
                alt="SBER Center logo"
                fill
                className="block md:hidden"
                sizes="100vw"
                style={{ objectFit: 'contain' }}
                priority
            />

            {/* Десктопная версия */}
            <Image
                src="/center.png"
                alt="SBER Center logo"
                fill
                className="hidden md:block"
                sizes="(max-width: 768px) 100vw, 70vw"
                style={{ objectFit: 'contain' }}
                priority
            />
        </div>
    )
}