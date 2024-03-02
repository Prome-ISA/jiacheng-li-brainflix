import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import videos from "../../data/videos.json"
import videoInfo from "../../data/video-details.json";

import Navbar from "../../componenets/NavBar/NavBar.jsx";
import VideoPlayer from "../../componenets/VideoPlayer/VideoPlayer.jsx";
import VideoDetails from "../../componenets/VideoDetails/VideoDetails.jsx";
import CommentSection from "../../componenets/CommentSection/CommentSection.jsx";
import VideoList from "../../componenets/VideoList/VideoList.jsx";





function HomePage(){
    const [activeVideoInfo, setActiveVideoInfo] = useState(videoInfo[0]);
  {/*const [activeVideo, setActiveVideo] = useState(videos[0]);*/ }


  function updateActiveVideoInfo(clickVideoID) {
    {/*const newActiveVideo = videos.find((video) => video.id === clickVideoID)*/ }
    const newActiveVideoInfo = videoInfo.find((videoInfo) => videoInfo.id === clickVideoID)

    {/*setActiveVideo(newActiveVideo)*/ }

    setActiveVideoInfo(newActiveVideoInfo)
  }

  return(
    <main className="app">
      
      <VideoPlayer videoInfo={activeVideoInfo}/> 
      <VideoDetails videoInfo={activeVideoInfo}  /> 
      <CommentSection videoInfo={activeVideoInfo}/> 
      {/**/} 

      <VideoList 
        videos={videos} 
        activeVideoInfo={activeVideoInfo} 
        updateActiveVideoInfo={updateActiveVideoInfo}
      />

    </main>

  )

}

export default HomePage