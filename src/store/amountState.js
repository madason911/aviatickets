import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lower: "0",
  upper: "1000000",
};

const amountStateSlice = createSlice({
  name: "amountState",
  initialState,
  reducers: {
    setLower: (state, action) => {
      state.lower = action.payload;
    },
    setUpper: (state, action) => {
      state.upper = action.payload;
    },
  },
});

const { reducer: amountStateReducer, actions } = amountStateSlice;
const { setLower, setUpper } = actions;

export { setLower, setUpper };

export const isValidAmountState = () => (state) =>
  +state.amountState.lower < +state.amountState.upper &&
  !isNaN(Number(state.amountState.lower)) &&
  !isNaN(Number(state.amountState.upper));

export default amountStateReducer;
