import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../../assets/Images/Upload-video-preview.jpg";
import submitIcon from "../../assets/Icons/publish.svg";
import "./UploadPage.scss";

const UploadPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Gather form data
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const description = formData.get('description');
    const thumbnail = formData.get('thumbnail');

    try {
      // Upload video data to API
      const response = await fetch('http://localhost:8080/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({ title, description, thumbnail }),
      });

      if (response.ok) {
        // Handle successful upload
        setSubmitted(true);
      } else {
        // Handle error response from API
        console.error('Failed to upload video:', response.statusText);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error uploading video:', error);
    }
  };

  const handleCancel = () => {
    navigate(-1); // Navigate back one step using useNavigate
  };

  // JSX for Video Upload Page
  if (!submitted) {
    return (
      <div className="video-upload-page">

        <h1 className="video-upload-page__title">Upload Video</h1>

        <form className="form-group" onSubmit={handleSubmit}>

          

          <div className='upload-page-body'>

          <div className='image-section'>
            <p className="form-group__thumbnail-title">Video Thumbnail:</p>
            <img className="upload-preview" src={img} alt="upload preview" />
          </div>

          <div className='form-section'>
            <div className="form-group__title">
              <label className="form-group__title__input--label">Title your video:
                <input className="form-group__title__input--text" name="title" placeholder="Add a title to your video" />
              </label>
            </div>

            <div className="form-group__details">
              <label className="form-group__title__input--label">ADD A VIDEO DESCRIPTION:
                <textarea className="form-group__title__input--text" name="description" placeholder="Add a description to your video"></textarea>
              </label>
            </div>
          </div>
          
          
          </div>

          

          <div className='buttons-section'>

            <div className="form-group__submit">
              <img src={submitIcon} alt="submit icon" />
              <button type="submit">Publish</button>
            </div>

            <div className="form-group__cancel">
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>

          </div>



        </form>
      </div>
    );
  } else {
    setTimeout(() => {
      navigate('/'); // Redirect to home page using useNavigate
    }, 2000);
    return (
      <div className="video-upload-page">
        <h1>Video Upload Page</h1>
        <div className="notification">
          Upload successful! Redirecting to home page...
        </div>
      </div>
    );
  }
};

export default UploadPage;
