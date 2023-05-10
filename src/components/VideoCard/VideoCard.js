import Avatar from '@mui/material/Avatar';
import { ApiContext } from '../../contexts/ApiContext';
import './VideoCard.css';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
=======

>>>>>>> ec0c8598ee143457769e4fd9eab41bc3de94183e
const VideoCard = ({ videoId, channelId, image, title, channel, views, timestamp }) => {
    const { API_KEY } = useContext(ApiContext);
    const [avatar, setAvatar] = useState('');
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`, { timeout: 5000 })
            .then(response => {
                setAvatar(response.data.items[0].snippet.thumbnails.default.url);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <Link to={`/video/${videoId}`}>
            <div className="videoCard">
                <img className='videoCard__thumbnail' src={image} alt="" />
                <div className="videoCard__info">
                    <Avatar className='videoCard__avatar' alt={channel} src={avatar} />
                    <div className='videoCard__text'>
                        <h4>{title}</h4>
                        <p>{channel}</p>
                        <p>{views}<b> . </b>{timestamp}</p>
                    </div>

                </div>
            </div></Link>
    )
}

export default VideoCard
