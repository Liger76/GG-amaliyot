import Abd from "../components/hero.scss"
import bg from "../assets/bg.png"
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import phonelink from '../assets/phonelink.png'
import cloud from '../assets/cloud.png'
import bag from '../assets/bag.png'
import hero4icon from '../assets/hero4-icon.png'
import hero4icon1 from '../assets/hero4-icon1.png'
import hero4icon2 from '../assets/hero4-icon2.png'

function Hero() {
    return (
        <div className="container">
            <div className="hero__box">
                <img src={bg} alt="" />
            </div>
            <div className="hero-box1">
                <div className="hero-box1-box">
                <p className="hero-box1-title">Always online</p>
                <h1 className="hero-box1-text">Real-time support with cloud</h1>
                <p className="hero-box1-text1">Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</p>
                <a href="@" className="hero-box1-text2">Learn more →</a>
                </div>
                <img className="hero-box1-img" src={img3} alt="" />
            </div>
            <div className="hero-box2">
             <img className="hero-box2-img" src={img4} alt="" />
             <div className="hero-box1-box">
                <p className="hero-box1-title">Free some cost</p>
                <h1 className="hero-box1-text">Save cost for you and family</h1>
                <p className="hero-box1-text1">Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</p>
                <a href="#" className="hero-box1-text2">Learn more →</a>
                </div>
            </div>
            <div className="hero-box1">
            <div className="hero-box1-box">
                <p className="hero-box1-title">Use anytime</p>
                <h1 className="hero-box1-text">Use anytime when you need</h1>
                <p className="hero-box1-text1">Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</p>
                <a href="#" className="hero-box1-text2">Learn more →</a>
                </div>
                <img className="hero-box1-img" src={img5} alt="" />
            </div>
            <div className="hero3">
                <div className="hero3-box">
                    <h1 className="hero3-title">The Product we work with.</h1>
                    <p className="hero3-text">Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.</p>
                </div>
                <div className="hero3-box1">
                    <div className="hero3-box1-box">
                        <img className="hero3-box-img" src={phonelink}alt="" />
                        <h1 className="hero3-box1-title">Cross platform</h1>
                        <p className="hero3-box1-text">Elit esse cillum dolore eu <br /> fugiat nulla pariatur</p>
                        <p className="hero3-box1-arr">→</p>
                    </div>
                    <div className="hero3-box1-box">
                        <img className="hero3-box-img" src={cloud} alt="" />
                        <h1 className="hero3-box1-title">Cloud server</h1>
                        <p className="hero3-box1-text">Elit esse cillum dolore eu <br /> fugiat nulla pariatur</p>
                        <p className="hero3-box1-arr">→</p>
                    </div>
                    <div className="hero3-box1-box">
                        <img className="hero3-box-img" src={bag} alt="" />
                        <h1 className="hero3-box1-title">Pure Javascript</h1>
                        <p className="hero3-box1-text">Elit esse cillum dolore eu <br /> fugiat nulla pariatur</p>
                        <p className="hero3-box1-arr">→</p>
                    </div>
                </div>
               
            </div>
            <div className="hero4">
                <h1 className="hero4-title">Choose your flexible plan.</h1>

                <div className="hero4-box">
                    <div className="hero4-box1">
                        <img className="hero4-img" src={hero4icon} alt="" />
                        <h1 className="hero4-title1">Starter Plan</h1>
                        <p className="hero4-text">Store unlimited data</p>
                        <p className="hero4-text">Export to pdf, xls, csv</p>
                        <p className="hero4-text">Cloud server support</p>
                        <p className="hero4-text1">$9.99/year</p>
                        <p className="hero4-text2">up to 3 user + 1.99 per user</p>
                        <button className="hero4-btn">Get this →</button>
                    </div>
                    <div className="hero4-box1">
                        <img className="hero4-img" src={hero4icon1}alt="" />
                        <h1 className="hero4-title1">Sliver Plan</h1>
                        <p className="hero4-text">Store unlimited data</p>
                        <p className="hero4-text">Export to pdf, xls, csv</p>
                        <p className="hero4-text">Cloud server support</p>
                        <p className="hero4-text1">$19.99/year</p>
                        <p className="hero4-text2">up to 3 user + 1.99 per user</p>
                        <button className="hero4-btn">Get this →</button>
                    </div>
                    <div className="hero4-box1">
                        <img className="hero4-img"  src={hero4icon2} alt="" />
                        <h1 className="hero4-title1">Diamond Plan</h1>
                        <p className="hero4-text">Store unlimited data</p>
                        <p className="hero4-text">Export to pdf, xls, csv</p>
                        <p className="hero4-text">Cloud server support</p>
                        <p className="hero4-text1">$29.99/year</p>
                        <p className="hero4-text2">up to 3 user + 1.99 per user</p>
                        <button className="hero4-btn">Get this →</button>
                    </div>
                </div>
            </div>
            <div className="hero5">
                <h1 className="hero5-title">We have millions of <br /> best wishers</h1>
                <div className="hero5-box">
                


                
                </div>
            </div>
            
        </div>

    );
}

export default Hero