import { Link } from "react-router-dom";
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

        <li onClick={handleClick} className={className}>
            <Link to={`/videos/${id}`}> 
            
            <img className="videoListItem__img" src={image} alt={title} />
            <div className="videoListItem__titleAndChannel">
                <p className="videoListItem__titleAndChannel--title">{title}</p>
                <p className="videoListItem__titleAndChannel--channel">{channel}</p>
            </div>
            </Link>

        </li>
    )

}

export default VideoListItem