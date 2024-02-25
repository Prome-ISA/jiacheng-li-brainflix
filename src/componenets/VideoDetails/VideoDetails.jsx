import "./VideoDetails.scss";
import formatDate from "../../utilities/formatDate.js";

function VideoDetails({ videoInfo }) {

    const {
        // id, image
        title, channel, description, views, likes, duration, timestamp,
    } = videoInfo


    return (
        <section className='video-details'>

            <h1>{title}</h1>
            <section>
                <div>By {channel}</div>
                <div>{formatDate(timestamp)}</div>
                <div>{views}</div>
                <div>Likes:{likes}</div>
            </section>

            <div>{description}</div>

        </section>
    )
}

export default VideoDetails