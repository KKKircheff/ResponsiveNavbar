import { useState, useEffect } from 'react';
import './footer.styles.scss'
import background from '../../assets/testimonialsCircles.svg';
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { FaSquareFacebook, FaSquareYoutube } from 'react-icons/fa6';
import { BsTelephone, BsTelegram } from 'react-icons/bs';
import { TestimonialCard } from '../testimonial-card/testimonial-card.component';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



export const Footer = () => {
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
    return (
        <div className='footer'>

            <div className="footer__contact" style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: `no-repeat`,
                // backgroundColor: `#cccccc`
            }} >
                <h1 className="footer__contact__testimonials-title">
                    Testimonials
                </h1>
                <div className="footer__contact__testimonials">
                    <TestimonialCard />
                    <TestimonialCard />
                    <TestimonialCard />
                </div>
                <div className="footer__contact-text">
                    <h1>Contact</h1>
                    <p>Get in touch with me</p>
                </div>
                <div className="footer__contact-separator"></div>
                <div className="footer__contact-details">
                    <div className='footer__contact-details__span'><AiOutlineInstagram /> <span>Instagram link</span></div>
                    <div className='footer__contact-details__span'><BsTelephone /> <span>+32 123 456 789</span></div>
                    <div className='footer__contact-details__span'><AiOutlineMail /> <span>some.test.email@gmail.comk</span></div>
                </div>
            </div>
            <div className="footer__block">

                <div className="footer__block__quote">
                    <h1>Get Fit</h1>
                    {isLargeScreen
                        ? <p>Transform your body and unlock your fitness potential with personalized training programs, expert guidance, and unwavering support from Sohil, your trusted personal trainer.</p>
                        : <p>Transform your body and unlock your fitness potential</p>
                    }

                    <div className="footer__block__quote__icons">
                        <a href="#"><AiOutlineInstagram /></a>
                        <a href="#"><FaSquareFacebook /></a>
                        <a href="#"><BsTelegram /></a>
                        <a href="#"><FaSquareYoutube /></a>
                    </div>
                </div>
                <div className="footer__block__links">
                    <h1>XSOFIT</h1>
                    <ul>
                        <li>
                            <a href="">
                                <Link
                                    activeClass="active"
                                    to={'about-me-section'}
                                    spy={false}
                                    smooth={true}
                                    // offset={item.offset}
                                    duration={1500}
                                // onClick={() => closeMenu(true)}
                                >
                                    About me
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Link
                                    activeClass="active"
                                    to={'memberships-container'}
                                    spy={false}
                                    smooth={true}
                                    // offset={item.offset}
                                    duration={1500}
                                // onClick={() => closeMenu(true)}
                                >
                                    Membership
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Link
                                    activeClass="active"
                                    to={'footer__contact__testimonials-title'}
                                    spy={false}
                                    smooth={true}
                                    // offset={item.offset}
                                    duration={1500}
                                // onClick={() => closeMenu(true)}
                                >
                                    Testimonials
                                </Link>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <Link
                                    activeClass="active"
                                    to={'footer__contact-text'}
                                    spy={false}
                                    smooth={true}
                                    // offset={item.offset}
                                    duration={1500}
                                // onClick={() => closeMenu(true)}
                                >
                                    Contact
                                </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="footer__copyright">
                Copyright © 2023 Korab B
            </p>
        </div>
    )
}

