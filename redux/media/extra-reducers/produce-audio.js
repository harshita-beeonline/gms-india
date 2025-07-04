import asyncThunks from "../async-thunks";

const produceAudio = (builder) => {
  builder.addCase(asyncThunks.produceAudio.fulfilled, (state, action) => {
    state.local.audio = action.payload;
  });
};

export default produceAudio;
