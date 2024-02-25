
import "./App.scss";
import { useState } from 'react';
// import videos from "./data/videos.json"

import Navbar from "./componenets/NavBar/NavBar.jsx";

import videoInfo from "./data/video-details.json"
import VideoDetails from "./componenets/VideoDetails/VideoDetails.jsx"

import VideoPlayer from "./componenets/VideoPlayer/VideoPlayer.jsx";
import CommentSection from "./componenets/CommentSection/CommentSection.jsx";



function App() {

  const [activeVideoInfo, setActiveVideoInfo] = useState(videoInfo[0]);

 

  // function updateActiveVideoInfo(clickVideoID) {
  //   const newActiveVideoInfo = videoInfo.find((videoInfo) => videoInfo.id === clickVideoID)
  //   setActiveVideoInfo(newActiveVideoInfo)
  // }

  return (
    

    <main className="app">
      <Navbar/>
      <VideoPlayer videoInfo={activeVideoInfo}/>
      <VideoDetails videoInfo={activeVideoInfo}  />
      <CommentSection videoInfo={activeVideoInfo}/>


    </main>


  );
}

export default App;


