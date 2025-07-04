import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import getLocalScreen from "../async-thunks/get-local-screen";

const getLocalAudioReducer = (builder) => {
  builder.addCase(getLocalScreen.pending, (state) => {
    state.local.audio = {};
  });

  builder.addCase(getLocalScreen.fulfilled, (state, action) => {
    state.local.audio = action.payload;
  });

  builder.addCase(getLocalScreen.rejected, (state) => {
    state.local.audio = null;
  });
};

export default getLocalAudioReducer;
