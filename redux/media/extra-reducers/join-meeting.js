import asyncThunks from "../async-thunks";

const joinMeeting = (builder) => {
  builder.addCase(asyncThunks.joinMeeting.fulfilled, (state, action) => {
    const peers = action.payload.peers;

    const interfaces = [];

    state.interfaces.forEach((peer) => {
      if (peers[peer.uuid]) {
        interfaces.push(peer);
      }
    });

    Object.keys(peers).forEach((key) => {
      const index = interfaces.findIndex((e) => e.uuid === key);
      if (index === -1) {
        interfaces.push({
          email: peers[key].email,
          id: key,
          name: peers[key].name,
          uuid: key,
        });
      } else {
        interfaces[index] = {
          ...interfaces[index],
          ...peers[key],
          id: key,
        };
      }
    });

    state.interfaces = interfaces;
    state.meetingEndedRedirectUrl = action.payload.meetingEndedRedirectUrl;
    state.live = true;
    state.ended = false;
  });

  builder.addCase(asyncThunks.leaveMeeting.rejected, () => {});
};

export default joinMeeting;
