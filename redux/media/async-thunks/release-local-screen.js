import { createAsyncThunk } from "@reduxjs/toolkit";

import logger from "@/utils/logger";
import socketStore from "@/utils/socket";

const releaseLocalScreen = createAsyncThunk(
  "media/release-local-screen",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { uuid, local } = state.media;
    const data = local.screen;

    if (data) {
      if (data.stream) {
        data.stream.getTracks().forEach((track) => {
          track.stop();
        });
      }

      logger.info("local screen released");

      if (data.producer) {
        try {
          data.producer.pause();
          logger.info("screen producer paused");
        } catch (e) {
          logger.error("error while closing screen producer", e);
        }

        await socketStore?.request("closeProducer", {
          id: data.producer.id,
          kind: "screen",
          uuid,
        });
      }
    }

    return null;
  }
);

export default releaseLocalScreen;
