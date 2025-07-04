import asyncThunks from "../async-thunks";

const releaseLocalScreen = (builder) => {
  builder.addCase(asyncThunks.releaseLocalScreen.fulfilled, (state) => {
    state.local.screen = null;
  });
};

export default releaseLocalScreen;
