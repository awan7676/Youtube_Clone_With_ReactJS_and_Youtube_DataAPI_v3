import './SearchPageVideos.css';
import { ApiContext } from '../../contexts/ApiContext';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';
import TuneIcon from '@mui/icons-material/Tune';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import nextId from 'react-id-generator';

<<<<<<< HEAD

=======
>>>>>>> ec0c8598ee143457769e4fd9eab41bc3de94183e
const SearchPageVideos = () => {
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
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchText}&type=video&videoDefinition=high&videoEmbeddable=true&key=${API_KEY}`, { timeout: 5000 })
            .then((response) => {
                setVideos(response.data.items);
            })
            .catch(err => console.log(err));

    }, [searchText]);

    return (
        <div className='searchPageVideos'>
            <div className='searchPageVideos__filter'>
                <TuneIcon className='searchPageVideos__filterIcon' />
                <h2>FILTERS</h2>
            </div>
            <hr />
            {isChannel && channel.map((channel) => <ChannelRow
                key={nextId()}
                image={channel.snippet.thumbnails.high.url}
                channelTitle={channel.snippet.channelTitle}
                verified
                subs="660K subscribers"
                noOfVideos={382}
                description={channel.snippet.description}

            />)}
            {/* {<ChannelRow
                image='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                channel='Traversy Media'
                verified
                subs="660K subscribers"
                noOfVideos={382}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />} */}
            <hr />

            <div className='searchPageVideos__Videos'>
                {videos.map((video) => <VideoRow
                    key={video.id.videoId}
                    channelId={video.snippet.channelId}
                    image={video.snippet.thumbnails.medium.url}
                    title={video.snippet.title}
                    views='2M Views'
                    timestamp={video.snippet.publishedAt}
                    channel={video.snippet.channelTitle}
                    // channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                    verified
                    description={video.snippet.description}

                />)}
            </div>

            {/* <div className='searchPageVideos__Videos'>
                <VideoRow
                    image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channel="Travery Media"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                    verified
                    description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
                />

                <VideoRow
                    image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channel="Travery Media"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                    verified
                    description="You can find awesome aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
                />

                <VideoRow
                    image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channel="Travery Media"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                    verified
                    description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
                />

                <VideoRow
                    image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channel="Travery Media"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                    verified
                    description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
                />

                <VideoRow
                    image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channel="Travery Media"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                    verified
                    description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
                />

                <VideoRow
                    image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channel="Travery Media"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                    verified
                    description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
                />

                <VideoRow
                    image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channel="Travery Media"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                    verified
                    description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
                />
            </div> */}

        </div>
    )
}

export default SearchPageVideos
