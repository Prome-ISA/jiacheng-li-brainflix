import "./VideoDetails.scss";
import formatDate from "../../utilities/formatDate.js";

function VideoDetails({ videoInfo }) {
    
    const {
        // id, image
        title, channel, description, views, likes, duration, timestamp, 
    } = videoInfo


    return (
        <section className='video-details'>

            <div>{title}</div>
            <div>{channel}</div>
            <p>{duration}</p>
            <div>{formatDate(timestamp)}</div>
            <div>{views}</div>
            <div>Likes:{likes}</div>
            <div>{description}</div>

        </section>
    )
}

export default VideoDetails