import { createSlice } from "@reduxjs/toolkit";
import getInitialState from "./initial-state";

const slice = createSlice({
  name: "user",
  initialState: getInitialState(),
  reducers: {
    clearErrors: (state) => {
      state.errors.name = null;
      state.errors.email = null;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
      state.errors.email = null;
    },
    setEmailError: (state, action) => {
      state.errors.email = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
      state.errors.name = null;
    },
    setNameError: (state, action) => {
      state.errors.name = action.payload;
    },
  },
});

const user = {
  clearErrors: slice.actions.clearErrors,
  reducer: slice.reducer,
  setEmail: slice.actions.setEmail,
  setEmailError: slice.actions.setEmailError,
  setName: slice.actions.setName,
  setNameError: slice.actions.setNameError,
};

export default user;
