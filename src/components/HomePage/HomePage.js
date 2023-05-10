import './HomePage.css';
import HeaderLeft from '../Header/HeaderLeft/HeaderLeft';
import HeaderRight from '../Header/HeaderRight/HeaderRight';
import Sidebar from '../Sidebar/Sidebar';
import RecommendedVideos from '../RecommendedVideos/RecommendedVideos'
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=id&part=snippet&part=statistics&chart=mostPopular&maxResults=15&key=${API_KEY}`)
            .then((response) => {
                setVideos(response.data.items);
            })
            .catch(err => console.log(err));
    }, []);
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
