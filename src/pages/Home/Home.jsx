import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import axios from 'axios';

// import videos from "../../data/videos.json"
import videoInfo from "../../data/video-details.json";

import Navbar from "../../componenets/NavBar/NavBar.jsx";
import VideoPlayer from "../../componenets/VideoPlayer/VideoPlayer.jsx";
import VideoDetails from "../../componenets/VideoDetails/VideoDetails.jsx";
import CommentSection from "../../componenets/CommentSection/CommentSection.jsx";
import VideoList from "../../componenets/VideoList/VideoList.jsx";

const API_URL= "https://unit-3-project-api-0a5620414506.herokuapp.com/videos";

const API_KEY ="?api_key=f9e031c2-65ee-405b-a5a7-16337ca7063b"


function HomePage() {

  const [activeVideoInfo, setActiveVideoInfo] = useState(videoInfo[0]);
  const [videos, setVideos] = useState([]);
  const {id} = useParams();

  const fetchVideos = async ()=>{
      try {
        const response = await axios.get(`${API_URL}/${API_KEY}`);
      console.log(response.data)//test code
      setVideos(response.data)
      
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
  }

  useEffect( () => {
      fetchVideos();
  },[id])
  
  // function updateActiveVideoInfo(clickVideoID) {

  //   const newActiveVideoInfo = videoInfo.find((videoInfo) => videoInfo.id === clickVideoID)


  //   setActiveVideoInfo(newActiveVideoInfo)
  // }

  function updateActiveVideoInfo(clickVideoID) {
    // Fetch the clicked video info from the API and update the state
    axios.get(`${API_URL}/${clickVideoID}${API_KEY}`)
      .then(response => {
        setActiveVideoInfo(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <main className="app">

      <VideoPlayer videoInfo={activeVideoInfo} />
      <VideoDetails videoInfo={activeVideoInfo} />
      <CommentSection videoInfo={activeVideoInfo} />
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