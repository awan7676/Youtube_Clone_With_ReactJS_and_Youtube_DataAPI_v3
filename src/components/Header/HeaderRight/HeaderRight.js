import './HeaderRight.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import Avatar from '@mui/material/Avatar';
const HeaderRight = () => {
    const [searchClicked, setSearchClicked] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 766);
    const updateMedia = () => {
        setIsDesktop(window.innerWidth > 766);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    }, []);
    const [inputSearch, setInputSearch] = useState('');
    const { isLightTheme } = useContext(ThemeContext);
    return (
        <div className={`header__right ${isLightTheme && 'darkTheme'}`}>
            <div className={`header__input ${isLightTheme && 'darkTheme'}`} >
                <input className={`${isLightTheme && 'darkTheme'}`} type="text" placeholder='Search' value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
                <Link to={`/search/${inputSearch}`} className={`header__inputButton ${isLightTheme && 'darkTheme'}`}><SearchIcon className='header__SearchImg' /></Link>
            </div>
            {
                searchClicked && <div className={`headerInput__Responsive ${isLightTheme && 'darkTheme'}`} >
                    <div className='responsive__searchBar'>
                        <input className={`${isLightTheme && 'darkTheme'}`} type="text" placeholder='Search' value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
                        <CloseIcon className='header__closeIcon' onClick={() => setSearchClicked(!searchClicked)} />
                    </div>
                    <Link to={`/search/${inputSearch}`} className={`header__inputButton ${isLightTheme && 'darkTheme'}`}><SearchIcon className='header__SearchImg' /></Link>
                </div>
            }
            <div className='header__icons'>
                {!searchClicked &&
                    <SearchIcon className={`header__icon ${isLightTheme && 'darkTheme'} search__icon`} onClick={() => setSearchClicked(!searchClicked)} />
                }
                {
                    (!searchClicked || isDesktop) && <div className='header__visibleIcons'>
                        <VideoCallOutlinedIcon className={`header__icon ${isLightTheme && 'darkTheme'}`} />
                        <AppsIcon className={`header__icon ${isLightTheme && 'darkTheme'}`} />
                        <NotificationsNoneOutlinedIcon className={`header__icon ${isLightTheme && 'darkTheme'}`} />
                        <Avatar className='header__AvatarIcon' alt="Abdullah Awan" src="/avatar.jpg" />
                    </div>
                }


            </div>
        </div>
    )
}

export default HeaderRight