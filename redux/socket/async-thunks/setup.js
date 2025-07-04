import { createAsyncThunk } from "@reduxjs/toolkit";
import io from "socket.io-client";

import socketStore from "@/utils/socket";
import logger from "@/utils/logger";
import chat from "@/redux/chat";

import snack from "@/redux/snack";
import media from "@/redux/media";
const setup = createAsyncThunk("socket/setup", async (_, thunkAPI) => {
  const response = await new Promise((resolve) => {
    let socket = socketStore.get();

    if (!socket) {
      socket = io("http://localhost:80", { autoConnect: false });

      socket.request = (type, data = {}) =>
        new Promise((res) => {
          socket.emit(type, data, res);
        });

      socket.on("welcome", (serverSocketId) => {
        if (serverSocketId === socket.id) {
          logger.info("socket.io connected", serverSocketId);
          resolve(serverSocketId);
          thunkAPI.dispatch(
            snack.show({ content: "connected to server", severity: "success" })
          );

          const state = thunkAPI.getState();
          const { uuid } = state.media;
          socket.emit("uuid", uuid);
        } else {
          logger.error("socket.io ids mismatch", serverSocketId, socket.id);
          resolve(null);
          thunkAPI.dispatch(
            snack.show({
              content: "could not connect to server",
              severity: "error",
            })
          );
        }
      });

      socket.on("reload", () => {
        window.location.reload();
      });

      socket.on("producer", async (data) => {
        logger.info("new producer", data);
        const state = thunkAPI.getState();
        const { device, key, transports, uuid } = state.media;

        const params = await socket.request("consume", {
          key,
          producerId: data.id,
          rtpCapabilities: device.rtpCapabilities,
          uuid,
        });

        const consumer = await transports.consumer.consume(params);
        const stream = new MediaStream();
        stream.addTrack(consumer.track);
        console.log("consumer id", consumer.id);
        await socket.request("resume", { consumerId: consumer.id, key });

        thunkAPI.dispatch(
          media.addNewProducer({
            consumer,
            producer: data,
            stream,
          })
        );
      });

      socket.on("producer-close", (data) => {
        thunkAPI.dispatch(
          media.closeProducer({
            kind: data.kind,
            uuid: data.uuid,
          })
        );
      });

      socket.on("peers", (data) => {
        thunkAPI.dispatch(media.setPeers(data.peers));
      });

      socket.on("message", (data) => {
        const state = thunkAPI.getState();
        const { uuid } = state.media;
        if (uuid !== data.uuid) {
          thunkAPI.dispatch(chat.addMessage({ ...data, isMine: false }));
        }
      });

      socket.on("connect_error", (e) => {
        logger.error("socket.io could not connect to server", e);
        resolve(null);
        thunkAPI.dispatch(
          snack.show({
            content: "could not connect to server",
            severity: "error",
          })
        );
      });

      socket.connect();
      socketStore.set(socket); // ✅ store the socket instance globally
    } else {
      const state = thunkAPI.getState();
      resolve(state.socket.id);
    }
  });

  if (!response) {
    return thunkAPI.rejectWithValue(null);
  }

  return response;
});

export default setup;
