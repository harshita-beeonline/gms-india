import leaveMeeting from "../async-thunks/leave-meeting";
import initialState from "../initial-state";

const leaveMeetingReducer = (builder) => {
  builder.addCase(leaveMeeting.fulfilled, (state) => {
    return {
      ...initialState,
      ended: true,
      meetingEndedRedirectUrl: state.meetingEndedRedirectUrl,
    };
  });
};

export default leaveMeetingReducer;
