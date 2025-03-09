import React, { useState } from "react";
import { Link } from "react-router";

import CommentIcon from "@mui/icons-material/Comment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

import Comments from "../comments/Comments";

import "./post.scss";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="details">
            <EditIcon />
            <DeleteForeverIcon />
            <Link
              to={`/profile/${post.id}`}
              className="link"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span className="name">{post.authorPost}</span>
            </Link>
            <span className="date">1 min ago</span>
          </div>
        </div>
        <div className="content">
          <p>{post.postText}</p>
        </div>
        <div className="info">
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <CommentIcon />
            12 comments
          </div>
        </div>
      </div>
      {commentOpen && <Comments />}
    </div>
  );
};

export default Post;
