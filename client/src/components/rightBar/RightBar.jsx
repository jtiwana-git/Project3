import "./rightBar.scss";
import Artful from "./sample/ArtfulDodger.png";
import Jane from "./sample/JaneDoe.png";
import Eric from "./sample/EricCartman.png";
import Bart from "./sample/BartSimpson.png";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span className="spanHeading">Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src={Artful} alt="Profile" />
              <span>Artful Dodger</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Decline</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Eric} alt="Profile" />
              <span>Eric Cartman</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Decline</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={Bart} alt="Profile" />
              <span>Bart Simpson</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Decline</button>
            </div>
          </div>
          <div className="item">
            <span className="spanHeading">Past Activities</span>
            <div className="user">
              <div className="userInfo">
                <img src={Jane} alt="Profile" />
                <p>
                  <span>Jane Doe </span>
                  change their cover picture
                </p>
              </div>
              <span>1 day ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src={Jane} alt="Profile" />
                <p>
                  <span>Jane Doe </span>
                  commeneted on a post
                </p>
              </div>
              <span>1 min ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src={Jane} alt="Profile" />
                <p>
                  <span>Jane Doe </span>
                  add a new post
                </p>
              </div>
              <span>1 hour ago</span>
            </div>
            <div className="user">
              <div className="userInfo">
                <img src={Jane} alt="Profile" />
                <p>
                  <span>Jane Doe </span>
                  posted a comment
                </p>
              </div>
              <span>3 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
