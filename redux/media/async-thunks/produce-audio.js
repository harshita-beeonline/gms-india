import { createAsyncThunk } from "@reduxjs/toolkit";

import logger from "@/utils/logger";
import releaseLocalAudio from "./release-local-audio";

const produceAudio = createAsyncThunk(
  "media/produce-audio",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const { local, transports } = state.media;

    const track = local.audio?.stream?.getAudioTracks?.()[0];

    if (!track) {
      logger.error("No audio track found");
      return thunkAPI.rejectWithValue(null);
    }

    track.onended = () => {
      thunkAPI.dispatch(releaseLocalAudio());
    };

    logger.info("audio track", track);

    const params = { appData: { kind: "audio" }, track };
    const producer = await transports.producer?.produce(params);

    return { producer, stream: local.audio.stream };
  }
);

export default produceAudio;
