import './RelatedVideoCard.css';
import { Link } from 'react-router-dom';

const RelatedVideoCard = ({ videoId, image, title, channel, views, timestamp }) => {
    return (
        <Link to={`/video/${videoId}`}>
            <div className='relatedVideoCard'>
                <img className='relatedVideoCard__thumbnail' src={image} alt="" />
                <div className='relatedVideoCard__info'>
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>{views}<b> . </b>{timestamp}</p>
                </div>
            </div>
        </Link>
    )
}

export default RelatedVideoCard