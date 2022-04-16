import { configureStore } from "@reduxjs/toolkit";
import itemSliceReducer from "../features/ItemSlice";
import jokeSliceReducer from "../features/JokeSlice";

export const store = configureStore({
  reducer: {
    items: itemSliceReducer,
    jokes: jokeSliceReducer,
  },
});
