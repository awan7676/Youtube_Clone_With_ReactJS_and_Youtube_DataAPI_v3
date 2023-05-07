import './HeaderLeft.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const HeaderLeft = () => {
    return (
        <div className='header__left'>
            <MenuIcon className='header__menuButton' />
            <Link to='/'>
                <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="icon.png" />
            </Link>
        </div>
    )
}

export default HeaderLeft