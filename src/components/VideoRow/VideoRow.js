import './VideoRow.css';
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

const VideoRow = ({ image, title, views, timestamp, channel, channelImg, verified, description }) => {
    const [isHover, setIsHover] = useState(false);
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
                    <Avatar className='videoRow__avatar' alt={channel} src={channelImg} />
                    <p>{channel}</p>
                    {verified && <CheckCircleIcon style={{ color: 'gray', fontSize: '1rem' }} />}
                </div>
                <p className='videoRow__videoDescription'>{description}</p>
            </div>
        </div >
    )
}

export default VideoRow