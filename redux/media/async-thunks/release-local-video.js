import { createAsyncThunk } from "@reduxjs/toolkit";

import logger from "@/utils/logger";
import socketStore from "@/utils/socket";

const releaseLocalVideo = createAsyncThunk(
  "media/release-local-video",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { uuid, local } = state.media;
    const data = local.video;

    if (data) {
      if (data.stream) {
        data.stream.getTracks().forEach((track) => {
          track.stop();
        });
      }

      logger.info("local video released");

      if (data.producer) {
        try {
          data.producer.pause();
          logger.info("video producer paused");
        } catch (e) {
          logger.error("error while closing video producer", e);
        }

        await socketStore?.request("closeProducer", {
          id: data.producer.id,
          kind: "video",
          uuid,
        });
      }
    }

    return null;
  }
);

export default releaseLocalVideo;
