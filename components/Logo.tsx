import Image from "next/image";

export default function Logo(){
    return (
        <div> 
            <div>
            <Image
                src="/Thinker.svg"
                alt="Thinker journal logo"
                width={600}
                height={300}
                priority
                className="invert brightness-125 contrast-150"
            />
            </div>

            <div className="w-full flex justify-center">
                <div className="font-['Caveat'] text-2xl">Think. Educate. Rationalize.</div>
            </div>
        </div>
    )
}