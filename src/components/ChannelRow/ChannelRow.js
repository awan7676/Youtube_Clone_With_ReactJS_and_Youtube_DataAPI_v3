import './ChannelRow.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '../button/Button';

const ChannelRow = ({ image, channel, verified, subs, noOfVideos, description }) => {
    return (
        <div className="channelRow">
            {/* <img className='channelRow__Img' src={image} alt="" />
            <div className='channelRow__Info'>
                <div className='channelRow__Title'>
                    <h3>{channel}</h3>
                    {verified && <CheckCircleIcon style={{ color: 'gray', fontSize: '1rem' }} />}
                </div>
                <p>{noOfVideos} videos<b> . </b>{subs}</p>
                <p>{description}</p>
            </div> */}
            Hello
            <Button text='Subscribe' />
        </div>
    )
}

export default ChannelRow