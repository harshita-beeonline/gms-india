import { createAsyncThunk } from "@reduxjs/toolkit";

import logger from "@/utils/logger";
import socketStore from "@/utils/socket";

const releaseLocalAudio = createAsyncThunk(
  "media/release-local-audio",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { uuid, local } = state.media;
    const data = local.audio;

    if (data) {
      if (data.stream) {
        data.stream.getTracks().forEach((track) => {
          track.stop();
        });
      }

      logger.info("local audio released");

      if (data.producer) {
        try {
          data.producer.pause();
          logger.info("audio producer paused");
        } catch (e) {
          logger.error("error while closing audio producer", e);
        }

        await socketStore?.request("closeProducer", {
          id: data.producer.id,
          kind: "audio",
          uuid,
        });
      }
    }

    return null;
  }
);

export default releaseLocalAudio;
