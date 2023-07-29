import { useState, useEffect } from 'react';
import { Button } from '../button/button.component';
// import circles from '../../assets/MiddleBalls.png';
import circles from '../../assets/MiddleBalls.svg';
import hero from '../../assets/Hero-homepage.png';
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

    return (
        <div className="hero-homepage">
            <div className="hero-homepage__card">
                <h2 className="hero-homepage__card__title">GET FIT</h2>

                <p className="hero-homepage__card__text">Unleash your potential. Start your fitness journey with me now.</p>

                <div className="hero-homepage__card__button">
                    <Button buttonType="inverted" onClick={getStarted}>
                        Get started
                    </Button>
                </div>
            </div>

            <div className="hero-homepage__images">
                <div className="hero-homepage__images__hero">
                    <img src={hero} alt="" />
                </div>
                <div className="hero-homepage__images__circles">
                    {isLargeScreen
                        ? <img src={circles} alt="" />
                        : <img src={balls} alt="" />
                    }

                </div>
            </div>
        </div>
    );
};
