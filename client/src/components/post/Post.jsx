import "./post.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Comment from "../comments/Comments.jsx";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Jonny from "./data/johnDoe.jpg";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const user = {
    id: 1,
    name: "Jonny Doe",
    profilePic: Jonny,
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={user.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <span>{post.postDescription}</span>
          <img src={post.img} alt="" />
        </div>

        <div className="info">
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </div>
        </div>
        {commentOpen && <Comment />}
      </div>
    </div>
  );
};

export default Post;
