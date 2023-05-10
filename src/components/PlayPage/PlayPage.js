import VideoPlayer from "../VideoPlayer/VideoPlayer"
import HeaderLeft from "../Header/HeaderLeft/HeaderLeft"
import HeaderRight from "../Header/HeaderRight/HeaderRight"
import RelatedVideoCard from "../RelatedVideoCard/RelatedVideoCard"
import './PlayPage.css'
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const API_KEY = 'AIzaSyCqmcxxNLND-_tIH4Bku95pNl1IrIrKD04';
const PlayPage = () => {
    let { videoId } = useParams();
    const [selectedVideo, setSelectedVideo] = useState([]);
    useEffect(() => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${API_KEY}`)
            .then((response) => setSelectedVideo(response.data.items))
            .catch(err => console.log(err));
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
                    <VideoPlayer videoId={videoId} selectedVideo={selectedVideo} />
                </div>
                <div className="related__videos">
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
                </div>
            </div>
        </div>
    )
}

export default PlayPage