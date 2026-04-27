import styles from './Card.module.css'

interface CardProps {
  title?: string,
  text: string
}

export default function Card({title, text} : CardProps){
    return (
        <div className={styles.cardBorder}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p>
                {text}
            </p>
        </div>
    )
}