import { createAsyncThunk } from "@reduxjs/toolkit";
import logger from "@/utils/logger";
import socketStore from "@/utils/socket";

const consumeNewProducer = createAsyncThunk(
  "media/consume-new-producer",
  async (producer, thunkAPI) => {
    const state = thunkAPI.getState();
    const { device, key, transports, uuid } = state.media;

    logger.info("new producer", producer);

    if (!device || !transports?.consumer) {
      throw new Error("Media device or transport not initialized");
    }

    const params = await socketStore?.request("consume", {
      key,
      producerId: producer.id,
      rtpCapabilities: device.rtpCapabilities,
      uuid,
    });

    if (!params) {
      throw new Error("Failed to get consume parameters");
    }

    const consumer = await transports.consumer.consume(params);
    const stream = new MediaStream();
    stream.addTrack(consumer.track);

    await socketStore?.request("resume", { consumerId: consumer.id, key });

    return {
      consumer,
      producer,
      stream,
    };
  }
);

export default consumeNewProducer;
