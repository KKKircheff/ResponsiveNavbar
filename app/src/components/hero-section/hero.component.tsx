import { useState, useEffect } from 'react';
import { Button } from '../button/button.component';
// import circles from '../../assets/MiddleBalls.png';
import circles from '../../assets/MiddleBalls.svg';
import hero from '../../assets/Hero-homepage-2.png';
import balls from '../../assets/Balls.png';
import './hero.styles.scss';

export const Hero = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 720);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Call handleResize to set initial value
        handleResize();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getStarted = () => {
        console.log('Get started;');
    };

    const background = isLargeScreen ? circles : balls

    return (
        <div className="hero-homepage"
            style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: `no-repeat`,
            }}>
            <div className="hero-homepage__card">
                <h2 className="hero-homepage__card__title">GET FIT</h2>

                <p className="hero-homepage__card__text">Unleash your potential. Start your fitness journey with me now.</p>

                <div className="hero-homepage__card__button">
                    <Button
                        buttonType="inverted"
                        onClick={getStarted}
                        style={{ fontSize: 17 }}>
                        Get started
                    </Button>
                </div>
            </div>

            <div className="hero-homepage__image">
                <img src={hero} alt="" />
            </div>
        </div>
    );
};
