import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  },
  reducers: {
    enterRoom: (state, action) => {
      console.log(state);
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;

// Selectors

export const selectRoomId = (state) => {
  console.log("SELE", state);
  return state.app.roomId;
};

// Reducer
export default appSlice.reducer;
