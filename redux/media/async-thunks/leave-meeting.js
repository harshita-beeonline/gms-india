import { createAsyncThunk } from "@reduxjs/toolkit";

import logger from "@/utils/logger";
import socketStore from "@/utils/socket";

import releaseLocalAudio from "./release-local-audio";
import releaseLocalScreen from "./release-local-screen";
import releaseLocalVideo from "./release-local-video";

const leaveMeeting = createAsyncThunk(
  "media/leave-meeting",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    logger.info("leaving meeting");

    const { key, local, meetingEndedRedirectUrl, uuid } = state.media;

    if (local.screen) {
      thunkAPI.dispatch(releaseLocalScreen());
    }

    if (local.audio) {
      thunkAPI.dispatch(releaseLocalAudio());
    }

    if (local.video) {
      thunkAPI.dispatch(releaseLocalVideo());
    }

    const peers = await socketStore.request("leave", { key, uuid });

    logger.info("meeting ended");

    if (meetingEndedRedirectUrl) {
      window.location.replace(meetingEndedRedirectUrl);
    }

    return { peers };
  }
);

export default leaveMeeting;
