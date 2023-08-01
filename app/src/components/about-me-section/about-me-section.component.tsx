import { AboutMeCard } from '../about-me-card/about-me-card.component'
import './about-me-section.styles.scss'
import { useEffect, useState } from 'react';
// import heroRight from '../../assets/HeroRight.png'
// import heroRightMobile from '../../assets/HeroRightmobile.png'
import heroRight from '../../assets/AboutMFinalEditSM.png'
import heroRightMobile from '../../assets/AboutMFinalEditSM.png'
import { AboutMeSlider } from '../about-me-slider/about-me-slider.component';
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

type Props = {
    aboutMeImageUrl: string;
}

export const AboutMeSection = ({ aboutMeImageUrl }: Props) => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);



    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 960);
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
                backgroundImage: `url(${aboutMeImageUrl})`,
                backgroundRepeat: `no-repeat`,
            }}>
            <div>
                <h1> </h1>
            </div>
            {isLargeScreen
                ? <div className="about-me-section__card">
                    <AboutMeCard />
                </div>
                : <div className='about-me-section__slider'>
                    <AboutMeSlider slides={infoCards} />
                </div>
            }
        </div>
    )
}

