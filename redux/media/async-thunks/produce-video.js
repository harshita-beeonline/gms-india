import { createAsyncThunk } from "@reduxjs/toolkit";

import logger from "@/utils/logger";
import releaseLocalVideo from "./release-local-video";

const produceVideo = createAsyncThunk(
  "media/produce-video",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { local, transports } = state.media;

    const track = local.video?.stream?.getVideoTracks?.()[0];

    if (!track) {
      logger.error("No video track found");
      return thunkAPI.rejectWithValue(null);
    }

    track.onended = () => {
      thunkAPI.dispatch(releaseLocalVideo());
    };

    logger.info("video track", track);

    const params = { appData: { kind: "video" }, track };
    const producer = await transports.producer?.produce(params);

    return { producer, stream: local.video.stream };
  }
);

export default produceVideo;
