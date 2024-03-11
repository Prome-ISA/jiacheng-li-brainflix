import "./VideoPlayer.scss"

function VideoPlayer({ videoInfo }) {
    

    return (

        <div  class="ratio ratio-16x9">

        <video className="videoPlayer"  controls poster={videoInfo?.image}>
            <source src={videoInfo?.video}   type="video/mp4" />
        </video>
        
        </div>
        

        
    )


}

export default VideoPlayer