import "./posts.scss";
import Post from "../post/Post.jsx";
import Jonny from "./data/johnDoe.jpg";
import img1 from "./data/img1.png";
import Jane from "./data/JaneDoe.png";
import img2 from "./data/img2.png";

const Posts = () => {
  // dummy data
  const posts = [
    {
      id: 1,
      name: "Jonny Doe",
      userId: 1,
      profilePic: Jonny,
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: img1,
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic: Jane,
      postDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: img2,
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
