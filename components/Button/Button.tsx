import Link from "next/link"
import styles from './Button.module.css'

interface ButtonProps {
  type: string,
  text: string,
  src: string
}

export default function Button({type, text, src} : ButtonProps){
    const btn_className = 'btn-'+type;

    return (
        <Link href={src} className={`
            p-2.5 text-sm text-center
            md:p-5 md:text-lg 
            ${styles[btn_className]}
        `}>
            {text}
        </Link>
    )
}