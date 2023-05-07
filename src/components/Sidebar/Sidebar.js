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

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={HomeIcon} title="Home" />
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
            <hr />
        </div>
    )
}

export default Sidebar