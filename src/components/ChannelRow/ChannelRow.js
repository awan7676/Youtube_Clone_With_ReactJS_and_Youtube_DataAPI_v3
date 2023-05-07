import './ChannelRow.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '../button/Button';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const ChannelRow = ({ channelId }) => {

    return (
        <div className="channelRow">
            <img className='channelRow__Img' src={channel[0].snippet.thumbnails.medium.url} alt="" />
            <div className='channelRow__Info'>
                <div className='channelRow__Title'>
                    <h3>{channel[0].snippet.title}</h3>
                    {<CheckCircleIcon style={{ color: 'gray', fontSize: '1rem' }} />}
                </div>
                <p>{300} videos<b> . </b>{282}</p>
                <p>{channel[0].snippet.description}</p>
            </div>
            <Button text='Subscribe' />
        </div>
    )
}

export default ChannelRow