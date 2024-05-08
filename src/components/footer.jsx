import style from '../components/footer.scss'
import ago from '../assets/Logo.png'
import facebook from '../assets/facebook.png'
import twiter from '../assets/twitter.png'
import link from '../assets/linkedin.png'

function Footer() {
    return (
        <div className="container">
            <div className="footer">
                <img className='footer-img' src={ago} alt="" />
                <div className="footer-box">
                    <p className='footer-text'>Links</p>
                    <ul className="footer-item">
                        <li className="footer-list"> <a href="#">Home</a></li>
                        <li className="footer-list"> <a href="#">About us</a></li>
                        <li className="footer-list"> <a href="#">Careers</a></li>
                        <li className="footer-list"> <a href="#">Pricing</a></li>
                        <li className="footer-list"> <a href="#">Features</a></li>
                        <li className="footer-list"> <a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="footer-box1">
                    <p className="footer-text1">Legal</p>
                    <ul className="footer-item">
                        <li className="footer__item__text"><a href="#">Terms of use</a></li>
                        <li className="footer__item__text"><a href="#">Terms of conditions</a></li>
                        <li className="footer__item__text"><a href="#">Privecy policy</a> </li>
                        <li className="footer__item__text"><a href="#">Cookie policy</a></li>
                    </ul>
                </div>
                <div className="footer-box2">
                    <h1 className='footer-title'>Newsletter</h1>
                    <p className="footer-text2">Over 25000 people have subscribed</p>
                    <div className="footer-box3">
                        <input type="text" className="footer-inp" placeholder='Enter your email' />
                        <button className='footer-btn'>Subscribe</button>
                    </div>
                    <p className='footer-text2'>We don’t sell your email and spam</p>
                </div>
            </div>
            <div className="footer-box4">
                <hr />
            </div>
            <div className="footer-box5">
                <p>Privacy & Terms</p>
                <a href='#' className='footer__text'>Contact Us</a>
                <p>Copyright @ 2022 xpence</p>
                <div className="">

                <a href="#"><img className='footer__subimg' src={facebook} alt="" /></a>
                <a href="#"><img className='footer__subimg' src={twiter} alt="" /></a>
                <a href="#"><img className='footer__subimg' src={link}  alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer