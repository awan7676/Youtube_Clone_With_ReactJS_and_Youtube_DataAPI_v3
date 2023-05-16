import './RelatedVideoCard.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useState, useContext, useEffect } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { API_KEY } from '../../contexts/ApiContext';
import axios from 'axios';
import { formatter } from '../../utils/formatter';
import { DateFormatter } from '../../utils/DateFormatter';

const RelatedVideoCard = ({ videoId, image, title, channel, timestamp }) => {
    const [isHover, setIsHover] = useState(false);
    const [currenVideo, setCurrentVideo] = useState([]);
    const { isLightTheme } = useContext(ThemeContext);
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${API_KEY}`, { timeout: 5000 })
            .then((response) => {
                setCurrentVideo(response.data.items);
            })
            .catch(err => console.log(err));
    }, [videoId])
    return (
        <Link to={`/video/${videoId}`}>
            <div className='relatedVideoCard' onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)}>
                <img className='relatedVideoCard__thumbnail' src={image} alt="" />
                <div className='relatedVideoCard__info'>
                    <div className='relatedVideoCard__title'>
                        <h4>{title}</h4>
                        <MoreVertIcon className={`relatedVideoCard__titleDotsIcon ${isLightTheme && 'darkTheme'} ${!isHover && 'hidden'}`} />
                    </div>
                    <p>{channel}</p>
                    <p>{currenVideo.map((video) => <span>{formatter(video.statistics.viewCount)}</span>)}<b> . </b>{DateFormatter(timestamp)}</p>
                </div>
            </div>
        </Link>
    )
}

export default RelatedVideoCard