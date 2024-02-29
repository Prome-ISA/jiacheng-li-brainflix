import "./VideoDetails.scss";
import formatDate from "../../utilities/formatDate.js";
import viewsIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

function VideoDetails({ videoInfo }) {

    // const {
    //     // id, image
    //     title, channel, description, views, likes, timestamp,
    // } = videoInfo


    return (

        <section className='video-details'>

            <h1 className="video-details__title" > {videoInfo?.title} </h1><section className="video-details__data">
                
            <div className="video-details__data--channelAndTimestamp" >

                    <div className="video-details__data--channel">By {videoInfo?.channel}</div>
                    <div className="video-details__data--datatext">{formatDate(videoInfo?.timestamp)}</div>
                </div>

                <div>

                    <div className="video-details__data--datatext">
                        <img src={viewsIcon} alt="viewsIcon" />{" "+ videoInfo?.views}
                    </div>

                    <div className="video-details__data--datatext">
                        <img src={likesIcon} alt="likeIcon" />
                         {" "+videoInfo?.likes}
                    </div>

                </div>
            </section>

            

            <div> {videoInfo?.description} </div>

        </section>
        
        )
    
}

export default VideoDetails