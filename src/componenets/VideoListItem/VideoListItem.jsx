import "./VideoListItem.scss"

function VideoListItem({ video, isActive, updateActiveVideo }) {

    const { title, id, image, channel } = video;




    let className = "videoListItem";
    if (isActive) {
        className += " videoListItem--selected"
    }

    const handleClick = () => {
        updateActiveVideo({ id })
    }


    return (
        <li onClick={handleClick} className={className}>
            
            <img className="videoListItem__img" src={image} alt={title} />
            <div className="videoListItem__titleAndChannel">
                <p className="videoListItem__titleAndChannel--title">{title}</p>
                <p className="videoListItem__titleAndChannel--channel">{channel}</p>
            </div>

        </li>
    )

}

export default VideoListItem