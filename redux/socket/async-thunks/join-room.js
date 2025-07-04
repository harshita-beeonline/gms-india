import { createAsyncThunk } from "@reduxjs/toolkit";

import socketStore from "@/utils/socket";
import logger from "@/utils/logger";
import media from "../../media";

const joinRoom = createAsyncThunk("socket/join-room", async (key, thunkAPI) => {
  const state = thunkAPI.getState();

  const { uuid } = state.media;

  const room = await socketStore.request("joinRoom", { key, uuid });
  logger.info(`socket.io: joined room ${room}`);
  thunkAPI.dispatch(media.setKey(key));

  return null;
});

export default joinRoom;
