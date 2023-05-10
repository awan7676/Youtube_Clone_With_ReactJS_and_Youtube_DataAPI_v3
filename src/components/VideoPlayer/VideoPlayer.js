import './VideoPlayer.css';
import ReactPlayer from "react-player/youtube";
const VideoPlayer = ({ videoId, selectedVideo }) => {
    return (
        <div className="player-wrapper">
            {/* <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=ysz5S6PUM-U`}
                controls
                // width='57rem'
                width='100%'
                height='480'
            /> */}
            {/* <iframe width="100%" height="480" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; fullscreen;clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe> */}
        </div>

    )
}

export default VideoPlayer