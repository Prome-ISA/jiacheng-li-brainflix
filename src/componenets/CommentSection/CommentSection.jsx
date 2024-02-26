import "./CommentSection.scss";
import formatDate from "../../utilities/formatDate.js";
import commentIcon from "../../assets/Icons/add_comment.svg"

function CommentSection({ videoInfo }) {

  const comments = videoInfo.comments
  const timestamp = videoInfo.timestamp

  return (
    <div className="commentSection">
      <p className="commentSection__count">{comments.length} Comments</p>
      <form className="commentSection__input">
        <label className="commentSection__input--label">JOIN THE CONVERSATION:
          <textarea className="commentSection__input--text" placeholder="Add a new comment" ></textarea>
        </label>
        <button className="commentSection__input--button" type="submit" >
          <img src={commentIcon} alt="Comment Icon" /> COMMENT
        </button>
      </form>
      <ul className="commentList">
        {comments.map(comment => (
          <li className="commentListItem" key={comment.id}>

            <div className="commentListItem__nameAndTimestamp">


              <div className="commentListItem__nameAndTimestamp--name">{comment.name} </div>
              <div className="commentListItem__nameAndTimestamp--timestamp">{formatDate(timestamp)}</div>


            </div>

            {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  )

}

export default CommentSection