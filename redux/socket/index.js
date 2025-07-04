import { createSlice } from "@reduxjs/toolkit";

import asyncThunks from "./async-thunks";
import extraReducers from "./extra-reducers";
import initialState from "./initial-state";

const slice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    extraReducers.setup(builder);
  },
});

const socket = {
  joinRoom: asyncThunks.joinRoom,
  reducer: slice.reducer,
  sendMessage: asyncThunks.sendMessage,
  setId: slice.actions.setId,
  setup: asyncThunks.setup,
};

export default socket;
