import "./CommentSection.scss";
import formatDate from "../../utilities/formatDate.js";

function CommentSection ({videoInfo}) {

    const comments  = videoInfo.comments
    const timestamp = videoInfo.timestamp

    return (
        <div className="comment-section">
        <p>{comments.length} Comments</p>
        <form>
        <label>JOIN THE COVERSATION: 
             <textarea name="comment" placeholder="Add a new comment" disabled></textarea>
        </label>
         
          <button type="submit" disabled>COMMENT</button>
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