import React, {useContext, useState} from "react";
import { Themes } from "../Consts/Theme";


const ThemeContext = React.createContext(null);


// eslint-disable-next-line react/prop-types
const ThemeProvider = ({children}) => {
    const [themeMode, setThemeMode] = useState("dark");

    const changeTheme = (mode) => {
        setThemeMode(mode)
    }

    return(
        <ThemeContext.Provider value={{theme:Themes[themeMode], changeTheme, themeMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error ("Please use theme provider");
    }
    return context;
};

export {ThemeProvider, useTheme};