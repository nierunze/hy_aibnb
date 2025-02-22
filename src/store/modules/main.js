import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      topSearch: true,
      topFixed: true
    }
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload;
    }
  }
});

export const { changeHeaderConfigAction } = mainSlice.actions;
export default mainSlice.reducer;