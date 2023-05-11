import { ApiContext } from "../../contexts/ApiContext"
import VideoPlayer from "../VideoPlayer/VideoPlayer"
import HeaderLeft from "../Header/HeaderLeft/HeaderLeft"
import HeaderRight from "../Header/HeaderRight/HeaderRight"
import RelatedVideoCard from "../RelatedVideoCard/RelatedVideoCard"
import './PlayPage.css'
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const PlayPage = () => {
    const { API_KEY } = useContext(ApiContext);
    let { videoId } = useParams();
    const [relatedVideos, setRelatedVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState([]);

    const fetchRelatedVideos = (videoId) => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&part=id&maxResults=10&relatedToVideoId=${videoId}&type=video&key=${API_KEY}`, { timeout: 5000 })
            .then((response) => {
                setRelatedVideos(response.data.items);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${API_KEY}`, { timeout: 5000 })
            .then((response) => setSelectedVideo(response.data.items))
            .catch(err => console.log(err));
        fetchRelatedVideos(videoId);
    }, [videoId])
    return (

        <div className="playPage">
            <div className="header">
                <div className="left" >
                    <HeaderLeft />
                </div>
                <div className="right">
                    <HeaderRight />
                </div>
            </div>
            <div className="main__section">
                <div className="video__player">
                    {selectedVideo.map((video) =>
                        <VideoPlayer videoId={videoId}
                            key={videoId}
                            title={video.snippet.title}
                            description={video.snippet.description}
                            channelId={video.snippet.channelId}
                        />)}
                </div>

                <div className="related__videos">
                    {relatedVideos.map((video) =>
                        <RelatedVideoCard
                            key={video.id.videoId}
                            videoId={video.id.videoId}
                            image={video.snippet.thumbnails.high.url}
                            title={video.snippet.title}
                            channel={video.snippet.channelTitle}
                            views="3M views"
                            timestamp="1 year ago"
                        />)}
                </div>
                {/* <div className="related__videos">
                    <RelatedVideoCard
                        image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                        title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                        channel="Travery Media"
                        views="2.3M Views"
                        timestamp="3 days ago"

                    />

                    <RelatedVideoCard
                        image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                        title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                        channel="Travery Media"
                        views="2.3M Views"
                        timestamp="3 days ago"

                    />

                    <RelatedVideoCard
                        image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                        title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                        channel="Travery Media"
                        views="2.3M Views"
                        timestamp="3 days ago"

                    />

                    <RelatedVideoCard
                        image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                        title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                        channel="Travery Media"
                        views="2.3M Views"
                        timestamp="3 days ago"

                    />

                    <RelatedVideoCard
                        image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                        title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                        channel="Travery Media"
                        views="2.3M Views"
                        timestamp="3 days ago"

                    />

                    <RelatedVideoCard
                        image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                        title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                        channel="Travery Media"
                        views="2.3M Views"
                        timestamp="3 days ago"

                    />

                    <RelatedVideoCard
                        image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                        title='Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)'
                        channel="Travery Media"
                        views="2.3M Views"
                        timestamp="3 days ago"

                    />
                </div> */}
            </div>
        </div>
    )
}

export default PlayPage
