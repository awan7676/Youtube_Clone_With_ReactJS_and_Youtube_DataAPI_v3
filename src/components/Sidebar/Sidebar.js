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
import nextId from 'react-id-generator';
import { useState } from 'react';
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
    const [selectedCategory, setSelectedCategory] = useState('Home');
    return (
        <div className='sidebar'>
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
            {/* <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
            <br />
            <hr />
            <br />
            <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library" />
            <SidebarRow Icon={HistoryOutlinedIcon} title="History" />
            <SidebarRow Icon={SlideshowOutlinedIcon} title="Your Videos" />
            <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watch Later" />
            <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show More" />
            <br />
            <hr /> */}
        </div>
    )
}

export default Sidebar