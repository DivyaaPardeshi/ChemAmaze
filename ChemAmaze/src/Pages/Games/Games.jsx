import "./Games.css";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import GameCards from "../../components/GameCards/GameCards";
import game1 from "../pageAssests/game1.png";
import minerals from "../pageAssests/minerals.jpg";
import obesity from "../pageAssests/obesity.jpg";
import ozone from "../pageAssests/ozone.png";
import air from "../pageAssests/air.png";
import water from "../pageAssests/water.png";

export const gradeArr = [
    {
        id: 1,
        name: "Grade 6",
        gamesArr: [
            {
                gid: 1,
                gameName: "Minerals",
                image: minerals,
                destination: "/games/:1",
                grade: "Grade 6",
                board: "Maha",
                medium: "English",
                language: "English",
                type: "Quiz",
                link: "https://quizizz.com/join?gc=97937822",
                rating: 4.2,
            },
            {
                gid: 2,
                gameName: "Obesity",
                image: obesity,
                destination: "/games/:2",
                grade: "Grade 6",
                board: "Maha",
                medium: "Marathi",
                language: "Marathi",
                type: "Puzzle",
                link: "https://quizizz.com/join?gc=79886548",
                rating: 3,
            },
            {
                gid: 3,
                gameName: "Ozone",
                image: ozone,
                destination: "/games/:3",
                grade: "Grade 6",
                board: "Maha",
                medium: "English",
                language: "English",
                type: "Puzzle",
                link: "https://drive.google.com/file/d/1XaWZz9fJJwZdauG4XTjrnynfPWrZVAwr/view?usp=sharing",
                rating: 5,
            },
            {
                gid: 4,
                gameName: "Air",
                image: air,
                destination: "/games/:4",
                grade: "Grade 6",
                board: "Maha",
                medium: "Hindi",
                language: "Hindi",
                type: "Puzzle",
                link: "https://drive.google.com/drive/folders/1GHbgx7m9m8QL7TBqmfpIp0nq7v9VLayc?usp=drive_link",
                rating: 3.3,
            },
            {
                gid: 5,
                gameName: "Water",
                image: water,
                destination: "/games/:5",
                grade: "Grade 6",
                board: "Maha",
                medium: "Hindi",
                language: "Hindi",
                type: "Puzzle",
                link: "https://drive.google.com/file/d/1mCWW5SMH7aH-3ANo9BEA6AuwWZTuQoiG/view?usp=drive_link",
                rating: 5,
            },
        ],
    },
    {
        id: 2,
        name: "Grade 7",
        gamesArr: [
            {
                gid: 1,
                gameName: "Game 7",
                image: game1,
                destination: "/",
                grade: "Grade 7",
                board: "Maha",
                medium: "English",
                language: "English",
                type: "Quiz",
            },
            {
                gid: 2,
                gameName: "Game 7",
                image: game1,
                destination: "/",
                grade: "Grade 7",
                board: "Maha",
                medium: "Marathi",
                language: "Marathi",
                type: "Quiz",
            },
            {
                gid: 3,
                gameName: "Game 7",
                image: game1,
                destination: "/",
                grade: "Grade 7",
                board: "Maha",
                medium: "Marathi",
                language: "Marathi",
                type: "Quiz",
            },
            {
                gid: 4,
                gameName: "Game 7",
                image: game1,
                destination: "/",
                grade: "Grade 7",
                board: "Maha",
                medium: "Marathi",
                language: "Marathi",
                type: "Quiz",
            },
            {
                gid: 5,
                gameName: "Game 7",
                image: game1,
                destination: "/",
                grade: "Grade 7",
                board: "Maha",
                medium: "Marathi",
                language: "Marathi",
                type: "Quiz",
            },
        ],
    },
    {
        id: 3,
        name: "Grade 8",
        gamesArr: [
            {
                gid: 1,
                gameName: "Game 8",
                image: game1,
                destination: "/",
                grade: "Grade 8",
                board: "Maha",
                medium: "Marathi",
                language: "Marathi",
                type: "Quiz",
            },
            {
                gid: 2,
                gameName: "Game 8",
                image: game1,
                destination: "/",
                grade: "Grade 8",
                board: "Maha",
                medium: "Marathi",
                language: "Marathi",
                type: "Quiz",
            },
            {
                gid: 3,
                gameName: "Game 8",
                image: game1,
                destination: "/",
                grade: "Grade 8",
                board: "Maha",
                medium: "Marathi",
                language: "Marathi",
                type: "Quiz",
            },
            {
                gid: 4,
                gameName: "Game 8",
                image: game1,
                destination: "/",
                grade: "Grade 8",
                board: "Maha",
                medium: "Marathi",
                language: "Marathi",
                type: "Quiz",
            },
            {
                gid: 5,
                gameName: "Game 8",
                image: game1,
                destination: "/",
                grade: "Grade 8",
                board: "Maha",
                medium: "Marathi",
                language: "Marathi",
                type: "Quiz",
            },
        ],
    },
];

const Games = () => {
    const [searchValue, setSearchValue] = useState("");
    const [sortOption, setSortOption] = useState("grade");

    const clearSearch = () => {
        setSearchValue("");
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    // Filter games based on the search value and sort option
    const filteredGames = gradeArr.map((grade) => ({
        ...grade,
        gamesArr: grade.gamesArr.filter((game) => {
            const searchTerm = searchValue.toLowerCase();
            const gameNameMatch = game.gameName.toLowerCase().includes(searchTerm);
            const boardMatch = game.board.toLowerCase().includes(searchTerm);
            const mediumMatch = game.medium.toLowerCase().includes(searchTerm);
            const languageMatch = game.language.toLowerCase().includes(searchTerm);

            // Show games if the search term matches game name, board, medium, or language
            return (
                gameNameMatch ||
                (sortOption === "board" && boardMatch) ||
                (sortOption === "medium" && mediumMatch) ||
                (sortOption === "language" && languageMatch)
            );
        }),
    }));

    // Sort games based on the sort option
    const sortedGames = filteredGames.map((grade) => ({
        ...grade,
        gamesArr: [...grade.gamesArr].sort((a, b) => {
            if (sortOption === "grade") {
                return a.grade.localeCompare(b.grade);
            } else if (sortOption === "medium") {
                return a.medium.localeCompare(b.medium);
            } else if (sortOption === "language") {
                return a.language.localeCompare(b.language);
            } else if (sortOption === "board") {
                return a.board.localeCompare(b.board);
            }
            return 0;
        }),
    }));

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
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        {searchValue && (
                            <button className="clear-btn" onClick={clearSearch}>
                                &#x2715;
                            </button>
                        )}
                    </div>
                </div>
                <div className="sort">
                    <select
                        className="sorting"
                        name="sort"
                        id="sort"
                        value={sortOption}
                        onChange={handleSortChange}
                    >
                        <option value="grade">Grade</option>
                        <option value="board">Board</option>
                        <option value="medium">Medium</option>
                        <option value="language">Language</option>
                    </select>
                </div>
            </div>
            <div className="list">
                {sortedGames.map((item) => (
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
                                    grade={game.grade}
                                    medium={game.medium}
                                    language={game.language}
                                    type={game.type}
                                    board={game.board}
                                    link={game.link}
                                    rating={game.rating}
                                />
                                
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Games;