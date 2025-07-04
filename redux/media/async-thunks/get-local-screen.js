import { createAsyncThunk } from "@reduxjs/toolkit";
import logger from "@/utils/logger"; // direct logger import
import snack from "../../snack";
import releaseLocalScreen from "./release-local-screen";

const getLocalScreen = createAsyncThunk(
  "media/get-local-screen",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { transports } = state.media;

    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });

      const track = stream.getVideoTracks()[0];
      track.onended = () => {
        thunkAPI.dispatch(releaseLocalScreen());
      };

      logger.info("screen track", track);

      const params = { appData: { kind: "screen" }, track };
      const producer = await transports.producer?.produce(params);

      return { producer, stream };
    } catch (err) {
      logger.info("screen produce error", err);
      thunkAPI.dispatch(releaseLocalScreen());
      thunkAPI.dispatch(
        snack.show({ content: "screen not available", severity: "error" })
      );
      return thunkAPI.rejectWithValue(null);
    }
  }
);

export default getLocalScreen;
