import React, { useState } from 'react';
import img from "../../assets/Images/Upload-video-preview.jpg"
import submitIcon from "../../assets/Icons/publish.svg"
import "./UploadPage.scss"

const UploadPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Handle form submission here, e.g., upload video to server (not implemented in this example)
    setSubmitted(true); // Set submitted to true to trigger notification
  };

  const handleCancel = () => {
    // Handle cancellation here, for example, navigate back to the previous page
    window.history.back();   /// useHistory from react router
  };

  // JSX for Video Upload Page
  if (!submitted) {
    return (
      <div className="video-upload-page">
        <h1 className='video-upload-page__title'> Upload Video</h1>


        <form className="form-group" onSubmit={handleSubmit}>

          <div >
            <label className='form-group__thumbnail-title'>Video Thumbnail:</label>
            <img className='upload-preview' src={img} />
            {/*<input type="file" id="thumbnail" accept="image/*" />*/}
          </div>

          <div className="form-group__title">
            <label className="form-group__title__input--label">Title  your video:
              <input className="form-group__title__input--text" placeholder="Add a new comment" ></input>
            </label>
          </div>

          <div className="form-group__details">
            <label className="form-group__title__input--label">ADD A VIDEO DESCRIPTION:
              <textarea className="form-group__title__input--text" placeholder='Add a description to your video'> 
              
              </textarea>
            </label>

           
          </div>

          <div className="form-group__submit" >
            <img src={submitIcon} alt='submit icon' />
            <button type="submit">Publish</button>
          </div>

          <div className="form-group__cancel">
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>



        </form>
      </div>





    );
  } else {
    
    setTimeout(() => {
     
      window.location.href = '/'; ////useNavigate instead
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
