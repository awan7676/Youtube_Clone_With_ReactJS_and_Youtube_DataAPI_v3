import { createContext } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(false);
    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
        document.body.className = `${isLightTheme ? 'light' : 'dark'}`;
    }
    return (
        <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider