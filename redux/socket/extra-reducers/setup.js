import asyncThunks from "../async-thunks";

const setup = (builder) => {
  builder.addCase(asyncThunks.setup.fulfilled, (state, action) => {
    state.id = action.payload;
  });
  builder.addCase(asyncThunks.setup.rejected, (state) => {
    state.id = null;
  });
};

export default setup;
