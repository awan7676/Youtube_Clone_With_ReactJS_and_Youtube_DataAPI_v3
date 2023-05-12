import Avatar from '@mui/material/Avatar';
import { ApiContext } from '../../contexts/ApiContext';
import './VideoCard.css';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { formatter } from '../../utils/formatter';
import { DateFormatter } from '../../utils/DateFormatter';


const VideoCard = ({ videoId, channelId, image, title, channel, views, timestamp }) => {
    const { API_KEY } = useContext(ApiContext);
    const { isLightTheme } = useContext(ThemeContext);
    const [isHover, setIsHover] = useState(false);
    const [videoChannel, setVideoChannel] = useState([]);
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`, { timeout: 5000 })
            .then(response => {
                setVideoChannel(response.data.items);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <Link to={`/video/${videoId}`}>
            <div className="videoCard" onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)}>
                <img className='videoCard__thumbnail' src={image} alt="" />
                <div className="videoCard__info">
                    {videoChannel.map((channel) => <Avatar className='videoCard__avatar' alt={channel} src={channel.snippet.thumbnails.default.url} />)}
                    <div className='videoCard__text'>
                        <div className='videoCard__title'>
                            <h4>{title}</h4>
                            <MoreVertIcon className={`videoCard__titleDotsIcon ${isLightTheme && 'darkTheme'} ${!isHover && 'hidden'}`} />
                        </div>
                        <p>{channel}</p>
                        <p>{formatter(views)} views<b> . </b>{DateFormatter(timestamp)}</p>
                    </div>

                </div>
            </div></Link>
    )
}

export default VideoCard