import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import HttpIcon from "@mui/icons-material/Http";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Jonny from "./userDataSample/johnDoe.jpg";
import Cover from "./userDataSample/cover.png";
import Post from "../../components/post/Post.jsx";

const Profile = () => {
  const user = {
    id: 1,
    name: "Jonny Doe",
    profilePic: Jonny,
    coverPic: Cover,
    city: "New York",
    website: "gitHub.com",
  };

  return (
    <div className="profile">
      <div className="images">
        <img src={Cover} alt="" className="coverPic" />
        <img src={Jonny} alt="" className="profilePic" />
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
            <span>{user.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{user.city}</span>
              </div>

              <div className="item">
                <HttpIcon />
                <span>{user.website}</span>
              </div>
            </div>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        {/* <Post /> */}
      </div>
    </div>
  );
};

export default Profile;
