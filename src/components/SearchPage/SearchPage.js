import './SearchPage.css';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';
import TuneIcon from '@mui/icons-material/Tune';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import nextId from 'react-id-generator';

const API_KEY = 'AIzaSyD-6O6rfl0-xNWZVa_V7kqS8O2Y3HCauJU';

const SearchPage = () => {
    let { searchText } = useParams();
    const [videos, setVideos] = useState([]);

    // const [isChannel, setIsChannel] = useState(false);

    // // const checkChannel = () => {
    // //     axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDR1JiYO02_V1KCbFSrRGA8zQ2eBJAwHl4&q=sadf&type=channel&part=snippet`)
    // //         .then(response => {
    // //             const channels = response.data.items;
    // //             if (channels.length > 0) {
    // //                 const channelId = channels[0].id.channelId;
    // //                 console.log(`Channel exists with ID: ${channelId}`);
    // //             } else {
    // //                 console.log('Channel does not exist');
    // //             }
    // //         })
    // //         .catch(error => {
    // //             console.error(error);
    // //         });
    // // };

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchText}&key=${API_KEY}`)
            .then((response) => {
                setVideos(response.data.items);
            })
            .catch(err => console.log(err));

    }, []);

    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneIcon className='searchPage__filterIcon' />
                <h2>FILTERS</h2>
            </div>
            <hr />
            {/* {<ChannelRow
                image={videos[0].snippet.thumbnails.medium.url}
                channel={videos[0].snippet.channelTitle}
                verified
                subs="660K subscribers"
                noOfVideos={382}
                description={videos[0].snippet.description}
            />} */}
            {/* <hr /> */}

            <div className='searchPage__Videos'>
                {videos.map((video) => <VideoRow
                    key={nextId()}
                    image={video.snippet.thumbnails.medium.url}
                    title={video.snippet.title}
                    views='2M Views'
                    timestamp={video.snippet.publishedAt}
                    channel={video.snippet.channelTitle}
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                    verified
                    description={video.snippet.description}

                />)}
            </div>
            {/* <div className='searchPage__Videos'>
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

export default SearchPage