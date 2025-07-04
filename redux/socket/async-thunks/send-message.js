import { createAsyncThunk } from "@reduxjs/toolkit";
import dayjs from "dayjs";

import socketStore from "@/utils/socket";
import logger from "@/utils/logger";
import chat from "../../chat";

const sendMessage = createAsyncThunk(
  "socket/send-message",
  async (content, thunkAPI) => {
    const state = thunkAPI.getState();

    const { key, uuid } = state.media;
    const { email, name } = state.user;

    const data = {
      content,
      date: dayjs().toISOString(),
      email,
      key,
      name,
      uuid,
    };

    thunkAPI.dispatch(chat.addMessage({ ...data, isMine: uuid === data.uuid }));
    logger.info("sending message", data);
    await socketStore.request("message", data);

    return null;
  }
);

export default sendMessage;
