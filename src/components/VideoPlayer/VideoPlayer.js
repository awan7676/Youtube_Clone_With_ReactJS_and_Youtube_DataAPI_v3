import './VideoPlayer.css';
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SortIcon from '@mui/icons-material/Sort';
import Button from '../button/Button';
import { ApiContext } from '../../contexts/ApiContext';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';


const VideoPlayer = ({ videoId, title, description, channelId }) => {
    const { API_KEY } = useContext(ApiContext);
    const [videoChannel, setVideoChannel] = useState([]);
    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&type=channel&part=snippet`, { timeout: 5000 })
            .then((response) => setVideoChannel(response.data.items))
            .catch(err => console.log(err));
        console.log(videoChannel);
    }, [channelId]);
    return (
        <div className="player-wrapper">
            <iframe src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <div className='video__details'>
                <h3>{title}</h3>
                <div className='video__info'>
                    {videoChannel.map((channel) =>
                        <div className='channel__info'>
                            <Avatar className='videoCard__avatar' alt="" src={channel.snippet.thumbnails.default.url} />
                            <div className='channel__text'>
                                <div className='channel__name'>
                                    <h4>{channel.snippet.title}</h4>
                                    {<CheckCircleIcon style={{ color: 'gray', fontSize: '1rem' }} />}
                                </div>
                                <p>15M Subscribers</p>
                            </div>
                            <Button text='Subscribe' />
                        </div>)}
                    <div className='video__btns'>
                        <div className='like__btn'>
                            <div className='like__icon'>
                                <ThumbUpOffAltOutlinedIcon style={{ fontSize: '1.25rem' }} />
                                <span>32K</span>
                            </div>
                            {/* <span>|</span> */}
                            <div className='dislike__icon'>
                                <ThumbDownOffAltOutlinedIcon style={{ fontSize: '1.25rem' }} />
                            </div>
                        </div>

                        <div className='share__btn'>
                            <ShareIcon style={{ fontSize: '1.25rem' }} />
                            <span>Share</span>
                        </div>

                        <div className='more__icon'>
                            <MoreHorizIcon style={{ fontSize: '1.25rem' }} />
                        </div>
                    </div>
                </div>
                <div className='video__description'>
                    <div className='video__stats'>
                        <span><b>127K views</b></span>
                        <span><b>14 hourse ago</b></span>
                    </div>
                    <p style={{ height: '2rem', overflowY: 'hidden' }}>{description}</p>
                    <p><b>Show More</b></p>
                </div>
                <div className='comment__section'>
                    <p>406 Comments</p>
                    <div className='sort__icon'>
                        <SortIcon />
                        <span>Sort by</span>
                    </div>
                </div>
                <hr />
            </div>
        </div>

    )
}

export default VideoPlayer