import { AboutMeCard } from '../about-me-card/about-me-card.component'
import './about-me-section.styles.scss'
import { useEffect, useState } from 'react';
import heroRight from '../../assets/HeroRight.png'
import heroRightMobile from '../../assets/HeroRightmobile.png'

export const AboutMeSection = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const backgroundImage = window.innerWidth >= 920 ? heroRight : heroRightMobile;


    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 920);
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
    return (
        <div className='about-me-section'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: `no-repeat`,
            }}>
            {isLargeScreen
                ? <div className="about-me-section__card">
                    <AboutMeCard />
                </div>
                : <div className='about-me-section__slider'>
                    <h1>This is mobile slider section</h1>
                </div>
            }

        </div>
    )
}

