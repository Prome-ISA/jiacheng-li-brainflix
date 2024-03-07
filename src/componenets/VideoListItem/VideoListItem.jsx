import { Link, useParams } from "react-router-dom";
import "./VideoListItem.scss"
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL= "https://unit-3-project-api-0a5620414506.herokuapp.com/videos";

const API_KEY ="?api_key=f9e031c2-65ee-405b-a5a7-16337ca7063b"

function VideoListItem({ video, isActive, updateActiveVideoInfo }) {

    const { title, id, image, channel } = video;
    // const {id, title, image, channel} =useParams();
    // const [videoData, setVideoData] = useState(null);

    // useEffect(() =>{
    //     axios.get(`${API_URL}/${id}${API_KEY}`)
    //   .then(response => {
    //     setVideoData(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
    // },[id])




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