import './footer.styles.scss'
import background from '../../assets/testimonialsCircles.svg';
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { FaSquareFacebook, FaSquareYoutube } from 'react-icons/fa6';
import { BsTelephone, BsTelegram } from 'react-icons/bs';


export const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__contact" style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: `no-repeat`,
                // backgroundColor: `#cccccc`
            }} >
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
                    <p>Transform your body and unlock your fitness potential</p>
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
                            <a href="#">About me </a>
                        </li>
                        <li>
                            <a href="#">Membership</a>
                        </li>
                        <li>
                            <a href="#">Testimonials</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
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

