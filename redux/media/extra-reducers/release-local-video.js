import asyncThunks from "../async-thunks";

const releaseLocalVideo = (builder) => {
  builder.addCase(asyncThunks.releaseLocalVideo.fulfilled, (state) => {
    state.local.video = null;
  });
};

export default releaseLocalVideo;
