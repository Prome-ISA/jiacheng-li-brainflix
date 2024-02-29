import VideoListItem from "../VideoListItem/VideoListItem";
import  "./VideoList.scss"

function VideoList({ videos, activeVideoInfo, updateActiveVideoInfo }) {

   const {  id  } = videos
  

    return (
        <ul className="videoList" >
        
        {videos.map((video) => (
            <VideoListItem
                key={video.id}
                video={video}
                isActive={id === activeVideoInfo.id}
                updateActiveVideoInfo={updateActiveVideoInfo}
            />
        ))}
        
        </ul>

        
    )


}

export default VideoList