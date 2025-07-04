import asyncThunks from "../async-thunks";

const produceVideo = (builder) => {
  builder.addCase(asyncThunks.produceVideo.fulfilled, (state, action) => {
    state.local.video = action.payload;
  });
};

export default produceVideo;
