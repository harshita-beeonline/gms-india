import checkDevicesReducer from "./check-devices";
import consumeNewProducer from "./consume-new-producer";
import getLocalAudio from "./get-local-audio";
import getLocalScreen from "./get-local-screen";
import getLocalVideo from "./get-local-video";
import joinMeeting from "./join-meeting";
import leaveMeetingReducer from "./leave-meeting";
import produceAudio from "./produce-audio";
import produceVideo from "./produce-video";
import releaseLocalAudio from "./release-local-audio";
import releaseLocalScreen from "./release-local-screen";
import releaseLocalVideo from "./release-local-video";
import setup from "./setup";

const extraReducers = {
  checkDevicesReducer,
  consumeNewProducer,
  getLocalAudio,
  getLocalScreen,
  getLocalVideo,
  joinMeeting,
  leaveMeetingReducer,
  produceAudio,
  produceVideo,
  releaseLocalAudio,
  releaseLocalScreen,
  releaseLocalVideo,
  setup,
};

export default extraReducers;
