import './testimonial-card.styles.scss'
import stars from '../../assets/Stars.svg'
import img1 from '../../assets/Testimonial_0.png'
import img2 from '../../assets/Testimonial_1.png'
import img3 from '../../assets/Testimonial_2.png'
import { Testimonials } from '../../application-data/testimonials-data'

type Props = {
    card: Testimonials
}


export const TestimonialCard = ({ card }: Props) => {
    let heroImage = ''
    switch (card.photoUrl) {
        case '3':
            heroImage = img3;
            break;
        case '2':
            heroImage = img2;
            break;
        default:
            heroImage = img1;
    }

    return (
        <div className="testimonial-card">
            <div className="testimonial-card__head">
                <div className="testimonial-card__head__image">
                    <img src={heroImage} alt="" />
                </div>
                <div className="testimonial-card__head__title">
                    <div className="testimonial-card__head__title-name">
                        <p>{card.name}</p>
                    </div>
                    <div className="testimonial-card__head__title-status">
                        <p>{card.status}</p>
                    </div>
                </div>
            </div>
            <div className="testimonial-card__text-content">
                <p>{card.review}</p>
            </div>
            <div className="testimonial-card__stars">
                <img src={stars} alt="" />
            </div>

        </div>
    )
}

