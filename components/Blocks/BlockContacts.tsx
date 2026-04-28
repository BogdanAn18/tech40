"use client"

import Image from "next/image"

const contacts = [
    {
        id: 1,
        name: "Иванова Светлана",
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
        <div className="min-h-screen relative flex items-center justify-center novice-section-bg" id="contacts">
            {/* Контент */}
            <div className="text-center px-6 max-w-4xl w-full relative z-10 py-20">
                <h2>К кому я могу обратиться?</h2>

                {/* Сетка карточек */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
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
                            <h3 className="mb-1">{contact.name}</h3>

                            {/* Роль */}
                            <p className="mb-2 text-sm text-slate-600">{contact.role}</p>

                            {/* Контакт (Telegram) */}
                            {contact.username && (
                                <a
                                    href={`https://t.me/${contact.username.replace("@", "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-600 hover:text-slate-800 transition-colors font-medium underline text-sm"
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