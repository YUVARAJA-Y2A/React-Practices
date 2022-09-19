import { createSlice } from "@reduxjs/toolkit";

import { ChatData } from "../Data/ChatDatabase";

export const chatUpdates = createSlice({
  name: "chats",
  initialState: { value: ChatData, activeprofile: null },
  reducers: {
    displayMessage: (state, action) => {
      const currentprofile = state.value.filter(
        (data) => data.mobile_no === action.payload
      );
      state.value = currentprofile;
    },
    activeProfile: (state, action) => {
      state.activeprofile = action.payload;
    },
    sendMessage: (state, action) => {
      // const messageupdate = ChatData.filter(
      //   (data) => data.mobile_no === state.activeprofile
      // );
      // console.log(
      //   state.value.map((data) => {
      //     if (data.mobile_no === state.activeprofile) {
      //       return data.messages;
      //     }
      //   })
      // );
      // console.log(messageupdate.messages);
      state.message.push(action.payload);
    },
  },
});

export const { displayMessage, activeProfile, sendMessage } =
  chatUpdates.actions;

export default chatUpdates.reducer;
