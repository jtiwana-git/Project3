import React from "react";
import "./newPost.scss";

const NewPost = () => {
  const handleFormSubmit = () => {};
  const handleChange = () => {};
  return (
    <div className="newPost">
      <form onSubmit={handleFormSubmit}>
        <div>
          <textarea
            name="postText"
            placeholder="Write a new post....."
          ></textarea>
        </div>
        <div>
          <button type="submit">Add Post</button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
