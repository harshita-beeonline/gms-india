import { createAsyncThunk } from "@reduxjs/toolkit";

import logger from "@/utils/logger";
import socketStore from "@/utils/socket";

import produceAudio from "./produce-audio";
import produceVideo from "./produce-video";
import consumeNewProducer from "./consume-new-producer";

const joinMeeting = createAsyncThunk(
  "media/join-meeting",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const { key, live, local, uuid } = state.media;

    if (live) {
      return thunkAPI.rejectWithValue(null);
    }

    logger.info("joining meeting");

    const { email, name } = state.user;

    const payload = await socketStore.request("join", {
      email,
      key,
      name,
      uuid,
    });

    const { meetingEndedRedirectUrl, peers, producers } = payload;

    logger.info("meeting started");

    if (local.video) {
      thunkAPI.dispatch(produceVideo());
    }

    if (local.audio) {
      thunkAPI.dispatch(produceAudio());
    }

    if (producers) {
      for (const producer of producers) {
        thunkAPI.dispatch(consumeNewProducer(producer));
      }
    }

    return { meetingEndedRedirectUrl, peers };
  }
);

export default joinMeeting;
