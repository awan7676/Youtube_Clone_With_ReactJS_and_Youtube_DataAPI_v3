import './SearchPageVideos.css';
import { ApiContext } from '../../contexts/ApiContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';
import TuneIcon from '@mui/icons-material/Tune';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import nextId from 'react-id-generator';

const SearchPageVideos = () => {
    const { isLightTheme } = useContext(ThemeContext);
    const { API_KEY } = useContext(ApiContext);
    let { searchText } = useParams();
    const [videos, setVideos] = useState([]);
    const [channel, setChannel] = useState([]);
    const [isChannel, setIsChannel] = useState(false);

    const checkChannel = () => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${searchText}&type=channel&part=snippet&part=id`, { timeout: 5000 })
            .then(response => {
                const channels = response.data.items;
                if (channels.length > 0) {
                    const channelId = channels[0].id.channelId;
                    axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&type=channel&part=snippet`, { timeout: 5000 })
                        .then((response) => setChannel(response.data.items))
                        .catch(err => console.log(err));
                    setIsChannel(true);
                }
            })
            .catch(error => {
                console.error(error);
            });
    };

    useEffect(() => {
        checkChannel();
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&part=id&maxResults=5&q=${searchText}&type=video&videoDefinition=high&videoEmbeddable=true&key=${API_KEY}`, { timeout: 5000 })
            .then((response) => {
                setVideos(response.data.items);
            })
            .catch(err => console.log(err));

    }, [searchText]);

    return (
        <div className='searchPageVideos'>
            <div className={`searchPageVideos__filter ${isLightTheme && 'darkTheme'}`}>
                <TuneIcon className='searchPageVideos__filterIcon' />
                <h2>FILTERS</h2>
            </div>
            <hr />
            {isChannel && channel.map((channel) => <ChannelRow
                key={nextId()}
                image={channel.snippet.thumbnails.default.url}
                channelTitle={channel.snippet.channelTitle}
                verified
                subs="660K subscribers"
                noOfVideos={382}
                description={channel.snippet.description}

            />)}
            <hr />

            <div className='searchPageVideos__Videos'>
                {videos.map((video) => <VideoRow
                    key={video.id.videoId}
                    videoId={video.id.videoId}
                    channelId={video.snippet.channelId}
                    image={video.snippet.thumbnails.medium.url}
                    title={video.snippet.title}
                    timestamp={video.snippet.publishedAt}
                    channel={video.snippet.channelTitle}
                    verified
                    description={video.snippet.description}
                />
                )}
            </div>
        </div>
    )
}

export default SearchPageVideos