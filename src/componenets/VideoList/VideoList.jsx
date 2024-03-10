
import VideoListItem from "../VideoListItem/VideoListItem";
import  "./VideoList.scss"






function VideoList({ videos, activeVideoInfo, updateActiveVideoInfo }) {



    console.log(videos);
//    const {  id  } = videos;
   

    return (
        <ul className="videoList" >
        
        {videos.filter(video =>video.id !== activeVideoInfo?.id).map((video) => (
            <VideoListItem
                key={video.id}
                video={video}
               
                updateActiveVideoInfo={updateActiveVideoInfo}
            />
        ))}
        
        </ul>

        
    )


}

export default VideoList