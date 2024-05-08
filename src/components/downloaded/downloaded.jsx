import "./downloaded.scss"
import people from "./people.svg"
import bg from "./back.svg"
import down from "./down.png"
function Downloaded() {
    return(
     <div className="container">
           <div className="hero__down">
            
            <div className="hero__sub__down">
            <h1 className="title__down">20M+ downloaded from 32 diffrent countires</h1>
            <p className="subtitle__down">Try demo for 7 days with full features.</p>
            <button className="btn__down">Try free demo <img src={down} alt="" /></button>
            </div>
        </div>
     </div>
    )
}
export default Downloaded