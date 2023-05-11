import './SidebarRow.css';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { useContext } from 'react';
const SidebarRow = ({ Icon, title, selectedCategory, setSelectedCategory }) => {

    const { isLightTheme } = useContext(ThemeContext);
    return (
        <div className={`sidebarRow ${selectedCategory === title && 'selected'} ${isLightTheme && 'darkTheme'}`} onClick={() => setSelectedCategory(title)} >
            <Icon className='sidebarRow__icon' />
            <h2 className='sidebarRow__title'>{title}</h2>
        </div>
    )
}

export default SidebarRow