import './HeaderRight.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import Avatar from '@mui/material/Avatar';
const HeaderRight = () => {
    const [inputSearch, setInputSearch] = useState('');
    const { isLightTheme } = useContext(ThemeContext);
    return (
        <div className={`header__right ${isLightTheme && 'darkTheme'}`}>
            <div className='header__input' >
                <input className={`${isLightTheme && 'darkTheme'}`} type="text" placeholder='Search' value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
                <Link to={`/search/${inputSearch}`} className={`header__inputButton ${isLightTheme && 'darkTheme'}`}><SearchIcon className='header__SearchImg' /></Link>
            </div>
            <div className='header__icons'>
                <VideoCallOutlinedIcon className={`header__icon ${isLightTheme && 'darkTheme'}`} />
                <AppsIcon className={`header__icon ${isLightTheme && 'darkTheme'}`} />
                <NotificationsNoneOutlinedIcon className={`header__icon ${isLightTheme && 'darkTheme'}`} />
                <Avatar className='header__AvatarIcon' alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </div>
        </div>
    )
}

export default HeaderRight