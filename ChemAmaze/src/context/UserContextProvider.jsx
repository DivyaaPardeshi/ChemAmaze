import UserContext from "./UserContext";
import { useState } from "react";


const  UserContextProvider = ({children}) => {
    const [game, setGame] = useState(null);
    const [type, setType] = useState(null);
    const [chapter, setChapter] = useState(null);
    return(
        <>
            <UserContext.Provider value={{game, setGame, type, setType, chapter, setChapter}} >
                {children}
            </UserContext.Provider>
        </>
    );
}

export default UserContextProvider;