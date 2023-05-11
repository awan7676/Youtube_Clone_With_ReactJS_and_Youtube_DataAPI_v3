import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import PodcastsOutlinedIcon from '@mui/icons-material/PodcastsOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import nextId from 'react-id-generator';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

const SidebarMainRows = [
    { Icon: HomeIcon, title: "Home" },
    { Icon: NewspaperOutlinedIcon, title: "News" },
    { Icon: SchoolOutlinedIcon, title: "Education" }
];

const SidebarOtherRows = [
    { Icon: SportsEsportsOutlinedIcon, title: "Gaming" },
    { Icon: WhatshotIcon, title: "Trending" },
    { Icon: FitnessCenterOutlinedIcon, title: "Sport" },
    { Icon: PodcastsOutlinedIcon, title: "Podcast" },
    { Icon: MusicNoteOutlinedIcon, title: "Music" },
    { Icon: ExpandMoreOutlinedIcon, title: "Show More" },
];

const Sidebar = () => {
    const { isLightTheme, toggleTheme } = useContext(ThemeContext);
    const [selectedCategory, setSelectedCategory] = useState('Home');
    return (
        <div className={`sidebar ${isLightTheme && 'darkTheme'}`}>
            {SidebarMainRows.map((row) => {
                return (
                    <Link to={`search/${row.title}`} className='sidebar__link' key={nextId()} >
                        <SidebarRow Icon={row.Icon} title={row.title} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    </Link>
                )
            })}
            <br />
            <hr />
            <br />
            {SidebarOtherRows.map((row) => {
                return (
                    <Link to={`search/${row.title}`} className='sidebar__link' key={nextId()} >
                        <SidebarRow Icon={row.Icon} title={row.title} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                    </Link>
                )
            })}
            <br />
            <hr />
            <br />
            <div className={`theme__row ${isLightTheme && 'darkTheme'}`} onClick={() => toggleTheme()}>
                {isLightTheme ? <DarkModeIcon /> : <LightModeIcon />}
                <h2 className='theme__title'>{isLightTheme ? 'Dark Mode' : 'Light Mode'}</h2>
            </div>

        </div>
    )
}

export default Sidebar