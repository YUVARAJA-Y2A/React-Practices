import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./chatmembers.scss";
import { displayMessage, activeProfile } from "./reducers/ChatBase";
export default function ChatMembers(props) {
  const dispatch = useDispatch();
  const { username, mobile, messages, profilepic } = props;
  const currentactiveprofile = useSelector(
    (state) => state.chats.activeprofile
  );

  const handleClick = (mobile, messages) => {
    dispatch(activeProfile(mobile));
    dispatch(displayMessage(messages));
  };

  return (
    <div>
      <div
        className="p-2 member-container"
        style={{
          backgroundColor:
            currentactiveprofile === mobile && "rgb(18, 30, 210)",
        }}
        onClick={() => handleClick(mobile, messages)}
      >
        <div className="d-flex align-items-center">
          <img className="profile-img" src={profilepic} />
          <label className="ps-2 profile-text">{username}</label>
        </div>
      </div>
    </div>
  );
}
