import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { useState } from 'react';

const SidebarRows = [
    { Icon: HomeIcon, title: "Home" },
    { Icon: WhatshotIcon, title: "Trending" },
    { Icon: SubscriptionsOutlinedIcon, title: "Subscriptions" },
    { Icon: VideoLibraryOutlinedIcon, title: "Library" },
    { Icon: HistoryOutlinedIcon, title: "History" },
    { Icon: SlideshowOutlinedIcon, title: "Your Videos" },
    { Icon: WatchLaterOutlinedIcon, title: "Watch Later" },
    { Icon: ThumbUpOutlinedIcon, title: "Liked Videos" },
    { Icon: ExpandMoreOutlinedIcon, title: "Show More" },

];

const Sidebar = () => {
    const [selectedCategory, setSelectedCategory] = useState('Home');
    return (
        <div className='sidebar'>
            {SidebarRows.map((row) => <SidebarRow Icon={row.Icon} title={row.title} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />)}
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