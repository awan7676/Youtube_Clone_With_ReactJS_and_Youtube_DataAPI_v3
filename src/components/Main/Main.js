import { useContext } from "react";
import './Main.css';
import { ThemeContext } from "../../contexts/ThemeContext";
import HeaderLeft from "../Header/HeaderLeft/HeaderLeft";
import HeaderRight from "../Header/HeaderRight/HeaderRight";
import Sidebar from "../Sidebar/Sidebar";

const Main = ({ homeActive, children }) => {
    const { isLightTheme } = useContext(ThemeContext);
    return (
        <div className={`main ${isLightTheme && 'darkTheme'}`}>
            <div className='column' id='left'>
                <HeaderLeft />
                <Sidebar homeActive={homeActive} />
            </div>
            <div className='column' id='right'>
                <div className='right__header'><HeaderRight /></div>
                {children}
            </div>

        </div>
    )
}

export default Main