import "./leftBar.scss";
import Friends from "../../assets/Friends.png";
import Events from "../../assets/Events.png";
import Fundraising from "../../assets/Fundraising.png";
import Gallery from "../../assets/Gallery.png";
import Gaming from "../../assets/Gaming.png";
import Groups from "../../assets/Groups.png";
import History from "../../assets/History.png";
import Market from "../../assets/Market.png";
import Message from "../../assets/Message.png";
import Videos from "../../assets/Videos.png";
import Watch from "../../assets/Watch.png";
import Tutorial from "../../assets/Tutorial.png";
import Course from "../../assets/Course.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className="leftBar">
        <div className="container">
            <div className="menu">
                <div className="user">
                    <img src={currentUser.profilePic} alt=""/>
                    <span>{currentUser.name}</span>
                </div>
                <div className="item">
                    <img src={Friends} alt=""/>
                    <span>Friends</span>
                </div>
                <div className="item">
                    <img src={Groups} alt=""/>
                    <span>Groups</span>
                </div>
                <div className="item">
                    <img src={Message} alt=""/>
                    <span>Messages</span>
                </div>
                <div className="item">
                    <img src={Watch} alt=""/>
                    <span>Watch</span>
                </div>
                <div className="item">
                    <img src={History} alt=""/>
                    <span>History</span>
                </div>
            </div>
            <hr/>
            <div className="menu">
                <span>Your shortcuts</span>
                <div className="item">
                    <img src={Events} alt=""/>
                    <span>Events</span>
                </div>
                <div className="item">
                    <img src={Gaming} alt=""/>
                    <span>Gaming</span>
                </div>
                <div className="item">
                    <img src={Gallery} alt=""/>
                    <span>Gallery</span>
                </div>
                <div className="item">
                    <img src={Videos} alt=""/>
                    <span>Videos</span>
                </div>
                <div className="item">
                    <img src={Market} alt=""/>
                    <span>Market</span>
                </div>
            </div>
            <hr/>
            <div className="menu">
                <span>Others</span>
                <div className="item">
                    <img src={Fundraising} alt=""/>
                    <span>Fundraiser</span>
                </div>
                <div className="item">
                    <img src={Tutorial} alt=""/>
                    <span>Tutorials</span>
                </div>
                <div className="item">
                    <img src={Course} alt=""/>
                    <span>Courses</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeftBar;
