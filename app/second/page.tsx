//TODO
// - Сделать титульную страницу
// - Сделать первую страницу журнала 
// (Тема 1: Математика в нашей жизни или зачем нам математика)
// (Тема 2: Физика в нашей жизни)
// (Тема 3: Ньютон и его Начала)

import Image from "next/image";

import 'katex/dist/katex.min.css'; // Import KaTeX CSS
import { InlineMath, BlockMath } from "react-katex";

 function MathExample() {
      return (
        <div>
          <p>
            Уравнение Эйнштейна: <InlineMath math="E=mc^2" />
          </p>
          <p>
            Необычное равенство:
            <BlockMath math="\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}" />
          </p>
        </div>
      );
    }

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-24 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-10 text-center sm:items-start sm:text-left">
          <h1 className="max-w-lg text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Дорогу осилит идущий
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <MathExample />
          </p>
          <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium py-2.5 px-5 rounded-lg transition-colors duration-200">
            Элегантная кнопка
          </button>
        </div>
      </main>
    </div>
  );
}
