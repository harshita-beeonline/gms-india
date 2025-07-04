import checkDevices from './check-devices';
import consumeNewProducer from './consume-new-producer';
import getLocalAudio from './get-local-audio';
import getLocalScreen from './get-local-screen';
import getLocalVideo from './get-local-video';
import joinMeeting from './join-meeting';
import leaveMeeting from './leave-meeting';
import produceAudio from './produce-audio';
import produceVideo from './produce-video';
import releaseLocalAudio from './release-local-audio';
import releaseLocalScreen from './release-local-screen';
import releaseLocalVideo from './release-local-video';
import setup from './setup';

const asyncThunks = {
  checkDevices,
  consumeNewProducer,
  getLocalAudio,
  getLocalScreen,
  getLocalVideo,
  joinMeeting,
  leaveMeeting,
  produceAudio,
  produceVideo,
  releaseLocalAudio,
  releaseLocalScreen,
  releaseLocalVideo,
  setup,
};

export default asyncThunks;
