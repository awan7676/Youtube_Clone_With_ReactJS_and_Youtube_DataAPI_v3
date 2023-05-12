import { ApiContext } from "../../contexts/ApiContext"
import VideoPlayer from "../VideoPlayer/VideoPlayer"
import HeaderLeft from "../Header/HeaderLeft/HeaderLeft"
import HeaderRight from "../Header/HeaderRight/HeaderRight"
import RelatedVideoCard from "../RelatedVideoCard/RelatedVideoCard"
import './PlayPage.css'
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { ThemeContext } from "../../contexts/ThemeContext"


const PlayPage = () => {
    const { isLightTheme } = useContext(ThemeContext);
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

        <div className={`playPage ${isLightTheme && 'darkTheme'}`}>
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
                            views={video.statistics.viewCount}
                            timestamp={video.snippet.publishedAt}
                        />)}
                </div>

                <div className="related__videos">
                    {relatedVideos.map((video) =>
                        <RelatedVideoCard
                            key={video.id.videoId}
                            videoId={video.id.videoId}
                            image={video.snippet.thumbnails.medium.url}
                            title={video.snippet.title}
                            channel={video.snippet.channelTitle}
                            timestamp={video.snippet.publishedAt}
                        />)}
                </div>
            </div>
        </div>
    )
}

export default PlayPage
