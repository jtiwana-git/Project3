import React from "react";
import JohnDoe from "../../sample/johnDoePic.png";
import JaneDoe from "../../sample/janeDoePic.png";
import "./comments.scss";

const Comments = () => {
  // dummy data
  const currentUser = {
    profile: JohnDoe,
  };
  const comments = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profile: JohnDoe,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profile: JaneDoe,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    },
  ];

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profile} alt="Profile" />
        <input type="text" placeholder="write a comment....." />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <img src={comment.profile} alt="Profile" />
          <div className="info">
            <span className="name">{comment.name}</span>
            <span className="desc">{comment.desc}</span>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
