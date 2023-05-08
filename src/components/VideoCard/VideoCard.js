import Avatar from '@mui/material/Avatar';
import './VideoCard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_KEY = 'AIzaSyCqmcxxNLND-_tIH4Bku95pNl1IrIrKD04';


const VideoCard = ({ videoId, channelId, image, title, channel, views, timestamp }) => {
    const [avatar, setAvatar] = useState('');
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`)
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