import './info-card.styles.scss'
type Props = {
    title: string,
    content: string
}

export const InfoCard = ({ title, content }: Props) => {
    return (
        <div className='info-card'>
            <h1 className="info-card__title">{title}</h1>
            <p className="info-card__content">{content}</p>
        </div>
    )
}

