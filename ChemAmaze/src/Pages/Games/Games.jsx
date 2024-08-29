import "./Games.css";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import GameCards from "../../components/GameCards"; // Correct capitalization
import game1 from "../pageAssests/game1.png";
import minerals from "../pageAssests/minerals.jpg";
import obesity from "../pageAssests/obesity.jpg";
import ozone from "../pageAssests/ozone.png";
import air from "../pageAssests/air.png";
import water from "../pageAssests/water.png";



const Games = () => {
    const [searchValue, setSearchValue] = useState("");

    const clearSearch = () => {
        setSearchValue("");
    };

    const gradeArr = [
        {
            id: 1,
            name: "Grade 6",
            gamesArr: [
                {
                    gid: 1,
                    gameName: "Minerals",
                    image: minerals,
                    destination:"/games/:1",
                    grade: "Grade 6",
                    chapter: "Minerals and Vitamins",
                    type: "Quiz",
                    link: "https://quizizz.com/join?gc=97937822"
                    
                },
                {
                    gid: 2,
                    gameName: "Obesity",
                    image: obesity,
                    destination:"/games/:2",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Puzzle",
                    link: "https://quizizz.com/join?gc=79886548"

                },
                {
                    gid: 3,
                    gameName: "Ozone",
                    image: ozone,
                    destination:"/games/:3",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Puzzle",
                    link: "https://drive.google.com/file/d/1XaWZz9fJJwZdauG4XTjrnynfPWrZVAwr/view?usp=sharing"

                },
                {
                    gid: 4,
                    gameName: "Air",
                    image: air,
                    destination:"/games/:4",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Puzzle",
                    link:"https://drive.google.com/drive/folders/1GHbgx7m9m8QL7TBqmfpIp0nq7v9VLayc?usp=drive_link"


                },
                {
                    gid: 5,
                    gameName: "Water",
                    image: water,
                    destination:"/games/:5",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Puzzle",
                    link:"https://drive.google.com/file/d/1mCWW5SMH7aH-3ANo9BEA6AuwWZTuQoiG/view?usp=drive_link"

                },
            ]
        },
        {
            id: 2,
            name: "Grade 7",
            gamesArr: [
                {
                    gid: 1,
                    gameName: "Game 7",
                    image: game1,
                    destination:"/",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Quiz"

                },
                {
                    gid: 2,
                    gameName: "Game 7",
                    image: game1,
                    destination:"/",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Quiz"
                },
                {
                    gid: 3,
                    gameName: "Game 7",
                    image: game1,
                    destination:"/",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Quiz"
                },
                {
                    gid: 4,
                    gameName: "Game 7",
                    image: game1,
                    destination:"/",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Quiz"
                },
                {
                    gid: 5,
                    gameName: "Game 7",
                    image: game1,
                    destination:"/",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Quiz"
                },
            ]
        },
        {
            id: 3,
            name: "Grade 8",
            gamesArr: [
                {
                    gid: 1,
                    gameName: "Game 8",
                    image: game1,
                    destination:"/",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Quiz"
                },
                {
                    gid: 2,
                    gameName: "Game 8",
                    image: game1,
                    destination:"/",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Quiz"
                },
                {
                    gid: 3,
                    gameName: "Game 8",
                    image: game1,
                    destination:"/",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Quiz"
                },
                {
                    gid: 4,
                    gameName: "Game 8",
                    image: game1,
                    destination:"/",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Quiz"
                },
                {
                    gid: 5,
                    gameName: "Game 8",
                    image: game1,
                    destination:"/",
                    grade: "Grade 6",
                    chapter: "Chapter 1",
                    type: "Quiz"
                },
            ]
        },
    ]

    return (
        <div className="gamesContainer">
            <div className="inner-nav">
                <div className="search-div">
                    <div className="searchBox">
                        <IoSearch size={20} color="white" />
                        <input
                            type="search"
                            id="search"
                            name="search"
                            required
                            placeholder="Search"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)} // Update state on change
                        />
                        {searchValue && (
                            <button className="clear-btn" onClick={clearSearch}>
                                &#x2715;
                            </button>
                        )}
                    </div>
                </div>
                <div className="sort">
                    <select className="sorting" name="sort" id="sort">
                        <option value="grade">Grade</option>
                        <option value="board">Board</option>
                        <option value="chapters">Chapters</option>
                    </select>
                </div>
            </div>
            <div className="list">
                {/* <div className="listScroll"> */}
                    {gradeArr.map((item) => (
                        <div key={item.id} className="col1">
                            <div className="gradeDiv">
                                <h1>{item.name}</h1>
                            </div>
                            <div className="gamesDiv">
                                <div className="gamesScroll">
                                    {item.gamesArr.map((game) => (
                                        <GameCards
                                            key={game.gid}
                                            name={game.gameName}
                                            image={game.image}
                                            dest={game.destination}
                                            grade = {game.grade}
                                            type = {game.type}
                                            chapter = {game.chapter}
                                            link = {game.link}

                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                {/* </div> */}
            </div>
        </div>
    );
};

export default Games;
    