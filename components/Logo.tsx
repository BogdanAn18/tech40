import Image from "next/image";

export default function Logo(){
    return (
        <div className="m-5"> 
            <Image
                src="/Sberbank_Logo_2020.svg"
                alt="SBER logo"
                width={400}
                height={200}
                priority
            />
        </div>
    )
}