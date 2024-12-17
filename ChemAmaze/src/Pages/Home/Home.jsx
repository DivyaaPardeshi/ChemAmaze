import "./Home.css";
import landing from "../pageAssests/landing.png";
import Games from "../Games/Games";
import { Link } from 'react-router-dom';
import CurrentGames from "../CurrentGames/CurrentGames";
import gsap from 'gsap';
import Footer from "../../Footer/Footer";


const Home = () => {
    return (
        <>
            <div className="scroll-container">
                <div className="landing">
                    <div className="left-section">
                        <div className="blueCircle"></div>
                        <div className="img-section"><img src={landing} alt=""></img></div>
                    </div>
                    <div className="right-section">
                        <div className="heading">
                            <h2>THE BEST WAY FOR</h2><h1>YOUR LEARNING!</h1> </div>
                        <div className="para">
                            <h4>A repository of interactive educational games designed for students and school teachers to complement classroom teaching. Play and turn every lesson into a playful journey of discovery and achievement!</h4>
                        </div>
                        <div><Link to="/games">
                            <button className="playing">START PLAYING!</button>
                        </Link>
                        </div></div>

                </div>

                <div className="current-section">
                    <CurrentGames />
                </div>
                    
                <div className="games-section">
                    <Games />
                </div>

                <div className="footer-section">
                    <Footer />
                </div>

            </div>
        </>
    );
}

export default Home;