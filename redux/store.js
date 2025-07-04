import { configureStore } from "@reduxjs/toolkit";

import chat from "./chat";
import drawer from "./drawer";
import media from "./media";
import snack from "./snack";
import socket from "./socket";
import user from "./user";
import authReducer from "./auth/auth"

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    chat: chat.reducer,
    drawer: drawer.reducer,
    media: media.reducer,
    snack: snack.reducer,
    socket: socket.reducer,
    user: user.reducer,
    auth:authReducer
    
  },
});

export default store;
