import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initial-state";

const slice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
});

const chat = {
  addMessage: slice.actions.addMessage,
  reducer: slice.reducer,
};

export default chat;
