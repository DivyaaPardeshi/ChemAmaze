import { useNavigate } from "react-router-dom";
import "./GameCards.css";

const GameCards = ({ 
    name, 
    image, 
    dest, 
    grade, 
    medium, 
    language, 
    type, 
    link, 
    board, 
    rating 
}) => {
    const navigate = useNavigate();

    const cardClick = () => {
        navigate(dest, { 
            state: { grade, medium, language, type, link, image, board, rating } 
        });
    };

    return (
        <div onClick={cardClick} className="gamecards">
            <div className="game-image">
                <img src={image} alt={name} />
            </div>
            <div className="game-name">
                <h1 className="name">{name}</h1>
            </div>
        </div>
    );
};

export default GameCards;
