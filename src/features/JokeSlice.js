import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.chucknorris.io/jokes/random";

// // https://api.chucknorris.io/jokes/random
// // https://api.chucknorris.io/jokes/random?category=animal
// // https://api.chucknorris.io/jokes/categories

const initialState = {
  isLoading: true,
  joke: "",
};

export const fetchAsyncJoke = createAsyncThunk("joke", async () => {
  const response = await axios(API_URL);
  return response.data.value;
});

const jokeSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncJoke.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAsyncJoke.fulfilled, (state, action) => {
        state.isLoading = false;
        state.joke = action.payload;
      })
      .addCase(fetchAsyncJoke.rejected, (state) => {
        state.isLoading = true;
      });
  },
});

export default jokeSlice.reducer;
