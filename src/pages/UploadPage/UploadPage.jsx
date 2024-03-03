import { useState } from 'react';



function UploadPage() {

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

  
    if (!submitted) {
        return (
            <div className="video-upload-page">
                <h1> Upload Videos </h1>
                <p> Video Thumbnail</p>
                <img src='../../assets/Images/Upload-video-preview.jpg'/>
                <form action="/upload" method="post" enctype="multipart/form-data">
                    <label for="image">Video Thumbnail</label>
                    <img src="../../assets/Images/Upload-video-preview.jpg"/>
                    <input type="file" id="image" name="image" accept="image/*" required />

                    <button type="submit">submit</button>
                    <button >Cancel</button>
                </form>



            </div>
        );
    } else {
        setTimeout(() => {
            window.location.href = '/'; //  to home page
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





export default UploadPage