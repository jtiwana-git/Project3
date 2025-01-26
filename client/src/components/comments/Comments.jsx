import "./comments.scss";
import { useContext } from "react";
import { AuthContext } from "../context/authContext.js";
import Jonny from "./data/johnDoe.jpg";
import Jane from "./data/JaneDoe.png";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  // Dummy data
  const comments = [
    {
      id: 1,
      commentDescription:
        "Lorem ipsum dolor sit amet. etur adipisci, sodales elit erat vitae risus. Duis a mi fringilla mi lacinia.",
      name: "Jonny Doe",
      userId: 1,
      profilePic: Jonny,
    },
    {
      id: 2,
      commentDescription:
        "Lorem ipsum dolor sit amet. etur adipisci, sodales elit erat vitae risus. Duis a mi fringilla mi lacinia.",
      name: "Jane Doe",
      userId: 2,
      profilePic: Jane,
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={Jonny} alt="profile" />
        <input type="text" placeholder="Write a comment..." />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="profile" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.commentDescription}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
