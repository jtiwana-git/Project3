import React from "react";
import NewPost from "../../components/newPost/NewPost";
import "./home.scss";
import Posts from "../../components/posts/Posts";

const Home = () => {
  return (
    <div className="home">
      <NewPost />
      <Posts />
    </div>
  );
};

export default Home;
