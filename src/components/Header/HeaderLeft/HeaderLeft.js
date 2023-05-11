import './HeaderLeft.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { Link } from 'react-router-dom';
const HeaderLeft = () => {
    const { isLightTheme } = useContext(ThemeContext);
    return (
        <div className={`header__left ${isLightTheme && 'darkTheme'}`}>
            <MenuIcon className='header__menuButton' />
            <Link to='/'>
                <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="icon.png" />
            </Link>
        </div>
    )
}

export default HeaderLeft