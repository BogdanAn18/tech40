"use client"

import Image from "next/image"

const contacts = [
    {
        id: 1,
        name: "Иванова Александра",
        username: "@user",
        role: "Специалист по адаптации сотрудников",
        photo: "/img/users/1.jpg" // замени на реальное фото
    },
    {
        id: 2,
        name: "Смирнов Михаил",
        username: "@user",
        role: "Технический специалист",
        photo: "/img/users/2.jpg"
    },
    {
        id: 3,
        name: "Кузнецова Ирина",
        username: "@user",
        role: "Менеджер по бронированию коворкинга",
        photo: "/img/users/3.jpg"
    }
]

export default function BlockContacts() {
    return (
        <div className="min-h-screen relative flex items-center justify-center">
            {/* Контент */}
            <div className="text-center px-6 max-w-4xl w-full relative z-10 py-20">
                <h3>К кому я могу обратиться?</h3>

                {/* Сетка карточек */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col items-center"
                        >
                            {/* Фото */}
                            <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden">
                                <Image
                                    src={contact.photo}
                                    alt={contact.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Имя */}
                            <h2 className="mb-1">{contact.name}</h2>

                            {/* Роль */}
                            <p className="mb-2 text-sm">{contact.role}</p>

                            {/* Контакт (Telegram) */}
                            {contact.username && (
                                <a
                                    href={`https://t.me/${contact.username.replace("@", "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-700 transition-colors font-medium underline text-sm"
                                >
                                    {contact.username}
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}