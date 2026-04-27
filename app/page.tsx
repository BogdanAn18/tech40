import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Logo from "@/components/Logo";
import Count from "@/components/Count";
import StarsBackground from "@/components/StarsBackground";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import Vspace from "@/components/Spacing/Vspace";
import Venus from "@/components/Venus";
import HScroll from "@/components/HorizontalScroll";

interface QuoteProps {
  text: string,
  author: string
}

function Quote({text, author}: QuoteProps){
  return (
    <div className="mt-5">
      <div>{text ? text : 'Default quote'}</div>
      <div>{author ? author : 'Unknown physist'}</div>
    </div>
  )
}

{/* <Quote text="E=mc^2" author="me"></Quote> */}

function List() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
 
  return (
    <div>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function Home() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/home")
  }

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-60 p-10">
        <StarsBackground />
        {/*  backdrop-blur-md - блюр */}
        <Logo />
        
        <Vspace amount={50}/>
        <Button type="cosmic" text="Старт" src="auth/signin"/>
      </div>
      <div className="min-h-screen bg-gray-900">
        <Quote text="Самое непостижимое в мире — это то, что он постижим." author="Альберт Эйнштейн" />
        <Card text="Постигать и думать в нашем мире становится всё сложнее: прирост технологий и, как следствие, информации, идёт экспоненциально. Ключ к познанию - наглядность. Именно это и практикуется в научном журнале Thinker." />
        <Card title="Вы вообще кто?" text="Составители журнала - победители и призёры многих известным вам олимпиад, но что более важно - умные и талантливые люди, способные изложить непростой феномен понятным языком. Чтобы добавить к теории наглядности, используется именно этот ресурс."/>
        <Venus />
        <HScroll />
      </div>
    </div>
  );
}