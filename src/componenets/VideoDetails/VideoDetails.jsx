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

            <h1 className="video-details__title">{title}</h1>
            <section className="video-details__data">
                <div className="video-details__data--channelAndTimestamp">
                    <div className="video-details__data--channel">By {channel}</div>
                    <div className="video-details__data--datatext">{formatDate(timestamp)}</div>
                </div>

                <div>
                    <div className="video-details__data--datatext">
                        <img src={viewsIcon} alt="viewsIcon" />{" "+ views}
                    </div>
                    <div className="video-details__data--datatext">
                        <img src={likesIcon} alt="likeIcon" />
                         {" "+likes}
                    </div>
                </div>
            </section>

            <div>{description}</div>

        </section>
    )
}

export default VideoDetails