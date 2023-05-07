import './HeaderRight.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
const HeaderRight = () => {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header__right">
            <div className='header__input'>
                <input type="text" placeholder='Search' value={inputSearch} onChange={e => setInputSearch(e.target.value)} />
                <Link to={`/search/${inputSearch}`} className='header__inputButton'><SearchIcon className='header__SearchImg' /></Link>
            </div>
            <div className='header__icons'>
                <VideoCallOutlinedIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationsNoneOutlinedIcon className='header__icon' />
                <Avatar className='header__AvatarIcon' alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </div>
        </div>
    )
}

export default HeaderRight