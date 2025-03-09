import React from "react";
import "./comments.scss";

const Comments = () => {
  const comments = [
    {
      id: 1,
      username: "John Doe",
      commentText: "Nice post!",
    },
    {
      id: 2,
      username: "Jane Doe",
      commentText: "Great post!",
    },
    {
      id: 3,
      username: "Jack Doe",
      commentText: "Awesome post!",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <div className="info">
            <span>{comment.username}</span>
            <p>{comment.commentText}</p>
          </div>
          <div className="date">1 hour ago</div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
