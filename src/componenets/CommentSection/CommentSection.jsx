import "./CommentSection.scss";
import formatDate from "../../utilities/formatDate.js";
import commentIcon from "../../assets/Icons/add_comment.svg"
import commentUserIcon from "../../assets/Images/Mohan-muruge.jpg"

function CommentSection({ videoInfo }) {


  // const comments = videoInfo.comments
  // const timestamp = videoInfo.timestamp

  return (
    <div className="commentSection">

      <p className="commentSection__count">{videoInfo?.comments.length} Comments</p>

      <div className="post-comment">
        <img className="comment-icon" src={commentUserIcon} alt="icon" />

        <form className="commentSection__input">
          <label className="commentSection__input--label">JOIN THE CONVERSATION:
            <textarea className="commentSection__input--text" placeholder="Add a new comment" ></textarea>
          </label>
          <button className="commentSection__input--button" type="submit" >
            <img src={commentIcon} alt="Comment Icon" /> COMMENT
          </button>
        </form>


      </div>



      <ul className="commentList">
        {videoInfo?.comments.map(comment => {
          return(
          <li className="commentListItem" key={comment.id}>
            <img className="comment-icon" src={commentUserIcon} alt="icon" />
            
            <div className="commentListItem__body">
            <div className="commentListItem__nameAndTimestamp">

              <div className="commentListItem__nameAndTimestamp--name">{comment.name} </div>
              <div className="commentListItem__nameAndTimestamp--timestamp">{formatDate(videoInfo?.timestamp)}</div>

              
            </div>
            {comment.comment}
            
            
            
            </div>
            

          </li>
        )})}
      </ul>
    </div>
  )

}

export default CommentSection