import { createContext, useState } from "react"

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(false);

    const light = {
        text: '#555', bg: '#eee'
    }
    const dark = {
        text: '#ddd', bg: 'rgb(19, 18, 18)'
    }

    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme);
    }

    return (
        <ThemeContext.Provider value={{ isLightTheme, light, dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
