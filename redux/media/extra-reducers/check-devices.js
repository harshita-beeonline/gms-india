import checkDevices from "../async-thunks/check-devices";

const checkDevicesReducer = (builder) => {
  console.log("inside check reducer");
  builder.addCase(checkDevices.fulfilled, (state, action) => {
    console.log("✅ checkDevices fulfilled with:", action.payload);
    state.devices.audio = action.payload.audio;
    state.devices.video = action.payload.video;

    if (action.payload.device) {
      state.device = action.payload.device;
    }
  });
};

export default checkDevicesReducer;
