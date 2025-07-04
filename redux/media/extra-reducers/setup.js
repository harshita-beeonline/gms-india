import asyncThunks from "../async-thunks";

const setup = (builder) => {
  builder.addCase(asyncThunks.setup.fulfilled, (state, action) => {
    state.transports.producer = action.payload.producerTransport;
    state.transports.consumer = action.payload.consumerTransport;
  });
};

export default setup;
