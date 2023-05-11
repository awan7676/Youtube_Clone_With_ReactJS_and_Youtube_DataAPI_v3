import './Button.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Button = ({ text }) => {

    const { isLightTheme } = useContext(ThemeContext);
    return (
        <div className={`btn ${isLightTheme && 'darkTheme'}`}>
            {text}
        </div>
    )
}

export default Button