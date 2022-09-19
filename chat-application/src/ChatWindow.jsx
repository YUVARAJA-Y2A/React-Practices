import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatMembers from "./ChatMembers";
import SendIcon from "@mui/icons-material/Send";
import "./chatwindow.scss";
import { sendMessage } from "./reducers/ChatBase";
function ChatWindow() {
  const dispatch = useDispatch();
  const memberList = useSelector((state) => state.chats.value);

  const currentactiveprofile = useSelector(
    (state) => state.chats.activeprofile
  );
  const [sentmessage, setsentmessage] = useState();

  const handleSendMessage = (e) => {
    dispatch(
      sendMessage({
        delivery_type: "sent",
        name: "Siddesh",
        message: sentmessage,
      })
    );

    // messageView.push({
    //   delivery_type: "sent",
    //   name: "Siddesh",
    //   message: sentmessage,
    // });
  };
  const handleSendMessageOnKeypress = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      dispatch(
        sendMessage({
          delivery_type: "sent",
          name: "Siddesh",
          message: sentmessage,
        })
      );
      setsentmessage("");
    }
  };

  const currentprofile = memberList.filter(
    (dat) => dat.mobile_no === currentactiveprofile
  );

  return (
    <div>
      <div className="container-main">
        <div className="container-left">
          <div className="my-profile-bar"></div>
          <div className="chat-members-list">
            {memberList.map((dat) => (
              <ChatMembers
                id={dat.id}
                username={dat.username}
                mobile={dat.mobile_no}
                messages={dat.messages}
                profilepic={dat.profile_image}
              />
            ))}
          </div>
        </div>
        <div className="container-right">
          <div className="current-profile-bar">
            {currentprofile.map((dat) => (
              <div className="d-flex align-items-center">
                <img className="profile-img" src={dat.profile_image} />
                <div className="d-flex flex-column ms-2">
                  <label className="profile-username ps-1">
                    {dat.username}
                  </label>
                  <div>
                    <label className="profile-mobile_no pe-1">
                      {"+"}
                      {dat.country_code}
                    </label>
                    <label className="profile-mobile_no">{dat.mobile_no}</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="textarea">
            {console.log(
              currentprofile.map((dat) => dat.messages.map((d) => d)),
              "current message"
            )}
            {currentprofile.map((data) =>
              data.messages.map((dat) => (
                <div
                  className={`p-1 d-flex ${
                    dat.delivery_type === "sent"
                      ? "justify-content-start"
                      : "justify-content-end"
                  } `}
                >
                  <label
                    className={
                      (dat.delivery_type === "sent" && "sent-message-single") ||
                      (dat.delivery_type === "recieved" &&
                        "recieved-message-single")
                    }
                  >
                    {dat.message}
                  </label>
                </div>
              ))
            )}
          </div>
          <div className="text-field-rightside">
            <input
              type="text"
              value={sentmessage}
              onChange={(e) => setsentmessage(e.target.value)}
              onKeyPress={(e) => handleSendMessageOnKeypress(e)}
              className="text-input ms-2"
            />
            <SendIcon
              className="me-2 text-send-icon"
              onClick={() => handleSendMessage()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
