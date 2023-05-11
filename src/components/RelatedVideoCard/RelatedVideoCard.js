import './RelatedVideoCard.css';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { useState, useContext } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const RelatedVideoCard = ({ videoId, image, title, channel, views, timestamp }) => {
    const [isHover, setIsHover] = useState(false);

    const { isLightTheme } = useContext(ThemeContext);
    return (
        <Link to={`/video/${videoId}`}>
            <div className='relatedVideoCard' onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)}>
                <img className='relatedVideoCard__thumbnail' src={image} alt="" />
                <div className='relatedVideoCard__info'>
                    <div className='relatedVideoCard__title'>
                        <h4>{title}</h4>
                        <MoreVertIcon className={`videoRow__titleDotsIcon ${isLightTheme && 'darkTheme'} ${!isHover && 'hidden'}`} />
                    </div>
                    <p>{channel}</p>
                    <p>{views}<b> . </b>{timestamp}</p>
                </div>
            </div>
        </Link>
    )
}

export default RelatedVideoCard