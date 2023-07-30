import { Button } from '../button/button.component'
import './about-me-card.styles.scss'
import buttonArrow from '../../assets/buttonArrow.svg'
import { InfoCard } from '../info-card/info-card.component'

const infoCards = [
    {
        title: 'Experience',
        content: 'Over 6 years of hands-on experience in the fitness and bodywork industry.'
    },
    {
        title: 'Style',
        content: 'Unique and innovative techniques that stimulate your neurological side.',
    },
    {
        title: 'Nutrition',
        content: 'Help increase bioavailability in your food and help establish a relationship with your food.',
    },
    {
        title: 'About me',
        content: 'Outgoing and always passionate about the things I love.',
    },
]

export const AboutMeCard = () => {
    return (
        <div className='about-me-card'>
            <h2 className="about-me-card__above-title">I'm</h2>
            <h1 className="about-me-card__title">Sohil Elyas</h1>
            <div className="about-me-card__cards-container">
                {infoCards.map((infoCard, index) => {
                    return <InfoCard key={index} title={infoCard.title} content={infoCard.content} />
                })}
            </div>
            <div className="about-me-card__button">
                <Button >Contact me <span><img src={buttonArrow} alt="" /></span></Button>
            </div>
        </div>
    )
}
