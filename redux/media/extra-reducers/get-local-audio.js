import getLocalAudio from "../async-thunks/get-local-audio";

// This function should only be included ONCE in your slice's `extraReducers`
const getLocalAudioReducer = (builder) => {
  builder.addCase(getLocalAudio.pending, (state) => {
    state.local.audio = {}; // initializing/loading state
  });

  builder.addCase(getLocalAudio.fulfilled, (state, action) => {
    state.local.audio = action.payload; // successfully got audio
  });

  builder.addCase(getLocalAudio.rejected, (state) => {
    state.local.audio = null; // failed to get audio
  });
};

export default getLocalAudioReducer;
