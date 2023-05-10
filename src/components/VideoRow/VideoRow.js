import './VideoRow.css';
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect } from 'react';
import axios from 'axios';
const API_KEY = 'AIzaSyCqmcxxNLND-_tIH4Bku95pNl1IrIrKD04';

const VideoRow = ({ videoId, channelId, image, title, views, timestamp, channel, verified, description }) => {
    console.log(videoId);
    const [isHover, setIsHover] = useState(false);
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
        <div className='videoRow' onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)}>
            <img className='videoRow__thumbnail' src={image} alt="" />
            <div className='videoRow__Info'>
                <div className='videoRow__title'>
                    <h4>{title}</h4>
                    <MoreVertIcon className={`videoRow__titleDotsIcon ${!isHover && 'hidden'}`} />
                </div>
                <p>{views}<b> . </b>{timestamp}</p>
                <div className='videoRow__ChannelInfo'>
                    <Avatar className='videoRow__avatar' alt={channel} src={avatar} />
                    <p>{channel}</p>
                    {verified && <CheckCircleIcon style={{ color: 'gray', fontSize: '1rem' }} />}
                </div>
                <p className='videoRow__videoDescription'>{description}</p>
            </div>
        </div >
    )
}

export default VideoRow
