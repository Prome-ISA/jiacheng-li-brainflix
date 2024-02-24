
import "./App.scss";
import { useState } from 'react';
// import videos from "./data/videos.json"


import videoInfo from "./data/video-details.json"
import VideoDetails from "./componenets/VideoDetails/VideoDetails.jsx"

import VideoPlayer from "./componenets/VideoPlayer/VideoPlayer.jsx";



function App() {


  const [activeVideoInfo, setActiveVideoInfo] = useState(videoInfo[0]);

  // function updateActiveVideoInfo(clickVideoID) {
  //   const newActiveVideoInfo = videoInfo.find((videoInfo) => videoInfo.id === clickVideoID)
  //   setActiveVideoInfo(newActiveVideoInfo)
  // }

  return (
    

    <main className="app">
      <VideoPlayer videoInfo={activeVideoInfo}/>
      <VideoDetails videoInfo={activeVideoInfo} />
    </main>


  );
}

export default App;


