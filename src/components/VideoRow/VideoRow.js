import './VideoRow.css';
import { ApiContext } from '../../contexts/ApiContext';
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ThemeContext } from '../../contexts/ThemeContext';
import { formatter } from '../../utils/formatter';
import { DateFormatter } from '../../utils/DateFormatter';
import { Link } from 'react-router-dom';

const VideoRow = ({ videoId, channelId, image, title, timestamp, channel, verified, description }) => {
    const { API_KEY } = useContext(ApiContext);
    const { isLightTheme } = useContext(ThemeContext);
    const [isHover, setIsHover] = useState(false);
    const [currenVideo, setCurrentVideo] = useState([]);
    const [videoChannel, setVideoChannel] = useState([]);
    const getViews = (videoId) => {

        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${API_KEY}`, { timeout: 5000 })
            .then((response) => {
                setCurrentVideo(response.data.items);
            })
            .catch(err => console.log(err));
    }
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`, { timeout: 5000 })
            .then(response => {
                setVideoChannel(response.data.items);
            })
            .catch(error => {
                console.error(error);
            });
        getViews(videoId);
    }, []);

    return (
        <Link to={`/video/${videoId}`}>
            <div className='videoRow' onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)}>
                <img className='videoRow__thumbnail' src={image} alt="" />
                <div className='videoRow__Info'>
                    <div className='videoRow__title'>
                        <h4>{title}</h4>
                        <MoreVertIcon className={`videoRow__titleDotsIcon ${isLightTheme && 'darkTheme'} ${!isHover && 'hidden'}`} />
                    </div>
                    <p>{currenVideo.map((video) => <span>{formatter(video.statistics.viewCount)}</span>)}<b> . </b>{DateFormatter(timestamp)}</p>
                    <div className='videoRow__ChannelInfo'>
                        {videoChannel.map((channel) => <Avatar className='videoRow__avatar' alt={channel} src={channel.snippet.thumbnails.default.url} />)}
                        <p>{channel}</p>
                        {verified && <CheckCircleIcon style={{ color: 'gray', fontSize: '1rem' }} />}
                    </div>
                    <p className='videoRow__videoDescription'>{description}</p>
                </div>
            </div >
        </Link >
    )
}

export default VideoRow