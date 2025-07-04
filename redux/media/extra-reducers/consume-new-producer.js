import consumeNewProducer from "../async-thunks/consume-new-producer";

const consumeNewProducerReducer = (builder) => {
  builder.addCase(consumeNewProducer.fulfilled, (state, action) => {
    const index = state.interfaces.findIndex(
      (e) => e.uuid === action.payload.producer.uuid
    );
    const connection = {
      consumer: action.payload.consumer,
      producer: action.payload.producer,
      stream: action.payload.stream,
    };

    if (action.payload.producer.kind === "video") {
      state.settings.cover[action.payload.producer.uuid] = true;
      state.settings.hasVideo[action.payload.producer.uuid] = true;
    } else if (action.payload.producer.kind === "audio") {
      state.settings.hasAudio[action.payload.producer.uuid] = true;
    }

    if (action.payload.producer.kind === "screen") {
      state.interfaces.push({
        email: action.payload.producer.email,
        id: `${action.payload.producer.uuid}-screen`,
        name: `${action.payload.producer.name} (screen)`,
        screen: true,
        uuid: action.payload.producer.uuid,
        video: connection,
      });
    } else if (index === -1) {
      state.interfaces.push({
        [action.payload.producer.kind]: connection,
        email: action.payload.producer.email,
        id: action.payload.producer.uuid,
        name: action.payload.producer.name,
        uuid: action.payload.producer.uuid,
      });
    } else {
      state.interfaces[index] = {
        ...state.interfaces[index],
        [action.payload.producer.kind]: connection,
        id: action.payload.producer.uuid,
      };
    }

    state.settings.ui =
      action.payload.producer.kind === "screen" ? "pinned" : state.settings.ui;
    state.settings.pinned =
      action.payload.producer.kind === "screen"
        ? `${action.payload.producer.uuid}-screen`
        : state.settings.pinned;
  });
};

export default consumeNewProducerReducer;
