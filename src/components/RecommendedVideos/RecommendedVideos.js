import './RecommendedVideos.css';
import VideoCard from '../VideoCard/VideoCard';


const RecommendedVideos = ({ videos }) => {
    return (
        <div className="recommended-videos">
            <h2>Recommended</h2>
            <div className='videos'>
                {videos.map((video) => <VideoCard
                    key={video.id}
                    videoId={video.id}
                    channelId={video.snippet.channelId}
                    image={video.snippet.thumbnails.medium.url}
                    title={video.snippet.title}
                    channel={video.snippet.channelTitle}
                    views={video.statistics.viewCount}
                    timestamp={video.snippet.publishedAt}
                />)
                }
            </div>
        </div>
    )
}

export default RecommendedVideos