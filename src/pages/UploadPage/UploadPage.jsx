import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import videos from "../../data/videos.json"
import videoInfo from "../../data/video-details.json";

import Navbar from "../../componenets/NavBar/NavBar.jsx";
import VideoPlayer from "../../componenets/VideoPlayer/VideoPlayer.jsx";
import VideoDetails from "../../componenets/VideoDetails/VideoDetails.jsx";
import CommentSection from "../../componenets/CommentSection/CommentSection.jsx";
import VideoList from "../../componenets/VideoList/VideoList.jsx";



function UploadPage(){


    return(
        <h2>Upload  Page</h2>

    )
    
    
    
}

export default UploadPage