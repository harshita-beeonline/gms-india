import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initial-state";

const slice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
  },
});

const drawer = {
  reducer: slice.reducer,
  setOpen: slice.actions.setOpen,
};

export default drawer;
