import { useEffect, useState } from "react";
import './VideoPlayer.css';
import ReactPlayer from "react-player/youtube";
import axios from "axios";
import { useParams } from "react-router-dom";
const API_KEY = 'AIzaSyCqmcxxNLND-_tIH4Bku95pNl1IrIrKD04';
const VideoPlayer = () => {
    // let { videoId } = useParams();
    const [selectedVideo, setSelectedVideo] = useState([]);
    // useEffect(() => {
    //     axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoId}&key=${API_KEY}`)
    //         .then((response) => setSelectedVideo(response.data.items))
    //         .catch(err => console.log(err));
    // }, [videoId])
    return (
        <div className="player-wrapper">
            <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=ysz5S6PUM-U`}
                controls
                // width='57rem'
                width='100%'
                height='34rem'
            />
        </div>



    )
}

export default VideoPlayer