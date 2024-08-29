import { useState } from "react";
import "./GameCards.css";
import { useNavigate } from "react-router-dom";

const GameCards = ({ name, image, dest , grade, chapter, type, link}) => {

    const navigate = useNavigate();
    // const [image,setImage] = useState(null);
    // const [type,setType] = useState(null);


        const cardClick = () => {
            navigate(dest, { state: { grade, chapter, type, link, image } }); 
        };      
    

    return (
        <div onClick={cardClick} className="gamecards">
            <div className="game-image">
                <img src={image} alt="Game Image" />
            </div>
            <div className="game-name">
                <h1 className="name">{name}</h1>
            </div>
            
        </div>
    );
}

export default GameCards;
