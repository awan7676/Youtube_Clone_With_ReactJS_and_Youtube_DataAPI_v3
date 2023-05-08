import VideoPlayer from "../VideoPlayer/VideoPlayer"
import HeaderLeft from "../Header/HeaderLeft/HeaderLeft"
import HeaderRight from "../Header/HeaderRight/HeaderRight"
import RelatedVideoCard from "../RelatedVideoCard/RelatedVideoCard"
import './PlayPage.css'

const PlayPage = () => {
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
                    <VideoPlayer />
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