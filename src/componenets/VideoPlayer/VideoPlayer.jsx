

function VideoPlayer({ videoInfo }) {



    return (

        <video className="videoPlayer"  controls>
            <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
    )


}

export default VideoPlayer