 import "./App.css"
 import rasm1 from "./img/img1.svg"
 import rasm2 from "./img/rasm2.png"
 import rasm3 from "./img/energy.png"
 import rasm4 from "./img/pul.png"
 import feysbuk from "./img/Path.svg"
 import tvitr from "./img/tvitr.svg"
 import icon from "./img/icon.svg"
 import instagram from "./img/instagram.svg"
function App(){
    return(
        <>
        <header className="header">
            <div className="container">
             <div className="header-container">
                <img src={rasm1} alt="Logo" />
                <ul className="header-list">
                    <li className="header-item">
                        <a className="header-link" href="#">HOW WE WORK</a>
                        <a className="header-link" href="#">BLOG</a>
                        <a className="header-link" href="#">ACCOUNT</a>
                        <button className="header-btn">VIEW PLANS</button>
                    </li>
                </ul>
             </div>
            </div>
        </header>
        <section className="hero">
            <div className="container">
                <div className="hero-container">
                <ul className="hero-list">
                    <li className="hero-item">
                        <h2 className="hero-title">Humanizingyour insurance.</h2>
                        <p className="hero-text">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
                        <button className="hero-btn">PLANS</button>
                    </li>
                    <li className="hero-item">
                        <img src={rasm2} alt="" />
                    </li>
                </ul>
                </div>
            </div>
        </section>
        <section className="different">
            <div className="container">
                <div className="different-container">
                    <h2 className="different-titlee">We’re different</h2>
                    <ul className="different-list">
                        <li className="different-item">
                            <img src={rasm3} alt="" />
                            <h4 className="different-title">Snappy Process</h4>
                            <p className="different-text">Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
                        </li>
                        <li className="different-item">
                            <img src={rasm4} alt="" />
                            <h4>Affordable Prices</h4>
                            <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
                        </li>
                        <li className="different-item">
                            {/* <img src={} alt="" /> */}
                            <h4>People First</h4>
                            <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="work">
            <div className="container">
                <div className="work-container">
                    <ul className="work-list">
                        <li className="work-item">
                            <h2 className="work-title">Find out moreabout how we work</h2>
                        </li>
                        <li className="work-item">
                            <button className="work-btn">HOW WE WORK</button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <footer className="company">
            <div className="container">
                <div className="company-container">
                    <ul className="company-list">
                        <li className="company-item">
                            <img src={rasm1} alt="" />
                        </li>
                        <li className="company-item">
                            <a href="https://www.facebook.com/?locale=ru_RU"><img src={feysbuk} alt=""/></a>
                            <a href="https://www.twitter.new/"><img src={tvitr} alt=""/></a>
                            <a href="https://www.pinterest.com/"><img src={icon} alt=""/></a>
                            <a href="https://www.instagram.com/"><img src={instagram} alt=""/></a>
                        </li>
                    </ul>
                    <ul className="companny-list">
                        <li className="companny-item">
                            <p className="company-textt">OUR COMPANY</p>
                            <p className="company-text">HOW WE WORK</p>
                            <p className="company-text">WHY INSURE?</p>
                        </li>
                        <li className="companny-item">
                            <p className="company-textt">HELP ME</p>
                            <p className="company-text">FAQ</p>
                            <p className="company-text">TERMS OF USE</p>
                        </li>
                        <li className="companny-item">
                            <p className="company-textt">CONTACT</p>
                            <p className="company-text">SALES</p>
                            <p className="company-text">SUPPORT</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}
export default App;