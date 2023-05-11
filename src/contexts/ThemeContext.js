import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    }
    return (
        <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider