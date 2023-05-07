import './RecommendedVideos.css';
import VideoCard from '../VideoCard/VideoCard';


const RecommendedVideos = ({ videos }) => {
    return (
        <div className="recommended-videos">
            <h2>Recommended</h2>
            <div className='videos'>
                {videos.map((video) => <VideoCard
                    key={video.id}
                    channelId={video.snippet.channelId}
                    image={video.snippet.thumbnails.medium.url}
                    title={video.snippet.title}
                    channel={video.snippet.channelTitle}
                    views={video.statistics.viewCount}
                    timestamp="3 days ago"
                // channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                />)
                }
            </div>
            {/* <div className='videos'>
                <VideoCard image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    channel="Travery Media"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                />
                <VideoCard image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    channel="Travery Media"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                />
                <VideoCard image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    channel="Travery Media"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                />
                <VideoCard image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    channel="Travery Media"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                />
                <VideoCard image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    channel="Travery Media"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                />
                <VideoCard image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    channel="Travery Media"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                />
                <VideoCard image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    channel="Travery Media"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                />
                <VideoCard image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    channel="Travery Media"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                />
                <VideoCard image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    channel="Travery Media"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                />
                <VideoCard image='https://img.freepik.com/free-vector/flat-abstract-business-youtube-thumbnail_23-2148925265.jpg?w=1380&t=st=1682945956~exp=1682946556~hmac=58317c1c738bb6f701d20840e1b688bef87c63af4de1e693afb644cbcf739b07'
                    title="Become a Web Developer in 10 minutes | 2019/2020"
                    channel="Travery Media"
                    views="2.3M Views"
                    timestamp="3 days ago"
                    channelImg='https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg'
                />
            </div> */}
        </div>
    )
}

export default RecommendedVideos