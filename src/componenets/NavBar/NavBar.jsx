import "./NavBar.scss"

import brainflixLogo from "../../assets/Logo/BrainFlix-logo.svg"
import searchIcon from "../../assets/Icons/search.svg"
import uploadIcon from "../../assets/Icons/upload.svg"
import userImage from "../../assets//Images/Mohan-muruge.jpg"

function Navbar() {
    return (
        <header className="navbar">
            <img className="navbar__logo" src={brainflixLogo} alt="BrainFlix" />
            <div className="navbar__searchBarAndMobileIcon">
                <div className="navbar__searchBar">
                    <img src={searchIcon} alt="Search Icon" />
                    <input type="text" placeholder="Search" />

                </div>
                <img className="navbar__mobileUserIcon" src={userImage} alt="userIcon mobile" />
            </div>


            <button type="submit" className="navbar__uploadButton" >
                <img src={uploadIcon} alt="Upload Icon" /> UPLOAD
            </button>
            {/* <img className="navbar__nonMobileUserIcon" src={userImage} alt="userIcon non-mobile" />*/}
            




        </header>

    )
}

export default Navbar