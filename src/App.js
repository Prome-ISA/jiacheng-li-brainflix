
import "./App.scss";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import videos from "./data/videos.json"
import videoInfo from "./data/video-details.json";

import Navbar from "./componenets/NavBar/NavBar.jsx";
import VideoPlayer from "./componenets/VideoPlayer/VideoPlayer.jsx";
import VideoDetails from "./componenets/VideoDetails/VideoDetails.jsx";
import CommentSection from "./componenets/CommentSection/CommentSection.jsx";
import VideoList from "./componenets/VideoList/VideoList.jsx";

import HomePage from "./pages/Home/Home.jsx";
import UploadPage from "./pages/UploadPage/UploadPage.jsx";




function App() {

  const [activeVideoInfo, setActiveVideoInfo] = useState(videoInfo[0]);
  {/*const [activeVideo, setActiveVideo] = useState(videos[0]);*/ }


  function updateActiveVideoInfo(clickVideoID) {
    {/*const newActiveVideo = videos.find((video) => video.id === clickVideoID)*/ }
    const newActiveVideoInfo = videoInfo.find((videoInfo) => videoInfo.id === clickVideoID)

    {/*setActiveVideo(newActiveVideo)*/ }

    setActiveVideoInfo(newActiveVideoInfo)
  }

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/videos/:id" element={<HomePage />} /> //useprarm

      </Routes>

    </BrowserRouter>

  );
}

export default App;


