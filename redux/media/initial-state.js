import * as randomWords from "random-words";
import { v4 as v4uuid } from "uuid";

const uuid = v4uuid();

const initialState = {
  changed: false,
  device: null,
  devices: {
    audio: false,
    video: false,
  },
  ended: false,
  interfaces: [
    {
      uuid,
    },
  ],
  joined: false,
  key: randomWords.generate(4).join("-"),
  keyError: null,
  live: false,
  local: {
    audio: null,
    screen: null,
    video: null,
  },
  meetingEndedRedirectUrl: null,
  settings: {
    audio: {},
    cover: {},
    general: {
      more: {
        matrix: 4,
        pinned: {
          desktop: 4,
          mobile: 2,
        },
      },
    },
    hasAudio: {},
    hasVideo: {},
    hidden: {
      control: false,
      set: new Set(),
    },
    isMuted: {},
    more: {},
    pinned: null,
    preview: true,
    ui: "matrix",
    video: {},
  },
  transports: {
    consumer: null,
    producer: null,
  },
  uuid,
};

export default initialState;
