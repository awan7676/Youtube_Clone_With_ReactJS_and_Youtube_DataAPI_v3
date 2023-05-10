import { createContext } from "react";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
    const API_KEY = 'AIzaSyCqmcxxNLND-_tIH4Bku95pNl1IrIrKD04';
    return (
        <ApiContext.Provider value={{ API_KEY }}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContextProvider