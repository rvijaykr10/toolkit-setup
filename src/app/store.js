import { configureStore } from "@reduxjs/toolkit";
import itemSliceReducer from "../features/ItemSlice";

export const store = configureStore({
  reducer: {
    items: itemSliceReducer,
  },
});
