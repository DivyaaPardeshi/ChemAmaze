import "./CurrentGames.css";
import { useState, useEffect } from "react";
import { gradeArr } from "../Games/Games"; // Import the gradeArr from Games file

const CurrentGames = () => {
    // Flatten the games array from gradeArr to get all the games
    const allGames = gradeArr.flatMap((grade) => grade.gamesArr);
    
    // State to hold the trending games
    const [trendingGames, setTrendingGames] = useState(allGames.slice(0, 3));

    // Function to shuffle the games randomly
    const shuffleGames = () => {
        // Shuffle the allGames array and pick the first 3 games
        const shuffledGames = allGames.sort(() => 0.5 - Math.random()).slice(0, 3);
        setTrendingGames(shuffledGames);
    };

    // useEffect to run shuffleGames periodically every 5 seconds (you can change the time)
    useEffect(() => {
        const interval = setInterval(() => {
            shuffleGames();
        }, 5000); // Update every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <>
            <div className="Current-container">
                <div className="page-heading">CURRENTLY TRENDING</div>
                <div className="forGames">
                    <div className="left-half">
                        <div className="bigBox">
                            <img src={trendingGames[0].image} alt={trendingGames[0].gameName} className="game-image" />
                        </div>
                    </div>
                    <div className="right-half">
                        <div className="rightUp">
                            <div className="rightLeft">
                                <img src={trendingGames[1].image} alt={trendingGames[1].gameName} className="game-image" />
                            </div>
                            <div className="rightRight">
                                <img src={trendingGames[2].image} alt={trendingGames[2].gameName} className="game-image" />
                            </div>
                        </div>
                        <div className="rightDown">
                            <div className="bottomRock">
                                <img src={trendingGames[0].image} alt={trendingGames[0].gameName} className="game-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CurrentGames;
