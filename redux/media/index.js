import { createSlice } from "@reduxjs/toolkit";

import asyncThunks from "./async-thunks";
import extraReducers from "./extra-reducers";
import initialState from "./initial-state";

const slice = createSlice({
  name: "media",
  initialState,
  reducers: {
    addNewProducer: (state, action) => {
      const index = state.interfaces.findIndex(
        (e) => e.uuid === action.payload.producer.uuid
      );
      const connection = {
        consumer: action.payload.consumer,
        producer: action.payload.producer,
        stream: action.payload.stream,
      };

      if (action.payload.producer.kind === "video") {
        state.settings.cover[action.payload.producer.uuid] = true;
        state.settings.hasVideo[action.payload.producer.uuid] = true;
      } else if (action.payload.producer.kind === "audio") {
        state.settings.hasAudio[action.payload.producer.uuid] = true;
      }

      if (action.payload.producer.kind === "screen") {
        state.interfaces.push({
          email: action.payload.producer.email,
          id: `${action.payload.producer.uuid}-screen`,
          name: `${action.payload.producer.name} (screen)`,
          screen: true,
          uuid: action.payload.producer.uuid,
          video: connection,
        });
      } else if (index === -1) {
        state.interfaces.push({
          [action.payload.producer.kind]: connection,
          email: action.payload.producer.email,
          id: action.payload.producer.uuid,
          name: action.payload.producer.name,
          uuid: action.payload.producer.uuid,
        });
      } else {
        state.interfaces[index] = {
          ...state.interfaces[index],
          [action.payload.producer.kind]: connection,
          id: action.payload.producer.uuid,
        };
      }

      state.settings.ui =
        action.payload.producer.kind === "screen"
          ? "pinned"
          : state.settings.ui;
      state.settings.pinned =
        action.payload.producer.kind === "screen"
          ? `${action.payload.producer.uuid}-screen`
          : state.settings.pinned;
    },

    closeProducer: (state, action) => {
      const index = state.interfaces.findIndex(
        (e) =>
          e.uuid === action.payload.uuid &&
          (action.payload.kind === "screen" ? e.screen : !e.screen)
      );

      if (index !== -1) {
        if (action.payload.kind === "screen") {
          if (state.settings.pinned === `${action.payload.uuid}-screen`) {
            state.settings.ui = "matrix";
            state.settings.pinned = null;
          }
          state.interfaces.splice(index, 1);
        } else {
          state.interfaces[index][action.payload.kind] = null;
          if (action.payload.kind === "video") {
            state.settings.hasVideo[action.payload.uuid] = false;
          } else if (action.payload.kind === "audio") {
            state.settings.hasAudio[action.payload.uuid] = false;
          }
        }
      }
    },

    goLive: (state) => {
      state.live = true;
    },

    hideInterface: (state, action) => {
      state.settings.hidden.set.add(action.payload);
      if (state.settings.pinned === action.payload) {
        state.settings.pinned = null;
        state.settings.ui = "matrix";
      }
      state.settings.hidden.control = !state.settings.hidden.control;
    },

    join: (state, action) => {
      const index = state.interfaces.findIndex((e) => e.uuid === state.uuid);
      if (index !== -1 && state.interfaces[index]) {
        state.interfaces[index].name = action.payload.name;
        state.interfaces[index].email = action.payload.email;
      }
      state.joined = true;
    },

    setEnded: (state, action) => {
      state.ended = action.payload;
    },

    setInterfaceCover: (state, action) => {
      state.settings.cover[action.payload.uuid] = action.payload.value;
    },

    setInterfaces: (state, action) => {
      for (const element of action.payload) {
        state.settings.cover[element.uuid] = element.cover;
        state.settings.hasVideo[element.uuid] = !!element.video;
        state.settings.hasAudio[element.uuid] = !!element.audio;
        state.settings.more[element.uuid] = element.more;
      }

      const pinnedExists = action.payload.some(
        (e) => e.id === state.settings.pinned
      );
      state.settings.pinned = pinnedExists ? state.settings.pinned : null;
      state.settings.ui = pinnedExists ? state.settings.ui : "matrix";
      state.interfaces = action.payload;
    },

    setKey: (state, action) => {
      state.key = action.payload;
    },

    setKeyError: (state, action) => {
      state.keyError = action.payload;
    },

    setLocalAudio: (state, action) => {
      state.local.audio = action.payload;
    },

    setLocalScreen: (state, action) => {
      state.local.screen = action.payload;
    },

    setLocalVideo: (state, action) => {
      state.local.video = action.payload;
    },

    setMatrixPeers: (state, action) => {
      state.settings.general.more.matrix = action.payload;
    },

    setMediaChanged: (state) => {
      state.changed = !state.changed;
    },

    setPeers: (state, action) => {
      const interfaces = [];

      state.interfaces.forEach((peer) => {
        if (action.payload[peer.uuid]) {
          interfaces.push(peer);
        }
      });

      Object.keys(action.payload).forEach((key) => {
        const index = interfaces.findIndex((e) => e.uuid === key);
        if (index === -1) {
          interfaces.push({
            email: action.payload[key].email,
            id: key,
            name: action.payload[key].name,
            uuid: key,
          });
        } else {
          interfaces[index] = {
            ...interfaces[index],
            ...action.payload[key],
            id: key,
          };
        }
      });

      state.interfaces = interfaces;
    },

    setPinnedDesktopPeers: (state, action) => {
      state.settings.general.more.pinned.desktop = action.payload;
    },

    setPinnedMobilePeers: (state, action) => {
      state.settings.general.more.pinned.mobile = action.payload;
    },

    setPreview: (state) => {
      state.settings.preview = !state.settings.preview;
    },

    showInterface: (state, action) => {
      state.settings.hidden.set.delete(action.payload);
      state.settings.hidden.control = !state.settings.hidden.control;
    },

    switchDisplayMode: (state, action) => {
      state.settings.ui = action.payload.value;
      state.settings.pinned = action.payload.pin;
    },
  },
  extraReducers: (builder) => {
    extraReducers.checkDevicesReducer(builder);
    extraReducers.consumeNewProducer(builder);
    extraReducers.getLocalAudio(builder);
    extraReducers.getLocalScreen(builder);
    extraReducers.getLocalVideo(builder);
    extraReducers.joinMeeting(builder);
    extraReducers.leaveMeetingReducer(builder);
    extraReducers.produceAudio(builder);
    extraReducers.produceVideo(builder);
    extraReducers.releaseLocalAudio(builder);
    extraReducers.releaseLocalScreen(builder);
    extraReducers.releaseLocalVideo(builder);
    extraReducers.setup(builder);
  },
});

const media = {
  addNewProducer: slice.actions.addNewProducer,
  checkDevices: asyncThunks.checkDevices,
  closeProducer: slice.actions.closeProducer,
  consumeNewProducer: asyncThunks.consumeNewProducer,
  getLocalAudio: asyncThunks.getLocalAudio,
  getLocalScreen: asyncThunks.getLocalScreen,
  getLocalVideo: asyncThunks.getLocalVideo,
  goLive: slice.actions.goLive,
  hideInterface: slice.actions.hideInterface,
  join: slice.actions.join,
  joinMeeting: asyncThunks.joinMeeting,
  leaveMeeting: asyncThunks.leaveMeeting,
  produceAudio: asyncThunks.produceAudio,
  produceVideo: asyncThunks.produceVideo,
  reducer: slice.reducer,
  releaseLocalAudio: asyncThunks.releaseLocalAudio,
  releaseLocalScreen: asyncThunks.releaseLocalScreen,
  releaseLocalVideo: asyncThunks.releaseLocalVideo,
  setEnded: slice.actions.setEnded,
  setInterfaceCover: slice.actions.setInterfaceCover,
  setInterfaces: slice.actions.setInterfaces,
  setKey: slice.actions.setKey,
  setKeyError: slice.actions.setKeyError,
  setLocalAudio: slice.actions.setLocalAudio,
  setLocalScreen: slice.actions.setLocalScreen,
  setLocalVideo: slice.actions.setLocalVideo,
  setMatrixPeers: slice.actions.setMatrixPeers,
  setMediaChanged: slice.actions.setMediaChanged,
  setPeers: slice.actions.setPeers,
  setPinnedDesktopPeers: slice.actions.setPinnedDesktopPeers,
  setPinnedMobilePeers: slice.actions.setPinnedMobilePeers,
  setPreview: slice.actions.setPreview,
  setup: asyncThunks.setup,
  showInterface: slice.actions.showInterface,
  switchDisplayMode: slice.actions.switchDisplayMode,
};

export default media;
