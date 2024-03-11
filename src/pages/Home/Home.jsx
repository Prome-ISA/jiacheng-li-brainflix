import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';


import VideoPlayer from "../../componenets/VideoPlayer/VideoPlayer.jsx";
import VideoDetails from "../../componenets/VideoDetails/VideoDetails.jsx";
import CommentSection from "../../componenets/CommentSection/CommentSection.jsx";
import VideoList from "../../componenets/VideoList/VideoList.jsx";



function HomePage() {

  const [activeVideoInfo, setActiveVideoInfo] = useState(null);

  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // const response = await axios.get(`${API_URL}/${API_KEY}`);
        const response = await axios.get("http://localhost:8080/videos");
        console.log(response.data)//test code
        setVideos(response.data)

        //maybe split that into a different useEffect to get the video with ID
        //use filter


        const firstVidId = id || response.data[0].id;


        const responseFirst = await axios.get(`http://localhost:8080/videos/${firstVidId}`);
        console.log(responseFirst.data);
        setActiveVideoInfo(responseFirst.data);


      } catch (error) {
        console.error('Error fetching data:', error);
      }

    }

    fetchVideos();
  }, [id])//ID here maybe???


  console.log(activeVideoInfo)


  function updateActiveVideoInfo(clickVideoID) {
    // Fetch the clicked video info from the API and update the state
    axios.get(`http://localhost:8080/videos/${clickVideoID}`)
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

      <div className='home-body'>

        <div className='details-comments'>
          <VideoDetails videoInfo={activeVideoInfo} />
          <CommentSection videoInfo={activeVideoInfo} />
        </div>

        <div className='video-list'>
          <VideoList
            videos={videos}
            activeVideoInfo={activeVideoInfo}
            updateActiveVideoInfo={updateActiveVideoInfo}
          />
        </div>

      </div>


      {/*  
      
    
    */}



    </main>

  )

}

export default HomePage