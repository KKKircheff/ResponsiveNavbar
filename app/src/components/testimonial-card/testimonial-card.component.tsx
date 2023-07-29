import './testimonial-card.styles.scss'
import stars from '../../assets/Stars.svg'
import heroImage from '../../assets/Testimonial-hero-image.png'


export const TestimonialCard = () => {

    const testimonial = [{
        name: 'Michael S.',
        status: 'Premium',
        review: 'A top-notch personal trainer, delivering impressive results. Improved physique!',
        stars: 5,
        photoUrl: ''
    }]

    return (
        <div className="testimonial-card">
            <div className="testimonial-card__head">
                <div className="testimonial-card__head__image">
                    <img src={heroImage} alt="" />
                </div>
                <div className="testimonial-card__head__title">
                    <div className="testimonial-card__head__title-name">
                        <p>{testimonial[0].name}</p>
                    </div>
                    <div className="testimonial-card__head__title-status">
                        <p>{testimonial[0].status}</p>
                    </div>
                </div>
            </div>
            <div className="testimonial-card__text-content">
                <p>{testimonial[0].review}</p>
            </div>
            <div className="testimonial-card__stars">
                <img src={stars} alt="" />
            </div>

        </div>
    )
}

