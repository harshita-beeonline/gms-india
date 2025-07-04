import { createAsyncThunk } from "@reduxjs/toolkit";
import logger from "@/utils/logger"; // ⬅️ import logger directly
import snack from "../../snack";
import releaseLocalAudio from "./release-local-audio";

const getLocalAudio = createAsyncThunk(
  "media/get-local-audio",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { device, live, transports } = state.media;

    if (!device?.canProduce("audio")) {
      thunkAPI.dispatch(
        snack.show({ content: "microphone not found", severity: "error" })
      );
      return thunkAPI.rejectWithValue(null);
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      if (!live) {
        return { stream };
      }

      const track = stream.getAudioTracks()[0];
      track.onended = () => {
        thunkAPI.dispatch(releaseLocalAudio());
      };

      logger.info("audio track", track); // ⬅️ using logger directly

      const params = { appData: { kind: "audio" }, track };
      const producer = await transports.producer?.produce(params);

      return { producer, stream };
    } catch (err) {
      logger.info("audio produce error", err); // ⬅️ using logger directly
      thunkAPI.dispatch(releaseLocalAudio());
      thunkAPI.dispatch(
        snack.show({ content: "microphone not available", severity: "error" })
      );
      return thunkAPI.rejectWithValue(null);
    }
  }
);

export default getLocalAudio;
