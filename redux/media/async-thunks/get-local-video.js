import { createAsyncThunk } from "@reduxjs/toolkit";
import logger from "@/utils/logger"; // direct logger import
import snack from "../../snack";
import releaseLocalVideo from "./release-local-video";

const getLocalVideo = createAsyncThunk(
  "media/get-local-video",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { device, live, transports } = state.media;
    console.log(state.media);
    if (!device?.canProduce("video")) {
      thunkAPI.dispatch(
        snack.show({ content: "camera not found", severity: "error" })
      );
      return thunkAPI.rejectWithValue(null);
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (!live) {
        return { stream };
      }

      const track = stream.getVideoTracks()[0];

      track.onended = () => {
        thunkAPI.dispatch(releaseLocalVideo());
      };

      logger.info("video track", track);

      const params = { appData: { kind: "video" }, track };
      const producer = await transports.producer?.produce(params);

      return { producer, stream };
    } catch (err) {
      logger.info("video produce error", err);
      thunkAPI.dispatch(releaseLocalVideo());
      thunkAPI.dispatch(
        snack.show({ content: "camera not available", severity: "error" })
      );
      return thunkAPI.rejectWithValue(null);
    }
  }
);

export default getLocalVideo;
