import "./VideoPlayer.scss"

function VideoPlayer({ videoInfo }) {

    const {video, image} = videoInfo

    return (

        <video className="videoPlayer"  controls poster={image}>
            <source src={video}   type="video/mp4" />
        </video>
    )


}

export default VideoPlayer