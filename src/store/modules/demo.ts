import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  counter: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeCounterAction(state, { payload }: PayloadAction<number>) {
      state.counter = payload;
    }
  }
});

export const { changeCounterAction } = counterSlice.actions;
export default counterSlice.reducer;
