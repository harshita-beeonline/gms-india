import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initial-state";

const slice = createSlice({
  name: "snack",
  initialState,
  reducers: {
    hide: (state) => {
      state.open = false;
    },
    show: (state, action) => {
      state.severity = action.payload.severity || state.severity;
      state.autoHideDuration =
        action.payload.autoHideDuration || state.autoHideDuration;
      state.open = true;
      state.content = action.payload.content;
    },
  },
});

const snack = {
  hide: slice.actions.hide,
  show: slice.actions.show,
  reducer: slice.reducer,
};

export default snack;
