import React, { useState, useEffect } from "react";
import "./Eachgame.css";
import { useLocation } from "react-router-dom";

const Eachgame = () => {
  const location = useLocation();
  const { grade, medium, type, link, image, board, language, rating } = location.state || {};

  // State for managing average rating, user rating, whether the user is rating, and play count
  const [averageRating, setAverageRating] = useState(rating);
  const [userRating, setUserRating] = useState(0);
  const [isRating, setIsRating] = useState(false);
  const [playCount, setPlayCount] = useState(0); // State for play count

  // Simulating fetching the play count when the component mounts
  useEffect(() => {
    const fetchPlayCount = () => {
      const simulatedCount = Math.floor(Math.random() * 100) + 1; // Simulated random count
      setPlayCount(simulatedCount);
    };

    fetchPlayCount();
  }, []);

  // Function to display average rating stars
  const renderAverageStars = () => {
    const fullStars = Math.floor(averageRating);
    const hasHalfStar = averageRating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {Array.from({ length: fullStars }, (_, index) => (
          <span key={index} style={{ fontSize: "2rem", color: "gold" }}>★</span>
        ))}
        {hasHalfStar && <span style={{ fontSize: "2rem", color: "gold" }}>☆</span>}
        {Array.from({ length: emptyStars }, (_, index) => (
          <span key={index} style={{ fontSize: "2rem", color: "gray" }}>☆</span>
        ))}
      </>
    );
  };

  // Function to render rating stars for user input
  const renderUserRatingStars = () => {
    return (
      <>
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            onClick={() => setUserRating(index + 1)}
            style={{
              cursor: "pointer",
              fontSize: "2rem",
              marginRight: "5px",
              color: index < userRating ? "gold" : "gray"
            }}
          >
            {index < userRating ? "★" : "☆"}
          </span>
        ))}
      </>
    );
  };

  // Function to handle when the user clicks on "Rate the Game"
  const handleRateTheGame = () => {
    setIsRating(true);
  };

  // Function to submit the user's rating
  const handleRatingSubmit = () => {
    console.log(`User Rating submitted: ${userRating}`);
    const newAverageRating = (averageRating * 10 + userRating) / 11;
    setAverageRating(newAverageRating);
    setIsRating(false);
  };

  return (
    <>
      <div className="game-container">
        <div className="game-left">
          <div className="extra">
            <div className="game-topic">
              <h1>GAME DETAILS</h1>
            </div>
            <div className="gapdiv1"></div>
          </div>

          {/* Rating Section */}
          <div className="stars">
            <div>{renderAverageStars()}</div>
            <div className="play-count">
              <h4>Times Played: {playCount}</h4>
            </div>
          </div>

          {/* Game Description Section */}
          <div className="game-description">
            <div className="gapdiv2"></div>
            <h4>
              This game is designed to enhance learning through interactive activities. Play, learn, and rate the game to improve its reach and performance.
            </h4>
            <div className="gapdiv2"></div>
          </div>

          {/* Game Details Section */}
          <div className="box">
            <div className="bulletgrade">Grade: {grade}</div>
            <div className="bulletmedium">Medium: {medium}</div>  
            <div className="bullettype">Type: {type}</div>
            <div className="bulletboard">Board: {board}</div>
            <div className="bulletlanguage">Language: {language}</div>
          </div>

          {/* Play Button */}
          <div className="divforbutton">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <button className="play-button">PLAY!</button>
            </a>
          </div>
        </div>

        {/* Game Image Section */}
        <div className="game-right">
          <div className="forImgsection">
            <div className="forimage">
              <img src={image} alt="Game" />
            </div>
          </div>

          {/* Rate the Game Option */}
          <div className="rate-game-section">
            <div className="subleft">
              <button className="rate-button" onClick={handleRateTheGame}>
                Rate the Game
              </button>
            </div>

            {/* Show rating stars when the user clicks "Rate the Game" */}
            {isRating && (
              <div className="user-rating-section">
                <div>{renderUserRatingStars()}</div>
                <button onClick={handleRatingSubmit} className="submit-rating-button">
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Eachgame;
