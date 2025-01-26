import "./leftBar.scss";
import profile from "../navBar/sample/johnDoe.jpg";
import friends from "../../assets/friends.png";
import groups from "../../assets/groups.png";
import marketplace from "../../assets/marketplace.png";
import Instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={profile} alt="Profile" />
            <span>Jonny Doe</span>
          </div>
          <div className="item">
            <img src={friends} alt="friends icon" />
            <span>Friends</span>
            <img src={groups} alt="groups icon" />
            <span>Groups</span>
            <img src={marketplace} alt="marketplace icon" />
            <span>Marketplace</span>
            <img src={youtube} alt="youtube icon" />
            <span>YouTube</span>
            <img src={Instagram} alt="instagram" />
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
