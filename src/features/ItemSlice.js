import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    reset: (state) => initialState,
    delItem: (state, action) => {
      state.items = state.items.filter(
        (_, index) => index !== action.payload.id
      );
    },
  },
});

export const { addItem, reset, delItem } = itemSlice.actions;
export default itemSlice.reducer;
