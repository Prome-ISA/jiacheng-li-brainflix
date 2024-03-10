import { Link  } from "react-router-dom";
import "./VideoListItem.scss"


function VideoListItem({ video, isActive, updateActiveVideoInfo }) {

    const { title, id, image, channel } = video;



    let className = "videoListItem";
    if (isActive) {
        className += " videoListItem--selected"
    }

    const handleClick = () => {
        updateActiveVideoInfo( id )
    }


    return (

        <li className={className}>
            <Link to={`/videos/${id}`}> 
            
            <img className="videoListItem__img" src={video.image} alt={video.title} />
            <div className="videoListItem__titleAndChannel">
                <p className="videoListItem__titleAndChannel--title">{video.title}</p>
                <p className="videoListItem__titleAndChannel--channel">{video.channel}</p>
            </div>
            </Link>

        </li>
    )

}

export default VideoListItem