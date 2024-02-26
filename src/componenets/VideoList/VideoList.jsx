import VideoListItem from "../VideoListItem/VideoListItem";
import  "./VideoList.scss"

function VideoList({ videoInfo, activeVideoInfo, updateActiveVideoInfo }) {

   const {  id  } = videoInfo
   console.log(videoInfo)

    return (
        <ul className="videoList" >
        
        {videoInfo.map((video) => (
            <VideoListItem
                key={id}
                video={video}
                isActive={id === activeVideoInfo.id}
                updateActiveVideoInfo={updateActiveVideoInfo}
            />
        ))}
        
        </ul>

        
    )


}

export default VideoList