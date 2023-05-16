import './SidebarRow.css';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { useContext, useEffect } from 'react';
const SidebarRow = ({ homeActive, Icon, title, selectedCategory, setSelectedCategory }) => {
    useEffect(() => {
        if (homeActive) {
            setSelectedCategory('Home');
        }
    })

    const { isLightTheme } = useContext(ThemeContext);
    return (
        <div className={`sidebarRow ${selectedCategory === title && 'selected'} ${isLightTheme && 'darkTheme'}`} onClick={() => setSelectedCategory(title)} >
            <Icon className='sidebarRow__icon' />
            <h2 className='sidebarRow__title'>{title}</h2>
        </div>
    )
}

export default SidebarRow