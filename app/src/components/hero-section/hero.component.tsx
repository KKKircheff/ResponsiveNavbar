import circles from '../../assets/hero-circles.svg'
import hero from '../../assets/Hero-homepage.png'
import { Button } from '../button/button.component'
import './hero.styles.scss'

export const Hero = () => {

    const getStarted = () => {
        console.log('Get started;')
    }
    return (
        <div className="hero-homepage">
            <div className='hero-homepage__cirlces'>
                <img src={circles} alt="" />
            </div>
            <div className='hero-homepage__hero'>
                <img src={hero} alt="" />
            </div>
            <div className='hero-homepage__card'>
                <h2 className='hero-homepage__card__title'>
                    GET FIT
                </h2>

                <p className='hero-homepage__card__text'>
                    Unleash your potential. Start your fitness journey with me now.
                </p>

                <div className='hero-homepage__card__button'>
                    <Button buttonType='inverted' onClick={getStarted}>Get started</Button>
                </div>

            </div>
        </div>
    )
}
