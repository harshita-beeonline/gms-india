import { enableMapSet } from "immer";

import chat from "./chat";
import drawer from "./drawer";
import media from "./media";
import snack from "./snack";
import socket from "./socket";
import store from "./store";
import user from "./user";

enableMapSet();

const redux = {
  chat,
  drawer,
  media,
  snack,
  socket,
  store,
  user,
};

export default redux;
