import SearchPageVideos from "../SearchPageVideos/SearchPageVideos";
import './SearchPage.css';
import HeaderLeft from "../Header/HeaderLeft/HeaderLeft";
import Sidebar from "../Sidebar/Sidebar";
import HeaderRight from "../Header/HeaderRight/HeaderRight";
import { useContext } from 'react';
import { ThemeContext } from "../../contexts/ThemeContext";
const SearchPage = () => {

    const { isLightTheme } = useContext(ThemeContext);
    return (
        <div className={`searchPage ${isLightTheme && 'darkTheme'}`}>
            <div className='column' id='left'>
                <HeaderLeft />
                <Sidebar />
            </div>
            <div className='column' id='right'>
                <div className='right__header'><HeaderRight /></div>
                <SearchPageVideos />
            </div>

        </div>
    )
}

export default SearchPage