import "./posts.scss";
import Post from "../post/Post";
const Posts = () => {
  const posts = [
    {
      id: 1,
      authorPost: "John Doe",
      postText:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc ",
    },
    {
      id: 2,
      authorPost: "Jane Doe",
      postText: "This is another post",
    },
    {
      id: 3,
      authorPost: "John Doe",
      postText: "This is a post",
    },
    {
      id: 4,
      authorPost: "Jane Doe",
      postText: "This is another post",
    },
    {
      id: 5,
      authorPost: "John Doe",
      postText: "This is a post",
    },
    {
      id: 6,
      authorPost: "Jane Doe",
      postText: "This is another post",
    },
    {
      id: 7,
      authorPost: "John Doe",
      postText: "This is a post",
    },
    {
      id: 8,
      authorPost: "Jane Doe",
      postText: "This is another",
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
