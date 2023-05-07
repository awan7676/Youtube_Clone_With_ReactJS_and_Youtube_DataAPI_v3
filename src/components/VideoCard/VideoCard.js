import Avatar from '@mui/material/Avatar';
import './VideoCard.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyD-6O6rfl0-xNWZVa_V7kqS8O2Y3HCauJU';


const VideoCard = ({ channelId, image, title, channel, views, timestamp }) => {
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
        </div>
    )
}

export default VideoCard