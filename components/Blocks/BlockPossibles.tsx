"use client"

import Image from "next/image"

const opportunities = [
    {
        id: 1,
        icon: "/img/images/22.png",
        title: "Спортзалы",
        description: "Тренировки рядом с офисом",
        features: [
            "GOLD FITNESS — скидка до 22%",
            "Fitness House — бонусы на абонементы",
            "SUP-клуб CRISTAL SUP — скидка 15%",
        ],
        image: "/img/gym_photo/IMG_0350.jpeg"
    },
    {
        id: 2,
        icon: "/img/images/30.png",
        title: "Коворкинг",
        description: "Всё для продуктивной работы",
        features: [
            "Переговорные комнаты",
            "Скоростной интернет",
            "Бесплатный кофе и чай",
        ],
        image: "/img/center_photo/IMG_0232.jpeg"
    },
    {
        id: 3,
        icon: "/img/images/23.png",
        title: "Обучение",
        description: "Мастер-классы и тренинги",
        features: [
            "Гончарная мастерская Ceramica Lepka",
            "Бизнес-тренинги и семинары",
            "Языковые курсы",
        ],
        image: "/img/gym_photo/IMG_0314.jpeg"
    },
    {
        id: 4,
        icon: "/img/images/35.png",
        title: "Развлечения",
        description: "Квизы, игры, мероприятия",
        features: [
            "Квизы «8 нота» — скидка 200₽",
            "Библиотека с обменом книг",
            "Киновечера и настолки",
        ],
        image: "/img/center_photo/IMG_0341.jpeg"
    },
    {
        id: 5,
        icon: "/img/images/36.png",
        title: "Кафе и отдых",
        description: "Места для обедов и встреч",
        features: [
            "Бар «Горькая» — скидка 10%",
            "Чайная «Горьков чай»",
            "Летняя терраса",
        ],
        image: "/img/center_photo/IMG_0323.jpeg"
    },
]

export default function BlockPossibles() {
    return (
        <div className="min-h-screen relative flex items-center justify-center">
            <div className="text-center px-6 max-w-6xl w-full relative z-10 py-20">
                <h2>Программа лояльности</h2>
                <h3>Скидки до 25% у партнёров</h3>

                {/* Сетка карточек */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {opportunities.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl border border-gray-100 overflow-hidden flex flex-col"
                        >
                            {/* Изображение карточки */}
                            <div className="relative w-full h-48">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Текст карточки */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-3">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={40}
                                        height={40}
                                        className="flex-shrink-0"
                                    />
                                    <h2>
                                        {item.title}
                                    </h2>
                                </div>

                                <p className="mb-4">
                                    {item.description}
                                </p>

                                <ul className="space-y-2 text-left">
                                    {item.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2"
                                        >
                                            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0 mt-2" />
                                            <p className="text-sm">
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}