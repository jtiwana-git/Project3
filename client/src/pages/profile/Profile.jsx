import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import HttpIcon from "@mui/icons-material/Http";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import JohnDoe from "../../sample/johnDoePic.png";
import Cover from "../../sample/cover.png";
import Posts from "../../components/posts/Posts.jsx";
import "./profile.scss";

const Profile = () => {
  const user = {
    id: 1,
    name: "John Doe",
    profilePic: JohnDoe,
    coverPic: Cover,
    city: "New York",
    website: "gitHub.com",
  };
  return (
    <div className="profile">
      <div className="images">
        <img src={Cover} alt="cover" className="coverPic" />
        <img src={JohnDoe} alt="profile" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="userInfo">
          <div className="left">
            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="https://twitter.com/login">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com/accounts/login/">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/login">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="centre">
            <span>John Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{user.city}</span>
              </div>
              <div className="item">
                <HttpIcon />
                <span>GitHub.com</span>
              </div>
            </div>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
