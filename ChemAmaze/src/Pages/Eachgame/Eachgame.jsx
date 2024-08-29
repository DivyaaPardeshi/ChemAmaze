import GameCards from "../../components/GameCards";
import "./Eachgame.css";
import { useLocation } from "react-router-dom";
import game1 from "../pageAssests/game1.png";
import minerals from "../pageAssests/minerals.jpg";
import obesity from "../pageAssests/obesity.jpg";
import ozone from "../pageAssests/ozone.png";
import air from "../pageAssests/air.png";
import water from "../pageAssests/water.png";
import Games from "../Games/Games";
import { Link } from 'react-router-dom';

const Eachgame = () => {
    const location = useLocation();
    const { grade, chapter, type, link, image} = location.state || {};
    return (
        <>
            <div className="game-container">              
                <div className="game-left">
                    <div className="extra">
                        <div className="game-topic">
                            <h1>GAME TOPIC</h1>
                        </div>
                        <div className="gapdiv1"></div>
                    </div>
                    <div className="game-description">
                        <div className="gapdiv2"></div>
                        <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, ullam quaerat. Quod dolore animi quam quidem placeat aliquam molestiae laborum. Non deleniti aliquid labore perferendis fugiat ea, facilis eius harum!</h4>
                        <div className="gapdiv2"></div>
                    </div>
                    <div className="box">
                        <div className="bulletgrade">Grade: {grade}</div>
                        <div className="bulletchapter">Chapter: {chapter}</div>
                        <div className="bullettype">Type: {type}</div>
                    </div>
                    <div className="divforbutton"><a href={link} target="_blank" rel="noopener noreferrer"><button className="play-button">PLAY!</button></a></div>
                </div>
                <div className="game-right">    
                    <div className="forimage"><img src={image} alt="Game Image" /></div>
                </div>
            </div>
        </>
    );
}

export default Eachgame;