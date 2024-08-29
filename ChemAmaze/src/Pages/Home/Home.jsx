import "./Home.css";
import landing from "../pageAssests/landing.png";
import Games from "../Games/Games";
import { Link } from 'react-router-dom';

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
                    <h4>Dive into a world of interactive educational games designed for students. 
                    Play and turn every lesson into a playful journey of discovery and achievement!</h4>
                    </div>
                    <div><Link to="/games">
                        <button className="playing">START PLAYING!</button>
                        </Link>
                        </div></div> 
                        
            </div>
            
        </div>
        </>
    );
}
 
export default Home;