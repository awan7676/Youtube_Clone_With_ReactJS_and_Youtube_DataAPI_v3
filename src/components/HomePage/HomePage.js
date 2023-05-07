import './HomePage.css';
import HeaderLeft from '../Header/HeaderLeft/HeaderLeft';
import HeaderRight from '../Header/HeaderRight/HeaderRight';
import Sidebar from '../Sidebar/Sidebar';
import RecommendedVideos from '../RecommendedVideos/RecommendedVideos'
const HomePage = ({ videos }) => {
    return (
        <div className='home'>
            <div className='column' id='left'>
                <HeaderLeft />
                <Sidebar />
            </div>
            <div className='column' id='right'>
                <div className='right__header'><HeaderRight /></div>
                <RecommendedVideos videos={videos} />
            </div>

        </div>
    )
}

export default HomePage