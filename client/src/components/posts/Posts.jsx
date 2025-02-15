import React from "react";
import JohnDoe from "../../sample/johnDoePic.png";
import JohnMountain from "../../sample/john-mountains.png";
import JaneDoe from "../../sample/janeDoePic.png";
import JaneWaterfall from "../../sample/jane-waterfall.png";
import Post from "../post/Post.jsx";
import "./posts.scss";

const Posts = () => {
  //Dummy data

  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profile: JohnDoe,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      img: JohnMountain,
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profile: JaneDoe,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      img: JaneWaterfall,
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={posts.id} />
      ))}
    </div>
  );
};

export default Posts;
