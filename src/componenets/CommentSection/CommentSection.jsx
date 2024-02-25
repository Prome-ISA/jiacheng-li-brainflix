import "./CommentSection.scss";
import formatDate from "../../utilities/formatDate.js";
import commentIcon from "../../assets/Icons/add_comment.svg"

function CommentSection({ videoInfo }) {

  const comments = videoInfo.comments
  const timestamp = videoInfo.timestamp

  return (
    <div className="commentSection">
      <p>{comments.length} Comments</p>
      <form>
        <label>JOIN THE CONVERSATION:
          <textarea name="comment" placeholder="Add a new comment" ></textarea>
        </label>
        <button type="submit" >
          <img src={commentIcon} alt="Comment Icon" /> COMMENT
        </button>
      </form>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <strong>{comment.name}</strong>: {comment.comment}
            <div> {formatDate(timestamp)}</div>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default CommentSection