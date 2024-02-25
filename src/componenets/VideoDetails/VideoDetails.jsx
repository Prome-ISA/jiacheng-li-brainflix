import "./VideoDetails.scss";
import formatDate from "../../utilities/formatDate.js";
import viewsIcon from "../../assets/Icons/views.svg"
import likesIcon from "../../assets/Icons/likes.svg"

function VideoDetails({ videoInfo }) {

    const {
        // id, image
        title, channel, description, views, likes, timestamp,
    } = videoInfo


    return (
        <section className='video-details'>

            <h1>{title}</h1>
            <section>
                <div>By {channel}</div>
                <div>{formatDate(timestamp)}</div>
                <div>
                    <img src={viewsIcon} alt="viewsIcon"/>{views}
                </div>
                <div>
                    <img src={likesIcon} alt="likeIcon"/>
                    Likes:{likes}
                </div>
            </section>

            <div>{description}</div>

        </section>
    )
}

export default VideoDetails