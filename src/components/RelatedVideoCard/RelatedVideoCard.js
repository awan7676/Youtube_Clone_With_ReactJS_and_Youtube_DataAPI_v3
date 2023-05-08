import './RelatedVideoCard.css';

const RelatedVideoCard = ({ image, title, channel, views, timestamp }) => {
    return (
        <div className='relatedVideoCard'>
            <img className='relatedVideoCard__thumbnail' src={image} alt="" />
            <div className='relatedVideoCard__info'>
                <h4>{title}</h4>
                <p>{channel}</p>
                <p>{views}<b> . </b>{timestamp}</p>
            </div>
        </div>
    )
}

export default RelatedVideoCard