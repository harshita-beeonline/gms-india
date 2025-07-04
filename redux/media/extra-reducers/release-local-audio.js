import asyncThunks from "../async-thunks";

const releaseLocalAudio = (builder) => {
  builder.addCase(asyncThunks.releaseLocalAudio.fulfilled, (state) => {
    state.local.audio = null;
  });
};

export default releaseLocalAudio;
