import asyncThunks from "../async-thunks";

const getLocalVideo = (builder) => {
  builder.addCase(asyncThunks.getLocalVideo.pending, (state) => {
    state.local.video = {};
  });
  builder.addCase(asyncThunks.getLocalVideo.fulfilled, (state, action) => {
    state.local.video = action.payload;
  });
  builder.addCase(asyncThunks.getLocalVideo.rejected, (state) => {
    state.local.video = null;
  });
};

export default getLocalVideo;
