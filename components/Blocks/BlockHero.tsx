"use client"

import Image from "next/image"
import StarsBackground from "@/components/StarsBackground"

export default function BlockHero(){
    return (
        <div className="h-screen relative flex items-center justify-center">
            {/* Мобильная версия */}
            <div className="absolute top-5 right-3">
                <Image
                    src="/img/images/36.png"
                    alt="Style image"
                    width={250}
                    height={250}
                    priority>
                </Image>
            </div>
            <div className="absolute bottom-5 -left-6">
                <Image
                    src="/img/images/21.png"
                    alt="Style image"
                    width={300}
                    height={300}
                    priority>
                </Image>
            </div>
            
            <h3 className="text-2xl text-gray-500 text-center">
                Центр исследований и разработки Сбера
            </h3>
        </div>
    )
}